"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  children: React.ReactNode
}

export default function QuinceanosFloralEnvelope({quinceaneraName,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const words = quinceaneraName.trim().split(/\s+/).filter(Boolean)

    if (words.length === 0) return "XV"

    if (words.length === 1) return words[0].slice(0, 2).toUpperCase()

    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
  }, [quinceaneraName])

  useEffect(() => {
    if (!isOpen) document.body.style.overflow = "hidden"

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
    }, 1100)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
      {/* FONDO FLORAL SUTIL */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(circle at center, var(--theme-secondary) 0%, transparent 58%)",opacity: 0.18}}/>
      {/* FLORES DECORATIVAS */}
      <div className={`pointer-events-none absolute -left-8 top-10 text-8xl transition-all duration-1000 ${isOpening ? "-translate-x-8 -translate-y-4 opacity-0" : "opacity-30"}`}
        style={{color: "var(--theme-primary)"}}>
        ❀
      </div>
      <div className={`pointer-events-none absolute -right-8 top-20 text-7xl transition-all duration-1000 ${isOpening ? "translate-x-8 -translate-y-4 opacity-0": "opacity-30"}`}
        style={{color: "var(--theme-accent)"}}>
        ✿
      </div>
      <div className={`pointer-events-none absolute bottom-10 -left-6 text-7xl transition-all duration-1000 ${isOpening ? "-translate-x-8 translate-y-4 opacity-0" : "opacity-25"}`}
        style={{color: "var(--theme-accent)"}}>
        ✿
      </div>
      <div className={`pointer-events-none absolute bottom-16 -right-6 text-8xl transition-all duration-1000 ${isOpening ? "translate-x-8 translate-y-4 opacity-0" : "opacity-30"}`}
        style={{color: "var(--theme-primary)"}}>
        ❀
      </div>
      {/* CONTENIDO */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* ENCABEZADO */}
        <div className={`mb-8 text-center transition-all duration-700 ${isOpening ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Una celebración especial</p>
          <p className="mt-3 text-sm" style={{color: "var(--theme-text)"}}>Mis</p>
          <p className="mt-1 font-serif text-4xl" style={{color: "var(--theme-primary)"}}>XV Años</p>
          {/* ADORNO */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-lg" style={{color: "var(--theme-accent)"}}>❀</span>
            <span className="h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
        </div>
        {/* SOBRE */}
        <div className={`relative w-full max-w-82.5 transition-all duration-700 ${isOpening ? "scale-[1.04] opacity-0" : "scale-100 opacity-100"}`} style={{perspective: "1200px"}}>
          {/* SOMBRA */}
          <div className="absolute -bottom-7 left-1/2 h-8 w-[82%] -translate-x-1/2 rounded-full blur-xl"style={{backgroundColor: "var(--theme-primary)", opacity: 0.16}}/>
          {/* CUERPO DEL SOBRE */}
          <div className="relative aspect-1.5/1 overflow-hidden rounded-lg border shadow-2xl" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-secondary)"}}>
            {/* BORDE INTERIOR */}
            <div className="absolute inset-3 rounded-md border opacity-60" style={{borderColor: "var(--theme-accent)"}}/>
            {/* INTERIOR DEL SOBRE */}
            <div className="absolute inset-[8%] flex items-center justify-center rounded-md border" style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-secondary)"}}>
              {/* DECORACIÓN FLORAL */}
              <div className="absolute left-3 top-3 text-2xl opacity-30" style={{color: "var(--theme-accent)"}}>
                ❀
              </div>
              <div className="absolute bottom-3 right-3 text-2xl opacity-30" style={{color: "var(--theme-primary)"}}>
                ✿
              </div>
              {/* SELLO / INICIALES */}
              <div className="text-center">
                <p className="mb-3 text-[9px] uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Mis XV</p>
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border" style={{borderColor: "var(--theme-accent)", color: "var(--theme-primary)"}}>
                  {/* CÍRCULO DECORATIVO */}
                  <div className="absolute inset-2 rounded-full border" style={{borderColor: "var(--theme-secondary)", opacity: 0.7}}/>
                  <span className="relative font-serif text-3xl">{initials}</span>
                </div>
              </div>
            </div>
            {/* SOLAPA */}
            <div className={`absolute inset-x-0 top-0 z-20 origin-top transition-transform duration-1000 ${isOpening ? "[transform-[rotateX(180deg)]" : "[transform-[rotateX(0deg)]"}`} style={{transformStyle: "preserve-3d"}}>
              <div className="h-0 w-0 border-l-165 border-r-165 border-t-108 border-l-transparent border-r-transparent" style={{borderTopColor: "var(--theme-primary)"}}/>
              {/* DETALLE DE LA SOLAPA */}
              <div className="absolute left-1/2 top-19.5 h-10 w-10 -translate-x-1/2 rotate-45 border" style={{borderColor: "var(--theme-accent)", opacity: 0.35}}/>
            </div>
            {/* LÍNEAS DEL SOBRE */}
            <div className="absolute bottom-0 left-0 h-full w-1/2" style={{clipPath: "polygon(0 100%, 100% 100%, 0 0)", backgroundColor: "var(--theme-primary)", opacity: 0.07}}/>
            <div className="absolute bottom-0 right-0 h-full w-1/2" style={{clipPath: "polygon(100% 100%, 0 100%, 100% 0)", backgroundColor: "var(--theme-accent)", opacity: 0.08,}}/>
            {/* SELLO INTERACTIVO */}
            <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
              <button type="button" onClick={handleOpen} disabled={isOpening} aria-label="Abrir invitación" className={`pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-lg transition-all duration-500 ${
                isOpening ? "scale-75 opacity-0" : "invitation-seal-pulse hover:[animation-play-state:paused] hover:scale-105 active:scale-95" }`}
                style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-primary)",color: "var(--theme-primary)"}}
              >
                <span className="font-serif text-2xl">{initials}</span>
              </button>
            </div>
          </div>
        </div>
        {/* INDICACIÓN */}
        <div className={`mt-10 text-center transition-all duration-700 ${isOpening? "translate-y-3 opacity-0": "translate-y-0 opacity-100"}`}>
          <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Toca el sello para abrir</p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-sm" style={{color: "var(--theme-accent)"}}>❀</span>
            <span className="h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}