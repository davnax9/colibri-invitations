"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  brideName: string
  groomName: string
  eventDate: Date
  children: React.ReactNode
}

export default function WeddingElegantOpening({brideName,groomName,eventDate,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const brideInitial = brideName.trim().charAt(0)
    const groomInitial = groomName.trim().charAt(0)

    if (!brideInitial && !groomInitial) return "♡"

    return `${brideInitial}${groomInitial}`.toUpperCase()
  }, [brideName, groomName])

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
    }, 1400)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)",}}>
      {/* FONDO SUTIL */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at 50% 45%, var(--theme-secondary), transparent 60%)", opacity: 0.07,}}/>
      {/* DECORACIÓN SUPERIOR */}
      <div className={`absolute left-1/2 top-8 -translate-x-1/2 text-center transition-all duration-1000 ${isOpening ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}>
        <p className="text-[9px] uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)"}}>Una historia de amor</p>
        <div className="mx-auto mt-3 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
      </div>
      {/* CARTA */}
      <div className={`relative z-10 w-full max-w-xl px-6 transition-all duration-1000 ${isOpening ? "scale-[1.03] opacity-0" : "scale-100 opacity-100"}`}>
        <div className="relative mx-auto aspect-3/4 max-w-107.5 overflow-hidden rounded-sm border shadow-2xl" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-accent)",boxShadow:"0 25px 70px rgba(0,0,0,0.12)"}}>
          {/* MARCO INTERIOR */}
          <div className="pointer-events-none absolute inset-4 border md:inset-6" style={{borderColor: "var(--theme-accent)", opacity: 0.4}}/>
          {/* ORNAMENTO SUPERIOR */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2 text-center">
            <div className="text-2xl" style={{color: "var(--theme-accent)"}}>
              ❦
            </div>
          </div>
          {/* CONTENIDO */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.45em]" style={{color: "var(--theme-secondary)"}}>Con mucho amor</p>
            <p className="mt-7 font-serif text-2xl italic" style={{color: "var(--theme-primary)"}}>Te invitamos a celebrar</p>
            {/* NOMBRES */}
            <div className="mt-7">
              <h1 className="font-serif text-5xl font-light leading-none md:text-6xl" style={{color: "var(--theme-primary)"}}>{brideName}</h1>
              <div className="my-4 flex items-center justify-center gap-3">
                <div className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
                <span className="font-serif text-2xl italic" style={{color: "var(--theme-accent)"}}>&</span>
                <div className="h-px w-8" style={{backgroundColor: "var(--theme-accent)",}}/>
              </div>
              <h1 className="font-serif text-5xl font-light leading-none md:text-6xl" style={{color: "var(--theme-primary)"}}>{groomName}</h1>
            </div>
            {/* FECHA */}
            <div className="mt-8">
              <p className="text-[9px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Nuestra boda</p>
              <p className="mt-2 text-xs" style={{color: "var(--theme-secondary)"}}>{formattedDate}</p>
            </div>
            {/* SELLO */}
            <div className="relative mt-9">
              <div className="absolute -inset-2.5 rounded-full border" style={{borderColor: "var(--theme-accent)", opacity: 0.3}}/>
              <button type="button" onClick={handleOpen} disabled={isOpening} aria-label="Abrir invitación" className={`wedding-elegant-seal relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 md:h-17.5 md:w-17.5 ${
                  isOpening ? "scale-75 opacity-0" : "hover:scale-110 active:scale-95"}`} style={{backgroundColor: "var(--theme-primary)",borderColor: "var(--theme-accent)",color: "var(--theme-background)"}}
              >
                <div className="text-center">
                  <span className="block font-serif text-lg">{initials}</span>
                  <span className="mt-1 block text-[7px] uppercase tracking-[0.2em] opacity-70">abrir</span>
                </div>
              </button>
            </div>
          </div>
          {/* ORNAMENTOS LATERALES */}
          <div className="absolute left-7 top-1/2 hidden -translate-y-1/2 text-sm md:block" style={{color: "var(--theme-accent)"}}>
            ❦
          </div>
          <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 -scale-x-100 text-sm md:block" style={{color: "var(--theme-accent)"}}>
            ❦
          </div>
          {/* PIE */}
          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[8px] uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)"}}>{initials}</p>
          </div>
        </div>
        {/* INDICACIÓN */}
        <div className={`mt-7 text-center transition-all duration-700 ${isOpening ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}>
          <p className="text-[9px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Toca el sello para abrir</p>
        </div>
      </div>
      {/* TRANSICIÓN */}
      <div className={`pointer-events-none absolute inset-0 z-20 transition-all duration-1000 ${isOpening ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}style={{backgroundColor: "var(--theme-background)"}}/>
    </div>
  )
}