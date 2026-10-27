
type WeddingDateHelenProps = {
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

function Flower({x,y,scale = 1}: {x: number,y: number,scale?: number}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g fill="#E8D6D0" stroke="#B89485" strokeWidth="0.8">
        <ellipse cy="-7" rx="4.5" ry="7" />
        <ellipse cy="-7" rx="4.5" ry="7" transform="rotate(60)" />
        <ellipse cy="-7" rx="4.5" ry="7" transform="rotate(120)" />
        <ellipse cy="-7" rx="4.5" ry="7" transform="rotate(180)" />
        <ellipse cy="-7" rx="4.5" ry="7" transform="rotate(240)" />
        <ellipse cy="-7" rx="4.5" ry="7" transform="rotate(300)" />
      </g>
      <circle r="4" fill="#D2AD65" />
      <circle r="1.5" fill="#F8EEDC" />
    </g>
  )
}

function LeafBranch({x, y, flip = false}: {x: number, y: number, flip?: boolean}) {
  return (
    <g transform={`translate(${x} ${y}) ${flip ? "scale(-1 1)" : ""}`} fill="none" stroke="#78866A" strokeLinecap="round" strokeWidth="1.5">
      <path d="M0 0 Q18 -14 39 -38" />
      <path d="M9 -8 Q-2 -24 -11 -20 Q-9 -9 9 -8Z" fill="#A9B49A" />
      <path d="M19 -18 Q15 -34 5 -33 Q7 -22 19 -18Z" fill="#78866A" />
      <path d="M27 -28 Q29 -43 40 -43 Q39 -31 27 -28Z" fill="#A9B49A" />
      <path d="M15 -13 Q31 -13 33 -23 Q21 -25 15 -13Z" fill="#9BAA8A" />
    </g>
  )
}


function BotanicalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* RAMA BOTÁNICA IZQUIERDA */}
      <svg
        viewBox="0 0 220 460"
        className="absolute -left-12 top-16 w-32 sm:-left-6 sm:top-20 sm:w-44 md:left-0 md:top-24 md:w-52"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.32 }}
      >
        <path d="M8 430 Q95 310 75 205 Q65 125 135 25" />

        <path d="M43 366 Q4 340 8 305 Q42 315 43 366Z" />
        <path d="M44 365 Q31 333 8 305" />

        <path d="M67 316 Q115 306 132 268 Q88 264 67 316Z" />
        <path d="M68 315 Q94 284 132 268" />

        <path d="M73 246 Q23 230 21 190 Q65 197 73 246Z" />
        <path d="M73 246 Q53 208 21 190" />

        <path d="M88 184 Q133 177 148 140 Q110 139 88 184Z" />
        <path d="M88 184 Q114 153 148 140" />

        <path d="M111 112 Q65 99 70 62 Q104 75 111 112Z" />
        <path d="M111 112 Q99 81 70 62" />

        {/* FLOR DE CONTORNO */}
        <g transform="translate(145 90)">
          <path d="M0 0 C-19 -5 -21 -24 -9 -28 C1 -28 4 -12 0 0Z" />
          <path d="M0 0 C7 -19 25 -18 28 -7 C28 3 12 5 0 0Z" />
          <path d="M0 0 C19 7 18 25 7 28 C-3 28 -5 12 0 0Z" />
          <path d="M0 0 C-7 19 -25 18 -28 7 C-28 -3 -12 -5 0 0Z" />
          <circle cx="0" cy="0" r="5" />
        </g>

        <path d="M105 137 Q124 118 145 90" />
        <path d="M75 205 Q102 190 113 164" />
      </svg>

      {/* FLOR Y RAMAS DERECHAS */}
      <svg
        viewBox="0 0 240 440"
        className="absolute -right-14 bottom-8 w-36 rotate-12 sm:-right-5 sm:bottom-10 sm:w-48 md:right-0 md:bottom-8 md:w-56"
        fill="none"
        stroke="var(--theme-accent)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.32 }}
      >
        <path d="M230 420 Q140 325 164 220 Q178 135 95 30" />

        <path d="M194 373 Q226 343 216 309 Q184 326 194 373Z" />
        <path d="M194 373 Q202 338 216 309" />

        <path d="M166 318 Q122 303 112 265 Q151 269 166 318Z" />
        <path d="M166 318 Q145 285 112 265" />

        <path d="M166 230 Q210 210 206 173 Q172 188 166 230Z" />
        <path d="M166 230 Q184 197 206 173" />

        <path d="M136 159 Q93 150 82 114 Q118 120 136 159Z" />
        <path d="M136 159 Q112 128 82 114" />

        <path d="M113 95 Q153 85 158 51 Q125 60 113 95Z" />
        <path d="M113 95 Q138 68 158 51" />

        {/* FLOR DE CONTORNO */}
        <g transform="translate(76 178)">
          <path d="M0 0 C-17 -4 -20 -20 -10 -25 C0 -25 4 -11 0 0Z" />
          <path d="M0 0 C6 -17 22 -16 25 -6 C25 2 11 5 0 0Z" />
          <path d="M0 0 C17 6 16 22 6 25 C-2 25 -5 11 0 0Z" />
          <path d="M0 0 C-6 17 -22 16 -25 6 C-25 -2 -11 -5 0 0Z" />
          <circle cx="0" cy="0" r="4.5" />
        </g>

        <path d="M126 137 Q104 155 76 178" />
      </svg>
    </div>
  )
}


