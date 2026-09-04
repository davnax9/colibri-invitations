"use client"

import { useEffect, useState } from "react"

type Props = {
  childName: string
  eventDate: Date
  children: React.ReactNode
}

export default function BautizoLuxuryOpening({
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
      {/* Marco exterior */}
      <div
        className="absolute inset-5 border sm:inset-8"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.35,
        }}
      />

      {/* Líneas decorativas */}
      <div
        className="absolute left-1/2 top-8 h-20 w-px"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.25,
        }}
      />

      <div
        className="absolute bottom-8 left-1/2 h-20 w-px"
        style={{
          backgroundColor: "var(--theme-accent)",
          opacity: 0.25,
        }}
      />

      <div className="relative mx-auto w-full max-w-md px-8 text-center">
        <p
          className="text-xs uppercase tracking-[0.45em]"
          style={{
            color: "var(--theme-accent)",
          }}
        >
          Con amor y gratitud
        </p>

        <div
          className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--theme-accent)",
          }}
        >
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              backgroundColor: "var(--theme-primary)",
            }}
          >
            <span
              className="text-3xl"
              style={{
                color: "var(--theme-accent)",
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
          className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
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