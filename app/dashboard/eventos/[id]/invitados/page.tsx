import { notFound } from "next/navigation"
import { prisma } from "@/utils/prisma"
import { requireAuth } from "@/utils/auth"
import GuestTable from "@/components/dashboard/invitados/GuestTable"
import { getEventGuestStats } from "@/actions/event-actions"
import EventGuestStats from "@/components/dashboard/EventGuestStats"
import Link from "next/link"

type Props = {
  params: Promise<{ id: string }>
}

export default async function GuestsPage({ params }: Props) {
  const session = await requireAuth()

  const isAdmin = session.user.role === "ADMIN"

  const { id } = await params
  const event = await prisma.event.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      guests: {
        orderBy: {
          createdAt: "desc",
        },
      },
      message: true,
      user: {
        select: {
          plan: true,
        },
      },
    },
  })

  if (!event) notFound()

  const guestStatsResult = await getEventGuestStats(id)

  if (!guestStatsResult.success) notFound()

  return (
    <main className="min-h-screen bg-[#F7F8F6]">
      {/* HEADER */}
      <section className="relative overflow-hidden bg-[#2F5D50]">
        {/* Decoraciones */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#A8C3A0]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#D6B98C]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href={`/dashboard/eventos/${event.id}`} className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
              <span>←</span>Volver al editor
            </Link>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Información */}
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {event.type === "WEDDING" ? "Boda" : "XV años"}
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  {event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric",})}
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Invitados</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 md:text-base">Administra tus invitados, pases asignados y confirmacionespara <span className="font-medium text-white">{event.name}</span>.</p>
            </div>
            {/* Acción */}
            {event.user.plan === "PRO" || isAdmin && (
              <Link href={`/dashboard/eventos/${event.id}/mensaje`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2F5D50] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#F5F2EB]">
                <span className="text-base">✉️</span>Configurar mensaje
              </Link>
            )}
          </div>
          {/* Mini resumen */}
          <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">Invitados registrados</p>
              <p className="mt-1 text-xl font-semibold text-white">{event.guests.length}</p>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">Invitación</p>
              <p className="mt-1 text-sm font-medium text-white/90">Personalizada</p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTENIDO */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Estadísticas */}
        <section>
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Resumen</p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">Estado de tus invitados</h2>
            <p className="mt-1 text-sm text-slate-500">Consulta rápidamente cómo va la confirmación de tu evento.</p>
          </div>
          <EventGuestStats stats={guestStatsResult.stats} />
        </section>
        {/* Tabla */}
        <section className="mt-10">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Gestión</p>
              <h2 className="mt-1 text-xl font-bold text-slate-800">Lista de invitados</h2>
              <p className="mt-1 text-sm text-slate-500">Agrega, edita y consulta las confirmaciones de tus invitados.</p>
            </div>
            <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
              👥 {event.guests.length}{" "}{event.guests.length === 1 ? "invitado" : "invitados"}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bordershadow-sm">
            <GuestTable eventId={event.id} guests={event.guests} eventSlug={event.slug} messageTemplate={event.message?.content} canCustomizeMessage={event.user.plan === "PRO"}/>
          </div>
        </section>
      </div>
    </main>
  )
}