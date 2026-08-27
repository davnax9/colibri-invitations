import { prisma } from "@/utils/prisma"
// import { v2 as cloudinary } from "cloudinary"

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// })

import cloudinary from "./cloudinary"

export async function cleanupExpiredEvents() {
  const now = new Date()

  const expiredEvents = await prisma.event.findMany({
    where: {
      expiresAt: {
        lte: now,
      },
    },
    include: {
      photos: {
        select: {
          publicId: true,
        },
      },
    },
  })

  if (expiredEvents.length === 0) {
    return {
      success: true,
      deleted: 0,
    }
  }

  let deleted = 0

  for (const event of expiredEvents) {
    // ==========================================
    // ELIMINAR FOTOS DE CLOUDINARY
    // ==========================================

    for (const photo of event.photos) {
      if (!photo.publicId) continue

      try {
        await cloudinary.uploader.destroy(photo.publicId)
      } catch (error) {
        console.error(`Error eliminando imagen ${photo.publicId}:`, error)
      }
    }

    // ==========================================
    // ELIMINAR EVENTO
    // ==========================================

    await prisma.event.delete({
      where: {
        id: event.id,
      },
    })

    deleted++
  }

  return {
    success: true,
    deleted,
  }
}