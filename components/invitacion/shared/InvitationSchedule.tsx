type InvitationScheduleProps = {
  event: {
    name: string
    eventDate: Date

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      dressCode: string | null
    } | null

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]

    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null

      location: {
        name: string
      } | null
    }[]

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

type ScheduleIconType = 
  | "church" 
  | "party" 
  | "document" 
  | "camera" 
  | "glass" 
  | "music" 
  | "utensils" 
  | "default"

function getScheduleIconType(title: string, description?: string | null): ScheduleIconType {
  const text = `${title} ${description ?? ""}`.toLowerCase()
  
  if (text.includes("misa") || text.includes("iglesia") || text.includes("ceremonia") || text.includes("boda religiosa")) {
    return "church"
  }
  if (text.includes("fiesta") || text.includes("recepción") || text.includes("celebración") || text.includes("banquete") || text.includes("cena")) {
    return "party"
  }
  if (text.includes("civil") || text.includes("registro") || text.includes("juzgado") || text.includes("acta")) {
    return "document"
  }
  if (text.includes("foto") || text.includes("sesión") || text.includes("fotografía") || text.includes("fotos")) {
    return "camera"
  }
  if (text.includes("cóctel") || text.includes("cocktail") || text.includes("bienvenida") || text.includes("aperitivo")) {
    return "glass"
  }
  if (text.includes("baile") || text.includes("dj") || text.includes("música") || text.includes("disco")) {
    return "music"
  }
  if (text.includes("desayuno") || text.includes("brunch") || text.includes("comida") || text.includes("almuerzo")) {
    return "utensils"
  }
  return "default"
}

function ScheduleIcon({ type }: { type: ScheduleIconType }) {
  const color = "var(--theme-accent)"
  
  switch (type) {
    case "church":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8l-6-6-6 6v10l6-6 6 6V8z" />
          <path d="M12 16v4" />
        </svg>
      )
    case "party":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case "document":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case "camera":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    case "glass":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M8 11h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z" />
          <path d="M6 11v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        </svg>
      )
    case "music":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case "utensils":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-6a5 5 0 0 0-5-5" />
        </svg>
      )
    default:
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
  }
}

export default function InvitationSchedule({event}: InvitationScheduleProps) {
  return (
    <>
      {event.schedules.length > 0 && (
        <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
          {/* ENCABEZADO */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Celebremos juntos</p>
            <h2 className="mt-4 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Nuestro día</h2>
            <div className="mx-auto mt-5 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
          {/* LÍNEA DE TIEMPO */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* LÍNEA CENTRAL */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{backgroundColor: "var(--theme-accent)", opacity: 0.5}}/>
              <div className="space-y-12">
                {event.schedules.map((schedule, index) => {
                  const isLeft = index % 2 === 0
                  const iconType = getScheduleIconType(schedule.title, schedule.description)
                  return (
                    <div key={schedule.id} className="relative grid grid-cols-2">
                      {/* CONTENIDO IZQUIERDO */}
                      <div className={`pr-10 ${isLeft ? "text-right" : "pointer-events-none"}`}>{isLeft && (<TimelineContent schedule={schedule} />)}</div>
                      {/* CONTENIDO DERECHO */}
                      <div className={`pl-10 ${!isLeft ? "text-left" : "pointer-events-none"}`}>{!isLeft && (<TimelineContent schedule={schedule} />)}</div>
                      {/* PUNTO CENTRAL CON ICONO */}
                      <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2" style={{backgroundColor:"var(--theme-background)",borderColor:"var(--theme-primary)"}}>
                        <ScheduleIcon type={iconType} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function TimelineContent({schedule}: {schedule: InvitationScheduleProps["event"]["schedules"][number]}) {
  return (
    <div className="py-2">
      {/* HORA */}
      {schedule.time && (<p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{color: "var(--theme-secondary)"}}>{schedule.time}</p>)}
      {/* TÍTULO */}
      <h3 className="mt-2 text-2xl font-serif" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
      {/* FECHA */}
      <p className="mt-2 text-sm" style={{color: "var(--theme-secondary)"}}>{schedule.date.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
      {/* UBICACIÓN */}
      {schedule.location && (<p className="mt-2 text-sm font-medium" style={{color: "var(--theme-text)"}}>📍 {schedule.location.name}</p>)}
      {/* DESCRIPCIÓN */}
      {schedule.description && (<p className="mt-3 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}
      {/* DETALLE */}
      <div className="mt-4 h-px w-8" style={{backgroundColor: "var(--theme-accent)", marginLeft: "auto"}}/>
    </div>
  )
}