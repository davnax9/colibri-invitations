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
          0%, 100% { transform: scale(1) rotate(-1deg); }
          20% { transform: scale(1.08) rotate(0deg); }
          40% { transform: scale(0.96) rotate(1deg); }
          60% { transform: scale(1.04) rotate(-0.5deg); }
          80% { transform: scale(0.98) rotate(0.5deg); }
        }
        @keyframes wax-shimmer {
          0% { background-position: -200% center; opacity: 0.3; }
          50% { background-position: 200% center; opacity: 0.5; }
          100% { background-position: -200% center; opacity: 0.3; }
        }
        @keyframes drip-pulse {
          0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 0.9; }
          50% { transform: translateX(-50%) scaleY(1.15); opacity: 0.7; }
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
            
            {/* Sello de cera realista: único elemento interactivo */}
            <button type="button" onClick={handleOpen} disabled={isOpening} aria-label={`Abrir invitación con iniciales ${initials}`}
            className={`absolute left-1/2 top-[56%] z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 ${isOpening ? "scale-150 rotate-12 opacity-0" : "scale-100 opacity-100"}`}
            style={{ transformOrigin: "center center" }}
            >
              <div className="relative" style={{ animation: "bounce-seal 3s ease-in-out infinite" }}>
                {/* Sombra proyectada del sello */}
                <div className="absolute inset-0 -bottom-2 -right-1" style={{
                  borderRadius: "52% 48% 54% 46% / 48% 52% 48% 52%",
                  background: "rgba(0,0,0,0.15)",
                  filter: "blur(8px)",
                  transform: "translate(2px, 4px)",
                  pointerEvents: "none",
                  zIndex: -1,
                }} />

                {/* Anillo metálico exterior (bezel) - dorado/bronce */}
                <div className="absolute inset-0" style={{
                  borderRadius: "50% 48% 52% 50% / 49% 51% 49% 51%",
                  border: "4px solid transparent",
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D4A0 25%, #B8963A 50%, #D4BA7A 75%, #C9A84C 100%) border-box",
                  mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0) border-box",
                  maskComposite: "exclude",
                  boxShadow: `
                    inset 0 2px 4px rgba(255,255,255,0.4),
                    inset 0 -2px 4px rgba(0,0,0,0.3),
                    0 6px 16px rgba(0,0,0,0.3),
                    0 0 0 1px rgba(201,168,76,0.5)
                  `,
                }} />

                {/* Cuerpo principal de cera - forma orgánica e irregular */}
                <div className="absolute inset-[4px]" style={{
                  borderRadius: "53% 47% 55% 45% / 48% 52% 48% 52%",
                  background: `
                    radial-gradient(ellipse at 35% 25%, #FFF8F0 0%, #F5E6D3 20%, #E8D4B8 45%, #D4B890 70%, #C4A080 100%),
                    radial-gradient(ellipse at 65% 75%, rgba(196,160,128,0.3) 0%, transparent 50%),
                    linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(0,0,0,0.08) 100%)
                  `,
                  backgroundSize: "100% 100%, 150% 150%, 100% 100%",
                  boxShadow: `
                    inset 0 4px 12px rgba(255,255,255,0.3),
                    inset 0 -4px 12px rgba(0,0,0,0.2),
                    inset 0 0 30px rgba(196,160,128,0.2),
                    0 2px 8px rgba(0,0,0,0.15)
                  `,
                  animation: "wax-shimmer 5s ease-in-out infinite",
                }} />

                {/* Capa de textura de cera - estrías y flujo */}
                <div className="absolute inset-[4px]" style={{
                  borderRadius: "53% 47% 55% 45% / 48% 52% 48% 52%",
                  background: `
                    repeating-radial-gradient(ellipse at 35% 25%, transparent 0px, rgba(255,255,255,0.03) 1px, transparent 2px),
                    repeating-linear-gradient(135deg, transparent 0px, rgba(196,160,128,0.04) 1px, transparent 3px)
                  `,
                  pointerEvents: "none",
                }} />

                {/* Brillo especular principal (highlight) */}
                <div className="absolute inset-[8px]" style={{
                  borderRadius: "55% 45% 57% 43% / 46% 54% 46% 54%",
                  background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 30%, transparent 70%)",
                  pointerEvents: "none",
                }} />

                {/* Brillo secundario (reflection) */}
                <div className="absolute top-[12%] left-[15%] w-[35%] h-[25%]" style={{
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                  transform: "rotate(-15deg)",
                  pointerEvents: "none",
                  filter: "blur(2px)",
                }} />

                {/* Iniciales GRABADAS en la cera - efecto deep debossed */}
                <div className="flex items-center justify-center" style={{
                  width: "80px", height: "80px",
                  fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "2rem", fontWeight: "500",
                  letterSpacing: "0.12em", color: "#8B7355",
                  textShadow: `
                    0 2px 2px rgba(0,0,0,0.4),
                    0 1px 0 rgba(255,255,255,0.2),
                    0 -1px 1px rgba(255,255,255,0.15),
                    0 0 4px rgba(0,0,0,0.3)
                  `,
                  pointerEvents: "none",
                  transform: "translateY(1px)",
                }}>
                  {initials}
                </div>

                {/* Anillo interior sutil alrededor de las iniciales */}
                <div className="absolute inset-[18px]" style={{
                  borderRadius: "50%",
                  border: "1px solid rgba(139,115,85,0.3)",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(0,0,0,0.1)",
                  pointerEvents: "none",
                }} />

                {/* Gotas de cera cayendo - 3 gotas principales con forma de lágrima */}
                <div className="absolute left-1/2 bottom-[-10px] w-2.5 h-4 -translate-x-1/2" style={{
                  background: "linear-gradient(180deg, #E8D4B8 0%, #D4B890 50%, #C4A080 100%)",
                  borderRadius: "50% 50% 65% 35% / 45% 45% 55% 55%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 2px rgba(255,255,255,0.1)",
                  animation: "drip-pulse 3s ease-in-out infinite",
                  opacity: 0.95,
                }} />
                <div className="absolute left-[30%] bottom-[-8px] w-2 h-3.5" style={{
                  background: "linear-gradient(180deg, #E8D4B8 0%, #D4B890 50%, #C4A080 100%)",
                  borderRadius: "50% 50% 65% 35% / 45% 45% 55% 55%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 2px rgba(255,255,255,0.1)",
                  animation: "drip-pulse 3s ease-in-out infinite 1s",
                  opacity: 0.8,
                }} />
                <div className="absolute left-[70%] bottom-[-9px] w-2 h-3.5" style={{
                  background: "linear-gradient(180deg, #E8D4B8 0%, #D4B890 50%, #C4A080 100%)",
                  borderRadius: "50% 50% 65% 35% / 45% 45% 55% 55%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 2px rgba(255,255,255,0.1)",
                  animation: "drip-pulse 3s ease-in-out infinite 2s",
                  opacity: 0.85,
                }} />

                {/* Gotitas pequeñas adicionales */}
                <div className="absolute left-[40%] bottom-[-4px] w-1 h-1.5 rounded-full" style={{
                  background: "#D4B890", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", opacity: 0.7,
                  animation: "drip-pulse 2s ease-in-out infinite 0.5s",
                }} />
                <div className="absolute left-[60%] bottom-[-3px] w-0.75 h-1 rounded-full" style={{
                  background: "#D4B890", boxShadow: "0 2px 4px rgba(0,0,0,0.2)", opacity: 0.6,
                  animation: "drip-pulse 2.2s ease-in-out infinite 1.5s",
                }} />

                {/* Burbujas/imperfecciones características de la cera */}
                <div className="absolute top-[10%] left-[12%] w-2 h-2" style={{
                  borderRadius: "55% 45% 50% 50% / 45% 55% 50% 50%", background: "rgba(139,115,85,0.15)", opacity: 0.6,
                }} />
                <div className="absolute top-[22%] right-[15%] w-1.5 h-1.5" style={{
                  borderRadius: "50% 50% 45% 55% / 50% 50% 55% 45%", background: "rgba(255,255,255,0.25)", opacity: 0.7,
                }} />
                <div className="absolute bottom-[18%] left-[18%] w-1 h-1" style={{
                  borderRadius: "45% 55% 50% 50% / 50% 50% 45% 55%", background: "rgba(139,115,85,0.1)", opacity: 0.5,
                }} />
                <div className="absolute bottom-[12%] right-[12%] w-1.5 h-1.5" style={{
                  borderRadius: "55% 45% 55% 45% / 55% 45% 55% 45%", background: "rgba(255,255,255,0.15)", opacity: 0.5,
                }} />
                <div className="absolute top-[40%] left-[8%] w-0.75 h-0.75 rounded-full" style={{
                  background: "rgba(139,115,85,0.2)", opacity: 0.4,
                }} />
                <div className="absolute top-[35%] right-[8%] w-0.5 h-0.5 rounded-full" style={{
                  background: "rgba(255,255,255,0.2)", opacity: 0.5,
                }} />
              </div>
            </button>
        </div>
      </div>
    </>
  )
}