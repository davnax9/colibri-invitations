
"use client"

import { useEffect, useState } from "react"
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

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
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  }
}

export default function CountdownHelen({ targetDate }: Props) {
  // Estado inicial fijo: mismo HTML en servidor y navegador.
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(initialTimeLeft)

  // El cálculo con Date.now() ocurre solo en el navegador,
  // después del montaje, evitando el hydration mismatch.
  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }

    // Actualizar inmediatamente al montar.
    updateCountdown()

    // Mantener el contador actualizado cada segundo.
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
    <section
      className="
        relative
        overflow-hidden
        px-5
        py-8
        sm:px-10
        sm:py-10
        md:py-12
      "
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <BotanicalBackground />
      {/* BRILLO CENTRAL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* ORNAMENTO */}
        <div
          className="mb-6 flex items-center justify-center gap-4"
          style={{
            color: "#B89455",
          }}
        >
          <span
            className="h-px w-12 sm:w-16"
            style={{
              backgroundColor: "#B89455",
              opacity: 0.4,
            }}
          />

          <span className="text-lg">✦</span>

          <span
            className="h-px w-12 sm:w-16"
            style={{
              backgroundColor: "#B89455",
              opacity: 0.4,
            }}
          />
        </div>

        {/* HEADER */}
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.45em]
          "
          style={{
            color: "#8C6A36",
          }}
        >
          Cuenta regresiva
        </p>

        <h2
          className="
            mt-4
            font-serif
            text-3xl
            sm:text-4xl
            md:text-5xl
          "
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Cada vez falta menos
        </h2>

        {/* <p
          className="
            mx-auto
            mt-4
            max-w-md
            font-serif
            text-base
            italic
            leading-7
          "
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          La espera también forma parte
          de este momento tan especial.
        </p> */}

        {/* CONTADOR */}
        <div
        className="
            mx-auto
            mt-10
            grid
            grid-cols-2
            gap-x-4
            gap-y-7
            sm:grid-cols-4
            sm:gap-3
            md:mt-12
            max-w-3xl
        "
        >
        {units.map((unit) => (
            <div
            key={unit.label}
            className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                px-1
                py-2
                sm:px-2
                sm:py-4
            "
            >
            {/* NÚMERO */}
            <p
                className="
                font-serif
                text-4xl
                leading-none
                sm:text-4xl
                md:text-5xl
                "
                style={{
                color: "var(--theme-primary)",
                }}
            >
                {String(unit.value).padStart(2, "0")}
            </p>

            {/* ETIQUETA */}
            <p
                className="
                mt-3
                text-[9px]
                uppercase
                tracking-[0.22em]
                sm:text-[10px]
                sm:tracking-[0.25em]
                "
                style={{
                color: "#8C6A36",
                }}
            >
                {unit.label}
            </p>

            {/* DETALLE DECORATIVO */}
            <div
                className="mt-3 h-px w-6"
                style={{
                backgroundColor: "#B89455",
                opacity: 0.55,
                }}
            />
            </div>
        ))}
        </div>

        <h2 className="font-wedding text-lg tracking-[0.45em] mt-4" style={{color: "#8C6A36"}}>Para nuestro gran dia</h2>

        {/* FINAL */}
        <div
          className="mt-12 flex items-center justify-center gap-4"
          style={{
            color: "#B89455",
          }}
        >
          <span
            className="h-px w-12"
            style={{
              backgroundColor: "#B89455",
              opacity: 0.35,
            }}
          />

          <span className="text-sm">❦</span>

          <span
            className="h-px w-12"
            style={{
              backgroundColor: "#B89455",
              opacity: 0.35,
            }}
          />
        </div>
      </div>
    </section>
  )
}