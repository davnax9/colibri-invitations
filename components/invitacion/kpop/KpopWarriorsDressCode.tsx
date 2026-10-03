import Image from "next/image"

type Props = {
  dressCode?: string | null
}

export default function KpopWarriorsDressCode({
  dressCode,
}: Props) {

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-20
        text-center
      "
      style={{
        background:
          "linear-gradient(180deg, #080510 0%, #12081F 50%, #080510 100%)",
      }}
    >

      {/* GUERRERA */}

      <div
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-[-120px]
          h-[520px]
          w-[360px]
          opacity-[0.08]

          sm:-right-28
          sm:h-[620px]
          sm:w-[430px]
          sm:opacity-[0.10]

          lg:-right-20
          lg:h-[700px]
          lg:w-[480px]
          lg:opacity-[0.12]
        "
        aria-hidden="true"
      >
        <Image
          src="/kpop/warriors/kpop2.png"
          alt=""
          fill
          className="object-contain object-bottom"
          sizes="480px"
        />
      </div>

      {/* GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-2xl">

        <p className="text-[10px] uppercase tracking-[0.5em] text-pink-300/80">
          The look
        </p>

        <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
          Dress to
          <span className="text-cyan-300">
            {" "}shine
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-purple-100/60">
          Esta noche no hay reglas para brillar.
          Ven con tu mejor estilo K-Pop.
        </p>

        {/* CARD */}

        <div
          className="
            relative
            mx-auto
            mt-10
            max-w-md
            overflow-hidden
            rounded-[2rem]
            border
            border-cyan-300/15
            bg-gradient-to-br
            from-fuchsia-500/10
            via-purple-500/5
            to-cyan-500/10
            p-8
            shadow-[0_0_50px_rgba(34,211,238,0.08)]
          "
        >

          <div className="text-5xl">
            ✨
          </div>

          <p className="mt-5 text-[9px] uppercase tracking-[0.45em] text-purple-200/40">
            Dress code
          </p>

          <h3 className="mt-3 text-2xl font-black uppercase tracking-wide text-white">
            {dressCode || "K-POP STYLE"}
          </h3>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-pink-300/70">
            Shine • Dance • Be yourself
          </p>

        </div>

        {/* DETALLES */}

        <div className="mt-8 flex justify-center gap-6 text-sm">

          <span className="text-pink-400/70">
            ✦
          </span>

          <span className="text-purple-300/50">
            K-POP
          </span>

          <span className="text-cyan-400/70">
            ✦
          </span>

        </div>

      </div>

    </section>
  )
}