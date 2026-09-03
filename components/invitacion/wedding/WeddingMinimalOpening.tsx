"use client"

import { useEffect, useState } from "react"

type Props = {
  brideName: string
  groomName: string
  eventDate: Date
  children: React.ReactNode
}

export default function WeddingMinimalOpening({
  brideName,
  groomName,
  eventDate,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = `${brideName.charAt(0)}${groomName.charAt(0)}`

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
    }, 1200)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isOpening
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Línea superior */}
      <div
        className={`absolute left-1/2 top-[12%] h-px -translate-x-1/2 transition-all duration-1000 ${
          isOpening ? "w-0 opacity-0" : "w-20 opacity-70"
        }`}
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />

      <div className="relative flex w-full max-w-xl flex-col items-center px-8 text-center">
        {/* Número editorial */}
        <p
          className={`text-[10px] uppercase tracking-[0.45em] transition-all duration-700 ${
            isOpening
              ? "-translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Save the date
        </p>

        {/* Iniciales */}
        <div
          className={`mt-8 flex h-20 w-20 items-center justify-center rounded-full border transition-all duration-1000 ${
            isOpening
              ? "scale-150 opacity-0"
              : "scale-100 opacity-100"
          }`}
          style={{
            borderColor: "var(--theme-accent)",
          }}
        >
          <span
            className="text-xl font-light tracking-[0.15em]"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {initials}
          </span>
        </div>

        {/* Nombres */}
        <div
          className={`mt-10 transition-all duration-1000 ${
            isOpening
              ? "scale-105 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <h1
            className="text-4xl font-light tracking-tight md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {brideName}
          </h1>

          <p
            className="my-3 text-sm font-light"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            &
          </p>

          <h1
            className="text-4xl font-light tracking-tight md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {groomName}
          </h1>
        </div>

        {/* Línea */}
        <div
          className={`mt-10 h-px transition-all duration-1000 ${
            isOpening ? "w-0 opacity-0" : "w-12 opacity-70"
          }`}
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        {/* Fecha */}
        <p
          className={`mt-6 text-xs uppercase tracking-[0.25em] transition-all duration-700 ${
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

        {/* Botón */}
        <div className="mt-12">
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className={`group relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 hover:scale-110 ${
              isOpening ? "scale-125 opacity-0" : ""
            }`}
            style={{
              borderColor: "var(--theme-primary)",
            }}
            aria-label="Abrir invitación"
          >
            <span
              className="text-sm transition-transform duration-500 group-hover:rotate-90"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              +
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

      {/* Línea inferior */}
      <div
        className={`absolute bottom-[12%] left-1/2 h-px -translate-x-1/2 transition-all duration-1000 ${
          isOpening ? "w-0 opacity-0" : "w-20 opacity-70"
        }`}
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />
    </div>
  )
}