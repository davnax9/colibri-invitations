"use client"

import { useEffect, useState } from "react"

interface PromotionBannerProps {
  endDate: string
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeRemaining(endDate: string): TimeRemaining {
  const difference = new Date(endDate).getTime() - new Date().getTime()

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

export default function PromotionBanner({ endDate }: PromotionBannerProps) {
  // Valor inicial fijo para que servidor y cliente rendericen exactamente lo mismo
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Calculamos inmediatamente después de montar
    setTime(calculateTimeRemaining(endDate))

    const interval = setInterval(() => {
      setTime(calculateTimeRemaining(endDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  const formatNumber = (value: number) =>
    value.toString().padStart(2, "0")

  const promotionActive =
    time.days > 0 ||
    time.hours > 0 ||
    time.minutes > 0 ||
    time.seconds > 0

  if (!promotionActive) {
    return null
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#C9A86A]/40 bg-[#FAF8F3] shadow-sm">

      {/* Encabezado */}
      <div className="bg-[#2F5D50] px-5 py-3 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3E7CF]">
          ✨ Oferta de lanzamiento
        </p>
      </div>

      <div className="px-5 py-6 text-center sm:px-8 sm:py-7">

        <h3 className="text-2xl font-bold tracking-tight text-[#263832] sm:text-3xl">
          20% de descuento
        </h3>

        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#687A72]">
          Celebra con nosotros nuestro lanzamiento y disfruta de un
          precio especial en tu invitación digital.
        </p>

        {/* Contador */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#8A9A8F]">
            La promoción termina en
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-3">

            {/* DÍAS */}
            <div className="min-w-15 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-[#E5E9E5] sm:min-w-17">
              <p className="text-xl font-bold text-[#2F5D50] sm:text-2xl">
                {formatNumber(time.days)}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8A9A8F]">
                Días
              </p>
            </div>

            <span className="font-bold text-[#C9A86A]">:</span>

            {/* HORAS */}
            <div className="min-w-15 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-[#E5E9E5] sm:min-w-17">
              <p className="text-xl font-bold text-[#2F5D50] sm:text-2xl">
                {formatNumber(time.hours)}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8A9A8F]">
                Horas
              </p>
            </div>

            <span className="font-bold text-[#C9A86A]">:</span>

            {/* MINUTOS */}
            <div className="min-w-15 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-[#E5E9E5]">
              <p className="text-xl font-bold text-[#2F5D50] sm:text-2xl">
                {formatNumber(time.minutes)}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8A9A8F]">
                Min
              </p>
            </div>

            <span className="font-bold text-[#C9A86A]">:</span>

            {/* SEGUNDOS */}
            <div className="min-w-15 rounded-xl bg-white px-3 py-2.5 shadow-sm ring-1 ring-[#E5E9E5] sm:min-w-17">
              <p className="text-xl font-bold text-[#2F5D50] sm:text-2xl">
                {formatNumber(time.seconds)}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8A9A8F]">
                Seg
              </p>
            </div>

          </div>
        </div>

        <p className="mt-5 text-xs text-[#8A9A8F]">
          Aplican términos y condiciones.
        </p>

      </div>
    </div>
  )
}