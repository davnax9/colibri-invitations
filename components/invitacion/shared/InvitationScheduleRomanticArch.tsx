
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  location: { name: string } | null
}

type InvitationScheduleProps = {
  event: {
    name: string
    eventDate: Date
    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]
    schedules: Schedule[]
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

function getScheduleIconType(
  title: string,
  description?: string | null
): ScheduleIconType {
  const text = `${title} ${description ?? ""}`.toLowerCase()

  if (/misa|iglesia|ceremonia|boda religiosa/.test(text)) return "church"
  if (/fiesta|recepción|recepcion|celebración|celebracion/.test(text)) return "party"
  if (/civil|registro|juzgado|acta/.test(text)) return "document"
  if (/foto|sesión|sesion|fotografía|fotografia/.test(text)) return "camera"
  if (/cóctel|coctel|cocktail|bienvenida|aperitivo/.test(text)) return "glass"
  if (/baile|vals|dj|música|musica|disco/.test(text)) return "music"
  if (/desayuno|brunch|comida|almuerzo|banquete|cena/.test(text)) return "utensils"

  return "default"
}

function ScheduleIcon({ type }: { type: ScheduleIconType }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (type) {
    case "church":
      return (
        <svg viewBox="0 0 48 48" className="h-8 w-8" {...common}>
          <path d="M24 3v8M20 7h8M7 21l17-12 17 12" />
          <path d="M12 19v23h24V19M20 42V29a4 4 0 0 1 8 0v13" />
          <path d="M17 24v4M31 24v4M5 42h38" />
        </svg>
      )
    case "party":
      return (
        <svg viewBox="0 0 48 48" className="h-8 w-8" {...common}>
          <path d="M5 8h15l-2 10c-1 5-4 7-6 7s-5-2-6-7L5 8Z" />
          <path d="M12 25v11M7 36h10M28 8h15l-2 10c-1 5-4 7-6 7s-5-2-6-7L28 8Z" />
          <path d="M35 25v11M30 36h10M21 12l3-4 3 4M24 3v2" />
        </svg>
      )
    case "document":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      )
    case "camera":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" {...common}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    case "glass":
      return (
        <svg viewBox="0 0 48 48" className="h-8 w-8" {...common}>
          <path d="M7 8h34L27 26v11M27 37v4M19 41h16" />
          <path d="M12 14h24M17 4l10 16" />
          <circle cx="36" cy="8" r="5" />
        </svg>
      )
    case "music":
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" {...common}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case "utensils":
      return (
        <svg viewBox="0 0 48 48" className="h-8 w-8" {...common}>
          <circle cx="25" cy="25" r="13" />
          <circle cx="25" cy="25" r="9" />
          <path d="M5 5v12M10 5v8M15 5v12M5 17h10M10 17v26M40 5c-5 5-5 11-5 15v4h7V5M39 24v19" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" {...common}>
          <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" />
        </svg>
      )
  }
}