function WeddingArch() {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="Arco nupcial decorado con flores, follaje y telas" className="mx-auto block h-auto w-full max-w-2xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wedding-fabric" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8F0E8" />
          <stop offset="50%" stopColor="#E8D8CF" />
          <stop offset="100%" stopColor="#F9F3ED" />
        </linearGradient>

        <linearGradient id="wedding-arch" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B89455" />
          <stop offset="50%" stopColor="#E0C99A" />
          <stop offset="100%" stopColor="#B89455" />
        </linearGradient>
      </defs>

      {/* Sombra suave en el suelo */}
      <ellipse cx="320" cy="335" rx="205" ry="10" fill="var(--theme-accent)" opacity="0.12"/>

      {/* Estructura del arco */}
      <path d="M132 332 V164 A188 188 0 0 1 508 164 V332" fill="none" stroke="url(#wedding-arch)" strokeWidth="5" strokeLinecap="round"/>

      <path d="M143 332 V165 A177 177 0 0 1 497 165 V332" fill="none" stroke="#B89455" strokeWidth="1" opacity="0.55"/>

      {/* Tela central drapeada */}
      <path d="M205 52 Q260 68 320 28 Q375 66 435 51 Q409 75 393 100 Q359 78 320 62 Q281 83 247 100 Q225 72 205 52Z" fill="url(#wedding-fabric)" opacity="0.96" />

      <path
        d="M218 57 Q264 87 320 43 Q375 85 422 56"
        fill="none"
        stroke="#C9AB98"
        strokeWidth="1.5"
      />

      {/* Tela caída a la izquierda */}
      <path
        d="M208 61
           Q193 105 168 144
           Q145 181 160 221
           Q169 250 148 278
           Q190 252 189 215
           Q177 177 203 137
           Q221 97 208 61Z"
        fill="url(#wedding-fabric)"
        opacity="0.95"
      />

      <path
        d="M208 66 Q211 113 183 158 Q165 190 178 223"
        fill="none"
        stroke="#C9AB98"
        strokeWidth="1.4"
        opacity="0.8"
      />

      {/* Tela caída a la derecha */}
      <path
        d="M432 61
           Q447 105 472 144
           Q495 181 480 221
           Q471 250 492 278
           Q450 252 451 215
           Q463 177 437 137
           Q419 97 432 61Z"
        fill="url(#wedding-fabric)"
        opacity="0.95"
      />

      <path
        d="M432 66 Q429 113 457 158 Q475 190 462 223"
        fill="none"
        stroke="#C9AB98"
        strokeWidth="1.4"
        opacity="0.8"
      />

      {/* Follaje superior izquierdo */}
      <LeafBranch x={221} y={82} flip />
      <LeafBranch x={193} y={108} flip />
      <LeafBranch x={171} y={139} flip />
      <LeafBranch x={153} y={170} flip />

      {/* Follaje superior derecho */}
      <LeafBranch x={419} y={82} />
      <LeafBranch x={447} y={108} />
      <LeafBranch x={469} y={139} />
      <LeafBranch x={487} y={170} />

      {/* Flores superiores */}
      <Flower x={244} y={68} scale={1.05} />
      <Flower x={269} y={54} scale={0.82} />
      <Flower x={295} y={43} scale={0.9} />
      <Flower x={321} y={42} scale={1.1} />
      <Flower x={347} y={45} scale={0.82} />
      <Flower x={374} y={54} scale={1} />
      <Flower x={398} y={68} scale={0.9} />

      {/* Flores y follaje laterales */}
      <Flower x={207} y={91} scale={0.8} />
      <Flower x={187} y={119} scale={0.75} />
      <Flower x={174} y={151} scale={0.9} />
      <Flower x={433} y={91} scale={0.85} />
      <Flower x={453} y={119} scale={0.75} />
      <Flower x={466} y={151} scale={0.9} />

      {/* Pequeñas flores blancas */}
      <g fill="#FFF9F0" stroke="#D9C6AD" strokeWidth="0.7">
        <circle cx="228" cy="75" r="4" />
        <circle cx="235" cy="83" r="3.5" />
        <circle cx="224" cy="87" r="3" />
        <circle cx="412" cy="75" r="4" />
        <circle cx="405" cy="83" r="3.5" />
        <circle cx="416" cy="87" r="3" />
        <circle cx="190" cy="139" r="3.5" />
        <circle cx="198" cy="145" r="3" />
        <circle cx="450" cy="139" r="3.5" />
        <circle cx="442" cy="145" r="3" />
      </g>

      {/* Base decorativa izquierda */}
      <g>
        <path
          d="M126 329 Q150 292 191 307 Q205 320 192 332Z"
          fill="#A8B297"
        />
        <path
          d="M132 329 Q148 301 167 302 Q160 320 132 329Z"
          fill="#78866A"
        />
        <path
          d="M148 331 Q174 310 205 319 Q180 335 148 331Z"
          fill="#C1C9B2"
        />
        <Flower x={149} y={302} scale={1.05} />
        <Flower x={174} y={313} scale={0.8} />
        <Flower x={134} y={319} scale={0.75} />
        <Flower x={193} y={319} scale={0.65} />
      </g>

      {/* Base decorativa derecha */}
      <g>
        <path
          d="M514 329 Q490 292 449 307 Q435 320 448 332Z"
          fill="#A8B297"
        />
        <path
          d="M508 329 Q492 301 473 302 Q480 320 508 329Z"
          fill="#78866A"
        />
        <path
          d="M492 331 Q466 310 435 319 Q460 335 492 331Z"
          fill="#C1C9B2"
        />
        <Flower x={491} y={302} scale={1.05} />
        <Flower x={466} y={313} scale={0.8} />
        <Flower x={506} y={319} scale={0.75} />
        <Flower x={447} y={319} scale={0.65} />
      </g>

      {/* Detalles dorados en los postes */}
      <circle cx="132" cy="164" r="4" fill="#D6B779" />
      <circle cx="508" cy="164" r="4" fill="#D6B779" />
    </svg>
  )
}

