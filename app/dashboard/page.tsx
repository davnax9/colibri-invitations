import CreateEventModal from "@/components/dashboard/CreateEventModal"
import DeleteEventButton from "@/components/dashboard/DeleteEventButton"
import { requireAuth } from "@/utils/auth"
import { prisma } from "@/utils/prisma"

export default async function DashboardPage() {
  const session = await requireAuth()

  const templates = await prisma.template.findMany({
    where: {
      active: true,
    },
    orderBy: {
      name: "asc",
    },
  })

  const events = await prisma.event.findMany({
    where:
      session.user.role === "ADMIN" ? {} : {userId: session.user.id},
    include: {
      template: true,
      theme: true,
      photos: {
        where: {
          isCover: true,
        },
        take: 1,
      },
    },
    orderBy: {
      eventDate: "asc",
    },
  })

  const now = new Date()
  const isClient = session.user.role === "CLIENT"
  const isAdmin = session.user.role === "ADMIN"
  const activeEvent = isClient ? events.find((event) => event.expiresAt && event.expiresAt > now): null
  const nextEvent = events.find((event) => event.eventDate >= now)

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* HEADER */}
        <header className="relative overflow-hidden rounded-3xl bg-[#2F5D50] px-6 py-8 shadow-lg sm:px-8">
          {/* Decoraciones */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8FA89D]/20" />
          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-[#C9A86A]/10" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* INFORMACIÓN */}
            <div>
              <p className="text-sm font-medium tracking-wide text-[#D7E3DE]">{isAdmin ? "Panel de administración" : "Mi espacio"}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Hola, {session.user.name} 👋</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#E4ECE8]">{isAdmin ? "Administra usuarios, eventos e invitaciones desde el panel de Colibrí." : "Administra tus eventos, personaliza tus invitaciones y mantén todo listo para ese día especial."}</p>
            </div>
            {/* ACCIONES */}
            <div className="flex shrink-0 flex-wrap gap-3">
              {/* ADMINISTRAR USUARIOS */}
              {isAdmin && (
                <a href="/dashboard/usuarios" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15">
                  <span>👥</span>Administrar usuarios
                </a>
              )}
              {/* ACCIÓN CLIENTE */}
              {isAdmin ? (<CreateEventModal templates={templates} />) : activeEvent ? (
                <a href={`/dashboard/eventos/${activeEvent.id}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  ✨ Editar mi invitación
                </a>
              ) : (<CreateEventModal templates={templates} />)}
            </div>
          </div>
        </header>
        {/* RESUMEN */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {/* EVENTOS */}
          <div className="rounded-2xl border border-[#E5E9E5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#687A72]">{isAdmin ? "Todos los eventos" : "Mis eventos"}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F5D50]/10">
                <span className="text-lg">📅</span>
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold text-[#263832]">{events.length}</p>
            <p className="mt-1 text-xs text-[#687A72]">Eventos registrados</p>
          </div>
          {/* PRÓXIMO EVENTO */}
          <div className="rounded-2xl border border-[#E5E9E5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#687A72]">Próximo evento</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A86A]/15">
                <span className="text-lg">✨</span>
              </div>
            </div>
            <p className="mt-4 truncate text-lg font-bold text-[#263832]">{nextEvent?.name ?? "Sin eventos"}</p>
            <p className="mt-1 text-xs text-[#687A72]">
              {nextEvent ? nextEvent.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric",}): "Crea tu primer evento"}
            </p>
          </div>
          {/* DISEÑOS */}
          <div className="rounded-2xl border border-[#E5E9E5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#687A72]">Diseños disponibles</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8FA89D]/20">
                <span className="text-lg">🎨</span>
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold text-[#263832]">{templates.length}</p>
            <p className="mt-1 text-xs text-[#687A72]">Plantillas activas</p>
          </div>
        </section>
        {/* EVENTOS */}
        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#263832]">{isAdmin ? "Todos los eventos" : "Mis eventos"}</h2>
              <p className="mt-1 text-sm text-[#687A72]">{isAdmin ? "Administra y personaliza las invitaciones de todos los clientes." : "Administra y personaliza tus invitaciones."}</p>
            </div>
            {events.length > 0 && (<p className="text-sm text-[#687A72]">{events.length}{" "}{events.length === 1 ? "evento" : "eventos"}</p>)}
          </div>
          {events.length === 0 ? (
            /* EMPTY STATE */
            <div className="mt-6 overflow-hidden rounded-3xl border border-dashed border-[#8FA89D]/60 bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-3xl">
                ✨
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#263832]">Aún no tienes eventos</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#687A72]">Crea tu primera invitación y comienza a personalizarla para tu celebración.</p>
              <div className="mt-6">
                <CreateEventModal templates={templates} />
              </div>
            </div>
          ) : (
            /* EVENT CARDS */
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => {
                const theme = event.theme
                const coverPhoto = event.photos[0]

                const eventTypeInfo = { WEDDING: { label: "Boda", icon: "💍", }, QUINCEANOS: { label: "Quinceaños", icon: "👑", }, BAUTIZO: { label: "Bautizo", icon: "✝", }, COMUNION: { label: "Primera Comunión", icon: "✝", }, }[event.type]
                const typeInfo = eventTypeInfo ?? { label: "Evento", icon: "✨", }

                return (
                  <article key={event.id} className="group overflow-hidden rounded-3xl border border-[#E5E9E5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* PORTADA */}
                    <div className="relative h-48 overflow-hidden" style={{backgroundColor: theme?.backgroundColor ?? "#FAF8F3"}}>
                      {coverPhoto ? (
                        <>
                          <img src={coverPhoto.url} alt={event.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-5xl">{typeInfo.icon}</span>
                        </div>
                      )}
                      {/* TIPO */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#263832] shadow-sm backdrop-blur">{typeInfo.label}</span>
                      </div>
                      {/* ELIMINAR */}
                      <div className="absolute right-4 top-4 z-10">
                        <DeleteEventButton eventId={event.id}eventName={event.name}/>
                      </div>
                      {/* NOMBRE */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="truncate text-xl font-bold text-white">{event.name}</h3>
                      </div>
                    </div>
                    {/* INFORMACIÓN */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm text-[#687A72]">
                        <span>📅</span>
                        <span>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric",})}</span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full ring-2 ring-offset-1" style={{backgroundColor: theme?.primaryColor ?? "#2F5D50",}}/>
                        <p className="text-xs text-[#687A72]">Diseño:{" "}<span className="font-medium text-[#263832]">{theme?.preset === "CUSTOM" ? "Personalizado" : event.template.name}</span></p>
                      </div>
                      {/* BOTONES */}
                      <div className="mt-5 flex gap-2">
                        <a href={`/dashboard/eventos/${event.id}`} className="flex-1 rounded-xl bg-[#2F5D50] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#244A40]">
                          Editar
                        </a>
                        <a href={`/invitacion/${event.slug}`} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl border border-[#DCE4DF] px-4 py-2.5 text-center text-sm font-semibold text-[#2F5D50] transition hover:bg-[#FAF8F3]">
                          Ver invitación
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}