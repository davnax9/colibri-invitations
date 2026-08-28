"use server"

import { prisma } from "@/utils/prisma"
import { requireAuth } from "@/utils/auth"
import { CreateEventSchema } from "@/utils/validations/event"
import { revalidatePath } from "next/cache"
// import cloudinary from "@/utils/cloudinary"
import { v2 as cloudinary } from "cloudinary"
import { extractYouTubeVideoId } from "@/utils/youtube"
import { invitationThemePresets } from "@/utils/invitation-themes"
import { getMaxPhotos } from "@/utils/plan-limits"
import { GiftData } from "@/utils/types"

export async function createEvent(data: unknown) {
  const session = await requireAuth()

  // =========================================================
  // VALIDAR DATOS
  // =========================================================

  const result = CreateEventSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false as const,
      error: "Los datos proporcionados no son válidos",
    }
  }

  const {name,type,eventDate,templateId} = result.data

  // =========================================================
  // REGLA DE NEGOCIO
  // CLIENT = solamente un evento activo
  // ADMIN = puede crear múltiples eventos
  // =========================================================

  if (session.user.role === "CLIENT") {
    const now = new Date()

    const activeEvent = await prisma.event.findFirst({
      where: {
        userId: session.user.id,
        expiresAt: {
          gt: now,
        },
      },
    })

    if (activeEvent) {
      return {
        success: false as const,
        error: "Ya tienes una invitación activa. Puedes crear otra cuando finalice su periodo de vigencia.",
      }
    }
  }

  // =========================================================
  // VALIDAR TEMPLATE
  // =========================================================

  const template = await prisma.template.findFirst({
    where: {
      id: templateId,
      type,
      active: true,
    },
  })

  if (!template) {
    return {
      success: false as const,
      error: "El diseño seleccionado no es válido",
    }
  }

  // =========================================================
  // GENERAR SLUG
  // =========================================================

  const baseSlug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  let slug = baseSlug
  let counter = 1

  while (
    await prisma.event.findUnique({
      where: {
        slug,
      },
    })
  ) {
    slug = `${baseSlug}-${counter}`
    counter++
  }

  // =========================================================
  // CALCULAR FECHA DE EXPIRACIÓN
  // =========================================================

  const expiresAt = new Date(eventDate)
  expiresAt.setDate(expiresAt.getDate() + 5)

  // =========================================================
  // CREAR EVENTO
  // =========================================================

  const event = await prisma.event.create({
    data: {
      name,
      slug,
      type,
      eventDate,
      expiresAt,
      userId: session.user.id,
      templateId,
    },
    include: {
      template: true,
    },
  })

  revalidatePath("/dashboard")

  return {
    success: true as const,
    event,
  }
}

