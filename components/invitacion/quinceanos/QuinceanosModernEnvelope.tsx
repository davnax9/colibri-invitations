"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  quinceaneraName: string
  eventDate: Date
  children: React.ReactNode
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"
const CHAMPAGNE = "#D8C08A"
const IVORY = "#F4EFE6"
const TEXT = "#29251F"

export default function QuinceanosModernEnvelope({
  quinceaneraName,
  eventDate,
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

  const formattedDate = useMemo(() => {
    return eventDate.toLocaleDateString(
      "es-MX",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    )
  }, [eventDate])

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
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: IVORY,
        color: TEXT,
      }}
    >

      {/* =====================================================
          BRILLOS DE FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.20) 0%, rgba(216,192,138,0.07) 35%, transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.10), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.12), transparent 70%)",
        }}
      />

      {/* =====================================================
          DESTELLOS
      ===================================================== */}

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-[12%] top-[22%] text-xl transition-all duration-700 ${
          isOpening
            ? "-translate-y-4 scale-125 opacity-0"
            : "opacity-70"
        }`}
        style={{
          color: GOLD,
          textShadow:
            "0 0 12px rgba(184,148,85,0.45)",
        }}
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-[13%] top-[30%] text-sm transition-all duration-700 ${
          isOpening
            ? "translate-y-4 scale-125 opacity-0"
            : "opacity-60"
        }`}
        style={{
          color: CHAMPAGNE,
          textShadow:
            "0 0 10px rgba(216,192,138,0.55)",
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-[17%] bottom-[23%] text-sm transition-all duration-700 ${
          isOpening
            ? "-translate-x-3 opacity-0"
            : "opacity-55"
        }`}
        style={{
          color: CHAMPAGNE,
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-[16%] bottom-[20%] text-lg transition-all duration-700 ${
          isOpening
            ? "translate-x-3 opacity-0"
            : "opacity-65"
        }`}
        style={{
          color: GOLD,
          textShadow:
            "0 0 12px rgba(184,148,85,0.40)",
        }}
      >
        ✦
      </span>


      {/* =====================================================
          MARCO EXTERIOR
      ===================================================== */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-4 border transition-all duration-1000 sm:inset-6 ${
          isOpening
            ? "scale-[1.03] opacity-0"
            : "scale-100 opacity-100"
        }`}
        style={{
          borderColor: "rgba(184,148,85,0.35)",
        }}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-7 border transition-all duration-1000 sm:inset-10 ${
          isOpening
            ? "scale-[1.02] opacity-0"
            : "scale-100 opacity-100"
        }`}
        style={{
          borderColor: "rgba(184,148,85,0.17)",
        }}
      />


      {/* =====================================================
          ORNAMENTOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-8 top-8 text-2xl transition-all duration-700 sm:left-12 sm:top-12 ${
          isOpening
            ? "-translate-x-5 -translate-y-5 opacity-0"
            : "opacity-100"
        }`}
        style={{ color: GOLD }}
      >
        ❦
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-8 top-8 -scale-x-100 text-2xl transition-all duration-700 sm:right-12 sm:top-12 ${
          isOpening
            ? "translate-x-5 -translate-y-5 opacity-0"
            : "opacity-100"
        }`}
        style={{ color: GOLD }}
      >
        ❦
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-8 left-8 rotate-180 text-2xl transition-all duration-700 sm:bottom-12 sm:left-12 ${
          isOpening
            ? "-translate-x-5 translate-y-5 opacity-0"
            : "opacity-100"
        }`}
        style={{ color: GOLD }}
      >
        ❦
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-8 right-8 rotate-180 -scale-x-100 text-2xl transition-all duration-700 sm:bottom-12 sm:right-12 ${
          isOpening
            ? "translate-x-5 translate-y-5 opacity-0"
            : "opacity-100"
        }`}
        style={{ color: GOLD }}
      >
        ❦
      </div>


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">

        <div
          className={`relative w-full max-w-3xl transition-all duration-1000 ${
            isOpening
              ? "-translate-y-10 scale-[1.03] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >

          {/* ORNAMENTO SUPERIOR */}

          <div className="mb-8 flex items-center justify-center gap-4">

            <span
              className="h-px w-14 sm:w-20"
              style={{
                backgroundColor: GOLD,
                opacity: 0.55,
              }}
            />

            <span
              className="text-lg"
              style={{
                color: GOLD,
              }}
            >
              ✦
            </span>

            <span
              className="h-px w-14 sm:w-20"
              style={{
                backgroundColor: GOLD,
                opacity: 0.55,
              }}
            />

          </div>


          {/* =================================================
              TARJETA
          ================================================= */}

          <div className="relative mx-auto max-w-2xl">

            <div
              className="absolute inset-0 border"
              style={{
                borderColor: "rgba(184,148,85,0.72)",
              }}
            />

            <div
              className="absolute inset-3 border"
              style={{
                borderColor: "rgba(184,148,85,0.30)",
              }}
            />

            <div className="relative px-8 py-12 sm:px-16 sm:py-16">

              {/* XV */}

              <div className="text-center">

                <p
                  className="text-[10px] uppercase tracking-[0.55em]"
                  style={{
                    color: DARK_GOLD,
                  }}
                >
                  Mis
                </p>

                <h2
                  className="mt-2 font-serif text-7xl leading-none sm:text-8xl"
                  style={{
                    color: GOLD,
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  XV
                </h2>

                <div className="mt-6 flex items-center justify-center gap-3">

                  <span
                    className="h-px w-12"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.5,
                    }}
                  />

                  <span
                    className="text-xs"
                    style={{
                      color: GOLD,
                    }}
                  >
                    ❦
                  </span>

                  <span
                    className="h-px w-12"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.5,
                    }}
                  />

                </div>

              </div>


              {/* NOMBRE */}

              <div className="py-10 text-center sm:py-14">

                <p
                  className="text-[9px] uppercase tracking-[0.45em]"
                  style={{
                    color: DARK_GOLD,
                  }}
                >
                  Estás invitado a celebrar
                </p>

                <h1
                  className="mt-6 break-words font-serif text-5xl font-light leading-[0.95] sm:text-7xl"
                  style={{
                    color: TEXT,
                  }}
                >
                  {quinceaneraName}
                </h1>

                <div className="mx-auto mt-8 flex items-center justify-center gap-3">

                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.45,
                    }}
                  />

                  <span
                    className="text-xs"
                    style={{
                      color: GOLD,
                    }}
                  >
                    ✦
                  </span>

                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.45,
                    }}
                  />

                </div>

              </div>


              {/* FECHA */}

              <div className="text-center">

                <p
                  className="text-[9px] uppercase tracking-[0.4em]"
                  style={{
                    color: DARK_GOLD,
                  }}
                >
                  Reserva la fecha
                </p>

                <p
                  className="mt-3 font-serif text-lg"
                  style={{
                    color: TEXT,
                  }}
                >
                  {formattedDate}
                </p>

              </div>


              <div
                className="mx-auto mt-10 h-px w-full"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.25,
                }}
              />


              {/* PARTE INFERIOR */}

              <div className="mt-8 flex items-end justify-between gap-6">

                <div>

                  <p
                    className="max-w-xs text-[10px] leading-5 sm:text-xs"
                    style={{
                      color: "#6F6250",
                    }}
                  >
                    Una noche especial.
                    <br />
                    Un momento para recordar.
                    <br />
                    Una celebración para compartir.
                  </p>

                </div>


                {/* SELLO */}

                <div className="relative shrink-0">

                  <div
                    className={`absolute -inset-4 rounded-full border transition-all duration-700 ${
                      isOpening
                        ? "scale-125 opacity-0"
                        : "scale-100 opacity-60"
                    }`}
                    style={{
                      borderColor: GOLD,
                    }}
                  />

                  <div
                    className={`absolute -inset-2 rounded-full border transition-all duration-500 ${
                      isOpening
                        ? "scale-110 opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                    style={{
                      borderColor:
                        "rgba(184,148,85,0.45)",
                    }}
                  />

                  <button
                    type="button"
                    onClick={handleOpen}
                    disabled={isOpening}
                    aria-label="Abrir invitación"
                    className={`relative flex h-20 w-20 items-center justify-center rounded-full border transition-all duration-500 sm:h-24 sm:w-24 ${
                      isOpening
                        ? "scale-75 opacity-0"
                        : "hover:scale-110 active:scale-95"
                    }`}
                    style={{
                      background:
                        "linear-gradient(145deg, #E2CD9B 0%, #B89455 55%, #9A763D 100%)",
                      borderColor: DARK_GOLD,
                      color: "#FFFDF8",
                      boxShadow:
                        "0 8px 28px rgba(140,106,54,0.25)",
                    }}
                  >

                    <div className="text-center">

                      <span className="block font-serif text-xl sm:text-2xl">
                        {initials}
                      </span>

                      <span className="mt-1 block text-[7px] uppercase tracking-[0.2em] opacity-80">
                        abrir
                      </span>

                    </div>

                  </button>

                </div>

              </div>


              {/* PIE */}

              <div className="mt-8 flex items-center justify-between">

                <p
                  className="text-[8px] uppercase tracking-[0.35em]"
                  style={{
                    color: DARK_GOLD,
                  }}
                >
                  Save the date
                </p>

                <p
                  className="text-[8px] uppercase tracking-[0.35em]"
                  style={{
                    color: DARK_GOLD,
                  }}
                >
                  {initials}
                </p>

              </div>

            </div>

          </div>


          {/* ORNAMENTO INFERIOR */}

          <div className="mt-8 flex items-center justify-center gap-4">

            <span
              className="h-px w-14 sm:w-20"
              style={{
                backgroundColor: GOLD,
                opacity: 0.45,
              }}
            />

            <span
              className="text-sm"
              style={{
                color: GOLD,
              }}
            >
              ❦
            </span>

            <span
              className="h-px w-14 sm:w-20"
              style={{
                backgroundColor: GOLD,
                opacity: 0.45,
              }}
            />

          </div>

        </div>


        {/* INDICACIÓN */}

        <div
          className={`absolute bottom-7 left-1/2 -translate-x-1/2 text-center transition-all duration-700 ${
            isOpening
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >

          <p
            className="text-[8px] uppercase tracking-[0.45em]"
            style={{
              color: DARK_GOLD,
            }}
          >
            Toca para descubrir
          </p>

          <div className="mx-auto mt-3 h-7 w-px">

            <div
              className="h-full w-px"
              style={{
                backgroundColor: GOLD,
              }}
            />

          </div>

        </div>

      </div>


      {/* TRANSICIÓN */}

      <div
        className={`pointer-events-none absolute inset-0 z-20 transition-all duration-1000 ${
          isOpening
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
        style={{
          backgroundColor: IVORY,
        }}
      />

    </div>
  )
}