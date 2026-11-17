
import { InvitationTemplateProps } from "@/utils/types/invitation"

type Schedule = InvitationTemplateProps["event"]["schedules"][number]

type Props = {
  event: InvitationTemplateProps["event"]
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

  if (
    text.includes("misa") ||
    text.includes("iglesia") ||
    text.includes("ceremonia")
  ) return "church"

  if (
    text.includes("fiesta") ||
    text.includes("recepción") ||
    text.includes("celebración") ||
    text.includes("banquete") ||
    text.includes("cena")
  ) return "party"

  if (
    text.includes("civil") ||
    text.includes("registro") ||
    text.includes("juzgado") ||
    text.includes("acta")
  ) return "document"

  if (
    text.includes("foto") ||
    text.includes("sesión") ||
    text.includes("fotografía")
  ) return "camera"

  if (
    text.includes("cóctel") ||
    text.includes("cocktail") ||
    text.includes("bienvenida") ||
    text.includes("aperitivo")
  ) return "glass"

  if (
    text.includes("baile") ||
    text.includes("dj") ||
    text.includes("música") ||
    text.includes("disco")
  ) return "music"

  if (
    text.includes("desayuno") ||
    text.includes("brunch") ||
    text.includes("comida") ||
    text.includes("almuerzo")
  ) return "utensils"

  return "default"
}

function ScheduleIcon({
  type,
}: {
  type: ScheduleIconType
}) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  switch (type) {
    case "church":
      return (
        <svg {...common}>
          <path d="M12 2v5M9 5h6M4 21h16M6 21V10l6-5 6 5v11M10 21v-6h4v6" />
        </svg>
      )

    case "party":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )

    case "document":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      )

    case "camera":
      return (
        <svg {...common}>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )

    case "glass":
      return (
        <svg {...common}>
          <path d="M8 22h8M12 17v5M7 3h10l-1 9a4 4 0 0 1-8 0L7 3Z" />
          <path d="M7 7h10" />
        </svg>
      )

    case "music":
      return (
        <svg {...common}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )

    case "utensils":
      return (
        <svg {...common}>
          <path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M17 2v20M17 2c4 3 4 9 0 12" />
        </svg>
      )

    default:
      return (
        <svg {...common}>
          <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2Z" />
        </svg>
      )
  }
}

