import Image from "next/image"
import KpopWarriorsDecor from "./KpopWarriorsDecor"
import KpopAtmosphere from "./KpopAtmosphere"

type Props = {
  coverPhoto?: {
    url: string
  }

  details: {
    quinceaneraName?: string | null
  } | null

  event: {
    eventDate: Date
  }
}

export default function KpopWarriorsHero({
  coverPhoto,
  details,
  event,
}: Props) {

  const childName =
    details?.quinceaneraName ?? "Nuestra estrella"

  const formattedDate = event.eventDate.toLocaleDateString(
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
      className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-6 py-20"
      style={{
        background:
          "radial-gradient(circle at 50% 22%, #64206F 0%, #35134F 28%, #1A0D2B 55%, #0B0612 78%, #07040B 100%)",
      }}
    >
      <KpopAtmosphere />

      <KpopWarriorsDecor />

      {/* ================================================= */}
      {/* LUCES DE ESCENARIO */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute -left-24 -top-20 h-[620px] w-[230px] rotate-[22deg] opacity-30 blur-3xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(236,72,153,0.95), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-24 -top-20 h-[620px] w-[230px] -rotate-[22deg] opacity-30 blur-3xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(34,211,238,0.95), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[12%] h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      {/* ================================================= */}
      {/* ESTRELLAS / DESTELLOS */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <span className="absolute left-[8%] top-[16%] text-lg text-pink-200/80">
          ✦
        </span>

        <span className="absolute left-[18%] top-[32%] text-xs text-cyan-200/70">
          ✧
        </span>

        <span className="absolute left-[29%] top-[12%] text-xl text-white/80">
          ✦
        </span>

        <span className="absolute right-[10%] top-[18%] text-lg text-cyan-200/80">
          ✧
        </span>

        <span className="absolute right-[23%] top-[35%] text-xl text-pink-200/70">
          ✦
        </span>

        <span className="absolute right-[7%] bottom-[28%] text-xs text-white/60">
          ✧
        </span>

        <span className="absolute left-[12%] bottom-[22%] text-xl text-cyan-200/70">
          ✦
        </span>

        <span className="absolute right-[32%] bottom-[15%] text-sm text-pink-200/60">
          ✧
        </span>

      </div>

      {/* ================================================= */}
      {/* CÍRCULO DE LUZ */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, transparent 68%)",
        }}
      />

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-2xl px-2 text-center sm:px-0">

        {/* LABEL */}

        <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-pink-200/90 sm:text-xs sm:tracking-[0.5em]">
          Una tarde para recordar
        </p>

        {/* TITULO */}

        <h1 className="bg-gradient-to-r
          from-fuchsia-300
          via-pink-100
          to-cyan-300
          bg-clip-text
          text-5xl
          font-black
          tracking-[0.08em]
          text-transparent
          drop-shadow-[0_0_25px_rgba(217,70,239,0.35)]
          sm:text-7xl">
          K-POP
        </h1>

        <h2 className="mt-1 text-2xl font-bold tracking-[0.28em] text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)] sm:text-4xl">
          WARRIORS
        </h2>

        {/* SEPARADOR */}

        <div className="mx-auto mt-6 flex w-full max-w-xs items-center justify-center gap-3">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300/70 to-pink-300/10" />

          <span className="text-lg text-pink-200">
            ✦
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-cyan-300/70 to-cyan-300/10" />

        </div>

        {/* FOTO */}

        <div className="relative mx-auto mt-10 h-[300px] w-[250px] sm:h-[390px] sm:w-[350px]">

          {/* HALO */}

          <div
            className="absolute -inset-8 rounded-[45%] opacity-50 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(236,72,153,0.45), rgba(34,211,238,0.12), transparent 70%)",
            }}
          />

          {/* MARCO EXTERIOR */}

          {/* <div className="absolute -inset-2 rotate-2 rounded-[45%] border border-pink-300/40 bg-gradient-to-br from-pink-400/20 via-transparent to-cyan-400/20 shadow-[0_0_40px_rgba(236,72,153,0.25)]" /> */}
          
          <div
            className="
              absolute
              -inset-2
              rotate-2
              rounded-[45%]
              border
              border-pink-300/40
              bg-gradient-to-br
              from-pink-400/20
              via-purple-500/10
              to-cyan-400/20
              shadow-[0_0_40px_rgba(236,72,153,0.25)]
            "
          />

          {/* FOTO */}

          {coverPhoto ? (
            <div className="relative h-full w-full overflow-hidden rounded-[42%] border-4 border-white/20 shadow-2xl">
              <Image
                src={coverPhoto.url}
                alt={childName}
                fill
                className="object-cover"
                sizes="350px"
              />

              {/* OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100819]/70 via-transparent to-pink-500/10" />

            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-[42%] border-4 border-pink-200/30 bg-white/5 shadow-2xl">

              <div className="text-center">

                <div className="text-6xl">
                  🎤
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-pink-100/60">
                  Tu estrella
                </p>

              </div>

            </div>
          )}

          {/* ESQUINAS DECORATIVAS */}

          <div className="absolute -left-6 top-8 text-2xl text-pink-300 drop-shadow-lg">
            ✦
          </div>

          <div className="absolute -right-6 bottom-10 text-xl text-cyan-300 drop-shadow-lg">
            ✧
          </div>

          {/* MICRÓFONO */}

          <div className="absolute -bottom-5 -right-5 flex h-16 w-16 rotate-6 items-center justify-center rounded-full border border-white/20 bg-[#1a1025]/90 text-3xl shadow-xl backdrop-blur-sm">
            🎤
          </div>

        </div>

        {/* NOMBRE */}

        <h3 className="mt-12 text-4xl font-black tracking-wide text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] sm:text-5xl">
          {childName}
        </h3>

        <p className="mt-4 text-base tracking-[0.12em] text-purple-100/75 sm:text-lg">
          celebra sus 8 años
        </p>

        {/* FECHA */}

        <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-4">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-300/40" />

          <p className="text-sm font-medium uppercase tracking-[0.12em] text-pink-100 sm:text-base">
            {formattedDate}
          </p>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-300/40" />

        </div>

        {/* INDICADOR */}

        <div className="mt-12 animate-bounce text-xl text-pink-200/70">
          ↓
        </div>

      </div>

    </section>
  )
}