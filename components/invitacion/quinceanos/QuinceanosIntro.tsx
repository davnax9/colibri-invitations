type Props = {
  details: {
    title: string | null
    subtitle: string | null
    description: string | null
  } | null
}

export default function QuinceanosIntro({
  details,
}: Props) {
  if (
    !details?.title &&
    !details?.subtitle &&
    !details?.description
  ) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden px-6 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12"
      style={{
        backgroundColor:
          "var(--theme-background)",
      }}
    >

      {/* =====================================================
          DECORACIÓN
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-36 w-36 opacity-10 sm:h-48 sm:w-48"
        style={{
          background:
            "radial-gradient(circle at top left, var(--theme-accent), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 opacity-10 sm:h-56 sm:w-56"
        style={{
          background:
            "radial-gradient(circle at bottom right, var(--theme-accent), transparent 70%)",
        }}
      />


      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="relative mx-auto max-w-4xl">

        {/* =================================================
            MARCO
        ================================================= */}

        <div
          className="relative border px-5 py-9 sm:px-10 sm:py-12 md:px-20 md:py-16"
          style={{
            borderColor:
              "var(--theme-accent)",
          }}
        >

          {/* SEGUNDO MARCO */}

          <div
            className="pointer-events-none absolute inset-2 border opacity-25 sm:inset-3"
            style={{
              borderColor:
                "var(--theme-accent)",
            }}
          />


          {/* =================================================
              CABECERA
          ================================================= */}

          <div
            className="relative text-center"
            style={{
              color:
                "var(--theme-accent)",
            }}
          >

            <div className="text-3xl sm:text-4xl">
              ❦
            </div>

            <p className="mt-3 text-[10px] uppercase tracking-[0.4em] sm:mt-5 sm:text-xs sm:tracking-[0.45em]">
              Una noche especial
            </p>

          </div>


          {/* =================================================
              TÍTULO
          ================================================= */}

          {details.title && (
            <h2
              className="relative mt-6 text-center font-serif text-3xl leading-tight sm:mt-8 sm:text-5xl"
              style={{
                color:
                  "var(--theme-primary)",
              }}
            >
              {details.title}
            </h2>
          )}


          {/* =================================================
              SUBTÍTULO
          ================================================= */}

          {details.subtitle && (
            <p
              className="relative mx-auto mt-4 max-w-xl text-center font-serif text-base italic leading-7 sm:mt-6 sm:text-lg sm:leading-8"
              style={{
                color:
                  "var(--theme-secondary)",
              }}
            >
              {details.subtitle}
            </p>
          )}


          {/* =================================================
              DIVISOR
          ================================================= */}

          <div
            className="relative mx-auto my-6 flex max-w-xs items-center gap-3 sm:my-9 sm:gap-4"
            style={{
              color:
                "var(--theme-accent)",
            }}
          >

            <span className="h-px flex-1 bg-current opacity-40" />

            <span className="text-sm sm:text-base">
              ✦
            </span>

            <span className="h-px flex-1 bg-current opacity-40" />

          </div>


          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          {details.description && (
            <p
              className="relative mx-auto max-w-2xl text-center font-serif text-sm leading-7 opacity-80 sm:text-lg sm:leading-9"
              style={{
                color:
                  "var(--theme-text)",
              }}
            >
              {details.description}
            </p>
          )}


          {/* =================================================
              ORNAMENTO FINAL
          ================================================= */}

          <div
            className="relative mt-7 text-center text-2xl sm:mt-10 sm:text-3xl"
            style={{
              color:
                "var(--theme-accent)",
            }}
          >
            ❧
          </div>

        </div>

      </div>

    </section>
  )
}