"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  children: React.ReactNode
}

export default function QuinceanosLuxuryEnvelope({quinceaneraName,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const words = quinceaneraName.trim().split(/\s+/).filter(Boolean)
    if (words.length === 0) return "XV"

    if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
  }, [quinceaneraName])

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
    }, 1200)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at center, var(--theme-primary) 0%, transparent 55%)",opacity: 0.12}}/>
      {/* DETALLES DORADOS LATERALES */}
      <div className={`pointer-events-none absolute left-5 top-1/2 h-40 w-px -translate-y-1/2 transition-all duration-1000 ${isOpening ? "-translate-x-8 opacity-0" : "opacity-40"}`} style={{backgroundColor: "var(--theme-accent)"}}/>
      <div className={`pointer-events-none absolute right-5 top-1/2 h-40 w-px -translate-y-1/2 transition-all duration-1000 ${isOpening ? "translate-x-8 opacity-0" : "opacity-40"}`} style={{backgroundColor: "var(--theme-accent)"}}/>
      {/* CONTENIDO */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* ENCABEZADO */}
        <div className={`mb-10 text-center transition-all duration-700 ${isOpening ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-xs" style={{color: "var(--theme-accent)"}}>✦</span>
            <span className="h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)"}}>Una noche para recordar</p>
          <p className="mt-3 font-serif text-4xl" style={{color: "var(--theme-primary)"}}>Mis XV Años</p>
        </div>
        {/* CAJA */}
        <div className={`relative w-full max-w-85 transition-all duration-700 ${isOpening ? "scale-[1.04] opacity-0" : "scale-100 opacity-100"}`} style={{perspective: "1400px"}}>
          {/* SOMBRA */}
          <div className="absolute -bottom-8 left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-full blur-2xl" style={{backgroundColor: "var(--theme-primary)", opacity: 0.3}}/>
          {/* BASE */}
          <div className="relative aspect-[1.45/1] overflow-hidden rounded-sm border shadow-2xl" style={{backgroundColor: "var(--theme-primary)", borderColor: "var(--theme-accent)"}}>
            {/* MARCO EXTERIOR */}
            <div className="absolute inset-3 border" style={{borderColor: "var(--theme-accent)", opacity: 0.45}}/>
            {/* MARCO INTERIOR */}
            <div className="absolute inset-6 flex items-center justify-center border" style={{borderColor: "var(--theme-accent)", opacity: 0.25}}/>
            {/* TARJETA CENTRAL */}
            <div className={`absolute inset-x-[14%] bottom-[12%] top-[12%] flex items-center justify-center border shadow-xl transition-all duration-1000 ${isOpening ? "-translate-y-12 scale-105" : "translate-y-0 scale-100"}`}
              style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-accent)", zIndex: 10}}
            >
              <div className="text-center">
                {/* PEQUEÑO SÍMBOLO */}
                <div className="mx-auto mb-4 text-sm" style={{color: "var(--theme-accent)"}}>
                  ✦
                </div>
                {/* XV */}
                <div className="font-serif text-5xl" style={{color: "var(--theme-primary)"}}>
                  XV
                </div>
                {/* LÍNEA */}
                <div className="mx-auto mt-4 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
                {/* INICIALES */}
                <p className="mt-4 text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>{initials}</p>
              </div>
            </div>
            {/* TAPA DE LA CAJA */}
            <div className={`absolute inset-0 z-20 origin-top transition-transform duration-1000 ${isOpening ? "[transform-[rotateX(-105deg)]" : "[transform-[rotateX(0deg)]"}`}
              style={{backgroundColor: "var(--theme-primary)", borderBottom: "1px solid var(--theme-accent)", transformStyle: "preserve-3d"}}
            >
              {/* DETALLE CENTRAL */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border" style={{borderColor: "var(--theme-accent)"}}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border" style={{borderColor: "var(--theme-accent)", color: "var(--theme-accent)"}}>
                  <span className="font-serif text-2xl">{initials}</span>
                </div>
              </div>
              {/* LÍNEA DECORATIVA */}
              <div className="absolute left-1/2 top-[72%] h-px w-16 -translate-x-1/2" style={{backgroundColor: "var(--theme-accent)"}}/>
            </div>
            {/* SELLO INTERACTIVO */}
            <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
              <button type="button" onClick={handleOpen} disabled={isOpening} aria-label="Abrir invitación" className={`pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full border-2 shadow-xl transition-all duration-500 ${
                isOpening ? "scale-75 opacity-0" : "invitation-seal-pulse hover:[animation-play-state:paused] hover:scale-105 active:scale-95"}`} style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-accent)", color: "var(--theme-primary)"}}
              >
                <span className="font-serif text-2xl">{initials}</span>
              </button>
            </div>
          </div>
        </div>
        {/* INDICACIÓN */}
        <div className={`mt-10 text-center transition-all duration-700 ${isOpening ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
          <p className="text-[10px] uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Toca el sello para abrir</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span style={{color: "var(--theme-accent)"}}>✦</span>
            <span className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}