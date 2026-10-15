"use client"

import { useEffect, useState, type ReactNode } from "react"

type Props = {
  brideName: string
  groomName: string
  eventDate: Date
  children: ReactNode
}

export default function WeddingEnvelopeOpening({brideName, groomName, eventDate, children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const initials = `${brideName.trim().charAt(0)}${groomName.trim().charAt(0)}`.toUpperCase()
  const formattedDate = eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric", timeZone: "UTC"})

  useEffect(() => {
    document.body.style.overflow = isOpen ? "" : "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  function handleOpen() {
    if (isOpening || isOpen) return

    setIsOpening(true)

    window.setTimeout(() => {
      setIsOpen(true)
      setIsOpening(false)
    }, 1400)
  }

  if (isOpen) return <>{children}</>

  return (
    <>
      <style jsx>{`
        @keyframes bounce-seal {
          0%, 100% { transform: scale(1); }
          20% { transform: scale(1.1); }
          40% { transform: scale(0.95); }
          60% { transform: scale(1.05); }
          80% { transform: scale(0.98); }
        }
      `}</style>

      <div className="wedding-opening-landscape fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden px-5 transition-opacity duration-700"
        style={{background: "radial-gradient(ellipse at center, var(--theme-surface) 0%, var(--theme-background) 78%)",
        color: "var(--theme-text)", opacity: isOpening ? 0 : 1,}}
      >
        {/* Resplandor ambiental */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl sm:h-[500px] sm:w-[500px]" style={{ backgroundColor: "var(--theme-accent)" }} />
        {/* SOBRE A PANTALLA COMPLETA */}
        <div className={`relative h-full w-full overflow-hidden transition-all duration-700 ${
            isOpening ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
            style={{backgroundColor: "var(--theme-surface)", boxShadow: "0 0 50px rgba(0,0,0,0.18)", perspective: "1000px"}}
        >
            {/* Tarjeta interior */}
            <div className="absolute inset-x-[8%] bottom-[7%] top-[5%] flex items-start justify-center border px-3 pt-3 transition-transform duration-700 sm:px-6 sm:pt-5"
            style={{backgroundColor: "var(--theme-background)",
                borderColor: "var(--theme-accent)", transform: isOpening ? "translateY(-22%) scale(1.03)" : "translateY(0)",
            }}
            >
                <div className="text-center">
                    <p className="text-[7px] uppercase tracking-[0.25em] sm:text-[9px] sm:tracking-[0.35em]" style={{ color: "var(--theme-secondary)" }}>
                    Reserva la fecha
                    </p>
                    <p className="mt-2 font-serif text-xl tracking-[0.18em] sm:mt-3 sm:text-3xl" style={{ color: "var(--theme-primary)" }}>
                    {initials}
                    </p>
                    <div className="mx-auto mt-2 h-px w-8 sm:mt-3 sm:w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
                    <p className="mt-2 text-[8px] capitalize tracking-wider sm:mt-3 sm:text-[10px] sm:tracking-widest" style={{ color: "var(--theme-secondary)" }}>
                    {formattedDate}
                    </p>
                </div>
            </div>

            {/* Pliegue inferior */}
            <div className="pointer-events-none absolute inset-0" style={{backgroundColor: "var(--theme-primary)", clipPath: "polygon(0 100%, 0 0, 50% 58%, 100% 0, 100% 100%)",opacity: 0.13,}}/>
            
            {/* Pliegue izquierdo */}
            <div className="pointer-events-none absolute inset-0" style={{backgroundColor: "var(--theme-secondary)", clipPath: "polygon(0 0, 53% 57%, 0 100%)", opacity: 0.18}}/>
            
            {/* Pliegue derecho */}
            <div className="pointer-events-none absolute inset-0" style={{backgroundColor: "var(--theme-primary)", clipPath: "polygon(100% 0, 100% 100%, 47% 57%)", opacity: 0.12}}/>
            
            {/* Solapa superior */}
            <div className="absolute inset-0 origin-top transition-transform duration-700" style={{backgroundColor: "var(--theme-surface)", clipPath: "polygon(0 0, 100% 0, 50% 62%)", transform: isOpening ? "rotateX(180deg)" : "rotateX(0deg)",backfaceVisibility: "hidden", filter: "brightness(0.96)"}}/>
            
            {/* Borde del sobre */}
            <div className="pointer-events-none absolute inset-0 border" style={{borderColor: "var(--theme-accent)", opacity: 0.55}}/>
            
            {/* Sello circular: único elemento interactivo */}
            <button type="button" onClick={handleOpen} disabled={isOpening} aria-label={`Abrir invitación con iniciales ${initials}`}
            className={`absolute left-1/2 top-[56%] z-20 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-xl transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 sm:h-[100px] sm:w-[100px] ${isOpening ? "scale-150 rotate-12 opacity-0" : "scale-100 opacity-100"}`}
            style={{
                background: "radial-gradient(circle at 30% 25%, var(--theme-surface), var(--theme-background))",
                borderColor: "var(--theme-accent)",
                boxShadow: "0 5px 24px rgba(0,0,0,0.18), inset 0 0 0 4px var(--theme-background)",
            }}
            >
            <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full border font-serif text-xl tracking-[0.15em] sm:h-[84px] sm:w-[84px] sm:text-2xl"
                style={{color: "var(--theme-primary)", borderColor: "var(--theme-accent)", animation: "bounce-seal 2.5s ease-in-out infinite"}}
            >
                {initials}
            </span>
            </button>
        </div>
      </div>
    </>
  )
}