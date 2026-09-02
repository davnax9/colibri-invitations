import { notFound } from "next/navigation"
import Link from "next/link"
import { prisma } from "@/utils/prisma"
import { requireAuth } from "@/utils/auth"
import EventMessageForm from "@/components/dashboard/invitados/EventMessageForm"

type Props = {
  params: Promise<{id: string}>
}

export default async function EventMessagePage({ params}: Props) {
  const session = await requireAuth()
  const { id } = await params

  const event = await prisma.event.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      message: true,
    },
  })

  if (!event) notFound()

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="mb-8">
          <Link href={`/dashboard/eventos/${event.id}`} className="text-sm text-slate-500 transition hover:text-slate-800"> ← Volver al evento</Link>
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-slate-800">Mensaje para invitados</h1>
            <p className="mt-2 text-sm text-slate-500">Configura el mensaje que utilizarás para compartir las invitaciones de:</p>
            <p className="mt-1 font-medium text-slate-700">{event.name}</p>
          </div>
        </div>
        {/* EDITOR */}
        <EventMessageForm eventId={event.id} eventName={event.name} initialMessage={event.message?.content}/>
      </div>
    </main>
  )
}