import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/utils/prisma"

export async function requireAuth() {
  const session = await auth()

  if (!session?.user?.id) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      plan: true,
      active: true,
    },
  })

  if (!user) {
    redirect("/login")
  }

  if (!user.active) {
    redirect("/login?error=inactive")
  }

  return {
    ...session,
    user: {
      ...session.user,
      ...user,
    },
  }
}