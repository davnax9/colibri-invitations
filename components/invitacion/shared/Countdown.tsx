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

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function Countdown({targetDate}: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

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
    <section className="px-6 py-20" style={{ backgroundColor: "var(--theme-background)" }}>
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>Cuenta regresiva</p>
        <h2 className="mt-4 text-3xl font-serif md:text-4xl" style={{ color: "var(--theme-primary)" }}>Cada vez falta menos</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {units.map((unit) => (
            <div key={unit.label} className="rounded-2xl border px-4 py-6 shadow-sm" style={{backgroundColor: "var(--theme-surface)",borderColor: "var(--theme-accent)"}}>
              <p className="text-4xl font-serif md:text-5xl" style={{ color: "var(--theme-primary)" }}>{String(unit.value).padStart(2, "0")}</p>
              <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: "var(--theme-secondary)" }}>{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}