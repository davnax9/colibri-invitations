type Props = {
  details: {
    fatherName: string | null
    motherName: string | null
    godfatherName: string | null
    godmotherName: string | null
    familyMessage: string | null
  } | null
}

export default function QuinceanosFamily({details}: Props) {

  if (!details) {
    return null
  }

  const hasParents = Boolean(details.fatherName) || Boolean(details.motherName)
  const hasGodparents = Boolean(details.godfatherName) || Boolean(details.godmotherName)
  const hasMessage = Boolean(details.familyMessage)
  
  if (!hasParents && !hasGodparents && !hasMessage) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden px-6 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >

      {/* ============================================
          DECORACIÓN DE FONDO
      ============================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(184,148,85,0.45), transparent)",
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


      <div className="relative mx-auto max-w-4xl">

        {/* ============================================
            ENCABEZADO
        ============================================ */}

        <div className="text-center">

          <div
            className="mb-7 flex items-center justify-center gap-4"
            style={{
              color: "#B89455",
            }}
          >
            <span className="h-px w-12 bg-current opacity-50 sm:w-16" />

            <span className="text-xl">
              ❦
            </span>

            <span className="h-px w-12 bg-current opacity-50 sm:w-16" />
          </div>


          <p
            className="text-[10px] uppercase tracking-[0.45em]"
            style={{
              color: "#8C6A36",
            }}
          >
            Con amor y gratitud
          </p>


          <h2
            className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Personas especiales
          </h2>


          <p
            className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7 sm:text-lg"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Hay personas que hacen que cada momento
            sea todavía más especial.
          </p>

        </div>


        {/* ============================================
            PADRES
        ============================================ */}

        {hasParents && (
          <div className="mt-16 text-center">

            <p
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{
                color: "#8C6A36",
              }}
            >
              Mis padres
            </p>


            <div
              className="mx-auto mt-6 max-w-2xl border px-8 py-10 sm:px-14"
              style={{
                borderColor: "rgba(184,148,85,0.35)",
                backgroundColor:
                  "rgba(250,248,243,0.35)",
              }}
            >

              <div
                className="mx-auto mb-7 flex items-center justify-center gap-3"
                style={{
                  color: "#B89455",
                }}
              >

                <span className="h-px w-10 bg-current opacity-40" />

                <span className="text-sm">
                  ✦
                </span>

                <span className="h-px w-10 bg-current opacity-40" />

              </div>


              <div className="space-y-2">

                {details.fatherName && (
                  <p
                    className="font-serif text-2xl sm:text-3xl"
                    style={{
                      color:
                        "var(--theme-primary)",
                    }}
                  >
                    {details.fatherName}
                  </p>
                )}

                {details.fatherName &&
                  details.motherName && (
                    <p
                      className="py-1 font-serif text-lg italic"
                      style={{
                        color: "#B89455",
                      }}
                    >
                      &
                    </p>
                  )}

                {details.motherName && (
                  <p
                    className="font-serif text-2xl sm:text-3xl"
                    style={{
                      color:
                        "var(--theme-primary)",
                    }}
                  >
                    {details.motherName}
                  </p>
                )}

              </div>

            </div>

          </div>
        )}


        {/* ============================================
            PADRINOS
        ============================================ */}

        {hasGodparents && (
          <div className="mt-16 text-center">

            <div
              className="mx-auto mb-12 h-px w-20"
              style={{
                backgroundColor: "#B89455",
                opacity: 0.35,
              }}
            />


            <p
              className="text-[10px] uppercase tracking-[0.4em]"
              style={{
                color: "#8C6A36",
              }}
            >
              Mis padrinos
            </p>


            <div className="mt-6 space-y-3">

              {details.godfatherName && (
                <p
                  className="font-serif text-2xl sm:text-3xl"
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  {details.godfatherName}
                </p>
              )}

              {details.godfatherName &&
                details.godmotherName && (
                  <p
                    className="font-serif text-lg italic"
                    style={{
                      color: "#B89455",
                    }}
                  >
                    &
                  </p>
                )}

              {details.godmotherName && (
                <p
                  className="font-serif text-2xl sm:text-3xl"
                  style={{
                    color:
                      "var(--theme-primary)",
                  }}
                >
                  {details.godmotherName}
                </p>
              )}

            </div>

          </div>
        )}


        {/* ============================================
            MENSAJE
        ============================================ */}

        {hasMessage && (
          <div className="mx-auto mt-16 max-w-2xl text-center">

            <div
              className="mb-8 flex items-center justify-center gap-4"
              style={{
                color: "#B89455",
              }}
            >

              <span className="h-px w-12 bg-current opacity-40" />

              <span className="text-sm">
                ❦
              </span>

              <span className="h-px w-12 bg-current opacity-40" />

            </div>


            <p
              className="font-serif text-xl italic leading-8 sm:text-2xl"
              style={{
                color:
                  "var(--theme-secondary)",
              }}
            >
              “{details.familyMessage}”
            </p>

          </div>
        )}


        {/* ============================================
            CIERRE
        ============================================ */}

        <div className="mt-14 flex items-center justify-center gap-4">

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
            ✦
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

    </section>
  )
}