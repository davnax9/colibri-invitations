type Props = {
  details: {
    dressCode: string | null
  } | null
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"

export default function QuinceanosDressCode({
  details,
}: Props) {

  if (!details?.dressCode) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden px-6 py-24 text-center sm:px-10 md:py-32"
      style={{
        backgroundColor:
          "var(--theme-background)",
      }}
    >

      {/* BRILLO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">

        {/* ORNAMENTO */}

        <div
          className="mb-7 flex items-center justify-center gap-4"
          style={{
            color: GOLD,
          }}
        >

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

          <span className="text-lg">
            ✦
          </span>

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

        </div>


        {/* TITULO */}

        <p
          className="text-[10px] uppercase tracking-[0.45em]"
          style={{
            color: DARK_GOLD,
          }}
        >
          Código de vestimenta
        </p>


        {/* ICONO */}

        <div
          className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border"
          style={{
            borderColor:
              "rgba(184,148,85,0.50)",
            color: GOLD,
          }}
        >

          <span className="font-serif text-xl">
            ✦
          </span>

        </div>


        {/* DRESS CODE */}

        <h2
          className="mt-7 font-serif text-4xl sm:text-5xl"
          style={{
            color:
              "var(--theme-primary)",
          }}
        >
          {details.dressCode}
        </h2>


        {/* ORNAMENTO */}

        <div
          className="mx-auto mt-6 flex items-center justify-center gap-3"
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


        {/* MENSAJE */}

        <p
          className="mx-auto mt-6 max-w-md font-serif text-base italic leading-7 sm:text-lg"
          style={{
            color:
              "var(--theme-secondary)",
          }}
        >
          Queremos que formes parte de esta
          celebración luciendo increíble.
        </p>


        {/* DESTELLO */}

        <div
          className="mx-auto mt-10 text-sm"
          style={{
            color: GOLD,
            textShadow:
              "0 0 10px rgba(184,148,85,0.35)",
          }}
        >
          ✧
        </div>

      </div>

    </section>
  )
}