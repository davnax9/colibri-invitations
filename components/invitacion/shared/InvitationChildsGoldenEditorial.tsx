
import { HeartIcon, SparklesIcon } from "@heroicons/react/24/outline"
import BotanicalBackground from "./BotanicalBackground"

const GOLD = "#B89455"
const GOLD_LIGHT = "#D8C08A"

export default function InvitationChildsGoldenEditorial() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-20 md:py-24"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <BotanicalBackground />

      {/* Resplandor central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.12) 0%, rgba(216,192,138,0.04) 45%, transparent 72%)",
        }}
      />

      {/* Destellos decorativos */}
      <SparklesIcon
        aria-hidden="true"
        className="pointer-events-none absolute left-[9%] top-[18%] h-5 w-5 opacity-50 sm:left-[17%] sm:top-[22%] sm:h-7 sm:w-7"
        style={{ color: GOLD }}
      />

      <SparklesIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[25%] h-4 w-4 opacity-40 sm:right-[18%] sm:top-[30%] sm:h-6 sm:w-6"
        style={{ color: GOLD_LIGHT }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[16%] text-lg opacity-50 sm:left-[23%] sm:text-2xl"
        style={{ color: GOLD }}
      >
        ✧
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[16%] right-[15%] text-xl opacity-40 sm:right-[24%] sm:text-2xl"
        style={{ color: GOLD_LIGHT }}
      >
        ✦
      </span>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Encabezado ornamental */}
        <div className="flex flex-col items-center text-center">
          <div
            className="flex items-center gap-3"
            style={{ color: GOLD }}
          >
            <span
              className="h-px w-9 sm:w-14"
              style={{
                backgroundColor: GOLD,
                opacity: 0.6,
              }}
            />
            <span className="text-sm">✧</span>
            <span
              className="h-px w-9 sm:w-14"
              style={{
                backgroundColor: GOLD,
                opacity: 0.6,
              }}
            />
          </div>

          <p
            className="mt-5 text-[9px] uppercase tracking-[0.35em] sm:mt-6 sm:text-[10px] sm:tracking-[0.45em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            Una celebración especial
          </p>

          <h2
            className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Solo adultos
          </h2>

          <p
            className="mt-3 font-serif text-base italic sm:text-lg"
            style={{ color: GOLD }}
          >
            Una noche para compartir y celebrar
          </p>
        </div>

        {/* Emblema central */}
        <div className="relative mx-auto mt-9 flex max-w-xl flex-col items-center sm:mt-12">
          {/* Línea ornamental superior */}
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
            style={{
              border: `1px solid ${GOLD}`,
              backgroundColor: "var(--theme-background)",
              boxShadow: "0 0 0 5px rgba(184,148,85,0.07)",
            }}
          >
            <HeartIcon
              aria-hidden="true"
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={1.2}
              style={{ color: GOLD }}
            />

            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 text-xs"
              style={{ color: GOLD_LIGHT }}
            >
              ✦
            </span>
          </div>

          {/* Marco editorial abierto */}
          <div className="relative mt-7 w-full px-5 py-8 text-center sm:mt-9 sm:px-12 sm:py-10">
            {/* Esquinas superiores */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-8 w-8 border-l border-t sm:h-12 sm:w-12"
              style={{ borderColor: `${GOLD}99` }}
            />

            <span
              aria-hidden="true"
              className="absolute right-0 top-0 h-8 w-8 border-r border-t sm:h-12 sm:w-12"
              style={{ borderColor: `${GOLD}99` }}
            />

            {/* Esquinas inferiores */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-8 w-8 border-b border-l sm:h-12 sm:w-12"
              style={{ borderColor: `${GOLD}99` }}
            />

            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-8 w-8 border-b border-r sm:h-12 sm:w-12"
              style={{ borderColor: `${GOLD}99` }}
            />

            <div className="mx-auto max-w-lg">
              <p
                className="font-serif text-xl leading-relaxed sm:text-2xl sm:leading-relaxed md:text-[1.7rem]"
                style={{ color: "var(--theme-primary)" }}
              >
                Adoramos a los pequeños y ocupan un lugar muy especial en
                nuestros corazones.
              </p>

              <div className="my-5 flex items-center justify-center gap-3 sm:my-6">
                <span
                  className="h-px w-8 sm:w-12"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.6,
                  }}
                />
                <span
                  aria-hidden="true"
                  className="text-xs"
                  style={{ color: GOLD }}
                >
                  ❦
                </span>
                <span
                  className="h-px w-8 sm:w-12"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.6,
                  }}
                />
              </div>

              <p
                className="text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: "var(--theme-secondary)" }}
              >
                Sin embargo, hemos preparado esta celebración exclusivamente
                para adultos, con la ilusión de compartir una velada íntima
                y muy especial.
              </p>

              <p
                className="mt-4 font-serif text-base italic leading-7 sm:mt-5 sm:text-lg"
                style={{ color: GOLD }}
              >
                Agradecemos de corazón su comprensión.
              </p>
            </div>
          </div>

          {/* Firma decorativa */}
          <div className="mt-7 flex flex-col items-center sm:mt-9">
            <div
              className="mb-3 h-px w-16"
              style={{
                backgroundColor: GOLD,
                opacity: 0.6,
              }}
            />

            <div
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] sm:text-[11px] sm:tracking-[0.3em]"
              style={{ color: "var(--theme-secondary)" }}
            >
              <HeartIcon
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={1.3}
                style={{ color: GOLD }}
              />
              <span>Con cariño y gratitud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
