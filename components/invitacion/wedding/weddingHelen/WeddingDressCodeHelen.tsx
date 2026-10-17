
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

type WeddingDressCodeProps = {
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
      className="h-20 w-20 sm:h-24 sm:w-24"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Tirantes finos */}
        <path d="M25 13 L27 8.5" />
        <path d="M39 13 L37 8.5" />

        {/* Escote en V */}
        <path d="M25 13 L32 21 L39 13" />

        {/* Cuerpo entallado */}
        <path d="M25 13 Q24 22 26.5 30" />
        <path d="M39 13 Q40 22 37.5 30" />

        {/* Cintura */}
        <path d="M26.5 30 L37.5 30" />

        {/* Falda larga con vuelo */}
        <path d="M26.5 30 Q19 42 13 56" />
        <path d="M37.5 30 Q45 42 51 56" />
        <path d="M13 56 Q32 60.5 51 56" />

        {/* Pliegues de la falda */}
        <path d="M29.5 31 Q25 43 21 56" />
        <path d="M34.5 31 Q39 43 43 56" />
        <path d="M32 31 L32 57.5" />

        {/* Detalle de la cintura */}
        <circle cx="32" cy="30" r="1.2" fill="var(--theme-accent)" />
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
      className="h-20 w-20 sm:h-24 sm:w-24"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Hombros */}
        <path d="M14 18 L26 12" />
        <path d="M50 18 L38 12" />

        {/* Cuello de la camisa */}
        <path d="M27 12 L32 18 L37 12" />

        {/* Solapas del saco */}
        <path d="M26 12 L24 22 L32 39" />
        <path d="M38 12 L40 22 L32 39" />

        {/* Muescas de las solapas */}
        <path d="M24 22 L20.5 19.5" />
        <path d="M40 22 L43.5 19.5" />

        {/* Costados de la chaqueta */}
        <path d="M14 18 L15.5 32 L17 48" />
        <path d="M50 18 L48.5 32 L47 48" />

        {/* Bajo de la chaqueta */}
        <path d="M17 48 Q32 52 47 48" />

        {/* Corbata */}
        <path d="M30 13.5 L34 13.5 L33.3 17.5 L30.7 17.5 Z" />
        <path d="M30.7 17.5 L33.3 17.5 L34.8 32 L32 37 L29.2 32 Z" />

        {/* Botones */}
        <circle cx="35.8" cy="37" r="0.9" fill="var(--theme-accent)" />
        <circle cx="35.8" cy="44" r="0.9" fill="var(--theme-accent)" />

        {/* Bolsillo del pecho con pañuelo */}
        <path d="M18.5 31 L24 31 L24 34" />
        <path d="M18.5 31 L20.5 28.5 L22.5 31" />
      </g>
    </svg>
  )
}

export default function WeddingDressCodeHelen({
  details,
}: WeddingDressCodeProps) {
  if (!details?.dressCode) return null

  return (
    <section
      className="relative overflow-hidden px-6 py-20 text-center sm:py-24"
      style={{ backgroundColor: "var(--theme-surface)" }}
    >
      <BotanicalBackground />
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* ENCABEZADO */}
        <p
          className="text-xs uppercase tracking-[0.3em] sm:text-sm"
          style={{ color: "var(--theme-secondary)" }}
        >
          Código de vestimenta
        </p>

        {/* DECORACIÓN */}
        <div
          className="mx-auto mt-6 h-px w-16"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />

        {/* CÓDIGO */}
        <h2
          className="mt-7 font-serif text-3xl md:text-4xl"
          style={{ color: "var(--theme-primary)" }}
        >
          {details.dressCode}
        </h2>

        {/* INDICACIONES DE VESTIMENTA */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-5 sm:mt-12 sm:gap-12">
          {/* CABALLEROS */}
          <div className="flex flex-col items-center">
            <div className="flex h-28 items-center justify-center sm:h-32">
              <SuitIcon />
            </div>

            <h3
              className="mt-3 font-serif text-lg sm:text-xl"
              style={{ color: "var(--theme-primary)" }}
            >
              Caballeros
            </h3>

            <div
              className="my-3 h-px w-8"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />

            <p
              className="text-sm leading-6 sm:text-base"
              style={{ color: "var(--theme-secondary)" }}
            >
              Traje y corbata
            </p>
          </div>

          {/* MUJERES */}
          <div className="flex flex-col items-center">
            <div className="flex h-28 items-center justify-center sm:h-32">
              <DressIcon />
            </div>

            <h3
              className="mt-3 font-serif text-lg sm:text-xl"
              style={{ color: "var(--theme-primary)" }}
            >
              Mujeres
            </h3>

            <div
              className="my-3 h-px w-8"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />

            <p
              className="text-sm leading-6 sm:text-base"
              style={{ color: "var(--theme-secondary)" }}
            >
              Vestido largo
            </p>
          </div>
        </div>

        {/* TEXTO INFORMATIVO */}
        {/* <p
          className="mx-auto mt-10 max-w-lg text-sm leading-7 sm:mt-12"
          style={{ color: "var(--theme-secondary)" }}
        >
          Te invitamos a vestir de acuerdo con el código de vestimenta
          indicado para acompañarnos en este día tan especial.
        </p> */}
      </div>
    </section>
  )
}
