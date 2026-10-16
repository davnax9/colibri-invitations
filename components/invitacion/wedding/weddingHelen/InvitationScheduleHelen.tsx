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
  if (text.includes("fiesta") || text.includes("recepción") || text.includes("celebración")) {
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
  if (text.includes("baile") || text.includes("vals") || text.includes("dj") || text.includes("música") || text.includes("disco")) {
    return "music"
  }
  if (text.includes("desayuno") || text.includes("brunch") || text.includes("comida") || text.includes("almuerzo") || text.includes("banquete") || text.includes("cena")) {
    return "utensils"
  }
  return "default"
}

function ScheduleIcon({ type }: { type: ScheduleIconType }) {
  const color = "var(--theme-accent)"
  
  switch (type) {
    case "church":
        return (
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"strokeLinejoin="round">
                {/* CRUZ SOBRE EL CAMPANARIO */}
                <path d="M12 2.5V10" />
                <path d="M8.5 6H15.5" />

                {/* CAMPANARIO */}
                <path d="M6 15L12 10L18 15V29" />
                <path d="M9 18V23" />
                <path d="M15 18V23" />

                {/* TECHO PRINCIPAL */}
                <path d="M3 27L24 12L45 27" />

                {/* CUERPO DE LA IGLESIA */}
                <path d="M7 25V43H41V25" />

                {/* VENTANAS */}
                <path d="M12 30V34" />
                <path d="M16 30V34" />
                <path d="M32 30V34" />
                <path d="M36 30V34" />

                {/* PUERTA ARQUEADA */}
                <path d="M20 43V35C20 32.8 21.8 31 24 31C26.2 31 28 32.8 28 35V43" />

                {/* BASE */}
                <path d="M4 43H44" />
            </svg>
        )
    case "party":
        return (
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* COPA IZQUIERDA */}
                <path d="M5 7H23L21 17C20 22 17 25 14 25C11 25 8 22 7 17L5 7Z" />
                <path d="M8 14H21" />
                <path d="M14 25V36" />
                <path d="M9 36H19" />

                {/* COPA DERECHA */}
                <path d="M25 7H43L41 17C40 22 37 25 34 25C31 25 28 22 27 17L25 7Z" />
                <path d="M28 14H41" />
                <path d="M34 25V36" />
                <path d="M29 36H39" />

                {/* BRINDIS */}
                <path d="M20 11L24 7L28 11" />

                {/* DESTELLOS DE CELEBRACIÓN */}
                <path d="M24 2V4" />
                <path d="M3 29L5 27" />
                <path d="M43 29L45 27" />
                <path d="M24 41V44" />
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
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"strokeLinejoin="round">
                {/* COPA */}
                <path d="M7 8H41L27 25V37" />
                <path d="M27 37V41" />
                <path d="M19 41H35" />

                {/* CONTORNO DEL LÍQUIDO */}
                <path d="M12 13H36" />

                {/* RODAJA DE LIMÓN */}
                <circle cx="35" cy="8" r="5" />
                <path d="M35 3V13" />
                <path d="M30.7 5.5L39.3 10.5" />

                {/* PAJILLA */}
                <path d="M17 4L28 20" />
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
            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {/* PLATO PRINCIPAL */}
                <circle cx="24" cy="25" r="13" />
                <circle cx="24" cy="25" r="9" />
                {/* TENEDOR */}
                <path d="M5 5V17" />
                <path d="M9 5V12" />
                <path d="M13 5V17" />
                <path d="M5 17H13" />
                <path d="M9 17V43" />
                {/* CUCHILLO */}
                <path d="M39 5C35 9 35 15 35 19V23H41V5" />
                <path d="M38 23V43" />
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

export default function InvitationScheduleHelen({event}: InvitationScheduleProps) {
  return (
    <>
      {event.schedules.length > 0 && (
        <section className="px-6 py-8" style={{backgroundColor: "var(--theme-background)"}}>
          {/* ENCABEZADO */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-2 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Nuestro día</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Itinerario</p>
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

                const iconType = getScheduleIconType(
                    schedule.title,
                    schedule.description
                )

                return (
                    <div
                    key={schedule.id}
                    className="relative grid grid-cols-2 items-center"
                    >
                    {/* CONTENIDO IZQUIERDO */}
                    <div
                        className={`pr-10 ${
                        isLeft ? "text-right" : "pointer-events-none"
                        }`}
                    >
                        {isLeft && (
                        <TimelineContent schedule={schedule} />
                        )}
                    </div>

                    {/* CONTENIDO DERECHO */}
                    <div
                        className={`pl-10 ${
                        !isLeft ? "text-left" : "pointer-events-none"
                        }`}
                    >
                        {!isLeft && (
                        <TimelineContent schedule={schedule} />
                        )}
                    </div>

                    {/* PUNTO PEQUEÑO EN EL CENTRO */}
                    <div
                        className="absolute left-1/2 top-1/2 z-10
                        h-3 w-3 -translate-x-1/2 -translate-y-1/2
                        rounded-full"
                        style={{
                        backgroundColor: "var(--theme-accent)",
                        boxShadow: "0 0 0 4px var(--theme-background)",
                        }}
                    />

                    {/* ICONO GRANDE SIN BORDE NI FONDO CIRCULAR */}
                    <div
                    className={`absolute top-1/2 z-10
                        flex h-16 w-16 -translate-y-1/2
                        items-center justify-center
                        ${
                        isLeft
                            ? "left-1/2 ml-5"
                            : "left-1/2 -ml-[84px]"
                        }`}
                    style={{
                        color: "var(--theme-accent)",
                    }}
                    >
                    <div className="scale-[1.8]">
                        <ScheduleIcon type={iconType} />
                    </div>
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
      {/* TÍTULO */}
      <h3 className="mt-2 text-3xl font-serif" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
      {/* HORA */}
      {schedule.time && (<p className="text-lg font-semibold uppercase tracking-[0.25em]" style={{color: "var(--theme-secondary)"}}>{schedule.time}</p>)}
      {/* FECHA */}
      {/* <p className="mt-2 text-sm" style={{color: "var(--theme-secondary)"}}>{schedule.date.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p> */}
      {/* UBICACIÓN */}
      {/* {schedule.location && (<p className="mt-2 text-sm font-medium" style={{color: "var(--theme-text)"}}>📍 {schedule.location.name}</p>)} */}
      {/* DESCRIPCIÓN */}
      {/* {schedule.description && (<p className="mt-3 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)} */}
      {/* DETALLE */}
      <div className="mt-4 h-px w-8" style={{backgroundColor: "var(--theme-accent)", marginLeft: "auto"}}/>
    </div>
  )
}