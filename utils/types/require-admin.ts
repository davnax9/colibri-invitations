import { redirect } from "next/navigation"
import { requireAuth } from "@/utils/auth"

export async function requireAdmin() {
  const session = await requireAuth()

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }

  return session
}