import Image from "next/image"

export default function KpopWarriorsDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >

      {/* ================================================= */}
      {/* GUERRERA MORADA */}
      {/* ================================================= */}

      <div
        className="
          absolute

          /* ========================= */
          /* MOBILE */
          /* ========================= */

          left-[-8px]
          top-[145px]
          h-[270px]
          w-[180px]
          opacity-[0.24]

          /* ========================= */
          /* TABLET */
          /* ========================= */

          sm:left-[-45px]
          sm:top-[190px]
          sm:h-[400px]
          sm:w-[260px]
          sm:opacity-[0.22]

          /* ========================= */
          /* DESKTOP */
          /* ========================= */

          lg:left-[-70px]
          lg:top-[180px]
          lg:h-[600px]
          lg:w-[390px]
          lg:opacity-[0.24]
        "
      >
        <Image
          src="/kpop/warriors/kpop1.png"
          alt=""
          fill
          priority
          className="object-contain object-center"
          sizes="390px"
        />
      </div>

      {/* ================================================= */}
      {/* GUERRERA CYAN */}
      {/* ================================================= */}

      <div
        className="
          absolute

          /* ========================= */
          /* MOBILE */
          /* ========================= */

          right-[-8px]
          top-[175px]
          h-[270px]
          w-[180px]
          opacity-[0.22]

          /* ========================= */
          /* TABLET */
          /* ========================= */

          sm:right-[-45px]
          sm:top-[190px]
          sm:h-[400px]
          sm:w-[260px]
          sm:opacity-[0.20]

          /* ========================= */
          /* DESKTOP */
          /* ========================= */

          lg:right-[-70px]
          lg:top-[180px]
          lg:h-[600px]
          lg:w-[390px]
          lg:opacity-[0.22]
        "
      >
        <Image
          src="/kpop/warriors/kpop2.png"
          alt=""
          fill
          className="object-contain object-center"
          sizes="390px"
        />
      </div>

      {/* ================================================= */}
      {/* GLOW MORADO */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -left-20
          top-[180px]
          h-64
          w-64
          rounded-full
          bg-fuchsia-600/15
          blur-3xl

          sm:-left-24
          sm:top-[240px]
          sm:bg-fuchsia-600/20
        "
      />

      {/* ================================================= */}
      {/* GLOW CYAN */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -right-20
          top-[180px]
          h-64
          w-64
          rounded-full
          bg-cyan-500/10
          blur-3xl

          sm:-right-24
          sm:top-[240px]
          sm:bg-cyan-500/15
        "
      />

    </div>
  )
}