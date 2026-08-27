import { prisma } from "@/utils/prisma"
import { requireAuth } from "@/utils/auth"
import { notFound } from "next/navigation"
import EventDetailsForm from "@/components/eventos/EventDetailsForm"
import EventLocationsForm from "@/components/eventos/EventLocationsForm"
import EventSchedulesForm from "@/components/eventos/EventSchedulesForm"
import EventPhotosForm from "@/components/eventos/EventPhotosForm"
import EventMusicForm from "@/components/eventos/EventMusicForm"
import Link from "next/link"
import EventThemeSelector from "@/components/eventos/EventThemeSelector"
import EventInvitationPreview from "@/components/dashboard/EventInvitationPreview"
import LogoutButton from "@/components/dashboard/LogoutButton"

type Props = {
  params: Promise<{ id: string }>
}

export default async function EventEditorPage({ params }: Props) {
  const session = await requireAuth()

  const { id } = await params

  const event = await prisma.event.findFirst({
    where: {
      id,
      ...(session.user.role === "ADMIN" ? {} : { userId: session.user.id}),
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
      user: {
        select: {
          plan: true,
        },
      },
    },
  })

  if (!event) notFound()

  const isWedding = event.type === "WEDDING"

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}
        <header className="relative overflow-hidden rounded-3xl bg-[#2F5D50] px-6 py-7 shadow-lg sm:px-8">
          {/* Decoraciones */}
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#8FA89D]/20" />
          <div className="absolute -bottom-32 right-32 h-72 w-72 rounded-full bg-[#C9A86A]/10" />
          <div className="relative">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* INFORMACIÓN DEL EVENTO */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#E4ECE8] backdrop-blur">Editor de invitación</span>
                  <span className="text-[#C9A86A]">✦</span>
                  <span className="text-xs text-[#D7E3DE]">{isWedding ? "Boda" : "Quinceaños"}</span>
                </div>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{event.name}</h1>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#D7E3DE]">
                  <span className="flex items-center gap-2">📅{event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric",})}</span>
                  <span className="hidden text-white/30 sm:block">•</span>
                  <span className="flex items-center gap-2">🎨{event.template.name}</span>
                </div>
              </div>
              {/* ACCIONES */}
              <div className="flex flex-wrap gap-3">
                <Link href={`/dashboard/eventos/${event.id}/invitados`} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  <span className="text-base">👥</span>
                  <span>Invitados</span>
                </Link>
                <a href={`/invitacion/${event.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:bg-[#F5F2EB]">
                  <span>Ver invitación</span>
                  <span>↗</span>
                </a>
                {/* <LogoutButton /> */}
              </div>
            </div>
          </div>
        </header>

        {/* ===================================================== */}
        {/* CONTENIDO */}
        {/* ===================================================== */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          {/* ================================================= */}
          {/* EDITOR */}
          {/* ================================================= */}
          <section className="space-y-6">
            {/* INFORMACIÓN PRINCIPAL */}
            <EditorSection number="01" icon="✦" title="Información principal" description="Personaliza los textos que aparecerán en tu invitación.">
              <EventDetailsForm eventId={event.id} eventType={event.type} details={event.details} />
              <div className="mt-6 border-t border-[#E5E9E5] pt-5">
                {/* <Link href={`/dashboard/eventos/${event.id}/invitados`} className="inline-flex items-center gap-2 rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-2.5 text-sm font-semibold text-[#2F5D50] transition hover:border-[#8FA89D] hover:bg-white" >
                  👥Administrar invitados<span className="text-xs">→</span>
                </Link> */}
              </div>
            </EditorSection>

            {/* APARIENCIA */}
            <EditorSection number="02" icon="🎨" title="Apariencia" description="Elige un diseño o personaliza los colores de tu invitación." >
              <EventThemeSelector eventId={event.id} currentPreset={event.theme} plan={session.user.plan}/>
            </EditorSection>

            {/* UBICACIONES */}
            <EditorSection number="03" icon="📍" title="Ubicaciones" description="Agrega los lugares donde se llevarán a cabo las celebraciones." >
              <EventLocationsForm eventId={event.id} locations={event.locations} />
            </EditorSection>

            {/* HORARIOS */}
            <EditorSection number="04" icon="🕐" title="Horarios" description="Organiza la ceremonia, recepción y los momentos importantes." >
              <EventSchedulesForm eventId={event.id} eventDate={event.eventDate} locations={event.locations} schedules={event.schedules} />
            </EditorSection>

            {/* FOTOGRAFÍAS */}
            <EditorSection number="05" icon="📷" title="Fotografías" description="Selecciona las fotografías que formarán parte de tu invitación.">
              <EventPhotosForm eventId={event.id} photos={event.photos} plan={event.user.plan}/>
            </EditorSection>

            {/* MÚSICA */}
            <EditorSection number="06" icon="♫" title="Música" description="Agrega una canción para acompañar este momento especial." >
              <EventMusicForm eventId={event.id} music={event.music} />
            </EditorSection>
          </section>

          {/* ================================================= */}
          {/* PREVIEW */}
          {/* ================================================= */}

          <aside className="lg:block">
            <div className="sticky top-6">
              <div className="overflow-hidden rounded-3xl border border-[#E5E9E5] bg-white shadow-lg">
                {/* HEADER PREVIEW */}
                <div className="border-b border-[#E5E9E5] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#263832]">Vista previa</p>
                      <p className="mt-0.5 text-xs text-[#687A72]">Así verá tu invitación el invitado.</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F5D50]/10 text-sm">
                      👁️
                    </div>
                  </div>
                </div>

                {/* PREVIEW */}
                <div className="bg-[#F3F1EB] px-5 py-6">
                  <div className="mx-auto">
                    <EventInvitationPreview event={event} />
                  </div>
                </div>

                {/* FOOTER */}
                <div className="border-t border-[#E5E9E5] bg-white p-4">
                  <a href={`/invitacion/${event.slug}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#244A40]">
                    Abrir invitación completa<span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}


/* ============================================================= */
/* SECCIÓN DEL EDITOR                                            */
/* ============================================================= */

function EditorSection({number,icon,title,description,children}: {number: string,icon: string,title: string,description: string,children: React.ReactNode}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-[#E5E9E5] bg-white shadow-sm">
      {/* HEADER */}
      <div className="flex items-start gap-4 border-b border-[#E5E9E5] px-6 py-5 sm:px-7">
        {/* NÚMERO */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-lg">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A86A]">{number}</span>
            <h2 className="text-lg font-bold text-[#263832]">{title}</h2>
          </div>
          <p className="mt-1 text-sm leading-5 text-[#687A72]">{description}</p>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="p-6 sm:p-7">
        {children}
      </div>
    </section>
  )
}