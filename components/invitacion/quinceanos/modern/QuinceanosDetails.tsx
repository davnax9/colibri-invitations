import QuinceanosVintageFrame from "./QuinceanosVintageFrame"

type Props = {
  date: string
  ceremony?: string
  reception?: string
}

export default function QuinceanosDetails({
  date,
  ceremony = "Ceremonia",
  reception = "Recepción",
}: Props) {
  return (
    <section
      className="relative px-5 py-16 sm:px-6 sm:py-24 md:py-28"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* ENCABEZADO */}
        <div className="text-center">

          <p
            className="text-[10px] uppercase tracking-[0.35em] sm:text-xs"
            style={{
              color: "#8C6A36",
            }}
          >
            Guarda la fecha
          </p>

          <h2
            className="mt-3 font-serif text-3xl sm:mt-4 sm:text-5xl md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {date}
          </h2>

          <div
            className="mx-auto mt-6 h-px w-20 sm:mt-8 sm:w-24"
            style={{
              backgroundColor: "#B89455",
            }}
          />

        </div>

        {/* FRAMES */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-7 md:mt-16 md:grid-cols-2 md:gap-8">

          {/* CEREMONIA */}
          <QuinceanosVintageFrame
            variant="subtle"
            className="bg-[#FAF8F3]"
          >
            <div className="px-5 py-7 sm:px-8 sm:py-10 md:px-10 md:py-12 text-center">

              <div
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border sm:h-14 sm:w-14"
                style={{
                  borderColor: "rgba(184,148,85,0.55)",
                  color: "#B89455",
                }}
              >
                ♡
              </div>

              <h3
                className="mt-4 font-serif text-xl sm:mt-5 sm:text-2xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {ceremony}
              </h3>

              <p
                className="mx-auto mt-2 max-w-sm text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-6"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                Acompáñanos a compartir este momento tan especial.
              </p>

            </div>
          </QuinceanosVintageFrame>

          {/* RECEPCIÓN */}
          <QuinceanosVintageFrame
            variant="subtle"
            className="bg-[#FAF8F3]"
          >
            <div className="px-5 py-7 sm:px-8 sm:py-10 md:px-10 md:py-12 text-center">

              <div
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border sm:h-14 sm:w-14"
                style={{
                  borderColor: "rgba(184,148,85,0.55)",
                  color: "#B89455",
                }}
              >
                ✦
              </div>

              <h3
                className="mt-4 font-serif text-xl sm:mt-5 sm:text-2xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {reception}
              </h3>

              <p
                className="mx-auto mt-2 max-w-sm text-xs leading-5 sm:mt-3 sm:text-sm sm:leading-6"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                Después de la ceremonia celebraremos juntos esta noche inolvidable.
              </p>

            </div>
          </QuinceanosVintageFrame>

        </div>
      </div>
    </section>
  )
}