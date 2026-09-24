"use client"

type Props = {
  onOpen: () => void
}

export default function PrincipitoEnvelope({ onOpen }: Props) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex min-h-screen items-center justify-center overflow-hidden px-5 py-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 35%, #315982 0%, #1b3658 48%, #0a172b 100%)",
      }}
    >
      {/* ESTRELLAS DECORATIVAS */}
      <div className="pointer-events-none absolute left-[9%] top-[13%] text-2xl text-[#f3df9b]/70">
        ✦
      </div>
      <div className="pointer-events-none absolute right-[13%] top-[18%] text-xl text-white/60">
        ✧
      </div>
      <div className="pointer-events-none absolute left-[17%] top-[43%] text-sm text-white/50">
        ✧
      </div>
      <div className="pointer-events-none absolute right-[12%] top-[53%] text-2xl text-[#f3df9b]/60">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[17%] left-[25%] text-lg text-white/50">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[22%] right-[22%] text-sm text-[#f3df9b]/60">
        ✧
      </div>

      {/* LUNA DECORATIVA */}
      <div className="pointer-events-none absolute right-[12%] top-[8%] h-16 w-16 rounded-full bg-[#f5e6b8]/10 blur-xl sm:h-24 sm:w-24" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-5 text-4xl text-[#f3df9b] drop-shadow-lg">
          ✈
        </div>

        <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#e7c878] sm:text-xs">
          Una pequeña aventura comienza
        </p>

        <h1 className="font-serif text-4xl text-white drop-shadow-lg sm:text-5xl">
          El Principito
        </h1>

        <div className="my-5 flex items-center gap-3 text-[#e7c878]/80">
          <span className="h-px w-10 bg-[#e7c878]/50" />
          <span className="text-sm">✦</span>
          <span className="h-px w-10 bg-[#e7c878]/50" />
        </div>

        <p className="mb-8 max-w-xs text-sm leading-6 text-blue-100/80">
          Hay momentos mágicos que merecen abrirse con el corazón.
        </p>

        {/* SOBRE: EL CLIC SE DELEGA A EXPERIENCE */}
        <button
          type="button"
          onClick={onOpen}
          aria-label="Abrir invitación"
          className="group relative mx-auto w-full max-w-[310px] outline-none transition duration-500 hover:-translate-y-1 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-[#e7c878] focus-visible:ring-offset-8 focus-visible:ring-offset-[#172d4d]"
        >
          {/* SOMBRA */}
          <div className="absolute -inset-3 rounded-2xl bg-black/20 blur-xl" />

          {/* CUERPO DEL SOBRE */}
          <div
            className="relative h-[190px] overflow-hidden rounded-xl border border-[#e7c878]/70 shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, #fff9e9 0%, #eee1c2 100%)",
            }}
          >
            {/* TARJETA INTERIOR */}
            <div className="absolute inset-x-4 top-3 bottom-5 rounded-md border border-[#c5a96a]/50 bg-[#faf4e5]">
              <div className="flex h-full flex-col items-center justify-center px-3">
                <span className="mb-2 text-xl text-[#b89a55]">✦</span>

                <p className="font-serif text-lg tracking-wide text-[#34465b]">
                  Una invitación
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#9a7d43]">
                  Muy especial
                </p>
              </div>
            </div>

            {/* SOLAPA SUPERIOR */}
            <div
              className="absolute inset-x-0 top-0 h-[105px] drop-shadow-sm"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background:
                  "linear-gradient(160deg, #e6d3a7 0%, #d4bd87 100%)",
              }}
            />

            {/* LATERALES Y BASE DEL SOBRE */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 100%, 0 0, 50% 58%, 100% 0, 100% 100%)",
                background:
                  "linear-gradient(135deg, #f5e8c9 0%, #e5d2a8 100%)",
              }}
            />

            {/* SELLO DE CERA */}
            <div className="absolute left-1/2 top-[57%] flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#d8b96a] bg-[#263e56] text-3xl shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <span className="drop-shadow">🌹</span>
            </div>

            {/* BRILLO */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
          </div>
        </button>

        <p className="mt-8 text-sm tracking-wide text-white/85">
          Toca el sobre para abrir tu invitación
        </p>

        <div className="mt-4 text-xs tracking-[0.5em] text-[#e7c878]/80">
          ✦ &nbsp; ✧ &nbsp; ✦
        </div>
      </div>

      {/* PIE */}
      <div className="absolute bottom-5 text-[9px] uppercase tracking-[0.35em] text-white/35">
        Con cariño, para ti
      </div>
    </div>
  )
}