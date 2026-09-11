import {
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react"

type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  location: {
    name: string
  } | null
}

type Props = {
  schedules: Schedule[]
}

export default function InvitationTimeline({
  schedules,
}: Props) {

  if (!schedules || schedules.length === 0) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >

      {/* =====================================================
          DECORACIÓN DE FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(184,148,85,0.35))",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.08), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.07), transparent 70%)",
        }}
      />


      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="relative mx-auto max-w-5xl">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="text-center">

          <div
            className="mx-auto mb-7 flex items-center justify-center gap-4"
            style={{
              color: "#B89455",
            }}
          >

            <span className="h-px w-12 bg-current opacity-50 sm:w-16" />

            <span className="text-lg">
              ✦
            </span>

            <span className="h-px w-12 bg-current opacity-50 sm:w-16" />

          </div>


          <p
            className="text-[10px] uppercase tracking-[0.45em]"
            style={{
              color: "#8C6A36",
            }}
          >
            El gran día
          </p>


          <h2
            className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Nuestro momento
          </h2>


          <p
            className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7 sm:text-lg"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Cada instante forma parte de una noche
            que recordaremos para siempre.
          </p>


          <div
            className="mx-auto mt-7 h-px w-20"
            style={{
              backgroundColor: "#B89455",
              opacity: 0.55,
            }}
          />

        </div>


        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative mt-16 sm:mt-20">


          {/* =================================================
              LÍNEA CENTRAL DESKTOP
          ================================================= */}

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(184,148,85,0.65) 8%, rgba(184,148,85,0.65) 92%, transparent)",
            }}
          />


          {/* =================================================
              LÍNEA MOBILE
          ================================================= */}

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[18px] top-0 w-px md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(184,148,85,0.65) 5%, rgba(184,148,85,0.65) 95%, transparent)",
            }}
          />


          <div className="space-y-12 md:space-y-20">

            {schedules.map((schedule, index) => {

              const isLeft = index % 2 === 0

              const formattedDate =
                schedule.date.toLocaleDateString(
                  "es-MX",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )

              return (

                <div
                  key={schedule.id}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >

                  {/* =================================================
                      PUNTO MOBILE
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="absolute left-[18px] top-8 z-20 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 md:hidden"
                    style={{
                      backgroundColor:
                        "var(--theme-background)",
                      borderColor: "#B89455",
                    }}
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{
                        backgroundColor: "#B89455",
                      }}
                    />
                  </div>


                  {/* =================================================
                      PUNTO DESKTOP
                  ================================================= */}

                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-8 z-20 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 md:flex"
                    style={{
                      backgroundColor:
                        "var(--theme-background)",
                      borderColor: "#B89455",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: "#B89455",
                      }}
                    />
                  </div>


                  {/* =================================================
                      CONTENIDO
                  ================================================= */}

                  <div
                    className={
                      isLeft
                        ? "pl-10 md:col-start-1 md:pr-16 md:pl-0"
                        : "pl-10 md:col-start-2 md:pl-16 md:pr-0"
                    }
                  >

                    <div
                      className="relative"
                    >

                      {/* =========================================
                          NÚMERO
                      ========================================= */}

                      <div
                        className="mb-3 font-serif text-4xl leading-none md:text-5xl"
                        style={{
                          color: "#B89455",
                          opacity: 0.75,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>


                      {/* =========================================
                          FECHA
                      ========================================= */}

                      <div className="flex items-center gap-2">

                        <CalendarDays
                          size={14}
                          strokeWidth={1.5}
                          style={{
                            color: "#B89455",
                          }}
                        />

                        <p
                          className="text-[10px] uppercase tracking-[0.22em]"
                          style={{
                            color: "#8C6A36",
                          }}
                        >
                          {formattedDate}
                        </p>

                      </div>


                      {/* =========================================
                          TÍTULO
                      ========================================= */}

                      <h3
                        className="mt-3 font-serif text-3xl leading-tight sm:text-4xl"
                        style={{
                          color: "var(--theme-primary)",
                        }}
                      >
                        {schedule.title}
                      </h3>


                      {/* =========================================
                          ORNAMENTO
                      ========================================= */}

                      <div
                        className="mt-4 flex items-center gap-3"
                        style={{
                          color: "#B89455",
                        }}
                      >

                        <span className="h-px w-10 bg-current opacity-45" />

                        <span className="text-xs">
                          ❦
                        </span>

                      </div>


                      {/* =========================================
                          INFORMACIÓN
                      ========================================= */}

                      <div className="mt-5 space-y-2">

                        {schedule.time && (

                          <div
                            className="flex items-center gap-2 text-sm"
                            style={{
                              color:
                                "var(--theme-secondary)",
                            }}
                          >

                            <Clock
                              size={15}
                              strokeWidth={1.5}
                              style={{
                                color: "#B89455",
                              }}
                            />

                            <span>
                              {schedule.time}
                            </span>

                          </div>

                        )}


                        {schedule.location && (

                          <div
                            className="flex items-center gap-2 text-sm"
                            style={{
                              color:
                                "var(--theme-secondary)",
                            }}
                          >

                            <MapPin
                              size={15}
                              strokeWidth={1.5}
                              style={{
                                color: "#B89455",
                              }}
                            />

                            <span>
                              {schedule.location.name}
                            </span>

                          </div>

                        )}

                      </div>


                      {/* =========================================
                          DESCRIPCIÓN
                      ========================================= */}

                      {schedule.description && (

                        <p
                          className="mt-5 max-w-md font-serif text-sm italic leading-7"
                          style={{
                            color:
                              "var(--theme-secondary)",
                          }}
                        >
                          {schedule.description}
                        </p>

                      )}


                      {/* =========================================
                          SEPARADOR MOBILE
                      ========================================= */}

                      {index !== schedules.length - 1 && (

                        <div
                          className="mt-10 h-px w-full md:hidden"
                          style={{
                            backgroundColor:
                              "rgba(184,148,85,0.18)",
                          }}
                        />

                      )}

                    </div>

                  </div>

                </div>

              )
            })}

          </div>


          {/* =================================================
              ORNAMENTO FINAL
          ================================================= */}

          <div className="mt-14 flex items-center justify-center gap-4 md:mt-20">

            <span
              className="h-px w-12"
              style={{
                backgroundColor: "#B89455",
                opacity: 0.35,
              }}
            />

            <span
              className="text-sm"
              style={{
                color: "#B89455",
              }}
            >
              ❦
            </span>

            <span
              className="h-px w-12"
              style={{
                backgroundColor: "#B89455",
                opacity: 0.35,
              }}
            />

          </div>

        </div>

      </div>

    </section>
  )
}