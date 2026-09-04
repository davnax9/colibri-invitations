"use client"

import { useEffect, useState } from "react"

type Props = {
  childName: string
  eventDate: Date
  children: React.ReactNode
}

export default function BautizoAngelicalOpening({
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
      {/* Círculos decorativos */}
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full border"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.2,
        }}
      />

      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full border"
        style={{
          borderColor: "var(--theme-primary)",
          opacity: 0.12,
        }}
      />

      {/* Pequeñas estrellas */}
      <div
        className="absolute left-[15%] top-[20%] text-xl"
        style={{ color: "var(--theme-accent)" }}
      >
        ✦
      </div>

      <div
        className="absolute right-[15%] top-[30%] text-sm"
        style={{ color: "var(--theme-accent)" }}
      >
        ✧
      </div>

      <div
        className="absolute bottom-[25%] left-[20%] text-sm"
        style={{ color: "var(--theme-accent)" }}
      >
        ✧
      </div>

      <div className="relative mx-auto w-full max-w-md px-8 text-center">
        <p
          className="text-xs uppercase tracking-[0.4em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Con alegría y amor
        </p>

        {/* Medallón */}
        <div
          className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--theme-accent)",
          }}
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border"
            style={{
              borderColor: "var(--theme-accent)",
            }}
          >
            <span
              className="text-3xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              ✝
            </span>
          </div>
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