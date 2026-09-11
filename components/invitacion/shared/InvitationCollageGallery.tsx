import Image from "next/image"

type Photo = {
  id: string
  url: string
  title: string | null
  isCover: boolean
}

type Props = {
  photos: Photo[]
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"
const CHAMPAGNE = "#D8C08A"

export default function InvitationCollageGallery({
  photos,
}: Props) {
  if (!photos.length) return null

  /*
   * La fotografía marcada como portada será
   * nuestra fotografía protagonista.
   */
  const coverPhoto =
    photos.find((photo) => photo.isCover) ??
    photos[0]

  const remainingPhotos = photos
    .filter((photo) => photo.id !== coverPhoto.id)
    .slice(0, 6)

  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >

      {/* =====================================================
          DECORACIÓN DORADA DE FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.12) 0%, rgba(216,192,138,0.04) 40%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full"
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
        className="pointer-events-none absolute left-[9%] top-[18%] text-lg"
        style={{
          color: GOLD,
          opacity: 0.65,
          textShadow:
            "0 0 10px rgba(184,148,85,0.35)",
        }}
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[30%] text-sm"
        style={{
          color: CHAMPAGNE,
          opacity: 0.7,
          textShadow:
            "0 0 9px rgba(216,192,138,0.45)",
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] bottom-[18%] text-sm"
        style={{
          color: CHAMPAGNE,
          opacity: 0.55,
        }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] bottom-[12%] text-lg"
        style={{
          color: GOLD,
          opacity: 0.65,
          textShadow:
            "0 0 10px rgba(184,148,85,0.35)",
        }}
      >
        ✦
      </span>


      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-14 text-center sm:mb-16">

          {/* Ornamento superior */}

          <div
            className="mb-7 flex items-center justify-center gap-4"
            style={{
              color: GOLD,
            }}
          >
            <span
              className="h-px w-12 sm:w-16"
              style={{
                backgroundColor: GOLD,
                opacity: 0.45,
              }}
            />

            <span className="text-lg">
              ✦
            </span>

            <span
              className="h-px w-12 sm:w-16"
              style={{
                backgroundColor: GOLD,
                opacity: 0.45,
              }}
            />
          </div>


          <p
            className="text-[10px] uppercase tracking-[0.45em]"
            style={{
              color: DARK_GOLD,
            }}
          >
            Nuestros recuerdos
          </p>


          <h2
            className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Momentos
          </h2>


          <p
            className="mx-auto mt-5 max-w-md font-serif text-base italic leading-7 sm:text-lg"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Instantes que quedarán
            para siempre.
          </p>


          <div
            className="mx-auto mt-7 h-px w-20"
            style={{
              backgroundColor: GOLD,
              opacity: 0.55,
            }}
          />

        </div>


        {/* =====================================================
            FOTOGRAFÍA PROTAGONISTA
        ===================================================== */}

        <div className="relative mx-auto max-w-3xl">

          {/* Destello superior derecho */}

          <span
            aria-hidden="true"
            className="absolute -right-5 top-10 z-30 text-xl"
            style={{
              color: GOLD,
              textShadow:
                "0 0 12px rgba(184,148,85,0.45)",
            }}
          >
            ✦
          </span>


          {/* Destello inferior izquierdo */}

          <span
            aria-hidden="true"
            className="absolute -left-4 bottom-16 z-30 text-sm"
            style={{
              color: CHAMPAGNE,
              textShadow:
                "0 0 8px rgba(216,192,138,0.5)",
            }}
          >
            ✧
          </span>


          {/* Marco exterior */}

          <div
            className="absolute -inset-3 border"
            style={{
              borderColor:
                "rgba(184,148,85,0.42)",
            }}
          />


          {/* Segundo marco */}

          <div
            className="absolute -inset-1 border"
            style={{
              borderColor:
                "rgba(184,148,85,0.20)",
            }}
          />


          {/* Esquinas superiores */}

          <div
            aria-hidden="true"
            className="absolute left-2 top-2 z-20 h-10 w-10 border-l border-t"
            style={{
              borderColor: GOLD,
            }}
          />

          <div
            aria-hidden="true"
            className="absolute right-2 top-2 z-20 h-10 w-10 border-r border-t"
            style={{
              borderColor: GOLD,
            }}
          />


          {/* Esquinas inferiores */}

          <div
            aria-hidden="true"
            className="absolute bottom-2 left-2 z-20 h-10 w-10 border-b border-l"
            style={{
              borderColor: GOLD,
            }}
          />

          <div
            aria-hidden="true"
            className="absolute bottom-2 right-2 z-20 h-10 w-10 border-b border-r"
            style={{
              borderColor: GOLD,
            }}
          />


          {/* Fotografía */}

          <div className="relative overflow-hidden bg-[#E8E0D4]">

            <div className="relative aspect-[4/5] w-full">

              <Image
                src={coverPhoto.url}
                alt={
                  coverPhoto.title ??
                  "Fotografía de la celebración"
                }
                fill
                sizes="(max-width: 768px) 90vw, 700px"
                className="object-cover transition duration-1000 hover:scale-[1.02]"
              />

            </div>

          </div>


          {/* Pie editorial */}

          {coverPhoto.title && (
            <div className="mt-7 text-center">

              <p
                className="font-serif text-lg italic"
                style={{
                  color:
                    "var(--theme-primary)",
                }}
              >
                {coverPhoto.title}
              </p>

              <div
                className="mx-auto mt-4 flex items-center justify-center gap-3"
                style={{
                  color: GOLD,
                }}
              >
                <span
                  className="h-px w-10"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.35,
                  }}
                />

                <span className="text-xs">
                  ❦
                </span>

                <span
                  className="h-px w-10"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.35,
                  }}
                />
              </div>

            </div>
          )}

        </div>


        {/* =====================================================
            GALERÍA SECUNDARIA
        ===================================================== */}

        {remainingPhotos.length > 0 && (
          <div className="mx-auto mt-20 max-w-5xl sm:mt-24">

            {/* Ornamento */}

            <div
              className="mb-12 flex items-center justify-center gap-4"
              style={{
                color: GOLD,
              }}
            >
              <span
                className="h-px w-12"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.3,
                }}
              />

              <span className="text-sm">
                ❦
              </span>

              <span
                className="h-px w-12"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.3,
                }}
              />
            </div>


            {/* =================================================
                MOBILE
            ================================================= */}

            <div className="grid grid-cols-2 gap-6 md:hidden">

              {remainingPhotos.map(
                (photo, index) => {

                  /*
                   * Cada cierto número hacemos
                   * una fotografía protagonista.
                   */

                  const isLarge =
                    index === 2 ||
                    index === 5

                  return (
                    <div
                      key={photo.id}
                      className={
                        isLarge
                          ? "relative col-span-2"
                          : "relative"
                      }
                    >

                      <div
                        className={
                          isLarge
                            ? "relative mx-auto max-w-xl"
                            : "relative"
                        }
                      >

                        {/* Marco exterior */}

                        <div
                          className="absolute -inset-2 border"
                          style={{
                            borderColor:
                              "rgba(184,148,85,0.30)",
                          }}
                        />


                        {/* Fotografía */}

                        <div className="relative overflow-hidden">

                          <div
                            className={
                              isLarge
                                ? "relative aspect-[4/5]"
                                : "relative aspect-[3/4]"
                            }
                          >

                            <Image
                              src={photo.url}
                              alt={
                                photo.title ??
                                "Fotografía"
                              }
                              fill
                              sizes="(max-width: 768px) 45vw"
                              className="object-cover transition duration-700 hover:scale-[1.03]"
                            />

                          </div>

                        </div>

                      </div>

                    </div>
                  )
                }
              )}

            </div>


            {/* =================================================
                DESKTOP
            ================================================= */}

            <div className="hidden md:grid md:grid-cols-12 md:gap-x-10 md:gap-y-16">

              {remainingPhotos.map(
                (photo, index) => {

                  /*
                   * Composición editorial:
                   *
                   * 01 → grande
                   * 02 → pequeño
                   * 03 → pequeño
                   * 04 → mediano
                   * 05 → grande
                   * 06 → pequeño
                   */

                  const layouts = [
                    "md:col-span-7",
                    "md:col-span-5 md:pt-16",
                    "md:col-span-5 md:col-start-2",
                    "md:col-span-7 md:col-start-6 md:pt-10",
                    "md:col-span-7",
                    "md:col-span-5 md:pt-16",
                  ]

                  const layout =
                    layouts[index] ??
                    "md:col-span-6"

                  return (
                    <div
                      key={photo.id}
                      className={`relative ${layout}`}
                    >

                      {/* Destellos ocasionales */}

                      {index === 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 top-12 z-20 text-lg"
                          style={{
                            color: GOLD,
                            textShadow:
                              "0 0 10px rgba(184,148,85,0.35)",
                          }}
                        >
                          ✦
                        </span>
                      )}

                      {index === 4 && (
                        <span
                          aria-hidden="true"
                          className="absolute -right-6 bottom-10 z-20 text-sm"
                          style={{
                            color: CHAMPAGNE,
                          }}
                        >
                          ✧
                        </span>
                      )}


                      {/* Marco */}

                      <div
                        className="relative"
                        style={{
                          transform:
                            index % 2 === 0
                              ? "rotate(-0.5deg)"
                              : "rotate(0.5deg)",
                        }}
                      >

                        <div
                          className="absolute -inset-3 border"
                          style={{
                            borderColor:
                              "rgba(184,148,85,0.28)",
                          }}
                        />

                        <div
                          className="absolute -inset-1 border"
                          style={{
                            borderColor:
                              "rgba(184,148,85,0.14)",
                          }}
                        />


                        <div className="relative overflow-hidden">

                          <div
                            className={
                              index === 0 ||
                              index === 3 ||
                              index === 4
                                ? "relative aspect-[4/5]"
                                : "relative aspect-[3/4]"
                            }
                          >

                            <Image
                              src={photo.url}
                              alt={
                                photo.title ??
                                "Fotografía"
                              }
                              fill
                              sizes="(max-width: 1024px) 50vw, 600px"
                              className="object-cover transition duration-700 hover:scale-[1.03]"
                            />

                          </div>

                        </div>

                      </div>


                      {/* Título */}

                      {photo.title && (
                        <p
                          className="mt-5 text-center font-serif text-sm italic"
                          style={{
                            color:
                              "var(--theme-secondary)",
                          }}
                        >
                          {photo.title}
                        </p>
                      )}

                    </div>
                  )
                }
              )}

            </div>

          </div>
        )}


        {/* =====================================================
            ORNAMENTO FINAL
        ===================================================== */}

        <div
          className="mt-20 flex items-center justify-center gap-4 sm:mt-24"
          style={{
            color: GOLD,
          }}
        >

          <span
            className="h-px w-14"
            style={{
              backgroundColor: GOLD,
              opacity: 0.35,
            }}
          />

          <span className="text-sm">
            ❦
          </span>

          <span
            className="h-px w-14"
            style={{
              backgroundColor: GOLD,
              opacity: 0.35,
            }}
          />

        </div>

      </div>

    </section>
  )
}