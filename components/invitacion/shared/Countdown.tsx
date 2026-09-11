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

function calculateTimeLeft(
  targetDate: string
): TimeLeft {

  const difference =
    new Date(targetDate).getTime() -
    Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(
      difference /
        (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference /
        (1000 * 60 * 60)) %
        24
    ),

    minutes: Math.floor(
      (difference /
        (1000 * 60)) %
        60
    ),

    seconds: Math.floor(
      (difference / 1000) %
        60
    ),
  }
}

export default function Countdown({
  targetDate,
}: Props) {

  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(() =>
      calculateTimeLeft(targetDate)
    )

  useEffect(() => {

    const interval = setInterval(() => {

      setTimeLeft(
        calculateTimeLeft(targetDate)
      )

    }, 1000)

    return () =>
      clearInterval(interval)

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
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:py-28"
      style={{
        backgroundColor:
          "var(--theme-background)",
      }}
    >

      {/* =====================================================
          BRILLO CENTRAL
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />


      <div className="relative mx-auto max-w-4xl text-center">

        {/* =================================================
            ORNAMENTO
        ================================================= */}

        <div
          className="mb-7 flex items-center justify-center gap-4"
          style={{
            color: "#B89455",
          }}
        >

          <span
            className="h-px w-12 sm:w-16"
            style={{
              backgroundColor:
                "#B89455",
              opacity: 0.4,
            }}
          />

          <span className="text-lg">
            ✦
          </span>

          <span
            className="h-px w-12 sm:w-16"
            style={{
              backgroundColor:
                "#B89455",
              opacity: 0.4,
            }}
          />

        </div>


        {/* =================================================
            HEADER
        ================================================= */}

        <p
          className="text-[10px] uppercase tracking-[0.45em]"
          style={{
            color: "#8C6A36",
          }}
        >
          Cuenta regresiva
        </p>


        <h2
          className="mt-4 font-serif text-4xl sm:text-5xl"
          style={{
            color:
              "var(--theme-primary)",
          }}
        >
          Cada vez falta menos
        </h2>


        <p
          className="mx-auto mt-4 max-w-md font-serif text-base italic leading-7"
          style={{
            color:
              "var(--theme-secondary)",
          }}
        >
          La espera también forma parte
          de este momento tan especial.
        </p>


        {/* =================================================
            CONTADOR
        ================================================= */}

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-0">

          {units.map((unit, index) => (

            <div
              key={unit.label}
              className="relative px-3"
            >

              {/* SEPARADOR DESKTOP */}

              {index !== 0 && (
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 hidden h-12 -translate-y-1/2 w-px sm:block"
                  style={{
                    backgroundColor:
                      "rgba(184,148,85,0.25)",
                  }}
                />
              )}


              {/* NÚMERO */}

              <p
                className="font-serif text-5xl leading-none sm:text-6xl md:text-7xl"
                style={{
                  color:
                    "var(--theme-primary)",
                }}
              >
                {String(
                  unit.value
                ).padStart(2, "0")}
              </p>


              {/* ETIQUETA */}

              <p
                className="mt-3 text-[9px] uppercase tracking-[0.28em]"
                style={{
                  color: "#8C6A36",
                }}
              >
                {unit.label}
              </p>

            </div>

          ))}

        </div>


        {/* =================================================
            FINAL
        ================================================= */}

        <div
          className="mt-14 flex items-center justify-center gap-4"
          style={{
            color: "#B89455",
          }}
        >

          <span
            className="h-px w-14"
            style={{
              backgroundColor:
                "#B89455",
              opacity: 0.35,
            }}
          />

          <span className="text-sm">
            ❦
          </span>

          <span
            className="h-px w-14"
            style={{
              backgroundColor:
                "#B89455",
              opacity: 0.35,
            }}
          />

        </div>

      </div>

    </section>
  )
}