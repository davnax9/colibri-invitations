
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
    text.includes("celebracion") ||
    text.includes("brindis")
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

function ScheduleIcon({ type }: { type: ScheduleIconType }) {
  const color = "var(--theme-accent)"

  switch (type) {
    case "church":
      return (
        <svg
          className="h-8 w-8"
          viewBox="0 0 48 48"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2.5V10" />
          <path d="M8.5 6H15.5" />
          <path d="M6 15L12 10L18 15V29" />
          <path d="M9 18V23" />
          <path d="M15 18V23" />
          <path d="M3 27L24 12L45 27" />
          <path d="M7 25V43H41V25" />
          <path d="M12 30V34M16 30V34M32 30V34M36 30V34" />
          <path d="M20 43V35C20 32.8 21.8 31 24 31C26.2 31 28 32.8 28 35V43" />
          <path d="M4 43H44" />
        </svg>
      )

    case "party":
      return (
        <svg
          className="h-8 w-8"
          viewBox="0 0 48 48"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7H23L21 17C20 22 17 25 14 25C11 25 8 22 7 17L5 7Z" />
          <path d="M8 14H21M14 25V36M9 36H19" />
          <path d="M25 7H43L41 17C40 22 37 25 34 25C31 25 28 22 27 17L25 7Z" />
          <path d="M28 14H41M34 25V36M29 36H39" />
          <path d="M20 11L24 7L28 11" />
          <path d="M24 2V4M3 29L5 27M43 29L45 27M24 41V44" />
        </svg>
      )

    case "document":
      return (
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2V8H20" />
          <path d="M16 13H8M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      )

    case "camera":
      return (
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )

    case "glass":
      return (
        <svg
          className="h-8 w-8"
          viewBox="0 0 48 48"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 8H41L27 25V37" />
          <path d="M27 37V41M19 41H35" />
          <path d="M12 13H36" />
          <circle cx="35" cy="8" r="5" />
          <path d="M35 3V13M30.7 5.5L39.3 10.5" />
          <path d="M17 4L28 20" />
        </svg>
      )

    case "music":
      return (
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )

    case "utensils":
      return (
        <svg
          className="h-8 w-8"
          viewBox="0 0 48 48"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="24" cy="25" r="13" />
          <circle cx="24" cy="25" r="9" />
          <path d="M5 5V17M9 5V12M13 5V17M5 17H13M9 17V43" />
          <path d="M39 5C35 9 35 15 35 19V23H41V5M38 23V43" />
        </svg>
      )

    default:
      return (
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3C13.5 8.5 15.5 10.5 21 12C15.5 13.5 13.5 15.5 12 21C10.5 15.5 8.5 13.5 3 12C8.5 10.5 10.5 8.5 12 3Z" />
        </svg>
      )
  }
}

export default function WeddingRomanticTimeline({ schedules }: Props) {
  if (!schedules.length) return null

  return (
    <section
      className="px-5 py-12 sm:px-6 md:py-16"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <header className="text-center">
          <span
            className="text-3xl"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            ♡
          </span>

          <p
            className="mt-4 text-xs uppercase tracking-[0.35em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            El gran día
          </p>

          <h2
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Momentos que viviremos
          </h2>

          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />
        </header>

        {/* TIMELINE */}
        <div className="relative mt-16">
          {/* LÍNEA VERTICAL */}
          <div
            className="absolute bottom-0 left-7 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.55,
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {schedules.map((schedule, index) => {
              const isLeft = index % 2 === 0
              const iconType = getScheduleIconType(
                schedule.title,
                schedule.description
              )

              return (
                <div
                  key={schedule.id}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* PUNTO CENTRAL */}
                  <div
                    className="absolute left-7 top-7 z-20 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    style={{
                      backgroundColor: "var(--theme-accent)",
                      boxShadow: "0 0 0 4px var(--theme-background)",
                    }}
                  />

                  {/* ICONO: MÓVIL */}
                  <div
                    className="absolute left-7 top-0 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center md:hidden"
                    style={{
                      color: "var(--theme-accent)",
                      backgroundColor: "var(--theme-background)",
                    }}
                  >
                    <ScheduleIcon type={iconType} />
                  </div>

                  {/* TARJETA */}
                  <div
                    className={`ml-16 rounded-2xl border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:row-start-1 md:text-right"
                        : "md:col-start-2 md:row-start-1 md:text-left"
                    }`}
                    style={{
                      backgroundColor: "var(--theme-surface)",
                      borderColor: "var(--theme-accent)",
                    }}
                  >
                    {/* ICONO: ESCRITORIO */}
                    <div
                      className={`mb-3 hidden md:flex ${
                        isLeft ? "justify-end" : "justify-start"
                      }`}
                      style={{ color: "var(--theme-accent)" }}
                    >
                      <ScheduleIcon type={iconType} />
                    </div>

                    <span
                      className="text-xs font-medium tracking-[0.2em]"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="mt-2 font-serif text-2xl sm:text-3xl"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {schedule.title}
                    </h3>

                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--theme-secondary)" }}
                    >
                      {schedule.date.toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}

                      {schedule.time && <> · {schedule.time}</>}
                    </p>

                    {schedule.location && (
                      <p
                        className="mt-3 text-sm font-medium"
                        style={{ color: "var(--theme-text)" }}
                      >
                        <span
                          style={{ color: "var(--theme-accent)" }}
                          aria-hidden="true"
                        >
                          ♧
                        </span>{" "}
                        {schedule.location.name}
                      </p>
                    )}

                    {schedule.description && (
                      <p
                        className="mt-3 text-sm leading-6"
                        style={{ color: "var(--theme-secondary)" }}
                      >
                        {schedule.description}
                      </p>
                    )}

                    <div
                      className={`mt-5 h-px w-10 ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                      style={{ backgroundColor: "var(--theme-accent)" }}
                    />
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
