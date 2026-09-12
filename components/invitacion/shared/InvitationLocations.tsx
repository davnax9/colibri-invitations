type InvitationLocationsProps = {
  event: {
    name: string
    eventDate: Date

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      dressCode: string | null
    } | null

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]

    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null

      location: {
        name: string
      } | null
    }[]

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

export default function InvitationLocations({
  event,
}: InvitationLocationsProps) {
  if (event.locations.length === 0) return null

  const hasSingleLocation =
    event.locations.length === 1

  return (
    <section
      className="px-4 py-10 sm:px-6 sm:py-16 md:px-10 md:py-24"
      style={{
        backgroundColor:
          "var(--theme-surface)",
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* =================================================
            ENCABEZADO
        ================================================= */}

        <div className="text-center">

          <p
            className="text-[9px] uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]"
            style={{
              color:
                "var(--theme-secondary)",
            }}
          >
            ¿Dónde será?
          </p>

          <h2
            className="mt-2 font-serif text-2xl sm:mt-4 sm:text-4xl md:text-5xl"
            style={{
              color:
                "var(--theme-primary)",
            }}
          >
            Nuestras ubicaciones
          </h2>

          <p
            className="mx-auto mt-3 max-w-xl text-[11px] leading-5 sm:mt-5 sm:text-sm sm:leading-6"
            style={{
              color:
                "var(--theme-secondary)",
            }}
          >
            Te compartimos los lugares donde estaremos
            celebrando este día tan especial.
          </p>

          {/* DETALLE DECORATIVO */}

          <div
            className="mx-auto mt-4 h-px w-12 sm:mt-6 sm:w-16"
            style={{
              backgroundColor:
                "var(--theme-accent)",
            }}
          />

        </div>


        {/* =================================================
            UBICACIONES
        ================================================= */}

        <div
          className={
            hasSingleLocation
              ? "mt-7 flex justify-center sm:mt-10 md:mt-14"
              : "mt-7 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 md:mt-14"
          }
        >

          {event.locations.map((location) => (

            <div
              key={location.id}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-4
                text-center
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg

                sm:p-6

                ${
                  hasSingleLocation
                    ? "w-full max-w-2xl py-5 sm:px-8 sm:py-8 md:px-12 md:py-12"
                    : ""
                }
              `}
              style={{
                backgroundColor:
                  "var(--theme-background)",
                borderColor:
                  "var(--theme-accent)",
              }}
            >

              {/* =================================================
                  DECORACIÓN
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  opacity-10
                  blur-2xl
                  sm:-right-16
                  sm:-top-16
                  sm:h-40
                  sm:w-40
                "
                style={{
                  backgroundColor:
                    "var(--theme-accent)",
                }}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-10
                  -left-10
                  h-24
                  w-24
                  rounded-full
                  opacity-10
                  blur-2xl
                  sm:-bottom-20
                  sm:-left-16
                  sm:h-40
                  sm:w-40
                "
                style={{
                  backgroundColor:
                    "var(--theme-secondary)",
                }}
              />


              {/* =================================================
                  CONTENIDO
              ================================================= */}

              <div className="relative">

                {/* ETIQUETA */}

                {hasSingleLocation && (
                  <p
                    className="mb-3 text-[8px] font-medium uppercase tracking-[0.25em] sm:mb-4 sm:text-[10px] sm:tracking-[0.35em]"
                    style={{
                      color:
                        "var(--theme-secondary)",
                    }}
                  >
                    Lugar de celebración
                  </p>
                )}


                {/* =================================================
                    ICONO
                ================================================= */}

                <div
                  className="
                    mx-auto
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    shadow-sm
                    sm:h-14
                    sm:w-14
                  "
                  style={{
                    backgroundColor:
                      "var(--theme-surface)",
                    borderColor:
                      "var(--theme-accent)",
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  <span className="text-lg sm:text-2xl">
                    📍
                  </span>
                </div>


                {/* =================================================
                    NOMBRE
                ================================================= */}

                <h3
                  className={`
                    mt-3
                    font-serif
                    leading-tight
                    sm:mt-5

                    ${
                      hasSingleLocation
                        ? "text-xl sm:text-3xl md:text-4xl"
                        : "text-lg sm:text-2xl"
                    }
                  `}
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  {location.name}
                </h3>


                {/* =================================================
                    LÍNEA DECORATIVA
                ================================================= */}

                <div
                  className="mx-auto mt-3 h-px w-8 sm:mt-5 sm:w-12"
                  style={{
                    backgroundColor:
                      "var(--theme-accent)",
                  }}
                />


                {/* =================================================
                    DIRECCIÓN
                ================================================= */}

                {location.address ? (

                  <p
                    className={`
                      mx-auto
                      mt-3
                      leading-5
                      sm:mt-5
                      sm:leading-6

                      ${
                        hasSingleLocation
                          ? "max-w-lg text-xs sm:text-base"
                          : "max-w-sm text-[11px] sm:text-sm"
                      }
                    `}
                    style={{
                      color:
                        "var(--theme-secondary)",
                    }}
                  >
                    {location.address}
                  </p>

                ) : (

                  <p
                    className="mt-3 text-[11px] italic sm:mt-5 sm:text-sm"
                    style={{
                      color:
                        "var(--theme-secondary)",
                    }}
                  >
                    Dirección no disponible
                  </p>

                )}


                {/* =================================================
                    MAPA
                ================================================= */}

                {location.mapsUrl && (

                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-4
                      py-2
                      text-[11px]
                      font-medium
                      text-white
                      shadow-sm
                      transition
                      hover:-translate-y-0.5
                      hover:opacity-90
                      hover:shadow-md
                      sm:mt-7
                      sm:gap-2
                      sm:px-7
                      sm:py-3.5
                      sm:text-sm
                    "
                    style={{
                      backgroundColor:
                        "var(--theme-primary)",
                    }}
                  >
                    <span>🗺️</span>
                    <span>Cómo llegar</span>
                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}