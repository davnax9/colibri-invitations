"use client"

type Props = {
  onOpen: () => void
}

export default function KpopWarriorsEnvelope({
  onOpen,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex min-h-screen items-center justify-center overflow-hidden px-5 py-10"
      style={{
        background:
          "radial-gradient(circle at 50% 20%, #5b215f 0%, #24102f 42%, #090712 100%)",
      }}
    >

      {/* ================================================= */}
      {/* LUCES DE ESCENARIO */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute -left-20 top-[5%] h-[420px] w-[180px] rotate-[25deg] opacity-30 blur-2xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(236,72,153,0.9), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-20 top-[8%] h-[420px] w-[180px] -rotate-[25deg] opacity-30 blur-2xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(34,211,238,0.9), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[18%] h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl"
      />

      {/* ================================================= */}
      {/* DESTELLOS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-[9%] top-[14%] text-2xl text-pink-300/80">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[18%] text-xl text-cyan-300/80">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[17%] top-[43%] text-sm text-white/60">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[13%] top-[52%] text-2xl text-pink-300/70">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[18%] left-[22%] text-lg text-cyan-300/70">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[24%] right-[22%] text-sm text-white/60">
        ✧
      </div>

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* ICONO */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-pink-300/50 bg-white/10 text-3xl shadow-[0_0_35px_rgba(236,72,153,0.35)] backdrop-blur-sm">
          🎤
        </div>

        {/* ETIQUETA */}
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.45em] text-pink-200 sm:text-xs">
          Una tarde para recordar
        </p>

        {/* TITULO */}
        <h1
          className="text-4xl font-black tracking-[0.08em] text-white drop-shadow-[0_0_18px_rgba(236,72,153,0.5)] sm:text-5xl"
        >
          K-POP
        </h1>

        <h2 className="mt-1 text-2xl font-bold tracking-[0.18em] text-cyan-200 drop-shadow-[0_0_14px_rgba(34,211,238,0.45)] sm:text-3xl">
          WARRIORS
        </h2>

        {/* SEPARADOR */}
        <div className="my-5 flex items-center gap-3 text-pink-300/80">
          <span className="h-px w-10 bg-pink-300/40" />

          <span className="text-sm">
            ✦
          </span>

          <span className="h-px w-10 bg-pink-300/40" />
        </div>

        {/* TEXTO */}
        <p className="mb-8 max-w-xs text-sm leading-6 text-purple-100/80">
          Una tarde llena de música, brillo y momentos que queremos compartir contigo.
        </p>

        {/* ================================================= */}
        {/* TARJETA / SOBRE */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={onOpen}
          aria-label="Abrir invitación"
          className="group relative mx-auto w-full max-w-[310px] outline-none transition duration-500 hover:-translate-y-1 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-8 focus-visible:ring-offset-[#160d20]"
        >

          {/* SOMBRA */}

          <div className="absolute -inset-4 rounded-3xl bg-fuchsia-500/20 blur-2xl" />

          {/* TARJETA */}

          <div
            className="relative h-[195px] overflow-hidden rounded-2xl border border-pink-300/50 shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, #24142f 0%, #130b1b 100%)",
            }}
          >

            {/* LUCES INTERNAS */}

            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-28 rotate-[25deg] bg-pink-500/20 blur-2xl" />

            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-28 -rotate-[25deg] bg-cyan-400/20 blur-2xl" />

            {/* BORDE DECORATIVO */}

            <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />

            {/* CONTENIDO */}

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">

              <div className="mb-4 text-4xl drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]">
                🎤
              </div>

              <p className="text-[10px] uppercase tracking-[0.4em] text-pink-200/80">
                Estas invitado
              </p>

              <p className="mt-3 text-xl font-bold tracking-[0.12em] text-white">
                UNA NOCHE
              </p>

              <p className="mt-1 text-sm tracking-[0.28em] text-cyan-200">
                INOLVIDABLE
              </p>

            </div>

            {/* DESTELLOS */}

            <div className="absolute left-5 top-5 text-sm text-pink-300/70">
              ✦
            </div>

            <div className="absolute right-5 top-7 text-xs text-cyan-300/70">
              ✧
            </div>

            <div className="absolute bottom-5 left-8 text-xs text-cyan-300/60">
              ✧
            </div>

            <div className="absolute bottom-5 right-8 text-sm text-pink-300/70">
              ✦
            </div>

            {/* BRILLO */}

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

          </div>

        </button>

        {/* INDICACIÓN */}

        <p className="mt-8 text-sm tracking-wide text-white/80">
          Toca para abrir tu invitación
        </p>

        {/* DECORACIÓN */}

        <div className="mt-4 text-xs tracking-[0.5em] text-pink-300/70">
          ✦ &nbsp; ✧ &nbsp; ✦
        </div>

      </div>

      {/* ================================================= */}
      {/* PIE */}
      {/* ================================================= */}

      <div className="absolute bottom-5 text-[9px] uppercase tracking-[0.35em] text-white/30">
        Que inicie la musica
      </div>

    </div>
  )
}