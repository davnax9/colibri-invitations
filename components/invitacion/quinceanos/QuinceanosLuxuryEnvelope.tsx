"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  children: React.ReactNode
}

export default function QuinceanosLuxuryEnvelope({
  quinceaneraName,
  children,
}: Props) {
  const [isOpening, setIsOpening] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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

  const handleOpen = () => {
    if (isOpening || isOpen) return

    setIsOpening(true)

    window.setTimeout(() => {
      setIsOpen(true)
      setIsOpening(false)
    }, 1750)
  }

  if (isOpen) {
    return <>{children}</>
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-primary)",
      }}
    >
      {/* ========================================================= */}
      {/* FONDO */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Halo central */}
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[600px] sm:w-[600px]"
          style={{
            backgroundColor: "var(--theme-accent)",
            opacity: isOpening ? 0.14 : 0.06,
            transition: "opacity 1400ms ease",
          }}
        />

        {/* Halo secundario */}
        <div
          className="absolute left-1/2 top-[38%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[320px] sm:w-[320px]"
          style={{
            backgroundColor: "var(--theme-secondary)",
            opacity: 0.045,
          }}
        />

        {/* Textura fina */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 1px 1px,
                var(--theme-primary) 0.65px,
                transparent 0.8px
              )
            `,
            backgroundSize: "10px 10px",
          }}
        />

        {/* Viñeta */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 25%, var(--theme-primary) 145%)",
            opacity: 0.08,
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* DETALLES LATERALES */}
      {/* ========================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          left-5
          top-1/2
          hidden
          h-44
          w-px
          -translate-y-1/2
          sm:block
          sm:left-8
          md:left-12
          transition-all
          duration-[1200ms]
          ${isOpening ? "-translate-x-8 opacity-0" : "opacity-30"}
        `}
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              var(--theme-accent),
              transparent
            )
          `,
        }}
      />

      <div
        className={`
          pointer-events-none
          absolute
          right-5
          top-1/2
          hidden
          h-44
          w-px
          -translate-y-1/2
          sm:block
          sm:right-8
          md:right-12
          transition-all
          duration-[1200ms]
          ${isOpening ? "translate-x-8 opacity-0" : "opacity-30"}
        `}
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              var(--theme-accent),
              transparent
            )
          `,
        }}
      />

      {/* ========================================================= */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ========================================================= */}

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-5">
        {/* ======================================================= */}
        {/* ENCABEZADO */}
        {/* ======================================================= */}

        <div
          className={`
            absolute
            top-[-92px]
            text-center
            transition-all
            duration-[900ms]
            sm:top-[-105px]
            ${
              isOpening
                ? "-translate-y-8 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-px w-10 sm:w-14"
              style={{
                backgroundColor: "var(--theme-accent)",
                opacity: 0.55,
              }}
            />

            <span
              className="text-[8px] sm:text-[9px]"
              style={{
                color: "var(--theme-accent)",
              }}
            >
              ✦
            </span>

            <span
              className="h-px w-10 sm:w-14"
              style={{
                backgroundColor: "var(--theme-accent)",
                opacity: 0.55,
              }}
            />
          </div>

          <p
            className="mt-4 text-[8px] uppercase tracking-[0.48em] sm:mt-5 sm:text-[9px]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Una noche para recordar
          </p>

          <p
            className="mt-2 font-serif text-2xl sm:text-3xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Mis XV Años
          </p>
        </div>

        {/* ======================================================= */}
        {/* JOYA / MEDALLÓN */}
        {/* ======================================================= */}

        <div
          className={`
            relative
            flex
            h-[290px]
            w-[290px]
            items-center
            justify-center
            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(0.77,0,0.175,1)]
            sm:h-[350px]
            sm:w-[350px]
            ${
              isOpening
                ? "scale-[1.18] opacity-0"
                : "scale-100 opacity-100"
            }
          `}
        >
          {/* ===================================================== */}
          {/* RESPLANDOR */}
          {/* ===================================================== */}

          <div
            className={`
              absolute
              inset-[15%]
              rounded-full
              blur-2xl
              transition-all
              duration-[1200ms]
              ${isOpening ? "scale-[1.8] opacity-0" : "scale-100"}
            `}
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: isOpening ? 0 : 0.08,
            }}
          />

          {/* ===================================================== */}
          {/* ARO EXTERIOR */}
          {/* ===================================================== */}

          <div
            className={`
              absolute
              inset-0
              rounded-full
              border
              transition-all
              duration-[1400ms]
              ${
                isOpening
                  ? "rotate-[120deg] scale-[1.25] opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
            style={{
              borderColor: "var(--theme-accent)",
              opacity: 0.42,
            }}
          />

          {/* Segundo aro */}
          <div
            className={`
              absolute
              inset-[13px]
              rounded-full
              border
              transition-all
              duration-[1400ms]
              ${
                isOpening
                  ? "-rotate-[100deg] scale-[1.18] opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
            style={{
              borderColor: "var(--theme-accent)",
              opacity: 0.18,
            }}
          />

          {/* Tercer aro */}
          <div
            className={`
              absolute
              inset-[31px]
              rounded-full
              border
              transition-all
              duration-[1300ms]
              ${
                isOpening
                  ? "rotate-[80deg] scale-[1.1] opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
            style={{
              borderColor: "var(--theme-accent)",
              opacity: 0.35,
            }}
          />

          {/* ===================================================== */}
          {/* DIAMANTES ALREDEDOR */}
          {/* ===================================================== */}

          <div
            className="absolute left-[7%] top-1/2 -translate-y-1/2"
            style={{ color: "var(--theme-accent)" }}
          >
            <span className="text-[10px] opacity-70">◇</span>
          </div>

          <div
            className="absolute right-[7%] top-1/2 -translate-y-1/2"
            style={{ color: "var(--theme-accent)" }}
          >
            <span className="text-[10px] opacity-70">◇</span>
          </div>

          <div
            className="absolute left-1/2 top-[7%] -translate-x-1/2"
            style={{ color: "var(--theme-accent)" }}
          >
            <span className="text-[9px] opacity-75">✦</span>
          </div>

          <div
            className="absolute bottom-[7%] left-1/2 -translate-x-1/2"
            style={{ color: "var(--theme-accent)" }}
          >
            <span className="text-[9px] opacity-75">✦</span>
          </div>

          {/* ===================================================== */}
          {/* CUATRO PEQUEÑOS DESTELLOS */}
          {/* ===================================================== */}

          <div
            className="absolute left-[22%] top-[22%] text-[7px] opacity-50"
            style={{ color: "var(--theme-accent)" }}
          >
            ✧
          </div>

          <div
            className="absolute right-[22%] top-[22%] text-[7px] opacity-50"
            style={{ color: "var(--theme-accent)" }}
          >
            ✧
          </div>

          <div
            className="absolute bottom-[22%] left-[22%] text-[7px] opacity-50"
            style={{ color: "var(--theme-accent)" }}
          >
            ✧
          </div>

          <div
            className="absolute bottom-[22%] right-[22%] text-[7px] opacity-50"
            style={{ color: "var(--theme-accent)" }}
          >
            ✧
          </div>

          {/* ===================================================== */}
          {/* MEDALLÓN CENTRAL */}
          {/* ===================================================== */}

          <div
            className={`
              relative
              flex
              h-[170px]
              w-[170px]
              items-center
              justify-center
              rounded-full
              transition-all
              duration-[1100ms]
              ease-out
              sm:h-[205px]
              sm:w-[205px]
              ${
                isOpening
                  ? "rotate-[18deg] scale-[0.82]"
                  : "rotate-0 scale-100"
              }
            `}
            style={{
              background: `
                radial-gradient(
                  circle at 35% 28%,
                  var(--theme-background),
                  var(--theme-primary)
                )
              `,
              border: "1px solid var(--theme-accent)",
              boxShadow: `
                0 0 0 5px var(--theme-background),
                0 0 0 6px var(--theme-accent),
                0 18px 50px rgba(0,0,0,0.22)
              `,
            }}
          >
            {/* Reflejo metálico */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    transparent 25%,
                    var(--theme-accent) 50%,
                    transparent 75%
                  )
                `,
                opacity: 0.055,
              }}
            />

            {/* Aro interno */}
            <div
              className="absolute inset-[13px] rounded-full border"
              style={{
                borderColor: "var(--theme-accent)",
                opacity: 0.3,
              }}
            />

            {/* Aro fino */}
            <div
              className="absolute inset-[23px] rounded-full border"
              style={{
                borderColor: "var(--theme-accent)",
                opacity: 0.14,
              }}
            />

            {/* Monograma */}
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="font-serif text-[38px] font-light tracking-[0.08em] sm:text-[44px]"
                style={{
                  color: "var(--theme-background)",
                }}
              >
                {initials}
              </span>

              <span
                className="mt-2 h-px w-7"
                style={{
                  backgroundColor: "var(--theme-accent)",
                  opacity: 0.75,
                }}
              />

              <span
                className="mt-2 text-[7px] uppercase tracking-[0.42em]"
                style={{
                  color: "var(--theme-background)",
                  opacity: 0.72,
                }}
              >
                XV
              </span>
            </div>
          </div>

          {/* ===================================================== */}
          {/* ARO ANIMADO */}
          {/* ===================================================== */}

          <div
            className={`
              absolute
              inset-[2px]
              rounded-full
              border
              transition-all
              duration-[1200ms]
              ${
                isOpening
                  ? "scale-[1.45] opacity-0"
                  : "scale-100 opacity-100"
              }
            `}
            style={{
              borderColor: "var(--theme-accent)",
              opacity: 0.1,
            }}
          />
        </div>

        {/* ======================================================= */}
        {/* NOMBRE */}
        {/* ======================================================= */}

        <div
          className={`
            mt-[-2px]
            text-center
            transition-all
            duration-[1000ms]
            sm:mt-1
            ${
              isOpening
                ? "translate-y-8 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <p
            className="font-serif text-2xl tracking-wide sm:text-3xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {quinceaneraName}
          </p>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span
              className="h-px w-8"
              style={{
                backgroundColor: "var(--theme-accent)",
                opacity: 0.45,
              }}
            />

            <span
              className="text-[7px]"
              style={{
                color: "var(--theme-accent)",
              }}
            >
              ◆
            </span>

            <span
              className="h-px w-8"
              style={{
                backgroundColor: "var(--theme-accent)",
                opacity: 0.45,
              }}
            />
          </div>
        </div>

        {/* ======================================================= */}
        {/* BOTÓN */}
        {/* ======================================================= */}

        <div
          className={`
            mt-7
            flex
            flex-col
            items-center
            transition-all
            duration-700
            sm:mt-8
            ${
              isOpening
                ? "translate-y-5 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className="
              group
              relative
              flex
              min-w-[190px]
              items-center
              justify-center
              border
              px-7
              py-3
              transition-all
              duration-500
              hover:-translate-y-0.5
              active:translate-y-0
              sm:min-w-[210px]
              sm:px-8
              sm:py-3.5
            "
            style={{
              borderColor: "var(--theme-accent)",
              color: "var(--theme-primary)",
              backgroundColor: "transparent",
            }}
          >
            {/* Línea interior */}
            <span
              className="absolute inset-[3px] border transition-opacity duration-500 group-hover:opacity-70"
              style={{
                borderColor: "var(--theme-accent)",
                opacity: 0.18,
              }}
            />

            <span className="relative flex items-center gap-3">
              <span
                className="text-[8px]"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                ◇
              </span>

              <span className="text-[9px] uppercase tracking-[0.34em] sm:text-[10px]">
                Presiona para abrir
              </span>

              <span
                className="text-[8px]"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                ◇
              </span>
            </span>
          </button>

          <p
            className="mt-4 text-[7px] uppercase tracking-[0.35em]"
            style={{
              color: "var(--theme-secondary)",
              opacity: 0.7,
            }}
          >
            Una invitación especial para ti
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESTELLOS DECORATIVOS */}
      {/* ========================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          left-[18%]
          top-[22%]
          text-xs
          transition-all
          duration-1000
          ${isOpening ? "-translate-x-10 -translate-y-5 opacity-0" : "opacity-40"}
        `}
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✦
      </div>

      <div
        className={`
          pointer-events-none
          absolute
          right-[18%]
          top-[29%]
          text-[9px]
          transition-all
          duration-1000
          ${isOpening ? "translate-x-10 -translate-y-5 opacity-0" : "opacity-35"}
        `}
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✧
      </div>

      <div
        className={`
          pointer-events-none
          absolute
          bottom-[24%]
          left-[20%]
          text-[8px]
          transition-all
          duration-1000
          ${isOpening ? "-translate-x-10 translate-y-5 opacity-0" : "opacity-30"}
        `}
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✧
      </div>

      <div
        className={`
          pointer-events-none
          absolute
          bottom-[20%]
          right-[21%]
          text-xs
          transition-all
          duration-1000
          ${isOpening ? "translate-x-10 translate-y-5 opacity-0" : "opacity-40"}
        `}
        style={{
          color: "var(--theme-accent)",
        }}
      >
        ✦
      </div>
    </div>
  )
}