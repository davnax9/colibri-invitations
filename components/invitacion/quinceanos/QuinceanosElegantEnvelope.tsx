"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  children: React.ReactNode
}

export default function QuinceanosElegantEnvelope({
  quinceaneraName,
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
    }, 1350)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* ========================================================= */}
      {/* FONDO */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              color-mix(in srgb, var(--theme-secondary) 12%, transparent),
              transparent 48%
            )
          `,
        }}
      />

      {/* textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 1px 1px,
              var(--theme-primary) 1px,
              transparent 0
            )
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* ========================================================= */}
      {/* CONTENIDO */}
      {/* ========================================================= */}

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">

        {/* ======================================================= */}
        {/* ENCABEZADO */}
        {/* ======================================================= */}

        <div
          className={`
            mb-8
            text-center
            transition-all
            duration-700
            ${
              isOpening
                ? "-translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <div
            className="mx-auto mb-4 h-px w-12"
            style={{
              backgroundColor: "var(--theme-secondary)",
              opacity: 0.55,
            }}
          />

          <p
            className="text-[9px] font-medium uppercase tracking-[0.5em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Una invitación especial
          </p>

          <p
            className="mt-3 font-serif text-2xl tracking-wide"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Mis XV Años
          </p>
        </div>

        {/* ======================================================= */}
        {/* SOBRE */}
        {/* ======================================================= */}

        <div
          className={`
            relative
            w-full
            max-w-[320px]
            transition-all
            duration-700
            ${
              isOpening
                ? "scale-[1.025] opacity-100"
                : "scale-100 opacity-100"
            }
          `}
          style={{
            perspective: "1600px",
          }}
        >

          {/* ----------------------------------------------------- */}
          {/* SOMBRA */}
          {/* ----------------------------------------------------- */}

          <div
            className="absolute -bottom-8 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-full blur-2xl"
            style={{
              backgroundColor: "var(--theme-primary)",
              opacity: 0.16,
            }}
          />

          {/* ----------------------------------------------------- */}
          {/* CUERPO */}
          {/* ----------------------------------------------------- */}

          <div
            className="
              relative
              aspect-[0.78/1]
              overflow-hidden
              rounded-[4px]
              border
              shadow-2xl
            "
            style={{
              backgroundColor: "var(--theme-primary)",
              borderColor: "var(--theme-secondary)",
            }}
          >

            {/* ================================================= */}
            {/* PANEL INTERIOR */}
            {/* ================================================= */}

            <div
              className="
                absolute
                inset-[5%]
                overflow-hidden
                rounded-[2px]
                border
              "
              style={{
                backgroundColor: "var(--theme-background)",
                borderColor: "var(--theme-secondary)",
              }}
            >

              {/* línea decorativa superior */}
              <div
                className="absolute left-1/2 top-[9%] h-px w-[42%] -translate-x-1/2"
                style={{
                  backgroundColor: "var(--theme-secondary)",
                  opacity: 0.5,
                }}
              />

              {/* ================================================= */}
              {/* MONOGRAMA */}
              {/* ================================================= */}

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <div
                  className="
                    relative
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                  "
                  style={{
                    color: "var(--theme-primary)",
                  }}
                >

                  {/* círculo exterior */}
                  <div
                    className="absolute inset-0 rounded-full border"
                    style={{
                      borderColor: "var(--theme-secondary)",
                      opacity: 0.7,
                    }}
                  />

                  {/* círculo interior */}
                  <div
                    className="absolute inset-[8px] rounded-full border"
                    style={{
                      borderColor: "var(--theme-secondary)",
                      opacity: 0.25,
                    }}
                  />

                  {/* pequeños puntos */}
                  <span
                    className="absolute left-1/2 top-[-5px] -translate-x-1/2 text-[8px]"
                    style={{
                      color: "var(--theme-secondary)",
                    }}
                  >
                    ✦
                  </span>

                  <span
                    className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 text-[8px]"
                    style={{
                      color: "var(--theme-secondary)",
                    }}
                  >
                    ✦
                  </span>

                  <span
                    className="absolute left-[-5px] top-1/2 -translate-y-1/2 text-[7px]"
                    style={{
                      color: "var(--theme-secondary)",
                    }}
                  >
                    ✦
                  </span>

                  <span
                    className="absolute right-[-5px] top-1/2 -translate-y-1/2 text-[7px]"
                    style={{
                      color: "var(--theme-secondary)",
                    }}
                  >
                    ✦
                  </span>

                  <span className="font-serif text-4xl tracking-wide">
                    {initials}
                  </span>
                </div>

                <p
                  className="mt-7 text-[9px] font-medium uppercase tracking-[0.45em]"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  Quince años
                </p>

                <div
                  className="mt-5 h-px w-16"
                  style={{
                    backgroundColor: "var(--theme-secondary)",
                    opacity: 0.4,
                  }}
                />

                <p
                  className="mt-5 max-w-[180px] text-center font-serif text-sm italic leading-6"
                  style={{
                    color: "var(--theme-text)",
                    opacity: 0.7,
                  }}
                >
                  Una celebración,
                  <br />
                  un momento para recordar.
                </p>

              </div>

              {/* ================================================= */}
              {/* DETALLE INFERIOR */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  left-1/2
                  -translate-x-1/2
                  text-center
                "
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                <span className="text-xs tracking-[0.5em]">
                  ✦ ✦ ✦
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* SOLAPA SUPERIOR */}
            {/* ================================================= */}

            <div
              className={`
                absolute
                inset-x-0
                top-0
                z-30
                origin-top
                transition-transform
                duration-[1100ms]
                ease-[cubic-bezier(0.77,0,0.175,1)]
                ${
                  isOpening
                    ? "[transform:rotateX(180deg)]"
                    : "[transform:rotateX(0deg)]"
                }
              `}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="relative h-[170px] w-full"
                style={{
                  backgroundColor: "var(--theme-primary)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backfaceVisibility: "hidden",
                }}
              >

                {/* borde fino de la solapa */}
                <div
                  className="absolute left-[10%] right-[10%] top-[12%] h-px"
                  style={{
                    backgroundColor: "var(--theme-secondary)",
                    opacity: 0.55,
                  }}
                />

                {/* pequeño detalle */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-[22%]
                    -translate-x-1/2
                    text-[10px]
                  "
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  ✦
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* SOLAPA INFERIOR */}
            {/* ================================================= */}

            <div
              className="absolute bottom-0 left-0 h-[48%] w-full"
              style={{
                clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
                backgroundColor: "color-mix(in srgb, var(--theme-primary) 92%, black)",
                opacity: 0.96,
              }}
            />

            {/* ================================================= */}
            {/* LATERALES */}
            {/* ================================================= */}

            <div
              className="absolute bottom-0 left-0 h-[48%] w-[51%]"
              style={{
                clipPath: "polygon(0 100%, 0 0, 100% 100%)",
                backgroundColor: "var(--theme-primary)",
              }}
            />

            <div
              className="absolute bottom-0 right-0 h-[48%] w-[51%]"
              style={{
                clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
                backgroundColor: "var(--theme-primary)",
              }}
            />

            {/* ================================================= */}
            {/* SELLO */}
            {/* ================================================= */}

            <div
              className="
                absolute
                inset-0
                z-40
                flex
                items-center
                justify-center
                pointer-events-none
              "
            >
              <button
                type="button"
                onClick={handleOpen}
                disabled={isOpening}
                aria-label="Abrir invitación"
                className={`
                  pointer-events-auto
                  relative
                  flex
                  h-[68px]
                  w-[68px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  shadow-xl
                  transition-all
                  duration-500
                  ${
                    isOpening
                      ? "scale-75 opacity-0"
                      : "invitation-seal-pulse hover:scale-105 hover:[animation-play-state:paused] active:scale-95"
                  }
                `}
                style={{
                  backgroundColor: "var(--theme-background)",
                  borderColor: "var(--theme-secondary)",
                  color: "var(--theme-primary)",
                }}
              >
                {/* aro exterior */}
                <span
                  className="absolute inset-[5px] rounded-full border"
                  style={{
                    borderColor: "var(--theme-secondary)",
                    opacity: 0.35,
                  }}
                />

                <span className="font-serif text-lg">
                  {initials}
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* ======================================================= */}
        {/* TEXTO INFERIOR */}
        {/* ======================================================= */}

        <div
          className={`
            mt-7
            text-center
            transition-all
            duration-700
            ${
              isOpening
                ? "translate-y-3 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <p
            className="text-[9px] uppercase tracking-[0.4em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Toca el sello para abrir
          </p>

          <div
            className="mx-auto mt-4 h-px w-8"
            style={{
              backgroundColor: "var(--theme-secondary)",
              opacity: 0.4,
            }}
          />
        </div>

      </div>
    </div>
  )
}