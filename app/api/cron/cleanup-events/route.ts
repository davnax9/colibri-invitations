import { NextResponse } from "next/server"
import { cleanupExpiredEvents } from "@/utils/cleanup-events"

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json(
      {
        success: false,
        error: "No autorizado",
      },
      {
        status: 401,
      }
    )
  }

  try {
    const result = await cleanupExpiredEvents()

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error limpiando eventos expirados:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Error interno limpiando eventos expirados",
      },
      {
        status: 500,
      }
    )
  }
}