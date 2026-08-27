"use server"

import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"
import { prisma } from "@/utils/prisma"
import { requireAdmin } from "@/utils/types/require-admin"
import { requireAuth } from "@/utils/auth"

export async function createUser(data: {
  name: string
  email: string
  password: string
  role: "ADMIN" | "CLIENT"
  plan: "BASIC" | "PRO"
}) {
  const session = await requireAuth()

  if (session.user.role !== "ADMIN") {
    return {
      success: false as const,
      error: "No tienes permisos para realizar esta acción.",
    }
  }

  const name = data.name.trim()
  const email = data.email.trim().toLowerCase()

  if (!name || !email || !data.password) {
    return {
      success: false as const,
      error: "Todos los campos son obligatorios.",
    }
  }

  if (data.password.length < 8) {
    return {
      success: false as const,
      error: "La contraseña debe tener al menos 8 caracteres.",
    }
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    return {
      success: false as const,
      error: "Ya existe un usuario con ese correo.",
    }
  }

  const hashedPassword = await bcrypt.hash(data.password, 12)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: data.role,
      plan: data.plan,
      active: true,
    },
  })

  revalidatePath("/dashboard/usuarios")

  return {
    success: true as const,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      plan: user.plan,
      active: user.active,
    },
  }
}

export async function updateUserPlan({
  userId,
  plan,
}: {
  userId: string
  plan: "BASIC" | "PRO"
}) {
  const session = await requireAuth()

  // =========================================================
  // SOLO ADMIN
  // =========================================================

  if (session.user.role !== "ADMIN") {
    return {
      success: false as const,
      error: "No tienes permisos para realizar esta acción.",
    }
  }

  // =========================================================
  // VALIDAR USUARIO
  // =========================================================

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return {
      success: false as const,
      error: "Usuario no encontrado.",
    }
  }

  // =========================================================
  // SOLO CLIENT PUEDE TENER PLAN
  // =========================================================

  if (user.role !== "CLIENT") {
    return {
      success: false as const,
      error: "El plan solo puede modificarse para usuarios CLIENT.",
    }
  }

  // =========================================================
  // ACTUALIZAR PLAN
  // =========================================================

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      plan,
    },
  })

  revalidatePath("/dashboard/usuarios")

  return {
    success: true as const,
    user: updatedUser,
  }
}

export async function updateUserPassword(data: {
  userId: string
  password: string
}) {
  const session = await requireAuth()

  if (session.user.role !== "ADMIN") {
    return {
      success: false as const,
      error: "No tienes permisos para realizar esta acción.",
    }
  }

  if (!data.password || data.password.length < 8) {
    return {
      success: false as const,
      error: "La contraseña debe tener al menos 8 caracteres.",
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
  })

  if (!user) {
    return {
      success: false as const,
      error: "Usuario no encontrado.",
    }
  }

  const hashedPassword = await bcrypt.hash(data.password, 12)

  await prisma.user.update({
    where: {
      id: data.userId,
    },
    data: {
      password: hashedPassword,
    },
  })

  revalidatePath("/dashboard/usuarios")

  return {
    success: true as const,
  }
}

export async function updateUserStatus(data: {
  userId: string
  active: boolean
}) {
  const session = await requireAuth()

  if (session.user.role !== "ADMIN") {
    return {
      success: false as const,
      error: "No tienes permisos para realizar esta acción.",
    }
  }

  if (session.user.id === data.userId && !data.active) {
    return {
      success: false as const,
      error: "No puedes desactivar tu propio usuario administrador.",
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
  })

  if (!user) {
    return {
      success: false as const,
      error: "Usuario no encontrado.",
    }
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: data.userId,
    },
    data: {
      active: data.active,
    },
  })

  revalidatePath("/dashboard/usuarios")

  return {
    success: true as const,
    active: updatedUser.active,
  }
}