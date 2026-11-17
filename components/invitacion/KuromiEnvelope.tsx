
"use client"

type Props = {
  onOpen: () => void
}

export default function KuromiEnvelope({
  onOpen,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex min-h-screen items-center justify-center overflow-hidden px-5 py-10"
      style={{
        background:
          "radial-gradient(circle at 50% 18%, #57346f 0%, #281a3b 43%, #100c18 100%)",
      }}
    >
      {/* LUCES */}
      <div className="pointer-events-none absolute -left-20 top-[5%] h-[420px] w-[180px] rotate-[25deg] bg-fuchsia-400/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 top-[10%] h-[420px] w-[180px] -rotate-[25deg] bg-violet-400/20 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-pink-400/20 blur-3xl" />

      {/* DESTELLOS */}
      <div className="pointer-events-none absolute left-[9%] top-[14%] text-2xl text-pink-200/80">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[18%] text-xl text-violet-200/80">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[17%] top-[43%] text-sm text-white/60">
        ♡
      </div>

      <div className="pointer-events-none absolute right-[13%] top-[52%] text-2xl text-pink-200/70">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-[18%] left-[22%] text-lg text-violet-200/70">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-[24%] right-[22%] text-sm text-white/60">
        ♡
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.45em] text-pink-200 sm:text-xs">
          Una invitación especial
        </p>

        {/* EMBLEMA */}
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-pink-200/40 bg-white/10 text-4xl text-pink-200 shadow-[0_0_40px_rgba(216,180,254,0.2)] backdrop-blur-sm">
          ♡
        </div>

        <h1 className="font-serif text-5xl font-bold tracking-wide text-white drop-shadow-[0_0_18px_rgba(216,180,254,0.4)] sm:text-6xl">
          Kuromi
        </h1>

        <p className="mt-3 text-sm tracking-[0.25em] text-violet-200">
          CUTE · DARK · MAGICAL
        </p>

        <div className="my-6 flex items-center gap-3 text-pink-200/80">
          <span className="h-px w-10 bg-pink-200/40" />
          <span>✦</span>
          <span className="h-px w-10 bg-pink-200/40" />
        </div>

        {/* <p className="mb-8 max-w-xs text-sm leading-7 text-purple-100/80">
          Prepárate para descubrir una celebración llena de magia, diversión y pequeños detalles encantadores.
        </p> */}

        {/* MEDALLÓN KUROMI */}
        <button
          type="button"
          onClick={onOpen}
          aria-label="Abrir invitación"
          className="group relative mx-auto flex h-[290px] w-[290px] items-center justify-center outline-none transition duration-500 hover:-translate-y-2 hover:scale-105 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-8 focus-visible:ring-offset-[#160d20] sm:h-[320px] sm:w-[320px]"
        >
          {/* RESPLANDOR EXTERIOR */}
          <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-2xl transition duration-500 group-hover:bg-fuchsia-400/40" />

          {/* OREJAS DE LA CAPUCHA */}
          <div className="absolute left-[48px] top-0 h-[105px] w-[76px] -rotate-[25deg] rounded-t-[55%] rounded-b-[35%] border-2 border-[#d8a6ec]/70 bg-gradient-to-br from-[#34213f] to-[#100b17] shadow-[0_0_20px_rgba(216,166,236,0.2)] sm:left-[55px]" />

          <div className="absolute right-[48px] top-0 h-[105px] w-[76px] rotate-[25deg] rounded-t-[55%] rounded-b-[35%] border-2 border-[#d8a6ec]/70 bg-gradient-to-bl from-[#34213f] to-[#100b17] shadow-[0_0_20px_rgba(216,166,236,0.2)] sm:right-[55px]" />

          {/* INTERIOR ROSA DE LAS OREJAS */}
          <div className="absolute left-[70px] top-[22px] h-[57px] w-[35px] -rotate-[25deg] rounded-t-full bg-gradient-to-b from-pink-300/80 to-fuchsia-700/50 blur-[1px]" />

          <div className="absolute right-[70px] top-[22px] h-[57px] w-[35px] rotate-[25deg] rounded-t-full bg-gradient-to-b from-pink-300/80 to-fuchsia-700/50 blur-[1px]" />

          {/* MEDALLÓN */}
          <div className="absolute bottom-0 flex h-[265px] w-[265px] items-center justify-center rounded-full border-[3px] border-[#d8a6ec] bg-gradient-to-br from-[#483052] via-[#24172f] to-[#100b17] shadow-[0_0_35px_rgba(216,166,236,0.25),inset_0_0_25px_rgba(244,114,182,0.12)] sm:h-[290px] sm:w-[290px]">

            {/* ANILLO INTERIOR */}
            <div className="absolute inset-[10px] rounded-full border border-dashed border-pink-200/50" />

            <div className="absolute inset-[17px] rounded-full border border-white/10" />

            {/* DESTELLOS */}
            <span className="absolute left-10 top-16 text-xl text-pink-200/80">✦</span>
            <span className="absolute right-10 top-16 text-lg text-violet-200/80">✧</span>
            <span className="absolute bottom-16 left-12 text-sm text-pink-200/70">♡</span>
            <span className="absolute bottom-16 right-12 text-sm text-pink-200/70">♡</span>

            {/* CONTENIDO CENTRAL */}
            <div className="relative z-10 flex flex-col items-center px-8 text-center">

              {/* CALAVERITA ESTILIZADA */}
              <div className="mb-3 flex h-[66px] w-[66px] items-center justify-center rounded-full border border-pink-200/60 bg-gradient-to-br from-[#f5c5e9] to-[#d77ebd] shadow-[0_0_25px_rgba(244,114,182,0.45)] transition duration-500 group-hover:rotate-[-8deg]">
                <svg
                  viewBox="0 0 64 64"
                  className="h-11 w-11"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M32 8C18.7 8 9 18.1 9 31c0 8.2 4.1 14.1 10.1 17.8V55h25.8v-6.2C50.9 45.1 55 39.2 55 31 55 18.1 45.3 8 32 8Z"
                    fill="#29172F"
                  />
                  <path
                    d="M18 30c0-4.1 3-7 6.7-7s6.7 2.9 6.7 7-3 7-6.7 7-6.7-2.9-6.7-7Z"
                    fill="#F7B9E5"
                  />
                  <path
                    d="M32.6 30c0-4.1 3-7 6.7-7S46 25.9 46 30s-3 7-6.7 7-6.7-2.9-6.7-7Z"
                    fill="#F7B9E5"
                  />
                  <path
                    d="m29 39 3-3 3 3-3 6-3-6Z"
                    fill="#F7B9E5"
                  />
                  <path
                    d="M25 48v7m14-7v7"
                    stroke="#29172F"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="m24 13 3 3m13-3-3 3"
                    stroke="#FCE7F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-pink-200 sm:text-[10px]">
                Estás invitado
              </p>

              <div className="my-2 flex items-center gap-2 text-pink-200/70">
                <span className="h-px w-7 bg-pink-200/50" />
                <span className="text-xs">✦</span>
                <span className="h-px w-7 bg-pink-200/50" />
              </div>

              <p className="font-serif text-[25px] font-bold leading-tight tracking-wide text-white drop-shadow-[0_0_12px_rgba(244,114,182,0.4)] sm:text-[27px]">
                UNA NOCHE
              </p>

              <p className="mt-1 text-[12px] font-semibold tracking-[0.28em] text-pink-200">
                INOLVIDABLE
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-violet-200/70">
                Cute but a little spooky
              </p>
            </div>
          </div>

          {/* PEQUEÑO CORAZÓN SUPERIOR */}
          <div className="absolute -right-1 top-[85px] flex h-10 w-10 rotate-12 items-center justify-center rounded-full border border-pink-200/50 bg-[#37213f] text-xl text-pink-300 shadow-lg transition group-hover:rotate-45">
            ♡
          </div>

          {/* DETALLE INFERIOR */}
          <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 text-xl text-pink-200 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]">
            ✦
          </span>
        </button>


        <p className="mt-8 text-sm tracking-wide text-white/80">
          Toca para abrir tu invitación
        </p>

        <div className="mt-4 text-xs tracking-[0.5em] text-pink-200/70">
          ✦ &nbsp; ♡ &nbsp; ✧
        </div>
      </div>

      <div className="absolute bottom-5 text-[9px] uppercase tracking-[0.35em] text-white/30">
        Una celebración llena de magia
      </div>
    </div>
  )
}
