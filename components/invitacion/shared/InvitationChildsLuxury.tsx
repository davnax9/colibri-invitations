
import { HeartIcon } from "@heroicons/react/24/outline"
import BotanicalBackground from "./BotanicalBackground"

const GOLD = "#B89455"
const GOLD_LIGHT = "#D8C08A"

export default function InvitationChildsLuxury() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <BotanicalBackground />

      {/* BRILLOS AMBIENTALES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.14), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-20 text-xl"
        style={{ color: GOLD, opacity: 0.55 }}
      >
        ✧
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[12%] text-sm"
        style={{ color: GOLD_LIGHT, opacity: 0.65 }}
      >
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ENCABEZADO EDITORIAL */}
        <header className="text-center">
          <div
            className="mb-5 flex items-center justify-center gap-4"
            style={{ color: GOLD }}
          >
            <span
              className="h-px w-10 sm:w-16"
              style={{
                background:
                  `linear-gradient(to left, ${GOLD}, transparent)`,
              }}
            />

            <span className="text-lg" aria-hidden="true">
              ✧
            </span>

            <span
              className="h-px w-10 sm:w-16"
              style={{
                background:
                  `linear-gradient(to right, ${GOLD}, transparent)`,
              }}
            />
          </div>

          <p
            className="text-[10px] uppercase tracking-[0.4em] sm:text-xs"
            style={{ color: "var(--theme-secondary)" }}
          >
            Una celebración especial
          </p>

          <h2
            className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Una noche para grandes
          </h2>

          <p
            className="mx-auto mt-4 max-w-lg text-sm leading-7 sm:text-base"
            style={{ color: "var(--theme-secondary)" }}
          >
            Queremos compartir con ustedes una velada llena de amor,
            alegría y momentos inolvidables.
          </p>
        </header>

        {/* COMPOSICIÓN PRINCIPAL */}
        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-8 md:mt-16 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          {/* EMBLEMA DECORATIVO */}
          <div className="flex justify-center">
            <div
              className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60"
              style={{ color: GOLD }}
            >
              {/* MARCO EXTERIOR */}
              <div
                className="absolute inset-3 rotate-45"
                style={{
                  border: "1px solid rgba(184,148,85,0.5)",
                }}
              />

              {/* MARCO INTERIOR */}
              <div
                className="absolute inset-8 rotate-45"
                style={{
                  border: "1px solid rgba(184,148,85,0.28)",
                }}
              />

              {/* CÍRCULO */}
              <div
                className="absolute inset-6 rounded-full"
                style={{
                  border: "1px solid rgba(184,148,85,0.35)",
                }}
              />

              {/* CORAZÓN */}
              <div className="relative flex flex-col items-center">
                <HeartIcon
                  className="h-12 w-12 sm:h-14 sm:w-14"
                  strokeWidth={1}
                  aria-hidden="true"
                />

                <span
                  className="mt-3 text-[9px] uppercase tracking-[0.35em]"
                  style={{ color: "var(--theme-secondary)" }}
                >
                  Con cariño
                </span>
              </div>

              {/* PEQUEÑOS DETALLES */}
              <span className="absolute left-1/2 top-0 -translate-x-1/2 text-sm">
                ✦
              </span>

              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm">
                ✦
              </span>

              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs">
                ✧
              </span>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs">
                ✧
              </span>
            </div>
          </div>

          {/* MENSAJE */}
          <div
            className="relative px-6 py-9 sm:px-10 sm:py-12"
            style={{
              backgroundColor: "rgba(184,148,85,0.045)",
              border: "1px solid rgba(184,148,85,0.35)",
            }}
          >
            {/* ESQUINAS ORNAMENTALES */}
            <span
              aria-hidden="true"
              className="absolute left-2 top-2 h-5 w-5 border-l border-t"
              style={{ borderColor: GOLD, opacity: 0.65 }}
            />

            <span
              aria-hidden="true"
              className="absolute right-2 top-2 h-5 w-5 border-r border-t"
              style={{ borderColor: GOLD, opacity: 0.65 }}
            />

            <span
              aria-hidden="true"
              className="absolute bottom-2 left-2 h-5 w-5 border-b border-l"
              style={{ borderColor: GOLD, opacity: 0.65 }}
            />

            <span
              aria-hidden="true"
              className="absolute bottom-2 right-2 h-5 w-5 border-b border-r"
              style={{ borderColor: GOLD, opacity: 0.65 }}
            />

            <div className="relative">
              <div
                className="mb-6 flex items-center gap-3"
                style={{ color: GOLD }}
              >
                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: "rgba(184,148,85,0.4)" }}
                />

                <span className="text-sm" aria-hidden="true">
                  ❦
                </span>

                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: "rgba(184,148,85,0.4)" }}
                />
              </div>

              <p
                className="text-center font-serif text-2xl italic leading-relaxed sm:text-3xl"
                style={{ color: "var(--theme-primary)" }}
              >
                Solo adultos
              </p>

              <div
                className="mx-auto my-5 h-px w-10"
                style={{ backgroundColor: GOLD, opacity: 0.65 }}
              />

              <p
                className="text-center text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: "var(--theme-secondary)" }}
              >
                Adoramos a los pequeños y sabemos lo especiales que son.
                Sin embargo, hemos preparado esta celebración para
                disfrutarla exclusivamente entre adultos.
              </p>

              <p
                className="mt-5 text-center font-serif text-base italic leading-7 sm:text-lg"
                style={{ color: "var(--theme-primary)" }}
              >
                Agradecemos de corazón su comprensión.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <footer className="mt-12 text-center sm:mt-16">
          <div
            className="mx-auto mb-6 flex items-center justify-center gap-3"
            style={{ color: GOLD }}
          >
            <span
              className="h-px w-12"
              style={{ backgroundColor: "rgba(184,148,85,0.4)" }}
            />

            <HeartIcon
              className="h-4 w-4"
              strokeWidth={1.4}
              aria-hidden="true"
            />

            <span
              className="h-px w-12"
              style={{ backgroundColor: "rgba(184,148,85,0.4)" }}
            />
          </div>

          <p
            className="text-xs uppercase tracking-[0.22em] sm:text-sm"
            style={{ color: "var(--theme-secondary)" }}
          >
            Gracias por acompañarnos con tanto cariño
          </p>

          <p
            className="mt-3 font-serif text-lg italic"
            style={{ color: "var(--theme-primary)" }}
          >
            Su presencia hará la noche aún más especial.
          </p>
        </footer>
      </div>
    </section>
  )
}
