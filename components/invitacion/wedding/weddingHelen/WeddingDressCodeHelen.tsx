
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
      className="h-16 w-16 sm:h-[72px] sm:w-[72px]"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Tirantes y escote */}
        <path d="M25 9 L27 18 L22 23" />
        <path d="M39 9 L37 18 L42 23" />

        {/* Parte superior */}
        <path d="M27 18 Q32 23 37 18" />
        <path d="M22 23 L27 18" />
        <path d="M42 23 L37 18" />

        {/* Cintura */}
        <path d="M22 23 L29 31 L35 31 L42 23" />
        <path d="M29 31 L25 39" />
        <path d="M35 31 L39 39" />

        {/* Falda larga */}
        <path d="M25 39 L18 54 Q32 58 46 54 L39 39" />
        <path d="M25 39 Q32 43 39 39" />
        <path d="M24 45 L22 53" />
        <path d="M40 45 L42 53" />

        {/* Detalle de la cintura */}
        <path d="M27 34 L37 34" />
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
      className="h-16 w-16 sm:h-[72px] sm:w-[72px]"
      aria-hidden="true"
    >
      <g
        stroke="var(--theme-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Cuello de la camisa */}
        <path d="M24 10 L32 17 L40 10" />
        <path d="M24 10 L19 13 L13 19 L18 29 L23 26" />
        <path d="M40 10 L45 13 L51 19 L46 29 L41 26" />

        {/* Solapas del saco */}
        <path d="M24 10 L27 22 L32 17" />
        <path d="M40 10 L37 22 L32 17" />
        <path d="M18 29 L18 53 Q32 57 46 53 L46 29" />

        {/* Corbata */}
        <path d="M29 20 L32 17 L35 20 L34 25 L32 28 L30 25 Z" />
        <path d="M32 28 L28.5 45 L32 49 L35.5 45 Z" />

        {/* Bolsillos y botones */}
        <path d="M21 34 L27 34 L27 39" />
        <path d="M43 34 L37 34 L37 39" />
        <path d="M38 30 L38 49" />
        <circle cx="35.5" cy="32" r="0.8" fill="var(--theme-accent)" />
        <circle cx="35.5" cy="38" r="0.8" fill="var(--theme-accent)" />
        <path d="M24 53 L24 56" />
        <path d="M40 53 L40 56" />
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
      className="px-6 py-20 text-center sm:py-24"
      style={{ backgroundColor: "var(--theme-surface)" }}
    >
      <div className="mx-auto max-w-2xl">
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
            <div className="flex h-24 items-center justify-center sm:h-28">
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
            <div className="flex h-24 items-center justify-center sm:h-28">
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
