
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

type WeddingDressCodeLuxuryProps = {
  details: {
    title: string | null
    subtitle: string | null
    description: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
    quinceaneraName: string | null
    dressCode: string | null
  } | null
}

function DressIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 sm:h-[76px] sm:w-[76px]"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25 13 L27 8.5 M39 13 L37 8.5" />
        <path d="M25 13 L32 21 L39 13" />
        <path d="M25 13 Q24 22 26.5 30" />
        <path d="M39 13 Q40 22 37.5 30" />
        <path d="M26.5 30 L37.5 30" />
        <path d="M26.5 30 Q19 42 13 56" />
        <path d="M37.5 30 Q45 42 51 56" />
        <path d="M13 56 Q32 60.5 51 56" />
        <path d="M29.5 31 Q25 43 21 56" />
        <path d="M34.5 31 Q39 43 43 56" />
        <path d="M32 31 L32 57.5" />
        <circle
          cx="32"
          cy="30"
          r="1.4"
          fill="var(--theme-accent)"
          stroke="none"
        />
      </g>
    </svg>
  )
}

function SuitIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 sm:h-[76px] sm:w-[76px]"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18 L26 12 M50 18 L38 12" />
        <path d="M27 12 L32 18 L37 12" />
        <path d="M26 12 L24 22 L32 39" />
        <path d="M38 12 L40 22 L32 39" />
        <path d="M24 22 L20.5 19.5 M40 22 L43.5 19.5" />
        <path d="M14 18 L15.5 32 L17 48" />
        <path d="M50 18 L48.5 32 L47 48" />
        <path d="M17 48 Q32 52 47 48" />
        <path d="M30 13.5 L34 13.5 L33.3 17.5 L30.7 17.5 Z" />
        <path d="M30.7 17.5 L33.3 17.5 L34.8 32 L32 37 L29.2 32 Z" />
        <circle cx="35.8" cy="37" r="0.9" fill="var(--theme-accent)" />
        <circle cx="35.8" cy="44" r="0.9" fill="var(--theme-accent)" />
        <path d="M18.5 31 L24 31 L24 34" />
        <path d="M18.5 31 L20.5 28.5 L22.5 31" />
      </g>
    </svg>
  )
}

function Ornament() {
  return (
    <svg
      viewBox="0 0 100 20"
      fill="none"
      className="h-4 w-20"
      aria-hidden="true"
    >
      <path
        d="M2 10 H37 C43 10 44 3 50 3 C56 3 57 10 63 10 H98"
        stroke="var(--theme-accent)"
        strokeWidth="0.8"
      />
      <path
        d="M46 10 L50 6 L54 10 L50 14 Z"
        stroke="var(--theme-accent)"
        strokeWidth="0.8"
      />
    </svg>
  )
}

export default function WeddingDressCodeLuxury({
  details,
}: WeddingDressCodeLuxuryProps) {
  if (!details?.dressCode) return null

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-16"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-primary)",
      }}
    >
      <BotanicalBackground />

      <div className="pointer-events-none absolute inset-3 border sm:inset-5"
        style={{ borderColor: "var(--theme-accent)", opacity: 0.35 }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Encabezado */}
        <header className="mb-8 text-center sm:mb-10">
          <p
            className="text-[10px] uppercase tracking-[0.3em] sm:text-xs"
            style={{ color: "var(--theme-secondary)" }}
          >
            Una ocasión especial
          </p>

          <h2
            className="mt-3 font-serif text-3xl font-normal sm:text-4xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Código de vestimenta
          </h2>

          <div className="mt-4 flex justify-center">
            <Ornament />
          </div>

          <p
            className="mt-3 font-serif text-xl sm:text-2xl"
            style={{ color: "var(--theme-accent)" }}
          >
            {details.dressCode}
          </p>
        </header>

        {/* Vestimenta */}
        <div className="mx-auto grid max-w-xl grid-cols-2">
          {/* Caballeros */}
          <div className="flex flex-col items-center px-3 py-2 text-center sm:px-8">
            <div
              className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border sm:h-24 sm:w-24"
              style={{ borderColor: "var(--theme-accent)" }}
            >
              <SuitIcon />
            </div>

            <h3
              className="font-serif text-lg sm:text-xl"
              style={{ color: "var(--theme-primary)" }}
            >
              Caballeros
            </h3>

            <div className="my-2">
              <Ornament />
            </div>

            <p
              className="text-xs leading-relaxed sm:text-sm"
              style={{ color: "var(--theme-secondary)" }}
            >
              Traje y corbata
            </p>
          </div>

          {/* Divisor central */}
          <div
            className="relative col-start-2 row-start-1"
            aria-hidden="true"
          >
            <span
              className="absolute bottom-5 left-0 top-5 w-px"
              style={{ backgroundColor: "var(--theme-accent)", opacity: 0.45 }}
            />
          </div>

          {/* Mujeres */}
          <div className="col-start-2 row-start-1 flex flex-col items-center px-3 py-2 text-center sm:px-8">
            <div
              className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border sm:h-24 sm:w-24"
              style={{ borderColor: "var(--theme-accent)" }}
            >
              <DressIcon />
            </div>

            <h3
              className="font-serif text-lg sm:text-xl"
              style={{ color: "var(--theme-primary)" }}
            >
              Mujeres
            </h3>

            <div className="my-2">
              <Ornament />
            </div>

            <p
              className="text-xs leading-relaxed sm:text-sm"
              style={{ color: "var(--theme-secondary)" }}
            >
              Vestido largo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
