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
      className="relative px-6 py-24 sm:py-32"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p
            className="text-xs uppercase tracking-[0.35em]"
            style={{
              color: "#8C6A36",
            }}
          >
            Guarda la fecha
          </p>

          <h2
            className="mt-4 font-serif text-4xl sm:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {date}
          </h2>

          <div
            className="mx-auto mt-8 h-px w-24"
            style={{
              backgroundColor: "#B89455",
            }}
          />

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <QuinceanosVintageFrame
            variant="subtle"
            className="bg-[#FAF8F3]"
          >

            <div className="px-10 py-12 text-center">

              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(184,148,85,0.55)",
                  color: "#B89455",
                }}
              >
                ♡
              </div>

              <h3
                className="mt-6 font-serif text-2xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {ceremony}
              </h3>

              <p
                className="mt-3 text-sm leading-6"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                Acompáñanos a compartir este momento tan especial.
              </p>

            </div>

          </QuinceanosVintageFrame>


          <QuinceanosVintageFrame
            variant="subtle"
            className="bg-[#FAF8F3]"
          >

            <div className="px-10 py-12 text-center">

              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(184,148,85,0.55)",
                  color: "#B89455",
                }}
              >
                ✦
              </div>

              <h3
                className="mt-6 font-serif text-2xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {reception}
              </h3>

              <p
                className="mt-3 text-sm leading-6"
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