
import BotanicalBackground from "../shared/BotanicalBackground"
import WeddingBotanicalLuxury from "../shared/WeddingBotanicalLuxury"

type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  location: {
    name: string
  } | null
}

type Props = {
  schedules: Schedule[]
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

function getScheduleIconType(
  title: string,
  description?: string | null
): ScheduleIconType {
  const text = `${title} ${description ?? ""}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

  if (
    text.includes("misa") ||
    text.includes("iglesia") ||
    text.includes("ceremonia") ||
    text.includes("boda religiosa")
  ) {
    return "church"
  }

  if (
    text.includes("fiesta") ||
    text.includes("recepcion") ||
    text.includes("celebracion")
  ) {
    return "party"
  }

  if (
    text.includes("civil") ||
    text.includes("registro") ||
    text.includes("juzgado") ||
    text.includes("acta")
  ) {
    return "document"
  }

  if (
    text.includes("foto") ||
    text.includes("sesion") ||
    text.includes("fotografia")
  ) {
    return "camera"
  }

  if (
    text.includes("coctel") ||
    text.includes("cocktail") ||
    text.includes("bienvenida") ||
    text.includes("aperitivo")
  ) {
    return "glass"
  }

  if (
    text.includes("baile") ||
    text.includes("vals") ||
    text.includes("dj") ||
    text.includes("musica") ||
    text.includes("disco")
  ) {
    return "music"
  }

  if (
    text.includes("desayuno") ||
    text.includes("brunch") ||
    text.includes("comida") ||
    text.includes("almuerzo") ||
    text.includes("banquete") ||
    text.includes("cena")
  ) {
    return "utensils"
  }

  return "default"
}

function ScheduleIcon({
  type,
}: {
  type: ScheduleIconType
}) {
  const color = "var(--theme-accent)"

  switch (type) {
    case "church":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-11 sm:w-11" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3V10 M8.5 6H15.5" />
          <path d="M6 15L12 10L18 15V29" />
          <path d="M9 18V23 M15 18V23" />
          <path d="M3 27L24 12L45 27" />
          <path d="M7 25V43H41V25" />
          <path d="M12 30V34 M16 30V34 M32 30V34 M36 30V34" />
          <path d="M20 43V35C20 32.8 21.8 31 24 31C26.2 31 28 32.8 28 35V43" />
          <path d="M4 43H44" />
        </svg>
      )

    case "party":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-11 sm:w-11" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 7H23L21 17C20 22 17 25 14 25C11 25 8 22 7 17L5 7Z" />
          <path d="M8 14H21 M14 25V36 M9 36H19" />
          <path d="M25 7H43L41 17C40 22 37 25 34 25C31 25 28 22 27 17L25 7Z" />
          <path d="M28 14H41 M34 25V36 M29 36H39" />
          <path d="M20 11L24 7L28 11 M24 2V4 M3 29L5 27 M43 29L45 27" />
        </svg>
      )

    case "document":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2V8H20 M8 13H16 M8 17H16 M8 9H9" />
        </svg>
      )

    case "camera":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )

    case "glass":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-11 sm:w-11" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 8H41L27 25V37 M27 37V41 M19 41H35" />
          <path d="M12 13H36" />
          <circle cx="35" cy="8" r="5" />
          <path d="M35 3V13 M30.7 5.5L39.3 10.5 M17 4L28 20" />
        </svg>
      )

    case "music":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )

    case "utensils":
      return (
        <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-11 sm:w-11" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="24" cy="25" r="13" />
          <circle cx="24" cy="25" r="9" />
          <path d="M5 5V17 M9 5V12 M13 5V17 M5 17H13 M9 17V43" />
          <path d="M39 5C35 9 35 15 35 19V23H41V5 M38 23V43" />
        </svg>
      )

    default:
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8V16 M8 12H16" />
        </svg>
      )
  }
}

export default function WeddingTimeline({
  schedules,
}: Props) {
  if (!schedules?.length) return null

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-20"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <WeddingBotanicalLuxury />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <div className="mb-12 grid gap-4 sm:mb-16 md:grid-cols-[180px_1fr] md:gap-6">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: "var(--theme-secondary)" }}
            >
              02
            </p>
            <div
              className="mt-4 h-px w-12"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] sm:text-sm"
              style={{ color: "var(--theme-secondary)" }}
            >
              El gran día
            </p>
            <h2
              className="mt-3 font-serif text-3xl sm:mt-4 sm:text-5xl"
              style={{ color: "var(--theme-primary)" }}
            >
              Nuestro día
            </h2>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Línea vertical en móvil y central en escritorio */}
          <div
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.5,
            }}
          />

          <div className="space-y-10 sm:space-y-12">
            {schedules.map((schedule, index) => {
              const isEven = index % 2 === 0
              const iconType = getScheduleIconType(
                schedule.title,
                schedule.description
              )

              return (
                <div
                  key={schedule.id}
                  className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 md:grid-cols-2 md:gap-12"
                >
                  {/* ICONO: móvil */}
                  <div className="relative z-10 flex justify-center md:hidden">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--theme-background)",
                        boxShadow: "0 0 0 1px var(--theme-accent)",
                      }}
                    >
                      <ScheduleIcon type={iconType} />
                    </div>
                  </div>

                  {/* CONTENIDO MÓVIL */}
                  <div className="min-w-0 pb-1 md:hidden">
                    <TimelineContent schedule={schedule} />
                    <p
                      className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      Evento {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* CONTENIDO ESCRITORIO: lado izquierdo */}
                  <div
                    className={`hidden min-w-0 md:block ${
                      isEven ? "text-right" : "pointer-events-none"
                    }`}
                  >
                    {isEven && (
                      <>
                        <TimelineContent
                          schedule={schedule}
                          align="right"
                        />
                        <p
                          className="mt-2 text-xs font-medium uppercase tracking-[0.2em]"
                          style={{ color: "var(--theme-accent)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CONTENIDO ESCRITORIO: lado derecho */}
                  <div
                    className={`hidden min-w-0 md:block ${
                      !isEven ? "text-left" : "pointer-events-none"
                    }`}
                  >
                    {!isEven && (
                      <>
                        <TimelineContent
                          schedule={schedule}
                          align="left"
                        />
                        <p
                          className="mt-2 text-xs font-medium uppercase tracking-[0.2em]"
                          style={{ color: "var(--theme-accent)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </>
                    )}
                  </div>

                  {/* ICONO GRANDE EN ESCRITORIO */}
                  <div
                    className="absolute left-1/2 top-1 z-10 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full md:flex"
                    style={{
                      backgroundColor: "var(--theme-background)",
                      boxShadow: "0 0 0 1px var(--theme-accent)",
                    }}
                  >
                    <ScheduleIcon type={iconType} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineContent({
  schedule,
  align = "left",
}: {
  schedule: Schedule
  align?: "left" | "right"
}) {
  return (
    <div className={`min-w-0 py-1 ${align === "right" ? "md:text-right" : ""}`}>
      <p
        className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]"
        style={{ color: "var(--theme-secondary)" }}
      >
        {schedule.time ?? "Momento especial"}
      </p>

      <h3
        className="mt-2 break-words font-serif text-xl leading-snug sm:mt-3 sm:text-3xl"
        style={{ color: "var(--theme-primary)" }}
      >
        {schedule.title}
      </h3>

      {schedule.description && (
        <p
          className="mt-2 text-sm leading-6 sm:mt-3"
          style={{ color: "var(--theme-secondary)" }}
        >
          {schedule.description}
        </p>
      )}

      {schedule.location && (
        <p
          className="mt-3 break-words text-xs font-medium leading-5 sm:text-sm"
          style={{ color: "var(--theme-text)" }}
        >
          <span style={{ color: "var(--theme-accent)" }}>⌖ </span>
          {schedule.location.name}
        </p>
      )}
    </div>
  )
}
