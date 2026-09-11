import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }

  details: {
    title: string | null
    subtitle: string | null
    quinceaneraName: string | null
    phrase: string | null
  } | null

  event: {
    eventDate: Date
  }
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"
const CHAMPAGNE = "#D8C08A"

export default function QuinceanosModernHero({
  coverPhoto,
  details,
  event,
}: Props) {

  const quinceaneraName =
    details?.quinceaneraName ?? "Mis XV"

  const formattedDate =
    event.eventDate.toLocaleDateString(
      "es-MX",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    )

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >

      {/* =====================================================
          BRILLOS DE FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.12), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.07), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.08), transparent 70%)",
        }}
      />


      {/* =====================================================
          DESTELLOS
      ===================================================== */}

      <span
        aria-hidden="true"
        className="absolute left-[7%] top-[18%] text-xl"
        style={{
          color: GOLD,
          opacity: 0.65,
          textShadow:
            "0 0 12px rgba(184,148,85,0.45)",
        }}
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[8%] top-[28%] text-sm"
        style={{
          color: CHAMPAGNE,
          opacity: 0.75,
          textShadow:
            "0 0 10px rgba(216,192,138,0.55)",
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className="absolute left-[15%] bottom-[18%] text-sm"
        style={{
          color: CHAMPAGNE,
          opacity: 0.55,
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[14%] bottom-[17%] text-xl"
        style={{
          color: GOLD,
          opacity: 0.60,
          textShadow:
            "0 0 12px rgba(184,148,85,0.4)",
        }}
      >
        ✦
      </span>


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-14">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">


          {/* =================================================
              TEXTO
          ================================================= */}

          <div className="order-2 text-center lg:order-1 lg:text-left">

            {/* ORNAMENTO */}

            <div
              className="flex items-center justify-center gap-4 lg:justify-start"
              style={{
                color: GOLD,
              }}
            >

              <span
                className="h-px w-12"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.45,
                }}
              />

              <span className="text-xl">
                ❦
              </span>

              <span
                className="h-px w-12"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.45,
                }}
              />

            </div>


            {/* XV */}

            <p
              className="mt-7 text-[10px] uppercase tracking-[0.55em]"
              style={{
                color: DARK_GOLD,
              }}
            >
              Mis XV años
            </p>


            {/* NOMBRE */}

            <h1
              className="mt-5 font-serif text-6xl font-normal leading-[0.9] sm:text-7xl lg:text-8xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              {quinceaneraName}
            </h1>


            {/* DIVISOR */}

            <div
              className="mx-auto mt-9 flex max-w-xs items-center gap-4 lg:mx-0"
              style={{
                color: GOLD,
              }}
            >

              <span
                className="h-px flex-1"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.4,
                }}
              />

              <span className="text-lg">
                ✦
              </span>

              <span
                className="h-px flex-1"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.4,
                }}
              />

            </div>


            {/* FRASE */}

            {details?.phrase && (
              <p
                className="mx-auto mt-8 max-w-lg font-serif text-lg italic leading-8 sm:text-xl lg:mx-0"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                “{details.phrase}”
              </p>
            )}


            {/* FECHA */}

            <div className="mt-10">

              <p
                className="text-[10px] uppercase tracking-[0.4em]"
                style={{
                  color: DARK_GOLD,
                }}
              >
                Una celebración especial
              </p>

              <p
                className="mt-3 font-serif text-2xl capitalize"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {formattedDate}
              </p>

            </div>


            {/* ORNAMENTO FINAL */}

            <div
              className="mt-10 text-2xl"
              style={{
                color: GOLD,
              }}
            >
              ❧
            </div>

          </div>


          {/* =================================================
              FOTO
          ================================================= */}

          <div className="order-1 flex justify-center lg:order-2">

            <div className="relative w-full max-w-lg">


              {/* DESTELLO */}

              <span
                aria-hidden="true"
                className="absolute -right-7 top-16 z-30 text-xl"
                style={{
                  color: GOLD,
                  textShadow:
                    "0 0 12px rgba(184,148,85,0.5)",
                }}
              >
                ✦
              </span>


              <span
                aria-hidden="true"
                className="absolute -left-5 bottom-24 z-30 text-sm"
                style={{
                  color: CHAMPAGNE,
                }}
              >
                ✧
              </span>


              {/* MARCO EXTERIOR */}

              <div
                className="absolute -inset-5 border"
                style={{
                  borderColor:
                    "rgba(184,148,85,0.48)",
                }}
              />


              {/* MARCO INTERIOR */}

              <div
                className="absolute -inset-2 border"
                style={{
                  borderColor:
                    "rgba(184,148,85,0.72)",
                }}
              />


              {/* ESQUINAS */}

              <div
                className="absolute -left-2 -top-2 z-20 h-14 w-14 border-l-2 border-t-2"
                style={{
                  borderColor: GOLD,
                }}
              />

              <div
                className="absolute -right-2 -top-2 z-20 h-14 w-14 border-r-2 border-t-2"
                style={{
                  borderColor: GOLD,
                }}
              />

              <div
                className="absolute -bottom-2 -left-2 z-20 h-14 w-14 border-b-2 border-l-2"
                style={{
                  borderColor: GOLD,
                }}
              />

              <div
                className="absolute -bottom-2 -right-2 z-20 h-14 w-14 border-b-2 border-r-2"
                style={{
                  borderColor: GOLD,
                }}
              />


              {/* FOTO */}

              <div className="relative aspect-[4/5] overflow-hidden">

                {coverPhoto ? (
                  <Image
                    src={coverPhoto.url}
                    alt={
                      coverPhoto.title ??
                      `Fotografía de ${quinceaneraName}`
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="object-cover transition duration-1000 hover:scale-[1.02]"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundColor:
                        "var(--theme-surface)",
                    }}
                  />
                )}

                {/* VELO */}

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,24,18,.42), transparent 48%)",
                  }}
                />


                {/* TEXTO SOBRE FOTO */}

                <div className="absolute bottom-7 left-0 right-0 text-center">

                  <p
                    className="text-[10px] uppercase tracking-[0.5em]"
                    style={{
                      color: "#FFFDF8",
                    }}
                  >
                    XV
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white">
                    {quinceaneraName}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}