function KuromiScheduleBow({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M29 19C20 5 5 2 4 12C2 24 17 29 29 22L32 20L29 19Z"
        fill="#D98BD9"
        stroke="#F3B9F2"
        strokeWidth="1.5"
      />
      <path
        d="M35 19C44 5 59 2 60 12C62 24 47 29 35 22L32 20L35 19Z"
        fill="#D98BD9"
        stroke="#F3B9F2"
        strokeWidth="1.5"
      />
      <path
        d="M29 20L23 36L32 31L41 36L35 20"
        fill="#A65CB6"
        stroke="#E7A5ED"
        strokeWidth="1.2"
      />
      <rect
        x="26"
        y="13"
        width="12"
        height="12"
        rx="4"
        fill="#F5C4EF"
        stroke="#FCE7F3"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function formatScheduleTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number)

  if (
    !Number.isInteger(hours) ||
    !Number.isInteger(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return time
  }

  const period = hours >= 12 ? "PM" : "AM"
  const hour12 = hours % 12 || 12

  return `${String(hour12).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`
}

function TimelineContent({
  schedule,
  isLeft,
}: {
  schedule: Schedule
  isLeft: boolean
}) {
  return (
    <article
      className={`group relative rounded-2xl border border-fuchsia-300/20 bg-gradient-to-br from-[#30203e]/90 via-[#21162f]/95 to-[#191222]/95 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-pink-300/50 hover:shadow-[0_12px_35px_rgba(192,132,252,0.12)] sm:p-6 ${
        isLeft ? "text-right" : "text-left"
      }`}
    >
      {/* BRILLO INTERIOR */}
      <div className="pointer-events-none absolute inset-[5px] rounded-xl border border-purple-200/[0.06]" />

      {/* MOÑO DECORATIVO */}
      <KuromiScheduleBow
        className={`absolute -top-3 h-9 w-12 opacity-80 ${
          isLeft ? "right-5" : "left-5"
        }`}
      />

      {/* HORA */}
      {schedule.time && (
        <div
          className={`mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-pink-200 ${
            isLeft ? "justify-end" : "justify-start"
          }`}
        >
          <span className="h-px w-5 bg-pink-300/50" />
          {formatScheduleTime(schedule.time)}
          <span className="h-px w-5 bg-pink-300/50" />
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="mt-5 font-serif text-xl font-semibold leading-tight text-white sm:text-2xl">
        {schedule.title}
      </h3>

      {/* UBICACIÓN */}
      {schedule.location && (
        <p
          className={`mt-3 flex items-center gap-2 text-sm font-medium text-pink-200/90 ${
            isLeft ? "justify-end" : "justify-start"
          }`}
        >
          <span>⌖</span>
          {schedule.location.name}
        </p>
      )}

      {/* DESCRIPCIÓN */}
      {schedule.description && (
        <p className="mt-3 text-sm leading-7 text-purple-100/65">
          {schedule.description}
        </p>
      )}

      {/* DETALLE INFERIOR */}
      <div
        className={`mt-5 flex items-center gap-2 ${
          isLeft ? "justify-end" : "justify-start"
        }`}
      >
        <span className="h-px w-8 bg-fuchsia-300/50" />
        <span className="text-xs text-pink-300">♡</span>
      </div>
    </article>
  )
}

export default function KuromiSchedule({ event }: Props) {
  if (event.schedules.length === 0) return null

  return (
    <section className="relative isolate overflow-hidden bg-[#1b1426] px-5 py-24 text-center sm:px-8">

      {/* ================================================= */}
      {/* FONDO */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,58,155,0.20),transparent_65%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_55%,rgba(216,137,226,0.08),transparent_25%),radial-gradient(circle_at_95%_70%,rgba(126,78,180,0.12),transparent_30%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(#e9b5f7 1px, transparent 1px), radial-gradient(#b77ad5 1px, transparent 1px)",
          backgroundSize: "47px 47px, 73px 73px",
          backgroundPosition: "0 0, 20px 30px",
        }}
      />

      {/* ================================================= */}
      {/* DETALLES DECORATIVOS */}
      {/* ================================================= */}

      <span className="pointer-events-none absolute left-[8%] top-[12%] text-2xl text-pink-300/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[9%] top-[20%] text-3xl text-purple-300/50">
        ✧
      </span>

      <span className="pointer-events-none absolute bottom-[12%] left-[7%] text-3xl text-fuchsia-300/30">
        ♡
      </span>

      <span className="pointer-events-none absolute bottom-[15%] right-[8%] text-2xl text-pink-300/40">
        ✦
      </span>

      <div className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 opacity-30">
        <KuromiScheduleBow className="h-16 w-16" />
      </div>

      {/* ================================================= */}
      {/* ENCABEZADO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-3xl">

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-pink-300/30 bg-purple-900/40 text-2xl text-pink-200 shadow-[0_0_25px_rgba(216,137,226,0.15)]">
          ✧
        </div>

        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/60 sm:w-20" />

          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-300 sm:text-xs">
            Celebremos juntos
          </p>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/60 sm:w-20" />
        </div>

        <h2 className="font-serif text-4xl font-bold text-pink-100 drop-shadow-[0_0_18px_rgba(232,145,225,0.2)] sm:text-5xl">
          Nuestro día
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-purple-100/65 sm:text-base">
          Cada momento será parte de una noche mágica.
          Aquí podrás descubrir los detalles de nuestra celebración.
        </p>

        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-fuchsia-300/60" />
          <span className="text-xl text-pink-300">♡</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-300/60" />
        </div>
      </div>

      {/* ================================================= */}
      {/* LÍNEA DEL TIEMPO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto mt-16 max-w-5xl">

        {/* LÍNEA CENTRAL */}
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-fuchsia-300/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-14">
          {event.schedules.map((schedule, index) => {
            const isLeft = index % 2 === 0
            const iconType = getScheduleIconType(
              schedule.title,
              schedule.description
            )

            return (
              <div
                key={schedule.id}
                className="relative grid grid-cols-[40px_minmax(0,1fr)] items-center gap-4 md:grid-cols-[1fr_64px_1fr] md:gap-0"
              >

                {/* TARJETA IZQUIERDA EN ESCRITORIO */}
                <div className="hidden md:block md:pr-10">
                  {isLeft && (
                    <TimelineContent
                      schedule={schedule}
                      isLeft
                    />
                  )}
                </div>

                {/* ICONO CENTRAL */}
                <div className="relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-pink-200/60 bg-[#251632] text-pink-200 shadow-[0_0_20px_rgba(216,137,226,0.2)] md:col-start-2 md:row-auto md:mx-auto md:h-12 md:w-12">
                  <ScheduleIcon type={iconType} />
                </div>

                {/* TARJETA DERECHA / MÓVIL */}
                <div className="col-start-2 row-start-1 md:col-start-3 md:row-auto md:pl-10">
                  <div className="md:hidden">
                    <TimelineContent
                      schedule={schedule}
                      isLeft={false}
                    />
                  </div>

                  {!isLeft && (
                    <div className="hidden md:block">
                      <TimelineContent
                        schedule={schedule}
                        isLeft={false}
                      />
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* ================================================= */}
      {/* CIERRE DECORATIVO */}
      {/* ================================================= */}

      <div className="relative z-10 mt-16 flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-pink-300/50 sm:w-24" />

        <KuromiScheduleBow className="h-10 w-12" />

        <span className="h-px w-14 bg-gradient-to-l from-transparent to-pink-300/50 sm:w-24" />
      </div>

      <p className="relative z-10 mt-5 text-[10px] uppercase tracking-[0.35em] text-purple-200/50">
        Un día que recordaremos por siempre
      </p>
    </section>
  )
}