function TimelineCard({
  schedule,
  index,
}: {
  schedule: Schedule
  index: number
}) {
  const iconType = getScheduleIconType(
    schedule.title,
    schedule.description
  )

  return (
    <article className="relative rounded-t-[3rem] rounded-b-2xl border border-[var(--theme-accent)]/30 bg-white/50 px-5 pb-5 pt-8 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[var(--theme-accent)]/70 hover:shadow-md sm:px-7 sm:pb-6 sm:pt-9">
      {/* Número ornamental */}
      <span
        aria-hidden="true"
        className="absolute right-5 top-3 font-serif text-xs tracking-[0.2em] opacity-60"
        style={{ color: "var(--theme-accent)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start gap-4">
        {/* Icono */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
          style={{
            color: "var(--theme-accent)",
            borderColor: "var(--theme-accent)",
            backgroundColor: "var(--theme-background)",
          }}
        >
          {/* <ScheduleIcon type={iconType} /> */}
          {schedule.time && (
            <p
              className="mt-2 text-sm font-medium tracking-[0.16em] sm:text-base"
              style={{ color: "var(--theme-secondary)" }}
            >
              {schedule.time}
            </p>
          )}
        </div>

        <div className="min-w-0 flex-1 pt-1">
          <h3
            className="break-words font-serif text-xl leading-snug sm:text-2xl"
            style={{ color: "var(--theme-primary)" }}
          >
            {schedule.title}
          </h3>

          {/* {schedule.time && (
            <p
              className="mt-2 text-sm font-medium tracking-[0.16em] sm:text-base"
              style={{ color: "var(--theme-secondary)" }}
            >
              {schedule.time}
            </p>
          )} */}
        </div>
      </div>

      {schedule.description && (
        <p
          className="mt-4 text-sm leading-7"
          style={{ color: "var(--theme-secondary)" }}
        >
          {schedule.description}
        </p>
      )}

      {schedule.location && (
        <div
          className="mt-4 flex items-start gap-2 border-t pt-3 text-xs leading-5 sm:text-sm"
          style={{
            borderColor: "var(--theme-accent)",
            color: "var(--theme-secondary)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="mt-0.5 h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{schedule.location.name}</span>
        </div>
      )}
    </article>
  )
}

export default function InvitationScheduleRomanticArch({
  event,
}: InvitationScheduleProps) {
  if (!event.schedules.length) return null

  const schedules = [...event.schedules].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateA - dateB
  })

  return (
    <section
      className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <BotanicalBackground />

      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Encabezado */}
        <header className="mx-auto max-w-2xl text-center">
          <div
            className="mb-4 flex items-center justify-center gap-3"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            <span className="h-px w-10 opacity-60" style={{ backgroundColor: "currentColor" }} />
            <span className="text-xl">✧</span>
            <span className="h-px w-10 opacity-60" style={{ backgroundColor: "currentColor" }} />
          </div>

          <p
            className="text-[10px] uppercase tracking-[0.35em] sm:text-xs"
            style={{ color: "var(--theme-secondary)" }}
          >
            Cada instante cuenta
          </p>

          <h2
            className="mt-3 font-serif text-4xl sm:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Nuestro día
          </h2>

          <p
            className="mx-auto mt-4 max-w-md text-sm leading-7"
            style={{ color: "var(--theme-secondary)" }}
          >
            Nos encantará compartir cada momento de esta historia con ustedes.
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 opacity-50" style={{ backgroundColor: "var(--theme-accent)" }} />
            <span style={{ color: "var(--theme-accent)" }}>❧</span>
            <span className="h-px w-8 opacity-50" style={{ backgroundColor: "var(--theme-accent)" }} />
          </div>
        </header>

        {/* Itinerario */}
        <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          {/* Línea vertical */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 w-px sm:left-1/2 sm:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--theme-accent) 10%, var(--theme-accent) 90%, transparent)",
              opacity: 0.65,
            }}
          />

          <div className="space-y-8 sm:space-y-12">
            {schedules.map((schedule, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={schedule.id}
                  className="relative grid grid-cols-[56px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-2 sm:gap-12"
                >
                  {/* Marcador móvil */}
                  <div
                    className="relative z-10 col-start-1 row-start-1 flex h-14 w-14 items-center justify-center rounded-full border bg-[var(--theme-background)] sm:hidden"
                    style={{
                      borderColor: "var(--theme-accent)",
                      color: "var(--theme-accent)",
                    }}
                  >
                    <ScheduleIcon
                      type={getScheduleIconType(schedule.title, schedule.description)}
                    />
                  </div>

                  {/* Tarjeta izquierda en escritorio */}
                  <div className={`hidden sm:block ${isLeft ? "col-start-1 row-start-1" : "col-start-2 row-start-1 invisible"}`}>
                    {isLeft && (
                      <TimelineCard schedule={schedule} index={index} />
                    )}
                  </div>

                  {/* Marcador central en escritorio */}
                  <div
                    className="absolute left-7 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-[var(--theme-background)] sm:left-1/2 sm:block"
                    style={{ borderColor: "var(--theme-accent)" }}
                  />

                  {/* Tarjeta móvil y tarjeta derecha en escritorio */}
                  <div className="col-start-2 row-start-1 min-w-0 sm:col-start-2">
                    <div className="sm:hidden">
                      <TimelineCard schedule={schedule} index={index} />
                    </div>

                    {!isLeft && (
                      <div className="hidden sm:block">
                        <TimelineCard schedule={schedule} index={index} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Cierre ornamental */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-16">
          <span
            className="text-2xl"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            ✧
          </span>
          <p
            className="mt-2 font-serif text-xl italic"
            style={{ color: "var(--theme-secondary)" }}
          >
            Un día para recordar siempre
          </p>
        </div>
      </div>
    </section>
  )
}