export default function WeddingDateHelen({event}: WeddingDateHelenProps) {
  const date = new Date(event.eventDate)

  if (!Number.isFinite(date.getTime())) return null

  const month = new Intl.DateTimeFormat("es-MX", {month: "long", timeZone: "UTC"}).format(date).toLocaleUpperCase("es-MX")

  const day = new Intl.DateTimeFormat("es-MX", {day: "2-digit",timeZone: "UTC"}).format(date)

  const year = new Intl.DateTimeFormat("es-MX", {year: "numeric", timeZone: "UTC"}).format(date)

  const time = new Intl.DateTimeFormat("es-MX", {hour: "numeric", minute: "2-digit", hour12: true,timeZone: "UTC"}).format(date).replace(/\s/g, "").toLocaleUpperCase("es-MX")

  const location = event.locations[0]

  const celebrationSchedule = event.schedules.find((schedule) => /recepci[oó]n|celebraci[oó]n|fiesta|banquete/i.test(schedule.title))

  const rawCelebrationTime =
    celebrationSchedule?.time ||
    new Intl.DateTimeFormat("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        timeZone: "UTC",
    }).format(date)

  function format12HourTime(value: string) {
    // Acepta valores como "17:00", "17:00:00" o "5:00 PM".
    const match = value.trim().match(
        /^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM|A\.M\.|P\.M\.)?$/i
    )

    if (!match) {
        return {
            hour: value,
            period: "",
        }
    }

    let hours = Number(match[1])
    const minutes = match[2]
    let period = match[3]?.replace(/\./g, "").toUpperCase()

    if (!period) {
        period = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
    } else {
        hours = hours % 12 || 12
    }

    return {
            hour: `${hours}:${minutes}`,
            period: period === "AM" ? "A.M." : "P.M.",
        }
  }

  const { hour: celebrationHour, period: celebrationPeriod } = format12HourTime(rawCelebrationTime)

  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-4 md:px-10 md:py-6"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-primary)",
      }}
    >
      {/* Luz decorativa de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.08,
        }}
      />

      <BotanicalBackground />

      {/* <div className="relative mx-auto max-w-4xl"> */}
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-5 flex items-center justify-center gap-3"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            <span className="h-px w-10 opacity-60" style={{ backgroundColor: "currentColor" }} />
            <span className="text-sm">✦</span>
            <span className="h-px w-10 opacity-60" style={{ backgroundColor: "currentColor" }} />
          </div>

          <p className="text-[12px] leading-6 tracking-[0.22em] sm:text-sm sm:leading-7 sm:tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>
            TENEMOS EL HONOR DE INVITARLOS A NUESTRO MATRIMONIO QUE SE LLEVARÁ A CABO EL DÍA
          </p>
        </div>

        
        {/* Fecha y horario de celebración */}
        <div className="mx-auto mt-8 flex max-w-md items-stretch justify-center sm:mt-10">

            {/* FECHA */}
            <div className="flex min-w-0 flex-col items-center justify-center gap-0 pr-5 text-center sm:pr-8">

                {/* MES */}
                <p className="font-serif text-sm leading-tight tracking-[0.1em] sm:text-lg md:text-xl" style={{ color: "var(--theme-primary)" }}>
                    {month}
                </p>

                {/* DÍA */}
                <p className="font-serif text-6xl leading-[0.9] sm:text-8xl md:text-9xl" style={{ color: "var(--theme-primary)" }}>
                    {day}
                </p>

                {/* AÑO */}
                <p className="mt-1 font-serif text-2xl leading-tight tracking-[0.08em] sm:text-xl md:text-2xl" style={{ color: "var(--theme-primary)" }}>
                    {year}
                </p>
            </div>

            {/* SEPARADOR */}
            <div
                className="my-1 w-px shrink-0"
                style={{
                backgroundColor: "var(--theme-accent)",
                opacity: 0.8,
                }}
            />
            
            {/* HORA EN FORMATO DE 12 HORAS */}
            <div className="flex min-w-0 flex-col items-center justify-center pl-5 text-center sm:pl-8">

                {/* HORA */}
                <p
                    className="whitespace-nowrap font-serif text-3xl leading-none sm:text-4xl md:text-5xl"
                    style={{ color: "var(--theme-primary)" }}
                >
                    {celebrationHour}
                </p>

                {/* A.M. / P.M. */}
                {celebrationPeriod && (
                    <p
                    className="mt-3 font-serif text-lg tracking-[0.12em] sm:mt-4 sm:text-xl md:text-2xl"
                    style={{ color: "var(--theme-secondary)" }}
                    >
                    {celebrationPeriod}
                    </p>
                )}
            </div>

        </div>

        {/* Separador decorativo */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <span
            className="h-px w-10 sm:w-16"
            style={{ backgroundColor: "var(--theme-accent)", opacity: 0.55 }}
          />
          <span style={{ color: "var(--theme-accent)" }}>❦</span>
          <span
            className="h-px w-10 sm:w-16"
            style={{ backgroundColor: "var(--theme-accent)", opacity: 0.55 }}
          />
        </div>

        {/* Arco nupcial en SVG */}
        <div className="mx-auto mt-5 max-w-2xl sm:mt-8">
          <WeddingArch />
        </div>

        {/* Ubicación */}
        {location && (
          <div className="mx-auto mt-2 max-w-2xl text-center sm:mt-4">
            <p
              className="text-[9px] uppercase tracking-[0.3em] sm:text-xs sm:tracking-[0.4em]"
              style={{ color: "var(--theme-secondary)" }}
            >
              Lugar de celebración
            </p>

            <h2
              className="mt-3 font-serif text-2xl sm:mt-4 sm:text-3xl md:text-4xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {location.name}
            </h2>

            {location.address ? (
              <p
                className="mx-auto mt-3 max-w-lg text-xs leading-6 sm:text-sm sm:leading-7"
                style={{ color: "var(--theme-secondary)" }}
              >
                {location.address}
              </p>
            ) : (
              <p
                className="mt-3 text-xs italic sm:text-sm"
                style={{ color: "var(--theme-secondary)" }}
              >
                Dirección no disponible
              </p>
            )}

            {location.mapsUrl && (
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md sm:mt-7 sm:px-8 sm:py-3.5 sm:text-sm"
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
