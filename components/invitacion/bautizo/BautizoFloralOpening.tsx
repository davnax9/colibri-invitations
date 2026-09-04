"use client"

import { useEffect, useState } from "react"

type Props = {
  childName: string
  eventDate: Date
  children: React.ReactNode
}

export default function BautizoFloralOpening({
  childName,
  eventDate,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isOpening ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Ornamentación floral */}
      <div
        className="absolute left-0 top-0 h-44 w-44 rounded-br-[100%] border-b border-r"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.35,
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-44 w-44 rounded-tl-[100%] border-l border-t"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.35,
        }}
      />

      <div
        className="absolute left-8 top-8 text-6xl"
        style={{
          color: "var(--theme-primary)",
          opacity: 0.12,
        }}
      >
        ❦
      </div>

      <div
        className="absolute bottom-8 right-8 rotate-180 text-6xl"
        style={{
          color: "var(--theme-primary)",
          opacity: 0.12,
        }}
      >
        ❦
      </div>

      <div className="relative mx-auto w-full max-w-md px-8 text-center">
        <p
          className="text-xs uppercase tracking-[0.4em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Un día lleno de bendiciones
        </p>

        <div
          className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--theme-accent)",
          }}
        >
          <span
            className="text-4xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            ❦
          </span>
        </div>

        <p
          className="mt-8 text-4xl font-serif"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Mi Bautizo
        </p>

        <h1
          className="mt-4 text-3xl font-serif"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          {childName}
        </h1>

        <p
          className="mt-4 text-sm"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          {eventDate.toLocaleDateString("es-MX", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <button
          type="button"
          onClick={handleOpen}
          className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-105"
          style={{
            borderColor: "var(--theme-accent)",
            color: "var(--theme-primary)",
          }}
          aria-label="Abrir invitación"
        >
          ✦
        </button>

        <p
          className="mt-4 text-xs uppercase tracking-[0.25em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Toca para entrar
        </p>
      </div>
    </div>
  )
}