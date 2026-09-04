"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  brideName: string
  groomName: string
  eventDate: Date
  children: React.ReactNode
}

export default function WeddingLuxuryOpening({brideName, groomName, eventDate, children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const brideInitial = brideName.trim().charAt(0)
    const groomInitial = groomName.trim().charAt(0)

    if (!brideInitial && !groomInitial) return "♡"

    return `${brideInitial}${groomInitial}`.toUpperCase()
  }, [brideName, groomName])

  const formattedDate = useMemo(() => {
    return eventDate.toLocaleDateString("es-MX", {day: "2-digit", month: "2-digit", year: "numeric"})
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
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at 50% 45%, var(--theme-accent), transparent 55%)",opacity: 0.07}}/>
      <div className="pointer-events-none absolute inset-0" style={{background:"linear-gradient(135deg, transparent 20%, var(--theme-accent) 50%, transparent 80%)",opacity: 0.025}}/>
      {/* DETALLES DECORATIVOS */}
      <div className={`pointer-events-none absolute left-8 top-8 h-20 w-20 border-l border-t transition-all duration-1000 md:left-12 md:top-12 md:h-28 md:w-28 ${isOpening ? "-translate-x-8 -translate-y-8 opacity-0" : "opacity-40"}`} style={{borderColor: "var(--theme-accent)"}}/>
      <div className={`pointer-events-none absolute bottom-8 right-8 h-20 w-20 border-b border-r transition-all duration-1000 md:bottom-12 md:right-12 md:h-28 md:w-28 ${isOpening ? "translate-x-8 translate-y-8 opacity-0" : "opacity-40"}`} style={{borderColor: "var(--theme-accent)"}}/>
      {/* CONTENEDOR */}
      <div className={`relative z-10 w-full max-w-xl px-6 transition-all duration-1000 ${isOpening? "scale-105 opacity-0" : "scale-100 opacity-100"}`}>
        {/* CAJA */}
        <div className="relative mx-auto aspect-[1.05/1] max-w-125" style={{perspective: "1200px"}}>
          {/* BASE DE LA CAJA */}
          <div className="absolute inset-x-0 bottom-0 h-[82%] overflow-hidden rounded-sm border" style={{backgroundColor: "var(--theme-surface)",borderColor: "var(--theme-accent)",boxShadow:"0 30px 80px rgba(0,0,0,0.25)"}}>
            {/* TEXTURA INTERNA */}
            <div className="pointer-events-none absolute inset-0" style={{background:"linear-gradient(135deg, transparent 20%, var(--theme-accent) 50%, transparent 80%)",opacity: 0.025,}}/>
            {/* MARCO */}
            <div className="absolute inset-4 border md:inset-6" style={{borderColor: "var(--theme-accent)",opacity: 0.35}}/>
            {/* TARJETA CENTRAL */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[62%] w-[72%] flex-col items-center justify-center border text-center" style={{backgroundColor: "var(--theme-background)",borderColor: "var(--theme-accent)",}}>
                <p className="text-[9px] uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)"}}>Nuestra boda</p>
                <div className="mt-5 text-3xl" style={{color: "var(--theme-accent)"}}>♢</div>
                <p className="mt-4 font-serif text-2xl italic" style={{color: "var(--theme-primary)"}}>{brideName}</p>
                <div className="my-2 flex items-center gap-3">
                  <div className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
                  <span className="font-serif text-xl" style={{color: "var(--theme-accent)"}}>&</span>
                  <div className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
                </div>
                <p className="font-serif text-2xl italic" style={{color: "var(--theme-primary)"}}>{groomName}</p>
                <p className="mt-5 text-[8px] uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>{formattedDate}</p>
              </div>
            </div>
            {/* SELLO */}
            <div className="absolute -bottom-4.5 left-1/2 z-30 -translate-x-1/2">
              <div className="absolute -inset-2.25 rounded-full border" style={{borderColor: "var(--theme-accent)", opacity: 0.35}}/>
              <button type="button" onClick={handleOpen} disabled={isOpening} aria-label="Abrir invitación" className={`wedding-luxury-seal relative flex h-19 w-19 items-center justify-center rounded-full border-2 transition-all duration-500 md:h-21 md:w-21 ${isOpening ? "scale-75 opacity-0" : "hover:scale-110 active:scale-95"}`} style={{backgroundColor: "var(--theme-primary)",borderColor: "var(--theme-accent)",color: "var(--theme-background)"}}>
                <div className="text-center">
                  <span className="block font-serif text-xl">{initials}</span>
                  <span className="mt-1 block text-[7px] uppercase tracking-[0.2em] opacity-70">abrir</span>
                </div>
              </button>
            </div>
          </div>
          {/* TAPA DE LA CAJA */}
          <div className={`absolute inset-x-0 top-0 z-20 h-[38%] origin-bottom border transition-transform duration-1000 ${isOpening ? "[transform-[rotateX(-105deg)]" : "[transform-[rotateX(0deg)]"}`}
            style={{backgroundColor: "var(--theme-surface)",borderColor: "var(--theme-accent)",transformStyle: "preserve-3d",boxShadow:"0 8px 25px rgba(0,0,0,0.15)"}}
          >
            {/* DETALLE DE LA TAPA */}
            <div className="absolute inset-3 border md:inset-4" style={{borderColor: "var(--theme-accent)", opacity: 0.4}}/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-3xl" style={{color: "var(--theme-accent)"}}>
                  {initials}
                </div>
                <p className="mt-2 text-[8px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>{brideName} & {groomName}</p>
              </div>
            </div>
          </div>
          {/* PARTE SUPERIOR DECORATIVA */}
          <div className={`absolute -top-8 left-1/2 z-30 -translate-x-1/2 text-xl transition-all duration-700 ${isOpening ? "-translate-y-5 opacity-0" : "opacity-70"}`} style={{color: "var(--theme-accent)"}}>
            ✦
          </div>
        </div>
        {/* TEXTO */}
        <div className={`mt-12 text-center transition-all duration-700 ${isOpening ? "translate-y-4 opacity-0" : "opacity-100"}`}>
          <p className="text-[9px] uppercase tracking-[0.45em]" style={{color: "var(--theme-secondary)"}}>Una celebración para recordar</p>
          <p className="mt-3 font-serif text-xl italic" style={{color: "var(--theme-primary)"}}>Con amor, los esperamos</p>
        </div>
      </div>
      {/* TRANSICIÓN FINAL */}
      <div className={`pointer-events-none absolute inset-0 z-40 transition-all duration-1000 ${isOpening ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`} style={{backgroundColor: "var(--theme-background)"}}/>
    </div>
  )
}