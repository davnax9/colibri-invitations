"use client"

import { useEffect, useState } from "react"

type Props = {
  childName: string
  eventDate: Date
  children: React.ReactNode
}

export default function ComunionModernOpening({
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
      {/* Marco */}
      <div
        className="absolute inset-5 border sm:inset-8"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.25,
        }}
      />

      <div
        className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.4em]"
        style={{
          color: "var(--theme-secondary)",
        }}
      >
        Invitation
      </div>

      <div
        className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.4em]"
        style={{
          color: "var(--theme-secondary)",
        }}
      >
        First Communion
      </div>

      <div className="relative mx-auto w-full max-w-md px-8 text-center">
        <p
          className="text-[10px] uppercase tracking-[0.5em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Una fecha especial
        </p>

        <div
          className="mx-auto mt-8 flex h-20 w-20 items-center justify-center border"
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
            ✦
          </span>
        </div>

        <p
          className="mt-10 text-4xl font-serif font-light sm:text-5xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Mi Primera
          <br />
          Comunión
        </p>

        <div
          className="mx-auto my-7 h-px w-14"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <h1
          className="text-3xl font-serif font-light"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          {childName}
        </h1>

        <p
          className="mt-5 text-sm uppercase tracking-[0.2em]"
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
          className="mx-auto mt-12 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
          style={{
            borderColor: "var(--theme-accent)",
            color: "var(--theme-primary)",
          }}
          aria-label="Abrir invitación"
        >
          →
        </button>

        <p
          className="mt-4 text-[10px] uppercase tracking-[0.3em]"
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