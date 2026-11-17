
"use client"

import { useEffect, useState } from "react"

type Props = {
  targetDate: string
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const initialTimeLeft: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const target = new Date(targetDate).getTime()

  if (!Number.isFinite(target)) {
    return initialTimeLeft
  }

  const difference = target - Date.now()

  if (difference <= 0) {
    return initialTimeLeft
  }

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function KuromiBow({
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

function KuromiSkull({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 5C13 5 7 13 7 23C7 31 12 36 18 38V43H30V38C36 36 41 31 41 23C41 13 35 5 24 5Z"
        fill="#F4B6E8"
        stroke="#D987D7"
        strokeWidth="1.5"
      />
      <path
        d="M13 22C13 18 16 16 19 18C22 20 21 26 17 27C14 27 13 25 13 22Z"
        fill="#301A3D"
      />
      <path
        d="M35 22C35 18 32 16 29 18C26 20 27 26 31 27C34 27 35 25 35 22Z"
        fill="#301A3D"
      />
      <path
        d="M21 31L24 28L27 31L24 35L21 31Z"
        fill="#301A3D"
      />
      <path
        d="M18 39V43M30 39V43"
        stroke="#301A3D"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function KuromiCountdown({
  targetDate,
}: Props) {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(initialTimeLeft)

  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(targetDate).getTime()

      if (!Number.isFinite(target)) {
        setTimeLeft(initialTimeLeft)
        setFinished(false)
        return
      }

      const difference = target - Date.now()

      setFinished(difference <= 0)
      setTimeLeft(calculateTimeLeft(targetDate))
    }

    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const units = [
    {
      value: timeLeft.days,
      label: "Días",
    },
    {
      value: timeLeft.hours,
      label: "Horas",
    },
    {
      value: timeLeft.minutes,
      label: "Minutos",
    },
    {
      value: timeLeft.seconds,
      label: "Segundos",
    },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-[#1b1426] px-4 py-20 text-center sm:px-8 sm:py-24">

      {/* ================================================= */}
      {/* FONDO GÓTICO */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(116,48,151,0.35),transparent_65%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(216,137,226,0.13),transparent_25%),radial-gradient(circle_at_90%_75%,rgba(126,78,180,0.18),transparent_30%)]" />

      {/* TEXTURA DE ESTRELLAS */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#e9b5f7 1px, transparent 1px), radial-gradient(#b77ad5 1px, transparent 1px)",
          backgroundSize: "43px 43px, 71px 71px",
          backgroundPosition: "0 0, 20px 30px",
        }}
      />

      {/* BRILLO CENTRAL */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      {/* ================================================= */}
      {/* DECORACIONES SUPERIORES */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-purple-400/[0.06] via-purple-500/[0.04] to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-5 z-[1] -translate-x-1/2">
        <KuromiBow className="h-20 w-20 opacity-40" />
      </div>

      <span className="absolute left-[8%] top-[12%] animate-pulse text-2xl text-pink-300/80">
        ✦
      </span>

      <span className="absolute right-[9%] top-[17%] text-xl text-purple-300/80">
        ✧
      </span>

      <span className="absolute left-[15%] top-[48%] text-xl text-pink-300/50">
        ♡
      </span>

      <span className="absolute right-[13%] top-[55%] animate-pulse text-2xl text-purple-300/70">
        ✦
      </span>

      <span className="absolute bottom-[14%] left-[8%] text-3xl text-fuchsia-300/40">
        ♡
      </span>

      <span className="absolute bottom-[18%] right-[8%] text-3xl text-purple-300/50">
        ✧
      </span>

      {/* ================================================= */}
      {/* PERSONAJES DECORATIVOS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-[-20px] opacity-30 sm:left-5 sm:opacity-50">
        <div className="relative">
          <div className="h-36 w-36 rounded-t-full bg-gradient-to-t from-purple-700/50 to-transparent blur-xl" />
          <KuromiSkull className="absolute bottom-8 left-8 h-12 w-12 rotate-[-12deg]" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-[-20px] opacity-30 sm:right-5 sm:opacity-50">
        <div className="relative">
          <div className="h-36 w-36 rounded-t-full bg-gradient-to-t from-fuchsia-700/40 to-transparent blur-xl" />
            <KuromiBow className="absolute bottom-10 right-8 h-12 w-12 rotate-12" />
        </div>
      </div>

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* EMBLEMA */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-pink-300/40 bg-purple-900/60 shadow-[0_0_30px_rgba(216,137,226,0.25)]">
          <KuromiSkull className="h-9 w-9" />
        </div>

        {/* ENCABEZADO */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/70 sm:w-20" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-pink-200 sm:text-xs">
            Cuenta regresiva
          </p>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/70 sm:w-20" />
        </div>

        <h2 className="font-serif text-4xl font-bold italic text-pink-200 drop-shadow-[0_0_20px_rgba(232,145,225,0.45)] sm:text-5xl md:text-6xl">
          Cada vez falta menos
        </h2>

        <p className="mx-auto mt-5 max-w-lg font-serif text-base italic leading-8 text-purple-100/80 sm:text-lg">
          La espera también forma parte
          <br className="hidden sm:block" />
          {" "}de este momento tan especial.
        </p>

        {/* SEPARADOR */}
        <div className="my-9 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-fuchsia-300/70 sm:w-24" />
          <span className="text-2xl text-pink-300">♡</span>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-fuchsia-300/70 sm:w-24" />
        </div>

        {/* CONTADORES */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">

          {units.map((unit) => (
            <div
              key={unit.label}
              className="group relative"
            >
              {/* RESPLANDOR */}
              <div className="absolute -inset-1 rounded-2xl bg-fuchsia-500/10 opacity-60 blur-xl transition duration-500 group-hover:bg-fuchsia-400/25" />

              {/* TARJETA */}
              <div className="relative flex min-h-[125px] flex-col items-center justify-center overflow-hidden rounded-xl border border-fuchsia-300/50 bg-gradient-to-br from-[#291936]/95 via-[#1b1028]/95 to-[#100b1b]/95 px-2 py-5 shadow-[inset_0_0_20px_rgba(192,132,252,0.08),0_10px_30px_rgba(0,0,0,0.25)] transition duration-300 group-hover:-translate-y-1 group-hover:border-pink-200/80 sm:min-h-[155px] sm:rounded-2xl">

                {/* BORDE INTERIOR */}
                <div className="pointer-events-none absolute inset-[6px] rounded-lg border border-purple-300/15" />

                {/* MOÑO */}
                <div className="pointer-events-none absolute left-1/2 top-1 z-10 -translate-x-1/2">
                    <KuromiBow className="h-8 w-10" />
                </div>

                {/* NÚMERO */}
                <p className="relative z-10 mt-7 font-serif text-5xl font-bold leading-none tabular-nums text-pink-200 drop-shadow-[0_0_14px_rgba(232,145,225,0.55)] sm:text-6xl">
                  {String(unit.value).padStart(2, "0")}
                </p>

                {/* ETIQUETA */}
                <p className="relative mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-purple-200 sm:text-[11px] sm:tracking-[0.3em]">
                  {unit.label}
                </p>

                {/* DESTELLO */}
                <span className="absolute bottom-3 right-4 text-xs text-fuchsia-200/60">
                  ✧
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-pink-300/60 sm:w-24" />

          <KuromiBow className="h-10 w-12" />

          <span className="h-px w-14 bg-gradient-to-l from-transparent to-pink-300/60 sm:w-24" />
        </div>

        {/* MENSAJE FINAL */}
        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.35em] text-purple-200/60">
          {finished
            ? "¡Ha llegado el momento de celebrar!"
            : "Una celebración llena de magia"}
        </p>

      </div>
    </section>
  )
}
