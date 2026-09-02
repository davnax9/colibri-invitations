"use client"

import { useEffect, useState } from "react"

type Props = {
  brideName: string
  groomName: string
  phrase?: string | null
  eventDate: Date
  children: React.ReactNode
}

export default function WeddingRomanticOpening({
  brideName,
  groomName,
  phrase,
  eventDate,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const formattedDate = eventDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

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
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-1000 ${
        isOpening
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* DECORACIÓN FLORAL IZQUIERDA */}
      <div
        className={`pointer-events-none absolute -left-16 -top-10 h-80 w-80 rounded-full border transition-all duration-[1400ms] ${
          isOpening
            ? "-translate-x-20 -translate-y-10 rotate-12 opacity-0"
            : "opacity-40"
        }`}
        style={{
          borderColor: "var(--theme-accent)",
        }}
      />

      <div
        className={`pointer-events-none absolute -left-20 top-24 h-52 w-52 rounded-full border transition-all duration-[1400ms] ${
          isOpening
            ? "-translate-x-20 rotate-6 opacity-0"
            : "opacity-30"
        }`}
        style={{
          borderColor: "var(--theme-primary)",
        }}
      />

      {/* DECORACIÓN FLORAL DERECHA */}
      <div
        className={`pointer-events-none absolute -bottom-10 -right-16 h-80 w-80 rounded-full border transition-all duration-[1400ms] ${
          isOpening
            ? "translate-x-20 translate-y-10 -rotate-12 opacity-0"
            : "opacity-40"
        }`}
        style={{
          borderColor: "var(--theme-accent)",
        }}
      />

      <div
        className={`pointer-events-none absolute bottom-24 -right-20 h-52 w-52 rounded-full border transition-all duration-[1400ms] ${
          isOpening
            ? "translate-x-20 rotate-6 opacity-0"
            : "opacity-30"
        }`}
        style={{
          borderColor: "var(--theme-primary)",
        }}
      />

      {/* PEQUEÑOS PÉTALOS */}
      <span
        className="absolute left-[18%] top-[20%] text-sm opacity-40"
        style={{ color: "var(--theme-accent)" }}
      >
        ✦
      </span>

      <span
        className="absolute right-[20%] top-[30%] text-xs opacity-30"
        style={{ color: "var(--theme-accent)" }}
      >
        ✦
      </span>

      <span
        className="absolute bottom-[25%] left-[25%] text-xs opacity-30"
        style={{ color: "var(--theme-accent)" }}
      >
        ✦
      </span>

      <span
        className="absolute bottom-[20%] right-[28%] text-sm opacity-40"
        style={{ color: "var(--theme-accent)" }}
      >
        ✦
      </span>

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full items-center justify-center px-8">
        <div className="w-full max-w-xl text-center">

          {/* ENCABEZADO */}
          <div
            className={`transition-all duration-700 ${
              isOpening
                ? "-translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <p
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              Nuestra historia
            </p>

            <div
              className="mx-auto mt-5 h-px w-12"
              style={{
                backgroundColor: "var(--theme-accent)",
              }}
            />
          </div>

          {/* NOMBRES */}
          <div
            className={`mt-10 transition-all duration-1000 ${
              isOpening
                ? "scale-105 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            <h1
              className="font-serif text-5xl italic leading-tight md:text-7xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              {brideName}
            </h1>

            <p
              className="my-2 text-2xl font-light"
              style={{
                color: "var(--theme-accent)",
              }}
            >
              &
            </p>

            <h1
              className="font-serif text-5xl italic leading-tight md:text-7xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              {groomName}
            </h1>
          </div>

          {/* FRASE */}
          <p
            className={`mx-auto mt-8 max-w-md font-serif text-lg italic leading-7 transition-all duration-1000 md:text-xl ${
              isOpening
                ? "translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            “{phrase ?? "El amor nos trajo hasta aquí."}”
          </p>

          {/* FECHA */}
          <p
            className={`mt-6 text-[10px] uppercase tracking-[0.3em] transition-all duration-700 ${
              isOpening
                ? "translate-y-4 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            {formattedDate}
          </p>

          {/* BOTÓN */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleOpen}
              disabled={isOpening}
              aria-label="Abrir invitación"
              className={`group flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-700 hover:scale-110 ${
                isOpening
                  ? "scale-150 opacity-0"
                  : ""
              }`}
              style={{
                borderColor: "var(--theme-accent)",
                backgroundColor: "var(--theme-surface)",
              }}
            >
              <span
                className="text-lg transition-transform duration-500 group-hover:scale-125"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                ♡
              </span>
            </button>
          </div>

          <p
            className={`mt-4 text-[9px] uppercase tracking-[0.3em] transition-opacity duration-500 ${
              isOpening ? "opacity-0" : "opacity-60"
            }`}
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Toca para entrar
          </p>
        </div>
      </div>
    </div>
  )
}