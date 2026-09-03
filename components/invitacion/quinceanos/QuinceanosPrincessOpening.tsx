"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  eventDate: Date
  children: React.ReactNode
}

export default function QuinceanosPrincessOpening({quinceaneraName,eventDate,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const words = quinceaneraName.trim().split(/\s+/).filter(Boolean)

    if (words.length === 0) return "XV"

    if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
  }, [quinceaneraName])

  const formattedDate = useMemo(() => {
    return eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})
  }, [eventDate])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  function handleOpen() {
    if (isOpening || isOpen) return

    setIsOpening(true)

    setTimeout(() => {
      setIsOpen(true)
      setIsOpening(false)
    }, 1500)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at 50% 40%, var(--theme-secondary), transparent 60%)",opacity: 0.08}}/>
      {/* DESTELLOS */}
      <div className={`pointer-events-none absolute left-[12%] top-[18%] text-xl transition-all duration-1000 ${isOpening ? "-translate-y-8 opacity-0" : "princess-sparkle opacity-60"}`}
        style={{color: "var(--theme-accent)"}}
      >
        ✦
      </div>
      <div className={`pointer-events-none absolute right-[14%] top-[25%] text-sm transition-all duration-1000 ${isOpening ? "translate-y-8 opacity-0" : "princess-sparkle-delay opacity-50"}`}
        style={{color: "var(--theme-accent)"}}
      >
        ✧
      </div>
      <div className={`pointer-events-none absolute bottom-[22%] left-[18%] text-sm transition-all duration-1000 ${isOpening ? "-translate-x-6 opacity-0" : "princess-sparkle opacity-40"}`}
        style={{color: "var(--theme-accent)"}}
      >
        ✧
      </div>
      <div className={`pointer-events-none absolute bottom-[18%] right-[20%] text-xl transition-all duration-1000 ${isOpening ? "translate-x-6 opacity-0" : "princess-sparkle-delay opacity-60"}`}
        style={{color: "var(--theme-accent)"}}
      >
        ✦
      </div>
      {/* CONTENEDOR */}
      <div className={`relative z-10 w-full max-w-xl px-6 transition-all duration-1000 ${isOpening ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}>
        {/* LIBRO */}
        <div className="relative mx-auto aspect-3/4 max-w-107.5 overflow-hidden rounded-sm border shadow-2xl" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-accent)", boxShadow:"0 25px 70px rgba(0,0,0,0.12)"}}>
          {/* BORDE INTERIOR */}
          <div className="pointer-events-none absolute inset-4 border md:inset-6" style={{borderColor: "var(--theme-accent)", opacity: 0.45}}/>
          {/* DECORACIÓN SUPERIOR */}
          <div className="absolute left-1/2 top-8 -translate-x-1/2 text-center md:top-10">
            <div className="text-2xl" style={{color: "var(--theme-accent)"}}>
              ✦
            </div>
            <p className="mt-2 text-[9px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Una historia comienza</p>
          </div>
          {/* CONTENIDO CENTRAL */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Había una vez...</p>
            {/* CORONA */}
            <div className="mt-8 text-4xl md:text-5xl" style={{color: "var(--theme-accent)"}} aria-hidden="true">
              ♕
            </div>
            <p className="mt-5 text-[10px] uppercase tracking-[0.45em]" style={{color: "var(--theme-secondary)"}}>Mis XV años</p>
            <h1 className="mt-5 max-w-full wrap-break-words font-serif text-5xl font-light leading-[0.95] md:text-6xl" style={{color: "var(--theme-primary)"}}>{quinceaneraName}</h1>
            <div className="my-7 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
            <p className="max-w-xs text-xs leading-6" style={{color: "var(--theme-secondary)"}}>Una noche mágica,<br />una celebración inolvidable.</p>
            {/* BOTÓN */}
            <div className="relative mt-9">
              <div className="absolute -inset-2.25 rounded-full border" style={{borderColor: "var(--theme-accent)", opacity: 0.3}}/>
              <button type="button" onClick={handleOpen} disabled={isOpening} aria-label="Abrir invitación" className={`princess-opening-button relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  isOpening ? "scale-75 opacity-0" : "hover:scale-110 active:scale-95"}`} style={{backgroundColor: "var(--theme-primary)", borderColor: "var(--theme-accent)",color: "var(--theme-background)"}}
              >
                <div className="text-center">
                  <span className="block text-lg">✦</span>
                  <span className="mt-0.5 block text-[7px] uppercase tracking-[0.2em]">abrir</span>
                </div>
              </button>
            </div>
          </div>
          {/* FECHA */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center md:bottom-10">
            <p className="text-[9px] uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>{formattedDate}</p>
          </div>
          {/* DECORACIONES LATERALES */}
          <div className="absolute left-7 top-1/2 hidden -translate-y-1/2 text-xs md:block" style={{color: "var(--theme-accent)"}}>
            ✦
          </div>
          <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 text-xs md:block" style={{color: "var(--theme-accent)"}}>
            ✦
          </div>
        </div>
        {/* INDICACIÓN */}
        <div className={`mt-7 text-center transition-all duration-700 ${isOpening ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}>
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Toca para comenzar la historia</p>
        </div>
      </div>
      {/* CORTINA DE TRANSICIÓN */}
      <div className={`pointer-events-none absolute inset-0 z-20 transition-all duration-1000 ${isOpening ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}style={{backgroundColor: "var(--theme-background)"}}/>
    </div>
  )
}