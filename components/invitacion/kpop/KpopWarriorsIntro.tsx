type Props = {
  details: {
    title: string | null
    subtitle: string | null
    description: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
    quinceaneraName: string | null
    childName: string | null
    dressCode: string | null
  } | null
}

export default function KpopWarriorsIntro({
  details,
}: Props) {

  return (
    <section
      className="relative overflow-hidden px-6 py-24 text-center"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >

      {/* ================================================= */}
      {/* DESTELLOS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-[8%] top-12 text-2xl text-pink-400/30">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[10%] top-20 text-xl text-cyan-400/30">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-14 left-[16%] text-sm text-pink-400/30">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-20 right-[18%] text-lg text-cyan-400/30">
        ✧
      </div>

      {/* ================================================= */}
      {/* HALO CENTRAL */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, #22d3ee 45%, transparent 70%)",
        }}
      />

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-2xl">

        {/* LABEL */}

        <p
          className="text-[10px] font-medium uppercase tracking-[0.5em] sm:text-xs"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          This is her moment
        </p>

        {/* SEPARADOR */}

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">

          <span
            className="h-px w-12 opacity-40"
            style={{
              backgroundColor: "var(--theme-secondary)",
            }}
          />

          <span
            className="text-sm"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            ✦
          </span>

          <span
            className="h-px w-12 opacity-40"
            style={{
              backgroundColor: "var(--theme-secondary)",
            }}
          />

        </div>

        {/* TITULO */}

        <h2
          className="mt-8 text-4xl font-black leading-tight sm:text-5xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Una noche
          <br />
          para brillar
        </h2>

        {/* PHRASE */}

        {details?.phrase && (
          <p className="mt-8 text-base leading-8 opacity-75 sm:text-lg">
            {details.phrase}
          </p>
        )}

        {/* DESCRIPTION */}

        {details?.description && (
          <p className="mt-6 text-base leading-8 opacity-75 sm:text-lg">
            {details.description}
          </p>
        )}

        {/* FRASE DECORATIVA */}

        <div className="mx-auto mt-10 flex items-center justify-center gap-5">

          <span className="text-pink-400/60">
            ✦
          </span>

          <span className="text-xl">
            🎤
          </span>

          <span className="text-cyan-400/60">
            ✦
          </span>

        </div>

        {/* PEQUEÑO MENSAJE */}

        <p className="mx-auto mt-8 max-w-lg text-sm leading-7 opacity-60">
          La música, las luces y los sueños se unen para
          celebrar una noche que quedará para siempre.
        </p>

      </div>

    </section>
  )
}