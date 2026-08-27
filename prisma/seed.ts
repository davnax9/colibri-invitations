import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../app/generated/prisma/client"
import bcrypt from "bcryptjs"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL no está definida")
}

const adapter = new PrismaPg({
  connectionString,
})

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  console.log("🌱 Iniciando seed...")

  const password = await bcrypt.hash("Admin123!", 10)

  const admin = await prisma.user.upsert({
    where: {
      email: "user@invitaciones.com",
    },
    update: {},
    create: {
      name: "user",
      email: "user@invitaciones.com",
      password,
      role: "CLIENT",
    },
  })

  console.log(`👤 User creado: ${admin.email}`)

  const templates = [
    {
      name: "Boda Elegante",
      slug: "wedding-elegant",
      type: "WEDDING" as const,
      description: "Diseño elegante y sofisticado para bodas.",
    },
    {
      name: "Boda Romántica",
      slug: "wedding-romantic",
      type: "WEDDING" as const,
      description: "Diseño romántico con un estilo cálido.",
    },
    {
      name: "Boda Moderna",
      slug: "wedding-modern",
      type: "WEDDING" as const,
      description: "Diseño moderno y minimalista.",
    },
    {
      name: "Boda Luxury",
      slug: "wedding-luxury",
      type: "WEDDING" as const,
      description: "Diseño premium para bodas elegantes.",
    },
    {
      name: "Boda Minimal",
      slug: "wedding-minimal",
      type: "WEDDING" as const,
      description: "Diseño limpio y minimalista.",
    },
    {
      name: "XV Princesa",
      slug: "quince-princess",
      type: "QUINCEANOS" as const,
      description: "Diseño inspirado en cuentos de hadas.",
    },
    {
      name: "XV Elegante",
      slug: "quince-elegant",
      type: "QUINCEANOS" as const,
      description: "Diseño elegante y sofisticado.",
    },
    {
      name: "XV Luxury",
      slug: "quince-luxury",
      type: "QUINCEANOS" as const,
      description: "Diseño premium para quinceaños.",
    },
    {
      name: "XV Moderno",
      slug: "quince-modern",
      type: "QUINCEANOS" as const,
      description: "Diseño moderno y juvenil.",
    },
    {
      name: "XV Floral",
      slug: "quince-floral",
      type: "QUINCEANOS" as const,
      description: "Diseño floral y elegante.",
    },
  ]

  for (const template of templates) {
    await prisma.template.upsert({
      where: {
        slug: template.slug,
      },
      update: {
        name: template.name,
        description: template.description,
        type: template.type,
      },
      create: template,
    })
  }

  console.log(`🎨 ${templates.length} templates creados`)
  console.log("✅ Seed terminado")
}

main()
  .catch((error) => {
    console.error("❌ Error ejecutando seed:", error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })