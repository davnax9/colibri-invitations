import Image from "next/image"
import KpopAtmosphere from "./KpopAtmosphere"

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
        background:
          "radial-gradient(circle at 50% 25%, #42176A 0%, #211036 38%, #10091B 68%, #07040B 100%)",
      }}
    >

      <KpopAtmosphere />

      {/* ================================================= */}
      {/* GUERRERA DECORATIVA */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-[-80px]
          h-[560px]
          w-[380px]
          opacity-[0.10]

          sm:-right-28
          sm:h-[650px]
          sm:w-[440px]
          sm:opacity-[0.12]

          lg:-right-20
          lg:h-[720px]
          lg:w-[480px]
          lg:opacity-[0.14]
        "
        aria-hidden="true"
      >
        <Image
          src="/kpop/warriors/kpop1.png"
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="480px"
        />
      </div>

      {/* ================================================= */}
      {/* HALO MORADO */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-fuchsia-600/20
          blur-3xl
        "
      />

      {/* ================================================= */}
      {/* HALO CYAN */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/3
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* ================================================= */}
      {/* DESTELLOS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute left-[8%] top-12 text-2xl text-pink-400/40">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[10%] top-20 text-xl text-cyan-400/40">
        ✧
      </div>

      <div className="pointer-events-none absolute bottom-14 left-[16%] text-sm text-pink-400/40">
        ✦
      </div>

      <div className="pointer-events-none absolute bottom-20 right-[18%] text-lg text-cyan-400/40">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[35%] top-[18%] text-xs text-white/30">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[32%] bottom-[18%] text-xs text-pink-300/30">
        ✦
      </div>

      {/* ================================================= */}
      {/* HALO CENTRAL */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-20
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, #7c3aed 40%, #22d3ee 65%, transparent 75%)",
        }}
      />

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-2xl">

        {/* LABEL */}

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.5em]
            text-pink-200/90
            sm:text-xs
          "
        >
          Este es su momento
        </p>

        {/* ================================================= */}
        {/* SEPARADOR */}
        {/* ================================================= */}

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">

          <span
            className="h-px w-12 opacity-50"
            style={{
              background:
                "linear-gradient(to right, transparent, #ec4899)",
            }}
          />

          <span className="text-sm text-pink-300">
            ✦
          </span>

          <span
            className="h-px w-12 opacity-50"
            style={{
              background:
                "linear-gradient(to left, transparent, #22d3ee)",
            }}
          />

        </div>

        {/* ================================================= */}
        {/* TITULO */}
        {/* ================================================= */}

        <h2
          className="
            mt-8
            text-4xl
            font-black
            leading-tight
            text-[#F5F3FF]
            drop-shadow-[0_0_20px_rgba(217,70,239,0.18)]
            sm:text-5xl
          "
        >
          Una noche
          <br />

          <span
            className="
              bg-gradient-to-r
              from-fuchsia-300
              via-pink-100
              to-cyan-300
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_18px_rgba(217,70,239,0.30)]
            "
          >
            para brillar
          </span>
        </h2>

        {/* ================================================= */}
        {/* PHRASE */}
        {/* ================================================= */}

        {details?.phrase && (
          <p
            className="
              mt-8
              text-base
              leading-8
              text-purple-100/85
              sm:text-lg
            "
          >
            {details.phrase}
          </p>
        )}

        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        {details?.description && (
          <p
            className="
              mt-6
              text-base
              leading-8
              text-purple-100/70
              sm:text-lg
            "
          >
            {details.description}
          </p>
        )}

        {/* ================================================= */}
        {/* ICONOS */}
        {/* ================================================= */}

        <div className="mx-auto mt-10 flex items-center justify-center gap-5">

          <span className="text-pink-400/80">
            ✦
          </span>

          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-pink-300/30
              bg-fuchsia-500/10
              text-xl
              shadow-[0_0_25px_rgba(236,72,153,0.2)]
            "
          >
            🎤
          </span>

          <span className="text-cyan-400/80">
            ✦
          </span>

        </div>

        {/* ================================================= */}
        {/* MENSAJE */}
        {/* ================================================= */}

        <p
          className="
            mx-auto
            mt-8
            max-w-lg
            text-sm
            leading-7
            text-purple-100/55
          "
        >
          La música, las luces y los sueños se unen para
          celebrar una noche que quedará para siempre.
        </p>

        {/* ================================================= */}
        {/* LINEA FINAL */}
        {/* ================================================= */}

        <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent" />

      </div>

    </section>
  )
}