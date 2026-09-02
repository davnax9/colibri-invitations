"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  children: React.ReactNode
}

export default function QuinceanosElegantEnvelope({quinceaneraName,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const words = quinceaneraName.trim().split(/\s+/).filter(Boolean)

    if (words.length === 0) return "XV"

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase()
    }

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
    }, 1100)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* LIGERO FONDO DECORATIVO */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, var(--theme-secondary) 0%, transparent 55%)",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">

        {/* TEXTO SUPERIOR */}
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isOpening
              ? "-translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.4em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            Una invitación especial
          </p>

          <p
            className="mt-3 text-sm"
            style={{ color: "var(--theme-text)" }}
          >
            Para celebrar sus
          </p>

          <p
            className="mt-1 font-serif text-3xl"
            style={{ color: "var(--theme-primary)" }}
          >
            XV Años
          </p>
        </div>

        {/* SOBRE */}
        <div
          className={`relative w-full max-w-82.5 transition-all duration-700 ${
            isOpening
              ? "scale-[1.03] opacity-0"
              : "scale-100 opacity-100"
          }`}
          style={{
            perspective: "1200px",
          }}
        >
          {/* SOMBRA */}
          <div
            className="absolute -bottom-6 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-full blur-xl"
            style={{
              backgroundColor: "var(--theme-primary)",
              opacity: 0.2,
            }}
          />

          {/* CUERPO DEL SOBRE */}
          <div
            className="relative aspect-[1.55/1] overflow-hidden rounded-xl border shadow-2xl"
            style={{
              backgroundColor: "var(--theme-primary)",
              borderColor: "var(--theme-secondary)",
            }}
          >

            {/* PARTE INTERIOR */}
            <div
              className="absolute inset-[8%] flex items-center justify-center rounded-lg border"
              style={{
                backgroundColor: "var(--theme-background)",
                borderColor: "var(--theme-secondary)",
              }}
            >
              {/* INICIALES */}
              <div className="text-center">

                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border"
                  style={{
                    borderColor: "var(--theme-secondary)",
                    color: "var(--theme-primary)",
                  }}
                >
                  <span className="font-serif text-3xl">
                    {initials}
                  </span>
                </div>

                <p
                  className="mt-4 text-[10px] font-semibold uppercase tracking-[0.35em]"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  XV Años
                </p>
              </div>
            </div>

            {/* SOLAPA DEL SOBRE */}
            <div
              className={`absolute inset-x-0 top-0 z-20 origin-top transition-transform duration-1000 ${
                isOpening
                  ? "[transform-[rotateX(180deg)]"
                  : "[transform-[rotateX(0deg)]"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="h-0 w-0 border-l-165 border-r-165 border-t-105 border-l-transparent border-r-transparent"
                style={{
                  borderTopColor: "var(--theme-primary)",
                }}
              />
            </div>

            {/* LÍNEAS DECORATIVAS */}
            <div
              className="absolute bottom-0 left-0 h-full w-1/2"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                backgroundColor: "var(--theme-secondary)",
                opacity: 0.25,
              }}
            />

            <div
              className="absolute bottom-0 right-0 h-full w-1/2"
              style={{
                clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                backgroundColor: "var(--theme-secondary)",
                opacity: 0.25,
              }}
            />

            {/* SELLO */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <button
                    type="button"
                    onClick={handleOpen}
                    disabled={isOpening}
                    aria-label="Abrir invitación"
                    className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-lg transition-all duration-500 ${
                    isOpening
                        ? "scale-75 opacity-0"
                        : "invitation-seal-pulse hover:[animation-play-state:paused] hover:scale-105 active:scale-95"
                    }`}
                    style={{
                    backgroundColor: "var(--theme-background)",
                    borderColor: "var(--theme-primary)",
                    color: "var(--theme-primary)",
                    }}
                >
                    <span className="font-serif text-xl">
                    {initials}
                    </span>
                </button>
            </div>
          </div>
        </div>

        {/* TEXTO INFERIOR */}
        <p
          className={`mt-4 text-[10px] uppercase tracking-[0.25em] transition-opacity duration-500 ${
            isOpening ? "opacity-0" : "opacity-70"
          }`}
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Con cariño para ti
        </p>
      </div>
    </div>
  )
}