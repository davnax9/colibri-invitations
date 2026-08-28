import { notFound } from "next/navigation"
import { prisma } from "@/utils/prisma"
import WeddingTemplate from "@/components/invitacion/WeddingTemplate"
import QuinceanosTemplate from "@/components/invitacion/QuinceanosTemplate"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function InvitationPage({ params }: Props) {

  const { slug } = await params

  const event = await prisma.event.findUnique({
    where: {
      slug,
    },
    include: {
      template: true,
      theme: true,
      details: true,
      locations: true,
      schedules: {
        orderBy: {
          date: "asc",
        },
        include: {
          location: true,
        },
      },
      photos: {
        orderBy: {
          order: "asc",
        },
      },
      music: true,
      gifts: {
        orderBy: {
          order: "asc",
        },
      },
    },
  })

  if (!event) notFound()

  switch (event.template.type) {
    case "WEDDING":
      return <WeddingTemplate event={event}/>
    case "QUINCEANOS":
      return <QuinceanosTemplate event={event}/>
    default:
      notFound()
  }
}