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

export default function WeddingModernOpening({brideName,groomName,eventDate,coverPhoto,children}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const initials = `${brideName.trim().charAt(0)}${groomName.trim().charAt(0)}`.toUpperCase()
  const formattedDate = eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

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
    <>
      <style jsx>{`
        @keyframes opening-float {
          0%, 100% { transform: translateY(0) rotate(-0.3deg); }
          50% { transform: translateY(-9px) rotate(0.3deg); }
        }
        @keyframes seal-halo {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.12); }
        }
        @keyframes seal-sheen {
          0% { transform: translateX(-140%) rotate(22deg); }
          55%, 100% { transform: translateX(150%) rotate(22deg); }
        }
        @keyframes opening-sparkle {
          0% { opacity: 0; transform: translateY(10px) scale(0.6); }
          20% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-60px) scale(1); }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden px-5 py-8 transition-opacity duration-700 ${isOpening ? "pointer-events-none" : ""}`}
        style={{
          backgroundColor: "var(--theme-background)",
          color: "var(--theme-text)",
          opacity: isOpening ? 0 : 1,
          transitionDelay: isOpening ? "450ms" : "0ms",
        }}
      >
        {/* FONDO CON FOTO DESENFOCADA */}
        {coverPhoto?.url && (
          <div className="absolute inset-0 scale-110 blur-2xl">
            <Image
              src={coverPhoto.url}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* VELO DE COLOR DEL TEMA */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--theme-background)",
            opacity: coverPhoto?.url ? 0.88 : 0,
          }}
        />

        {/* RESPLANDOR AMBIENTAL */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[38%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-3xl md:h-[42rem] md:w-[42rem]"
          style={{
            background: "radial-gradient(circle, var(--theme-accent) 0%, transparent 65%)",
          }}
        />

        {/* VIÑETA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.14) 100%)" }}
        />

        {/* DESTELLOS FLOTANTES */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {[
            { left: "18%", top: "32%", size: 4, delay: "0s" },
            { left: "78%", top: "26%", size: 3, delay: "1.4s" },
            { left: "12%", top: "62%", size: 3, delay: "2.6s" },
            { left: "84%", top: "58%", size: 4, delay: "0.8s" },
            { left: "62%", top: "18%", size: 2, delay: "3.2s" },
            { left: "36%", top: "74%", size: 2, delay: "2s" },
          ].map((dot, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                backgroundColor: "var(--theme-accent)",
                boxShadow: "0 0 8px 1px var(--theme-accent)",
                animation: `opening-sparkle 5s ease-in-out ${dot.delay} infinite`,
              }}
            />
          ))}
        </div>

        {/* CABECERA */}
        <div
          className={`relative z-10 mb-6 flex flex-col items-center text-center transition-all duration-500 md:mb-8 ${
            isOpening ? "-translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 md:w-10" style={{ backgroundColor: "var(--theme-accent)", opacity: 0.6 }} />
            <p className="text-[9px] uppercase tracking-[0.42em] md:text-[10px]" style={{ color: "var(--theme-secondary)" }}>
              Nos casamos
            </p>
            <span className="h-px w-7 md:w-10" style={{ backgroundColor: "var(--theme-accent)", opacity: 0.6 }} />
          </div>
        </div>

        {/* SOBRE */}
        <div className="relative z-10 w-[min(86vw,420px,58vh)]" style={{ perspective: "1400px" }}>
          <div
            className="relative aspect-[1.55] w-full"
            style={{
              transformStyle: "preserve-3d",
              animation: isOpening ? "none" : "opening-float 7s ease-in-out infinite",
            }}
          >
            {/* SOMBRA PROYECTADA */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-[8%] right-[8%] h-7 rounded-[50%] blur-xl"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            />

            {/* CUERPO DE PAPEL */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backgroundColor: "var(--theme-surface)",
                borderRadius: "5px",
                boxShadow: "0 26px 55px -18px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.12)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 48%, rgba(0,0,0,0.05) 100%)" }}
              />
            </div>

            {/* TARJETA INTERIOR */}
            <div
              className="absolute inset-x-[7%] top-[5%] z-10 h-[90%] overflow-hidden transition-transform duration-700"
              style={{
                backgroundColor: "var(--theme-background)",
                borderRadius: "2px",
                transform: isOpening ? "translateY(-44%)" : "translateY(0)",
                transitionDelay: isOpening ? "180ms" : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: "0 12px 26px rgba(0,0,0,0.16)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-[7px] border"
                style={{ borderColor: "var(--theme-accent)", opacity: 0.4 }}
              />
              <div className="flex h-full flex-col items-center justify-center px-5 text-center">
                <p className="text-[8px] uppercase tracking-[0.38em]" style={{ color: "var(--theme-secondary)" }}>
                  Nuestra boda
                </p>
                <div
                  className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--theme-accent)" }}
                >
                  <span className="text-[11px] tracking-[0.14em]" style={{ color: "var(--theme-primary)" }}>
                    {initials}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-xl leading-tight md:text-2xl" style={{ color: "var(--theme-primary)" }}>
                  {brideName}
                  <span className="mx-2 italic" style={{ color: "var(--theme-accent)" }}>&</span>
                  {groomName}
                </h2>
                <span className="mt-3 h-px w-10" style={{ backgroundColor: "var(--theme-accent)", opacity: 0.7 }} />
                <p className="mt-3 text-[8px] uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>
                  {formattedDate}
                </p>
              </div>
            </div>

            {/* PLIEGUE IZQUIERDO */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                backgroundColor: "var(--theme-surface)",
                backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.09), rgba(255,255,255,0.02))",
                filter: "drop-shadow(0 0 1px rgba(0,0,0,0.18))",
              }}
            />

            {/* PLIEGUE DERECHO */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
                backgroundColor: "var(--theme-surface)",
                backgroundImage: "linear-gradient(225deg, rgba(255,255,255,0.32), rgba(0,0,0,0.04))",
                filter: "drop-shadow(0 0 1px rgba(0,0,0,0.18))",
              }}
            />

            {/* PLIEGUE INFERIOR */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
                backgroundColor: "var(--theme-surface)",
                backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.08), rgba(255,255,255,0.22))",
                filter: "drop-shadow(0 -1px 2px rgba(0,0,0,0.14))",
              }}
            />

            {/* SOLAPA SUPERIOR */}
            <div
              aria-hidden="true"
              className="absolute inset-0 origin-top transition-transform duration-700"
              style={{
                zIndex: isOpening ? 5 : 30,
                clipPath: "polygon(0 0, 100% 0, 50% 50%)",
                backgroundColor: "var(--theme-surface)",
                backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.34), rgba(0,0,0,0.07))",
                transform: isOpening ? "rotateX(178deg)" : "rotateX(0deg)",
                transformOrigin: "top center",
                transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                transitionDelay: isOpening ? "120ms" : "0ms",
                filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.14))",
              }}
            />

            {/* SELLO DE CERA */}
            <button
              type="button"
              onClick={handleOpen}
              disabled={isOpening}
              aria-label={`Abrir invitación de ${brideName} y ${groomName}`}
              className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
              style={{
                opacity: isOpening ? 0 : 1,
                transform: isOpening ? "translate(-50%, -50%) scale(1.45)" : undefined,
                transitionDelay: isOpening ? "0ms" : "0ms",
              }}
            >
              {/* HALO */}
              <span
                aria-hidden="true"
                className="absolute -inset-4 rounded-full"
                style={{
                  border: "1px solid var(--theme-accent)",
                  animation: isOpening ? "none" : "seal-halo 2.8s ease-in-out infinite",
                }}
              />

              {/* CUERPO DEL SELLO */}
              <span
                className="relative flex h-[74px] w-[74px] items-center justify-center overflow-hidden rounded-full md:h-[82px] md:w-[82px]"
                style={{
                  background: "conic-gradient(from 210deg, #c9a254, #f4e4b8, #b5873c, #efdcae, #c9a254)",
                  boxShadow:
                    "0 8px 18px rgba(0,0,0,0.28), inset 0 1px 3px rgba(255,255,255,0.55), inset 0 -2px 4px rgba(0,0,0,0.25)",
                }}
              >
                <span
                  className="absolute inset-[3px] rounded-full"
                  style={{
                    background: "radial-gradient(circle at 32% 24%, #f9ecc9 0%, #e3c78f 45%, #c49c55 100%)",
                    boxShadow: "inset 0 2px 5px rgba(255,255,255,0.5), inset 0 -2px 6px rgba(120,84,30,0.35)",
                  }}
                />
                <span
                  className="absolute inset-[9px] rounded-full"
                  style={{ border: "1px solid rgba(122,86,32,0.35)" }}
                />
                {/* BRILLO */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 48%, transparent 64%)",
                    animation: "seal-sheen 4.5s ease-in-out infinite",
                  }}
                />
                <span
                  className="relative font-serif text-2xl tracking-[0.08em] md:text-[26px]"
                  style={{
                    color: "#6d4f1c",
                    textShadow: "0 1px 0 rgba(255,255,255,0.5), 0 -1px 1px rgba(90,60,15,0.35)",
                  }}
                >
                  {initials || "&"}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* NOMBRES Y FECHA */}
        <div
          className={`relative z-10 mt-8 max-w-lg text-center transition-all duration-500 md:mt-10 ${
            isOpening ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <h1
            className="text-balance font-serif text-3xl leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--theme-primary)" }}
          >
            {brideName}
            <span className="mx-2 italic" style={{ color: "var(--theme-accent)" }}>&</span>
            {groomName}
          </h1>
          <p className="mt-3 text-[10px] uppercase tracking-[0.34em]" style={{ color: "var(--theme-secondary)" }}>
            {formattedDate}
          </p>
        </div>

        {/* INDICACIÓN */}
        <div
          className={`relative z-10 mt-7 flex flex-col items-center gap-2 transition-all duration-500 ${
            isOpening ? "opacity-0" : "opacity-100"
          }`}
        >
          <span
            className="text-[9px] uppercase tracking-[0.38em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            Toca el sello para abrir
          </span>
          <span
            aria-hidden="true"
            className="h-8 w-px"
            style={{ background: "linear-gradient(to bottom, var(--theme-accent), transparent)" }}
          />
        </div>
      </div>
    </>
  )
}
