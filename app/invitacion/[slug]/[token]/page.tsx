import { notFound } from "next/navigation"
import { prisma } from "@/utils/prisma"
import GuestRSVP from "@/components/dashboard/invitados/GuestRSVP"
import WeddingTemplate from "@/components/invitacion/WeddingTemplate"
import QuinceanosTemplate from "@/components/invitacion/QuinceanosTemplate"
import InvitationRenderer from "@/components/invitacion/InvitationRenderer"

type Props = {
  params: Promise<{
    slug: string
    token: string
  }>
}

export default async function GuestInvitationPage({ params }: Props) {
  const { slug, token } = await params

  const guest = await prisma.eventGuest.findFirst({
    where: {
      token,
      event: {
        slug,
      },
    },
    include: {
      event: {
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
        },
      },
    },
  })

  if (!guest) notFound()

  const guestInfo = {
    name: guest.name,
    passes: guest.passes,
    confirmedPasses: guest.confirmed,
    status: guest.status,
    token: guest.token,
  }

  return (
    <>
       <InvitationRenderer event={guest.event} guest={guestInfo}/>
      <GuestRSVP token={guest.token} guestName={guest.name} passes={guest.passes} confirmedPasses={guest.confirmed} status={guest.status} />
    </>
  )
}