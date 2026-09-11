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
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        backgroundColor:
          "var(--theme-background)",
      }}
    >

      {/* DECORACIÓN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-48 w-48 opacity-10"
        style={{
          background:
            "radial-gradient(circle at top left, var(--theme-accent), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 opacity-10"
        style={{
          background:
            "radial-gradient(circle at bottom right, var(--theme-accent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">

        {/* MARCO */}
        <div
          className="relative border px-7 py-14 sm:px-12 sm:py-16 md:px-20"
          style={{
            borderColor:
              "var(--theme-accent)",
          }}
        >

          {/* SEGUNDO MARCO */}
          <div
            className="pointer-events-none absolute inset-3 border opacity-25"
            style={{
              borderColor:
                "var(--theme-accent)",
            }}
          />

          {/* CABECERA */}
          <div
            className="relative text-center"
            style={{
              color:
                "var(--theme-accent)",
            }}
          >

            <div className="text-4xl">
              ❦
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.45em]">
              Una noche especial
            </p>

          </div>

          {/* TÍTULO */}
          {details.title && (
            <h2
              className="relative mt-8 text-center font-serif text-4xl leading-tight sm:text-5xl"
              style={{
                color:
                  "var(--theme-primary)",
              }}
            >
              {details.title}
            </h2>
          )}

          {/* SUBTÍTULO */}
          {details.subtitle && (
            <p
              className="relative mx-auto mt-6 max-w-xl text-center font-serif text-lg italic leading-8"
              style={{
                color:
                  "var(--theme-secondary)",
              }}
            >
              {details.subtitle}
            </p>
          )}

          {/* DIVISOR */}
          <div
            className="relative mx-auto my-9 flex max-w-xs items-center gap-4"
            style={{
              color:
                "var(--theme-accent)",
            }}
          >

            <span className="h-px flex-1 bg-current opacity-40" />

            <span>
              ✦
            </span>

            <span className="h-px flex-1 bg-current opacity-40" />

          </div>

          {/* DESCRIPCIÓN */}
          {details.description && (
            <p
              className="relative mx-auto max-w-2xl text-center font-serif text-base leading-8 opacity-80 sm:text-lg sm:leading-9"
              style={{
                color:
                  "var(--theme-text)",
              }}
            >
              {details.description}
            </p>
          )}

          {/* ORNAMENTO FINAL */}
          <div
            className="relative mt-10 text-center text-3xl"
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