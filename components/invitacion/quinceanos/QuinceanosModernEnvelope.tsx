"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  eventDate: Date
  children: React.ReactNode
}

export default function QuinceanosModernEnvelope({
  quinceaneraName,
  eventDate,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = useMemo(() => {
    const words = quinceaneraName
      .trim()
      .split(/\s+/)
      .filter(Boolean)

    if (words.length === 0) return "XV"

    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase()
    }

    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
  }, [quinceaneraName])

  const formattedDate = useMemo(() => {
    return eventDate.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
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
    }, 1200)
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
      {/* FONDO DECORATIVO */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, var(--theme-secondary), transparent 45%)",
          opacity: 0.08,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, var(--theme-primary) 50%, transparent 100%)",
          opacity: 0.025,
        }}
      />

      {/* LÍNEAS EDITORIALES */}
      <div
        className={`pointer-events-none absolute left-5 top-0 h-full w-px transition-all duration-1000 ${
          isOpening ? "-translate-x-6 opacity-0" : "opacity-30"
        }`}
        style={{
          backgroundColor: "var(--theme-primary)",
        }}
      />

      <div
        className={`pointer-events-none absolute right-5 top-0 h-full w-px transition-all duration-1000 ${
          isOpening ? "translate-x-6 opacity-0" : "opacity-30"
        }`}
        style={{
          backgroundColor: "var(--theme-primary)",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full w-full max-w-5xl items-center justify-center px-6">
        <div
          className={`relative w-full max-w-3xl transition-all duration-1000 ${
            isOpening
              ? "-translate-y-10 scale-[1.02] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          {/* NÚMERO EDITORIAL */}
          <div className="absolute -left-1 top-0 hidden md:block">
            <p
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{
                color: "var(--theme-secondary)",
                writingMode: "vertical-rl",
              }}
            >
              Invitación
            </p>
          </div>

          {/* PORTADA */}
          <div className="relative mx-auto max-w-155">
            {/* PARTE SUPERIOR */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.45em]"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  Mis
                </p>

                <p
                  className="mt-1 font-serif text-6xl leading-none tracking-tight md:text-8xl"
                  style={{
                    color: "var(--theme-primary)",
                  }}
                >
                  XV
                </p>
              </div>

              <div className="text-right">
                <p
                  className="text-[10px] uppercase tracking-[0.35em]"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  01
                </p>

                <p
                  className="mt-2 text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* LÍNEA */}
            <div
              className="mt-8 h-px w-full"
              style={{
                backgroundColor: "var(--theme-primary)",
                opacity: 0.25,
              }}
            />

            {/* NOMBRE */}
            <div className="py-14 md:py-20">
              <p
                className="text-[10px] uppercase tracking-[0.5em]"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                Estás invitado a celebrar
              </p>

              <h1
                className="mt-6 max-w-3xl wrap-break-word font-serif text-5xl font-light leading-[0.95] tracking-tight md:text-8xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {quinceaneraName}
              </h1>
            </div>

            {/* INFORMACIÓN INFERIOR */}
            <div className="flex items-end justify-between gap-8">
              <div>
                <p
                  className="max-w-xs text-xs leading-6"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  Una noche especial.
                  <br />
                  Un momento para recordar.
                  <br />
                  Una celebración para compartir.
                </p>
              </div>

              {/* SELLO */}
              <div className="relative shrink-0">
                {/* CÍRCULO EXTERIOR */}
                <div
                  className={`absolute -inset-2.5 rounded-full border transition-opacity duration-500 ${
                    isOpening ? "opacity-0" : "opacity-40"
                  }`}
                  style={{
                    borderColor: "var(--theme-accent)",
                  }}
                />

                <button
                  type="button"
                  onClick={handleOpen}
                  disabled={isOpening}
                  aria-label="Abrir invitación"
                  className={`invitation-modern-seal flex h-20 w-20 items-center justify-center rounded-full border transition-all duration-500 md:h-24 md:w-24 ${
                    isOpening
                      ? "scale-75 opacity-0"
                      : "hover:scale-110 active:scale-95"
                  }`}
                  style={{
                    backgroundColor: "var(--theme-primary)",
                    borderColor: "var(--theme-accent)",
                    color: "var(--theme-background)",
                  }}
                >
                  <div className="text-center">
                    <span className="block font-serif text-xl md:text-2xl">
                      {initials}
                    </span>

                    <span className="mt-1 block text-[7px] uppercase tracking-[0.2em] opacity-70">
                      abrir
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* LÍNEA INFERIOR */}
            <div
              className="mt-10 h-px w-full"
              style={{
                backgroundColor: "var(--theme-primary)",
                opacity: 0.25,
              }}
            />

            {/* PIE EDITORIAL */}
            <div className="mt-5 flex items-center justify-between">
              <p
                className="text-[9px] uppercase tracking-[0.35em]"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                Save the date
              </p>

              <p
                className="text-[9px] uppercase tracking-[0.35em]"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                {initials}
              </p>
            </div>
          </div>
        </div>

        {/* INDICACIÓN */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${
            isOpening
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p
            className="text-[9px] uppercase tracking-[0.4em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Toca para descubrir
          </p>

          <div className="mx-auto mt-3 h-8 w-px">
            <div
              className="h-full w-px"
              style={{
                backgroundColor: "var(--theme-accent)",
              }}
            />
          </div>
        </div>
      </div>

      {/* TRANSICIÓN DE SALIDA */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 transition-all duration-1000 ${
          isOpening
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
        style={{
          backgroundColor: "var(--theme-background)",
        }}
      />
    </div>
  )
}