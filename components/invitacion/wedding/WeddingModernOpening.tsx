"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Props = {
  brideName: string
  groomName: string
  eventDate: Date
  coverPhoto?: {
    url: string
    alt?: string | null
  }
  children: React.ReactNode
}

export default function WeddingModernOpening({
  brideName,
  groomName,
  eventDate,
  coverPhoto,
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
    }, 1200)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-1000 ${
        isOpening
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* FOTO DE PORTADA */}
      {coverPhoto?.url && (
        <div
          className={`absolute inset-0 transition-transform duration-[1200ms] ease-in-out ${
            isOpening ? "scale-110" : "scale-100"
          }`}
        >
          <Image
            src={coverPhoto.url}
            alt={coverPhoto.alt ?? "Fotografía de la pareja"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6))",
            }}
          />
        </div>
      )}

      {/* Si no hay fotografía */}
      {!coverPhoto?.url && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--theme-background)",
          }}
        />
      )}

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 md:px-14 md:py-12">
        
        {/* HEADER */}
        <div
          className={`flex items-center justify-between transition-all duration-700 ${
            isOpening
              ? "-translate-y-5 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/80">
            A love story
          </p>

          <p className="text-[10px] tracking-[0.2em] text-white/70">
            01
          </p>
        </div>

        {/* CENTRO */}
        <div className="mx-auto w-full max-w-5xl">
          <div
            className={`transition-all duration-1000 ${
              isOpening
                ? "translate-y-10 scale-105 opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/80">
              Nos casamos
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-white md:text-8xl lg:text-9xl">
              {brideName}
            </h1>

            <div className="my-2 flex items-center gap-4 md:my-4">
              <div className="h-px w-8 bg-white/60 md:w-16" />

              <span className="font-serif text-xl italic text-white/90 md:text-3xl">
                &
              </span>

              <div className="h-px w-8 bg-white/60 md:w-16" />
            </div>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight text-white md:text-8xl lg:text-9xl">
              {groomName}
            </h1>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-end justify-between gap-6">
          <div
            className={`transition-all duration-700 ${
              isOpening
                ? "translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
              {formattedDate}
            </p>
          </div>

          {/* BOTÓN */}
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            aria-label="Abrir invitación"
            className={`group flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black ${
              isOpening ? "scale-125 opacity-0" : ""
            }`}
          >
            <span className="text-xl transition-transform duration-500 group-hover:translate-y-1">
              ↓
            </span>
          </button>
        </div>
      </div>

      {/* LÍNEA VERTICAL DECORATIVA */}
      <div
        className={`absolute bottom-0 left-1/2 z-20 hidden h-24 w-px -translate-x-1/2 bg-white/40 transition-all duration-1000 md:block ${
          isOpening ? "h-0 opacity-0" : "opacity-100"
        }`}
      />
    </div>
  )
}