
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

type WeddingDateRomanticArchProps = {
  event: {
    eventDate: Date
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
  }
}

function ArchFlower({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g fill="#F5E8DF" stroke="#B89455" strokeWidth="0.8">
        <ellipse cy="-5" rx="3.5" ry="6" />
        <ellipse cy="-5" rx="3.5" ry="6" transform="rotate(72)" />
        <ellipse cy="-5" rx="3.5" ry="6" transform="rotate(144)" />
        <ellipse cy="-5" rx="3.5" ry="6" transform="rotate(216)" />
        <ellipse cy="-5" rx="3.5" ry="6" transform="rotate(288)" />
      </g>
      <circle r="2.8" fill="#C6A15B" />
      <circle r="1" fill="#FFF8EC" />
    </g>
  )
}

function ArchLeaf({
  x,
  y,
  rotate = 0,
  color = "#849078",
}: {
  x: number
  y: number
  rotate?: number
  color?: string
}) {
  return (
    <path
      d="M0 0 Q-10 -11 -3 -19 Q7 -13 0 0Z"
      transform={`translate(${x} ${y}) rotate(${rotate})`}
      fill={color}
      stroke="#697A63"
      strokeWidth="0.6"
    />
  )
}

function RomanticWeddingArch() {
  return (
    <svg
      viewBox="0 0 420 340"
      role="img"
      aria-label="Arco nupcial asimétrico decorado con flores y hojas"
      className="mx-auto block h-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="romanticArchGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9D7940" />
          <stop offset="48%" stopColor="#E5CD91" />
          <stop offset="100%" stopColor="#B89455" />
        </linearGradient>

        <linearGradient id="romanticArchRibbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E9E0" />
          <stop offset="100%" stopColor="#D9BFB2" />
        </linearGradient>
      </defs>

      {/* Sombra discreta */}
      <ellipse
        cx="210"
        cy="318"
        rx="125"
        ry="5"
        fill="var(--theme-accent)"
        opacity="0.12"
      />

      {/* Arco principal */}
      <path
        d="M91 315 V151 A119 119 0 0 1 329 151 V315"
        fill="none"
        stroke="url(#romanticArchGold)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Segundo arco desplazado para dar profundidad */}
      <path
        d="M105 315 V153 A105 105 0 0 1 315 153"
        fill="none"
        stroke="#B89455"
        strokeWidth="1"
        opacity="0.65"
      />

      {/* Base del poste derecho: detalle geométrico */}
      <path
        d="M318 286 L329 297 L318 308 L307 297Z"
        fill="#F4E7D4"
        stroke="#B89455"
        strokeWidth="1"
      />
      <circle cx="318" cy="297" r="3" fill="#B89455" />

      {/* Cinta ligera en el costado derecho */}
      <path
        d="M296 68 Q315 99 310 136 Q304 171 325 199 Q306 188 297 165 Q284 131 296 68Z"
        fill="url(#romanticArchRibbon)"
        opacity="0.88"
      />
      <path
        d="M299 78 Q311 117 300 150"
        fill="none"
        stroke="#C6A99A"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Guirnalda orgánica que recorre la parte superior izquierda */}
      <path
        d="M91 201 Q100 140 145 99 Q180 64 220 66 Q251 67 272 86"
        fill="none"
        stroke="#75856A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Hojas de la guirnalda */}
      <ArchLeaf x={99} y={177} rotate={-48} />
      <ArchLeaf x={108} y={157} rotate={35} color="#A5B093" />
      <ArchLeaf x={121} y={137} rotate={-40} />
      <ArchLeaf x={139} y={119} rotate={36} color="#A5B093" />
      <ArchLeaf x={157} y={101} rotate={-35} />
      <ArchLeaf x={177} y={87} rotate={45} color="#A5B093" />
      <ArchLeaf x={198} y={77} rotate={-30} />
      <ArchLeaf x={221} y={76} rotate={45} color="#A5B093" />
      <ArchLeaf x={243} y={82} rotate={-35} />
      <ArchLeaf x={261} y={92} rotate={45} color="#A5B093" />

      {/* Flores distribuidas de forma irregular */}
      <ArchFlower x={100} y={170} scale={0.85} />
      <ArchFlower x={125} y={131} scale={0.75} />
      <ArchFlower x={151} y={105} scale={1.05} />
      <ArchFlower x={185} y={83} scale={0.75} />
      <ArchFlower x={220} y={75} scale={0.95} />
      <ArchFlower x={250} y={85} scale={0.7} />

      {/* Pequeños brotes */}
      <g fill="#D9C59B">
        <circle cx="113" cy="146" r="2.3" />
        <circle cx="137" cy="115" r="2" />
        <circle cx="168" cy="93" r="2.2" />
        <circle cx="204" cy="67" r="2" />
        <circle cx="238" cy="74" r="2.3" />
      </g>

      {/* Flores pequeñas en la base izquierda */}
      <path
        d="M91 315 Q108 286 136 293 Q151 302 160 315"
        fill="none"
        stroke="#849078"
        strokeWidth="2"
      />
      <ArchLeaf x={104} y={303} rotate={-65} />
      <ArchLeaf x={124} y={294} rotate={40} color="#A5B093" />
      <ArchLeaf x={145} y={305} rotate={-20} />
      <ArchFlower x={110} y={290} scale={0.8} />
      <ArchFlower x={141} y={303} scale={0.65} />

      {/* Estrellas doradas sutiles */}
      <g
        fill="#C6A15B"
        stroke="#C6A15B"
        strokeWidth="0.6"
        strokeLinecap="round"
      >
        <path d="M283 119 V129 M278 124 H288" />
        <path d="M72 235 V243 M68 239 H76" />
        <path d="M341 224 V232 M337 228 H345" />
        <path d="M271 178 V184 M268 181 H274" />
      </g>

      {/* Pequeño adorno central superior */}
      <path
        d="M205 49 Q210 41 215 49 Q210 57 205 49Z"
        fill="#E8D4A4"
        stroke="#B89455"
        strokeWidth="0.8"
      />
      <circle cx="210" cy="49" r="1.5" fill="#B89455" />
    </svg>
  )
}

