import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }
  details: {
    title: string | null
    subtitle: string | null
    quinceaneraName: string | null
    phrase: string | null
  } | null
  event: {
    eventDate: Date
  }
}

export default function QuinceanosLuxuryHero({
  coverPhoto,
  details,
  event,
}: Props) {
  const quinceaneraName = details?.quinceaneraName ?? "Mis XV Años"

  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-5
        py-20
        sm:px-8
        md:px-12
      "
      style={{
        backgroundColor: "var(--theme-primary)",
      }}
    >
      {/* ========================================================= */}
      {/* FOTO DE FONDO */}
      {/* ========================================================= */}

      {coverPhoto && (
        <>
          <Image
            src={coverPhoto.url}
            alt={
              coverPhoto.title ??
              `Fotografía de ${quinceaneraName}`
            }
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
              scale-[1.015]
            "
          />

          {/* ===================================================== */}
          {/* CAPA CINEMATOGRÁFICA */}
          {/* ===================================================== */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.18) 0%,
                  rgba(0,0,0,0.08) 25%,
                  rgba(0,0,0,0.18) 50%,
                  rgba(0,0,0,0.42) 100%
                )
              `,
            }}
          />

          {/* Oscurecimiento central MUY sutil */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.38) 100%)",
            }}
          />

          {/* ===================================================== */}
          {/* LUZ CHAMPAGNE */}
          {/* ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[42%]
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-3xl
              sm:h-[600px]
              sm:w-[600px]
            "
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.055,
            }}
          />

          {/* ===================================================== */}
          {/* VIÑETA */}
          {/* ===================================================== */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.32) 100%)",
            }}
          />
        </>
      )}

      {/* ========================================================= */}
      {/* SI NO HAY FOTO */}
      {/* ========================================================= */}

      {!coverPhoto && (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at center,
                var(--theme-accent),
                transparent 45%
              )
            `,
            opacity: 0.08,
          }}
        />
      )}

      {/* ========================================================= */}
      {/* MARCO EXTERIOR */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          sm:inset-7
          md:inset-12
        "
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.72,
        }}
      />

      {/* ========================================================= */}
      {/* MARCO INTERIOR SUTIL */}
      {/* ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-7
          border
          sm:inset-10
          md:inset-16
        "
        style={{
          borderColor: "var(--theme-background)",
          opacity: 0.22,
        }}
      />

      {/* ========================================================= */}
      {/* ESQUINAS */}
      {/* ========================================================= */}

      <div
        className="pointer-events-none absolute left-4 top-4 h-12 w-12 sm:left-7 sm:top-7 sm:h-16 sm:w-16 md:left-12 md:top-12"
        style={{
          borderLeft: "1px solid var(--theme-accent)",
          borderTop: "1px solid var(--theme-accent)",
        }}
      />

      <div
        className="pointer-events-none absolute right-4 top-4 h-12 w-12 sm:right-7 sm:top-7 sm:h-16 sm:w-16 md:right-12 md:top-12"
        style={{
          borderRight: "1px solid var(--theme-accent)",
          borderTop: "1px solid var(--theme-accent)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 sm:bottom-7 sm:left-7 sm:h-16 sm:w-16 md:bottom-12 md:left-12"
        style={{
          borderBottom: "1px solid var(--theme-accent)",
          borderLeft: "1px solid var(--theme-accent)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16 md:bottom-12 md:right-12"
        style={{
          borderBottom: "1px solid var(--theme-accent)",
          borderRight: "1px solid var(--theme-accent)",
        }}
      />

      {/* ========================================================= */}
      {/* CONTENIDO */}
      {/* ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* PRETÍTULO */}
        <div className="flex items-center justify-center gap-4">
          <span
            className="h-px w-8 sm:w-14 md:w-20"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.7,
            }}
          />

          <span
            className="text-[9px] sm:text-[10px]"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            ◆
          </span>

          <span
            className="h-px w-8 sm:w-14 md:w-20"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.7,
            }}
          />
        </div>

        <p
          className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.38em]
            text-white
            sm:mt-6
            sm:text-xs
            sm:tracking-[0.5em]
          "
        >
          La celebración de mis XV años
        </p>

        {/* ======================================================= */}
        {/* NOMBRE */}
        {/* ======================================================= */}

        <h1
          className="
            mt-5
            font-serif
            text-5xl
            font-light
            leading-[0.95]
            text-white
            drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]
            sm:mt-7
            sm:text-7xl
            md:mt-8
            md:text-8xl
            lg:text-9xl
          "
        >
          {quinceaneraName}
        </h1>

        {/* ======================================================= */}
        {/* FRASE */}
        {/* ======================================================= */}

        {details?.phrase && (
          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              text-sm
              italic
              leading-7
              text-white/90
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]
              sm:mt-8
              sm:text-base
            "
          >
            “{details.phrase}”
          </p>
        )}

        {/* ======================================================= */}
        {/* DIVISOR */}
        {/* ======================================================= */}

        <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
          <span
            className="h-px w-8 sm:w-12"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.75,
            }}
          />

          <span
            className="text-[8px]"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            ✦
          </span>

          <span
            className="h-px w-8 sm:w-12"
            style={{
              backgroundColor: "var(--theme-accent)",
              opacity: 0.75,
            }}
          />
        </div>

        {/* ======================================================= */}
        {/* FECHA */}
        {/* ======================================================= */}

        <p
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/90
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
            sm:mt-6
            sm:text-sm
          "
        >
          {formattedDate}
        </p>
      </div>

      {/* ========================================================= */}
      {/* DESTELLOS */}
      {/* ========================================================= */}

      <span
        className="pointer-events-none absolute left-[12%] top-[27%] text-[10px] sm:text-xs"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.65,
        }}
      >
        ✦
      </span>

      <span
        className="pointer-events-none absolute right-[13%] top-[34%] text-[8px] sm:text-[10px]"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.5,
        }}
      >
        ✧
      </span>

      <span
        className="pointer-events-none absolute bottom-[24%] left-[15%] text-[8px]"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.45,
        }}
      >
        ✧
      </span>

      <span
        className="pointer-events-none absolute bottom-[20%] right-[15%] text-[10px]"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.55,
        }}
      >
        ✦
      </span>
    </section>
  )
}