export async function saveEventDetails(data: {
  eventId: string
  groomName?: string
  brideName?: string
  quinceaneraName?: string
  phrase?: string
  description?: string
  dressCode?: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const details = await prisma.eventDetails.upsert({
    where: {
      eventId: data.eventId,
    },

    update: {
      groomName: data.groomName || null,
      brideName: data.brideName || null,
      quinceaneraName: data.quinceaneraName || null,
      phrase: data.phrase || null,
      description: data.description || null,
      dressCode: data.dressCode || null,
    },

    create: {
      eventId: data.eventId,
      groomName: data.groomName || null,
      brideName: data.brideName || null,
      quinceaneraName: data.quinceaneraName || null,
      phrase: data.phrase || null,
      description: data.description || null,
      dressCode: data.dressCode || null,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
    details,
  }
}

export async function createEventLocation(data: {
  eventId: string
  name: string
  address?: string
  mapsUrl?: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const location = await prisma.eventLocation.create({
    data: {
      eventId: data.eventId,
      name: data.name.trim(),
      address: data.address?.trim() || null,
      mapsUrl: data.mapsUrl?.trim() || null,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
    location,
  }
}

export async function updateEventLocation(data: {
  id: string
  eventId: string
  name: string
  address?: string
  mapsUrl?: string
}) {
  const session = await requireAuth()

  const location = await prisma.eventLocation.findFirst({
    where: {
      id: data.id,
      eventId: data.eventId,
      event: {
        userId: session.user.id,
      },
    },
    include: {
      event: {
        select: {
          slug: true,
        },
      },
    },
  })

  if (!location) {
    return {
      success: false as const,
      error: "Ubicación no encontrada.",
    }
  }

  const name = data.name.trim()

  if (!name) {
    return {
      success: false as const,
      error: "El nombre del lugar es obligatorio.",
    }
  }

  const updatedLocation = await prisma.eventLocation.update({
    where: {
      id: location.id,
    },
    data: {
      name,
      address: data.address?.trim() || null,
      mapsUrl: data.mapsUrl?.trim() || null,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${location.event.slug}`)

  return {
    success: true as const,
    location: updatedLocation,
  }
}

export async function deleteEventLocation(data: {
  id: string
  eventId: string
}) {
  const session = await requireAuth()

  const location = await prisma.eventLocation.findFirst({
    where: {
      id: data.id,
      eventId: data.eventId,
      event: {
        userId: session.user.id,
      },
    },
    include: {
      event: {
        select: {
          slug: true,
        },
      },
    },
  })

  if (!location) {
    return {
      success: false as const,
      error: "Ubicación no encontrada.",
    }
  }

  await prisma.eventLocation.delete({
    where: {
      id: location.id,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${location.event.slug}`)

  return {
    success: true as const,
  }
}

export async function createEventSchedule(data: {
  eventId: string
  title: string
  date: string
  time?: string
  description?: string
  locationId?: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  // Validar que la ubicación pertenezca al evento
  if (data.locationId) {
    const location = await prisma.eventLocation.findFirst({
      where: {
        id: data.locationId,
        eventId: data.eventId,
      },
    })

    if (!location) {
      return {
        success: false as const,
        error: "La ubicación seleccionada no es válida",
      }
    }
  }

  const schedule = await prisma.eventSchedule.create({
    data: {
      eventId: data.eventId,
      title: data.title.trim(),
      date: new Date(`${data.date}T00:00:00`),
      time: data.time?.trim() || null,
      description: data.description?.trim() || null,
      locationId: data.locationId || null,
    },
    include: {
      location: true,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
    schedule,
  }
}

export async function updateEventSchedule(data: {
  id: string
  eventId: string
  title: string
  date: string
  time?: string
  description?: string
  locationId?: string
}) {
  const session = await requireAuth()

  const schedule = await prisma.eventSchedule.findFirst({
    where: {
      id: data.id,
      eventId: data.eventId,
      event: {
        userId: session.user.id,
      },
    },
    include: {
      event: {
        select: {
          slug: true,
        },
      },
    },
  })

  if (!schedule) {
    return {
      success: false as const,
      error: "Horario no encontrado.",
    }
  }

  const title = data.title.trim()

  if (!title) {
    return {
      success: false as const,
      error: "El titulo para el horario es obligatorio.",
    }
  }

  const updatedSchedule = await prisma.eventSchedule.update({
    where: {
      id: schedule.id,
    },
    data: {
      title,
      date: new Date(`${data.date}T00:00:00`),
      time: data.time || null,
      description: data.description || null,
      locationId: data.locationId || null
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${schedule.event.slug}`)

  return {
    success: true as const,
    schedule: updatedSchedule,
  }
}

export async function deleteEventSchedule(data: {
  id: string
  eventId: string
}) {
  const session = await requireAuth()

  const schedule = await prisma.eventSchedule.findFirst({
    where: {
      id: data.id,
      eventId: data.eventId,
      event: {
        userId: session.user.id,
      },
    },
    include: {
      event: {
        select: {
          slug: true,
        },
      },
    },
  })

  if (!schedule) {
    return {
      success: false as const,
      error: "Horario no encontrado.",
    }
  }

  await prisma.eventSchedule.delete({
    where: {
      id: schedule.id,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${schedule.event.slug}`)

  return {
    success: true as const,
  }
}

export async function createEventPhoto(data: {
  eventId: string
  url: string
  publicId?: string
  title?: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
    include: {
      user: {
        select: {
          plan: true,
        },
      },
      photos: {
        select: {
          id: true,
        },
      },
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado.",
    }
  }

  const maxPhotos = getMaxPhotos(event.user.plan)

  // ============================================
  // LÍMITE DE FOTOGRAFÍAS SEGÚN PLAN
  // ============================================

  if (event.photos.length >= maxPhotos) {
    return {
      success: false as const,
      error:
        event.user.plan === "PRO"
          ? "Has alcanzado el límite de 8 fotografías de tu plan PRO."
          : "Has alcanzado el límite de 5 fotografías de tu plan BASIC. Actualiza a PRO para agregar hasta 8 fotografías.",
    }
  }

  // ============================================
  // CALCULAR ORDEN
  // ============================================

  const lastPhoto = await prisma.eventPhoto.findFirst({
    where: {
      eventId: data.eventId,
    },
    orderBy: {
      order: "desc",
    },
  })

  const order = lastPhoto ? lastPhoto.order + 1 : 0

  // ============================================
  // CREAR FOTO
  // ============================================

  const photo = await prisma.eventPhoto.create({
    data: {
      eventId: data.eventId,
      url: data.url,
      publicId: data.publicId || null,
      title: data.title || null,
      order,
      isCover: false,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
    photo,
  }
}

// export async function deleteEventPhoto(data: {
//   eventId: string
//   photoId: string
// }) {
//   const session = await requireAuth()

//   const event = await prisma.event.findFirst({
//     where: {
//       id: data.eventId,
//       userId: session.user.id,
//     },
//   })

//   if (!event) {
//     return {
//       success: false as const,
//       error: "Evento no encontrado",
//     }
//   }

//   const photo = await prisma.eventPhoto.findFirst({
//     where: {
//       id: data.photoId,
//       eventId: data.eventId,
//     },
//   })

//   if (!photo) {
//     return {
//       success: false as const,
//       error: "Fotografía no encontrada",
//     }
//   }

//   // Eliminar de Cloudinary
//   if (photo.publicId) {
//     console.log("Cloudinary config:", {
//     cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY ? "OK" : "MISSING",
//     api_secret: process.env.CLOUDINARY_API_SECRET ? "OK" : "MISSING",
//   })
//     await cloudinary.uploader.destroy(photo.publicId)
//   }

//   // Eliminar de PostgreSQL
//   await prisma.eventPhoto.delete({
//     where: {
//       id: photo.id,
//     },
//   })

//   revalidatePath(`/dashboard/eventos/${data.eventId}`)
//   revalidatePath(`/invitacion/${event.slug}`)

//   return {
//     success: true as const,
//   }
// }

export async function deleteEventPhoto(data: {
  eventId: string
  photoId: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const photo = await prisma.eventPhoto.findFirst({
    where: {
      id: data.photoId,
      eventId: data.eventId,
    },
  })

  if (!photo) {
    return {
      success: false as const,
      error: "Fotografía no encontrada",
    }
  }

  // Configurar Cloudinary explícitamente
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

  // Eliminar de Cloudinary
  if (photo.publicId) {
    await cloudinary.uploader.destroy(photo.publicId)
  }

  // Eliminar de PostgreSQL
  await prisma.eventPhoto.delete({
    where: {
      id: photo.id,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
  }
}

export async function reorderEventPhotos(data: {
  eventId: string
  photoIds: string[]
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const photos = await prisma.eventPhoto.findMany({
    where: {
      eventId: data.eventId,
    },
    select: {
      id: true,
    },
  })

  const photoIdsFromDatabase = photos.map((photo) => photo.id)

  // Verificar que el cliente envió exactamente
  // las fotografías que pertenecen al evento.
  if (
    photoIdsFromDatabase.length !== data.photoIds.length ||
    !photoIdsFromDatabase.every((id) =>
      data.photoIds.includes(id)
    )
  ) {
    return {
      success: false as const,
      error: "Las fotografías enviadas no son válidas",
    }
  }

  await prisma.$transaction(
    data.photoIds.map((photoId, index) =>
      prisma.eventPhoto.update({
        where: {
          id: photoId,
        },
        data: {
          order: index,
        },
      })
    )
  )

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
  }
}

export async function saveEventMusic(data: {
  eventId: string
  url: string
  title?: string
  artist?: string
  autoplay?: boolean
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  // Extraer el ID del video de YouTube
  const youtubeVideoId = extractYouTubeVideoId(data.url)

  if (!youtubeVideoId) {
    return {
      success: false as const,
      error: "La URL proporcionada no corresponde a un video válido de YouTube.",
    }
  }

  const music = await prisma.eventMusic.upsert({
    where: {
      eventId: data.eventId,
    },

    update: {
      url: youtubeVideoId,
      title: data.title?.trim() || null,
      artist: data.artist?.trim() || null,
      autoplay: data.autoplay ?? false,
    },

    create: {
      eventId: data.eventId,
      url: youtubeVideoId,
      title: data.title?.trim() || null,
      artist: data.artist?.trim() || null,
      autoplay: data.autoplay ?? false,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
    music,
  }
}

export async function setEventPhotoCover(data: {
  eventId: string
  photoId: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const photo = await prisma.eventPhoto.findFirst({
    where: {
      id: data.photoId,
      eventId: data.eventId,
    },
  })

  if (!photo) {
    return {
      success: false as const,
      error: "Fotografía no encontrada",
    }
  }

  await prisma.$transaction([
    prisma.eventPhoto.updateMany({
      where: {
        eventId: data.eventId,
      },
      data: {
        isCover: false,
      },
    }),

    prisma.eventPhoto.update({
      where: {
        id: data.photoId,
      },
      data: {
        isCover: true,
      },
    }),
  ])

  revalidatePath(`/dashboard/eventos/${data.eventId}`)
  revalidatePath(`/invitacion/${event.slug}`)

  return {
    success: true as const,
  }
}

// ACIONES PARA INVITADOS

export async function createEventGuest(data: {
  eventId: string
  name: string
  phone?: string
  email?: string
  passes: number
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const name = data.name.trim()

  if (!name) {
    return {
      success: false as const,
      error: "El nombre del invitado es obligatorio",
    }
  }

  if (!Number.isInteger(data.passes) || data.passes < 1) {
    return {
      success: false as const,
      error: "La cantidad de pases debe ser mayor a 0",
    }
  }

  const guest = await prisma.eventGuest.create({
    data: {
      eventId: data.eventId,
      name,
      phone: data.phone?.trim() || null,
      email: data.email?.trim() || null,
      passes: data.passes,
      status: "PENDING",
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}/invitados`)

  return {
    success: true as const,
    guest,
  }
}

export async function updateEventGuest(data: {
  id: string
  eventId: string
  name: string
  phone?: string
  email?: string
  passes: number
}) {
  const session = await requireAuth()

  const guest = await prisma.eventGuest.findFirst({
    where: {
      id: data.id,
      event: {
        id: data.eventId,
        userId: session.user.id,
      },
    },
  })

  if (!guest) {
    return {
      success: false as const,
      error: "Invitado no encontrado",
    }
  }

  const name = data.name.trim()

  if (!name) {
    return {
      success: false as const,
      error: "El nombre del invitado es obligatorio",
    }
  }

  if (!Number.isInteger(data.passes) || data.passes < 1) {
    return {
      success: false as const,
      error: "La cantidad de pases debe ser mayor a 0",
    }
  }

  if (guest.confirmed !== null && data.passes < guest.confirmed) {
    return {
      success: false as const,
      error: "Los pases asignados no pueden ser menores que los pases confirmados",
    }
  }

  const updatedGuest = await prisma.eventGuest.update({
    where: {
      id: data.id,
    },
    data: {
      name,
      phone: data.phone?.trim() || null,
      email: data.email?.trim() || null,
      passes: data.passes,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}/invitados`)

  return {
    success: true as const,
    guest: updatedGuest,
  }
}

export async function deleteEventGuest(data: {
  id: string
  eventId: string
}) {
  const session = await requireAuth()

  const guest = await prisma.eventGuest.findFirst({
    where: {
      id: data.id,
      event: {
        id: data.eventId,
        userId: session.user.id,
      },
    },
  })

  if (!guest) {
    return {
      success: false as const,
      error: "Invitado no encontrado",
    }
  }

  await prisma.eventGuest.delete({
    where: {
      id: data.id,
    },
  })

  revalidatePath(`/dashboard/eventos/${data.eventId}/invitados`)

  return {
    success: true as const,
  }
}

export async function confirmGuestAttendance(data: {
  token: string
  confirmedPasses: number
}) {
  const guest = await prisma.eventGuest.findUnique({
    where: {
      token: data.token,
    },
  })

  if (!guest) {
    return {
      success: false as const,
      error: "Invitación no encontrada.",
    }
  }

  if (data.confirmedPasses < 0) {
    return {
      success: false as const,
      error: "La cantidad de pases no es válida.",
    }
  }

  if (data.confirmedPasses > guest.passes) {
    return {
      success: false as const,
      error: `No puedes confirmar más de ${guest.passes} pases.`,
    }
  }

  const status = data.confirmedPasses === 0 ? "DECLINED" : "CONFIRMED"

  const updatedGuest = await prisma.eventGuest.update({
    where: {
      id: guest.id,
    },
    data: {
      confirmed: data.confirmedPasses,
      status,
    },
  })

  return {
    success: true as const,
    guest: updatedGuest,
  }
}

export async function getEventGuestStats(eventId: string) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: eventId,
      userId: session.user.id,
    },
    include: {
      guests: {
        orderBy: {
          createdAt: "desc",
        },
      },
      message: true,
    }
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  const guests = await prisma.eventGuest.findMany({
    where: {
      eventId,
    },
    select: {
      passes: true,
      confirmed: true,
      status: true,
    },
  })

  const totalGuests = guests.length

  const confirmedGuests = guests.filter((guest) => guest.status === "CONFIRMED").length
  const pendingGuests = guests.filter((guest) => guest.status === "PENDING").length
  const declinedGuests = guests.filter((guest) => guest.status === "DECLINED").length
  const totalPasses = guests.reduce((total, guest) => total + guest.passes, 0)
  const confirmedPasses = guests.reduce((total, guest) => total + (guest.confirmed ?? 0), 0)
  const responseRate = totalGuests > 0 ? Math.round(((confirmedGuests + declinedGuests) /totalGuests) * 100): 0

  return {
    success: true as const,
    stats: {
      totalGuests,
      confirmedGuests,
      pendingGuests,
      declinedGuests,
      totalPasses,
      confirmedPasses,
      responseRate,
    },
  }
}

export async function saveEventMessage(data: {
  eventId: string
  content: string
}) {
  const session = await requireAuth()

  const event = await prisma.event.findFirst({
    where: {
      id: data.eventId,
      userId: session.user.id,
    },
  })

  if (!event) {
    return {
      success: false as const,
      error: "Evento no encontrado",
    }
  }

  if (!data.content.trim()) {
    return {
      success: false as const,
      error: "El mensaje no puede estar vacío",
    }
  }

  const message = await prisma.eventMessage.upsert({
    where: {
      eventId: data.eventId,
    },
    update: {
      content: data.content.trim(),
    },
    create: {
      eventId: data.eventId,
      content: data.content.trim(),
    },
  })

  revalidatePath(
    `/dashboard/eventos/${data.eventId}/mensaje`
  )

  return {
    success: true as const,
    message,
  }
}

export async function saveGuestMessage(data: {
  guestId: string
  message: string
}) {
  const session = await requireAuth()

  // =========================================================
  // OBTENER USUARIO ACTUAL
  // =========================================================

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      id: true,
      plan: true,
      role: true,
    },
  })

  if (!user) {
    return {
      success: false as const,
      error: "Usuario no encontrado.",
    }
  }

  // =========================================================
  // SOLO PLAN PRO PUEDE PERSONALIZAR MENSAJES
  // =========================================================

  if (user.role === "CLIENT" && user.plan !== "PRO") {
    return {
      success: false as const,
      error: "La personalización de mensajes está disponible únicamente en el plan PRO.",
    }
  }

  // =========================================================
  // VALIDAR INVITADO
  // =========================================================

  const guest = await prisma.eventGuest.findFirst({
    where: {
      id: data.guestId,
      event: {
        userId: user.id,
      },
    },
  })

  if (!guest) {
    return {
      success: false as const,
      error: "Invitado no encontrado.",
    }
  }

  // =========================================================
  // GUARDAR MENSAJE
  // =========================================================

  const updatedGuest = await prisma.eventGuest.update({
    where: {
      id: guest.id,
    },
    data: {
      message: data.message.trim() || null,
    },
  })

  revalidatePath(`/dashboard/eventos/${guest.eventId}/invitados`)

  return {
    success: true as const,
    guest: updatedGuest,
  }
}

export async function updateGuestRSVP(data: {
  token: string
  status: "CONFIRMED" | "DECLINED"
  confirmed: number
}) {
  const guest = await prisma.eventGuest.findUnique({
    where: {
      token: data.token,
    },
  })

  if (!guest) {
    return {
      success: false as const,
      error: "Invitación no encontrada.",
    }
  }

  /*
   * Si confirma, no puede superar
   * la cantidad de pases asignados.
   */
  if (data.status === "CONFIRMED") {
    if (data.confirmed < 1 || data.confirmed > guest.passes) {
      return {
        success: false as const,
        error: "La cantidad de personas confirmadas no es válida.",
      }
    }
  }

  const updatedGuest = await prisma.eventGuest.update({
    where: {
      token: data.token,
    },
    data: {
      status: data.status,
      confirmed: data.confirmed,
    },
  })

  return {
    success: true as const,
    guest: updatedGuest,
  }
}

export async function updateEventTheme({eventId,preset}: {eventId: string,preset: string}) {
  const theme = invitationThemePresets[preset]

  if (!theme) {
    return {
      success: false,
      error: "El tema seleccionado no es válido.",
    }
  }

  try {
    await prisma.eventTheme.upsert({
      where: {
        eventId,
      },

      update: {
        preset,

        primaryColor: theme.primaryColor,
        secondaryColor: theme.secondaryColor,
        accentColor: theme.accentColor,
        backgroundColor: theme.backgroundColor,
        surfaceColor: theme.surfaceColor,
        textColor: theme.textColor,
      },

      create: {
        eventId,
        preset,

        primaryColor: theme.primaryColor,
        secondaryColor: theme.secondaryColor,
        accentColor: theme.accentColor,
        backgroundColor: theme.backgroundColor,
        surfaceColor: theme.surfaceColor,
        textColor: theme.textColor,
      },
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error actualizando tema:", error)

    return {
      success: false,
      error: "No fue posible actualizar el tema.",
    }
  }
}

export async function updateEventThemeColors({
  eventId,
  primaryColor,
  secondaryColor,
  accentColor,
  backgroundColor,
  surfaceColor,
  textColor,
}: {
  eventId: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
  textColor: string
}) {
  try {
    // =========================================================
    // AUTENTICACIÓN
    // =========================================================

    const session = await requireAuth()

    // =========================================================
    // BUSCAR EVENTO Y VERIFICAR PROPIETARIO
    // =========================================================

    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
        userId: session.user.id,
      },
      select: {
        id: true,
        user: {
          select: {
            plan: true,
          },
        },
      },
    })

    if (!event) {
      return {
        success: false as const,
        error: "Evento no encontrado.",
      }
    }

    // =========================================================
    // VALIDAR PLAN
    // =========================================================

    if (event.user.plan !== "PRO") {
      return {
        success: false as const,
        error:
          "La personalización de colores está disponible únicamente en el plan PRO.",
      }
    }

    // =========================================================
    // GUARDAR COLORES
    // =========================================================

    await prisma.eventTheme.upsert({
      where: {
        eventId,
      },

      update: {
        preset: "CUSTOM",
        primaryColor,
        secondaryColor,
        accentColor,
        backgroundColor,
        surfaceColor,
        textColor,
      },

      create: {
        eventId,
        preset: "CUSTOM",
        primaryColor,
        secondaryColor,
        accentColor,
        backgroundColor,
        surfaceColor,
        textColor,
      },
    })

    return {
      success: true as const,
    }
  } catch (error) {
    console.error("Error actualizando colores:", error)

    return {
      success: false as const,
      error: "No fue posible guardar la personalización.",
    }
  }
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function deleteEvent(eventId: string) {
  try {
    const session = await requireAuth()

    // 1. Verificar que el evento pertenece al usuario
    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
        ...(session.user.role === "ADMIN"
          ? {}
          : {
              userId: session.user.id,
            }),
      },
      include: {
        photos: {
          select: {
            publicId: true,
          },
        },
      },
    })

    if (!event) {
      return {
        success: false,
        error: "El evento no existe o no tienes permiso para eliminarlo.",
      }
    }

    // 2. Eliminar fotografías de Cloudinary
    const photosWithPublicId = event.photos.filter((photo) => photo.publicId)

    for (const photo of photosWithPublicId) {
      try {
        await cloudinary.uploader.destroy(photo.publicId!)
      } catch (error) {
        console.error(`Error eliminando imagen ${photo.publicId} de Cloudinary:`, error)
      }
    }

    // 3. Eliminar evento
    // Las relaciones se eliminan mediante onDelete: Cascade
    await prisma.event.delete({
      where: {
        id: event.id,
      },
    })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error eliminando evento:", error)

    return {
      success: false,
      error: "No fue posible eliminar el evento.",
    }
  }
}

async function getAuthorizedEvent(eventId: string) {
  const session = await requireAuth()

  return prisma.event.findFirst({
    where: {
      id: eventId,
      ...(session.user.role === "ADMIN" ? {} : { userId: session.user.id}),
    },
    select: {
      id: true,
      slug: true,
    },
  })
}

export async function createEventGift(data: GiftData) {
  try {
    const event = await getAuthorizedEvent(data.eventId)

    if (!event) {
      return {
        success: false as const,
        error: "Evento no encontrado o no tienes permiso.",
      }
    }

    const title = data.title.trim()

    if (!title) {
      return {
        success: false as const,
        error: "El título es obligatorio.",
      }
    }

    const lastGift = await prisma.eventGift.findFirst({
      where: {
        eventId: data.eventId,
      },
      orderBy: {
        order: "desc",
      },
    })

    const gift = await prisma.eventGift.create({
      data: {
        eventId: data.eventId,
        type: data.type,
        title,
        description: data.description?.trim() || null,
        url: data.url?.trim() || null,
        accountName: data.accountName?.trim() || null,
        accountNumber: data.accountNumber?.trim() || null,
        order: lastGift ? lastGift.order + 1 : 0,
      },
    })

    revalidatePath(`/dashboard/eventos/${event.id}`)
    revalidatePath(`/invitacion/${event.slug}`)

    return {
      success: true as const,
      gift,
    }
  } catch (error) {
    console.error("Error creando regalo:", error)

    return {
      success: false as const,
      error: "No fue posible agregar la opción de regalo.",
    }
  }
}

export async function updateEventGift(data: GiftData & { id: string }) {
  try {
    const event = await getAuthorizedEvent(data.eventId)

    if (!event) {
      return {
        success: false as const,
        error: "Evento no encontrado o no tienes permiso.",
      }
    }

    const existingGift = await prisma.eventGift.findFirst({
      where: {
        id: data.id,
        eventId: data.eventId,
      },
    })

    if (!existingGift) {
      return {
        success: false as const,
        error: "Opción de regalo no encontrada.",
      }
    }

    const title = data.title.trim()

    if (!title) {
      return {
        success: false as const,
        error: "El título es obligatorio.",
      }
    }

    const gift = await prisma.eventGift.update({
      where: {
        id: existingGift.id,
      },
      data: {
        type: data.type,
        title,
        description: data.description?.trim() || null,
        url: data.url?.trim() || null,
        accountName: data.accountName?.trim() || null,
        accountNumber: data.accountNumber?.trim() || null,
      },
    })

    revalidatePath(`/dashboard/eventos/${event.id}`)
    revalidatePath(`/invitacion/${event.slug}`)

    return {
      success: true as const,
      gift,
    }
  } catch (error) {
    console.error("Error actualizando regalo:", error)

    return {
      success: false as const,
      error: "No fue posible actualizar la opción de regalo.",
    }
  }
}

export async function deleteEventGift(data: {id: string, eventId: string}) {
  try {
    const event = await getAuthorizedEvent(data.eventId)

    if (!event) {
      return {
        success: false as const,
        error: "Evento no encontrado o no tienes permiso.",
      }
    }

    const gift = await prisma.eventGift.findFirst({
      where: {
        id: data.id,
        eventId: data.eventId,
      },
    })

    if (!gift) {
      return {
        success: false as const,
        error: "Opción de regalo no encontrada.",
      }
    }

    await prisma.eventGift.delete({
      where: {
        id: gift.id,
      },
    })

    revalidatePath(`/dashboard/eventos/${event.id}`)
    revalidatePath(`/invitacion/${event.slug}`)

    return {
      success: true as const,
    }
  } catch (error) {
    console.error("Error eliminando regalo:", error)

    return {
      success: false as const,
      error: "No fue posible eliminar la opción de regalo.",
    }
  }
}