export default function WeddingDateRomanticArch({
  event,
}: WeddingDateRomanticArchProps) {
  const date = new Date(event.eventDate)

  if (!Number.isFinite(date.getTime())) return null

  const month = new Intl.DateTimeFormat("es-MX", {
    month: "long",
    timeZone: "UTC",
  })
    .format(date)
    .toLocaleUpperCase("es-MX")

  const day = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    timeZone: "UTC",
  }).format(date)

  const year = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    timeZone: "UTC",
  }).format(date)

  const location = event.locations[0]

  const celebrationSchedule = event.schedules.find((schedule) =>
    /recepci[oó]n|celebraci[oó]n|fiesta|banquete/i.test(schedule.title)
  )

  const rawTime =
    celebrationSchedule?.time ||
    new Intl.DateTimeFormat("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone: "UTC",
    }).format(date)

  function format12HourTime(value: string) {
    const match = value
      .trim()
      .match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM|A\.M\.|P\.M\.)?$/i)

    if (!match) {
      return { hour: value, period: "" }
    }

    let hours = Number(match[1])
    const minutes = match[2]
    let period = match[3]?.replace(/\./g, "").toUpperCase()

    if (!period) {
      period = hours >= 12 ? "PM" : "AM"
    }

    hours = hours % 12 || 12

    return {
      hour: `${hours}:${minutes}`,
      period: period === "AM" ? "A.M." : "P.M.",
    }
  }

  const { hour, period } = format12HourTime(rawTime)

  return (
    <section
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-6 md:px-10 md:py-8"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-primary)",
      }}
    >
      {/* Luz decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.07,
        }}
      />

      <BotanicalBackground />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-5 flex items-center justify-center gap-3"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            <span
              className="h-px w-10 opacity-60"
              style={{ backgroundColor: "currentColor" }}
            />
            <span className="text-sm">✧</span>
            <span
              className="h-px w-10 opacity-60"
              style={{ backgroundColor: "currentColor" }}
            />
          </div>

          <p
            className="text-[11px] leading-6 tracking-[0.2em] sm:text-sm sm:tracking-[0.3em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            CON ALEGRÍA, LOS INVITAMOS A CELEBRAR NUESTRO MATRIMONIO
          </p>
        </div>

        {/* Fecha y hora */}
        <div className="mx-auto mt-8 flex max-w-md items-stretch justify-center sm:mt-10">
          <div className="flex min-w-0 flex-col items-center justify-center pr-5 text-center sm:pr-8">
            <p
              className="font-serif text-sm tracking-[0.1em] sm:text-lg"
              style={{ color: "var(--theme-primary)" }}
            >
              {month}
            </p>

            <p
              className="font-serif text-6xl leading-none sm:text-8xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {day}
            </p>

            <p
              className="mt-2 font-serif text-xl sm:text-2xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {year}
            </p>
          </div>

          <div
            className="my-1 w-px shrink-0"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.8,
            }}
          />

          <div className="flex min-w-0 flex-col items-center justify-center pl-5 text-center sm:pl-8">
            <p
              className="whitespace-nowrap font-serif text-3xl sm:text-4xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {hour}
            </p>

            {period && (
              <p
                className="mt-3 font-serif text-lg tracking-[0.12em] sm:text-xl"
                style={{ color: "var(--theme-secondary)" }}
              >
                {period}
              </p>
            )}
          </div>
        </div>

        {/* Separador */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span
            className="h-px w-10 sm:w-16"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.55,
            }}
          />
          <span
            aria-hidden="true"
            style={{ color: "var(--theme-accent)" }}
          >
            ❧
          </span>
          <span
            className="h-px w-10 sm:w-16"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.55,
            }}
          />
        </div>

        {/* Nuevo arco nupcial */}
        <div className="mx-auto mt-5 w-full max-w-lg sm:mt-7">
          <RomanticWeddingArch />
        </div>

        {/* Ubicación */}
        {location && (
          <div className="mx-auto mt-3 max-w-2xl text-center sm:mt-5">
            <p
              className="text-[10px] uppercase tracking-[0.3em] sm:text-xs"
              style={{ color: "var(--theme-secondary)" }}
            >
              Lugar de celebración
            </p>

            <h2
              className="mt-3 font-serif text-2xl sm:text-3xl md:text-4xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {location.name}
            </h2>

            {location.address && (
              <p
                className="mx-auto mt-3 max-w-lg text-xs leading-6 sm:text-sm sm:leading-7"
                style={{ color: "var(--theme-secondary)" }}
              >
                {location.address}
              </p>
            )}

            {location.mapsUrl && (
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 sm:px-8 sm:text-sm"
                style={{ backgroundColor: "var(--theme-primary)" }}
              >
                <span aria-hidden="true">↗</span>
                Cómo llegar
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
