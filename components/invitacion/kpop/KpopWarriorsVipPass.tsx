import Image from "next/image"

type Props = {
  childName: string
  eventDate: Date
  dressCode?: string | null
}

export default function KpopWarriorsVipPass({
  childName,
  eventDate,
  dressCode,
}: Props) {

  const formattedDate = eventDate.toLocaleDateString(
    "es-MX",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  )

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-20
        sm:py-24
      "
      style={{
        background:
          "radial-gradient(circle at 50% 35%, #32134D 0%, #180B29 45%, #080510 90%)",
      }}
    >

      {/* ================================================= */}
      {/* GUERRERA DECORATIVA */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          bottom-[-80px]
          h-[500px]
          w-[340px]
          opacity-[0.08]

          sm:-left-28
          sm:h-[620px]
          sm:w-[420px]
          sm:opacity-[0.10]

          lg:-left-20
          lg:h-[700px]
          lg:w-[480px]
          lg:opacity-[0.12]
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
      {/* GLOW MAGENTA */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-600/10
          blur-3xl
        "
      />

      {/* ================================================= */}
      {/* DESTELLOS */}
      {/* ================================================= */}

      <span className="pointer-events-none absolute left-[10%] top-16 text-xl text-pink-400/50">
        ✦
      </span>

      <span className="pointer-events-none absolute right-[12%] top-24 text-lg text-cyan-400/50">
        ✧
      </span>

      <span className="pointer-events-none absolute bottom-20 left-[18%] text-sm text-cyan-400/40">
        ✦
      </span>

      <span className="pointer-events-none absolute bottom-16 right-[20%] text-xl text-pink-400/40">
        ✧
      </span>

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-xl">

        {/* LABEL */}

        <div className="text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-cyan-300/80">
            Acceso de invitado
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              uppercase
              tracking-[0.12em]
              text-white
              sm:text-4xl
            "
          >
            PASE VIP
            <span className="text-fuchsia-400">
              {" "}K-POP
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

        </div>

        {/* ================================================= */}
        {/* TARJETA */}
        {/* ================================================= */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            shadow-[0_0_60px_rgba(217,70,239,0.12)]
            backdrop-blur-md
          "
        >

          {/* BORDE DE LUZ */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-3xl
              border
              border-fuchsia-400/20
            "
          />

          {/* GLOW SUPERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-32
              w-64
              -translate-x-1/2
              rounded-full
              bg-fuchsia-500/10
              blur-3xl
            "
          />

          <div className="relative p-7 sm:p-10">

            {/* PARTE SUPERIOR */}

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="text-[9px] uppercase tracking-[0.4em] text-purple-200/50">
                  Artista principal
                </p>

                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  GUERRERAS K-POP
                </p>

              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-pink-300/20
                  bg-fuchsia-500/10
                  text-xl
                "
              >
                ✦
              </div>

            </div>

            {/* NOMBRE */}

            <div className="mt-10 text-center">

              <p className="text-[9px] uppercase tracking-[0.45em] text-purple-200/50">
                Estrella de la noche
              </p>

              <h3
                className="
                  mt-3
                  text-4xl
                  font-black
                  tracking-wide
                  text-white
                  drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]
                  sm:text-5xl
                "
              >
                {childName}
              </h3>

            </div>

            {/* INFORMACIÓN */}

            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >

              <div
                className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-black/20
                  p-4
                  text-center
                "
              >

                <p className="text-[9px] uppercase tracking-[0.35em] text-purple-200/40">
                  Fecha
                </p>

                <p className="mt-2 text-sm text-purple-100/85">
                  {formattedDate}
                </p>

              </div>

              {/* <div
                className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-black/20
                  p-4
                  text-center
                "
              >

                <p className="text-[9px] uppercase tracking-[0.35em] text-purple-200/40">
                  Dress code
                </p>

                <p className="mt-2 text-sm text-cyan-200/85">
                  {dressCode || "K-POP STYLE"}
                </p>

              </div> */}

            </div>

            {/* CÓDIGO VISUAL */}

            <div className="mt-8 flex items-center gap-2">

              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-fuchsia-400/30" />

              <div className="flex gap-1">

                <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="h-2 w-2 rounded-full bg-cyan-400" />

              </div>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />

            </div>

            <p className="mt-6 text-center text-[9px] uppercase tracking-[0.4em] text-purple-200/40">
              Estas en la lista de invitados
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}