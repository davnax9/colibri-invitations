
import { HeartIcon } from "@heroicons/react/24/outline"
import BotanicalBackground from "./BotanicalBackground"

const GOLD = "#B89455"
const GOLD_LIGHT = "#D8C08A"

function CornerOrnament({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}) {
  const positions = {
    "top-left": "left-0 top-0",
    "top-right": "right-0 top-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100",
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 54 54"
      fill="none"
      className={`pointer-events-none absolute h-10 w-10 sm:h-14 sm:w-14 ${positions[position]}`}
      style={{ color: GOLD }}
    >
      <path
        d="M3 28V3H28"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M10 28V10H28"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.65"
      />
      <path
        d="M4 17C11 17 17 11 17 4"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M10 22C16 21 21 16 22 10"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M13 15C9 13 8 10 9 8C12 8 15 10 15 13"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="17" cy="17" r="1.3" fill="currentColor" />
    </svg>
  )
}

function BotanicalSprig({
  className = "",
}: {
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 45"
      fill="none"
      className={className}
      style={{ color: GOLD }}
    >
      <path
        d="M4 39C30 37 48 23 75 5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M23 34C17 24 19 19 25 18C31 23 29 29 23 34Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M39 27C34 17 37 12 43 12C48 18 45 23 39 27Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M54 18C51 9 55 5 60 6C64 12 60 16 54 18Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M33 31C39 33 43 31 45 26"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M49 22C56 23 61 19 62 14"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="77" cy="5" r="2" fill="currentColor" />
    </svg>
  )
}

export default function InvitationChildsOrnamentalFrame() {
  return (
    <section
      className="relative isolate overflow-hidden px-5 py-12 text-center sm:px-8 sm:py-16 md:py-20"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <BotanicalBackground />

      {/* Luz ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,85,0.12), rgba(216,192,138,0.04) 48%, transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Encabezado */}
        <div className="flex flex-col items-center">
          <p
            className="text-[9px] uppercase tracking-[0.4em] sm:text-[10px] sm:tracking-[0.5em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            Una nota especial
          </p>

          <h2
            className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Solo adultos
          </h2>

          <div className="mt-4 flex items-center gap-3">
            <span
              className="h-px w-8 sm:w-12"
              style={{ backgroundColor: GOLD, opacity: 0.65 }}
            />
            <span style={{ color: GOLD }} className="text-xs">
              ✦
            </span>
            <span
              className="h-px w-8 sm:w-12"
              style={{ backgroundColor: GOLD, opacity: 0.65 }}
            />
          </div>
        </div>

        {/* Marco ornamental */}
        <div className="relative mx-auto mt-9 max-w-2xl px-2 py-2 sm:mt-12 sm:px-3 sm:py-3">
          {/* Borde exterior */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              border: `1px solid ${GOLD}88`,
            }}
          />

          {/* Borde interior */}
          <div
            className="pointer-events-none absolute inset-[5px] sm:inset-[7px]"
            style={{
              border: `1px solid ${GOLD}45`,
            }}
          />

          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Contenido del marco */}
          <div
            className="relative mx-1 my-1 px-5 py-9 sm:mx-2 sm:px-10 sm:py-12 md:px-16"
            style={{
              backgroundColor: "rgba(184,148,85,0.035)",
            }}
          >
            {/* Ramas decorativas */}
            <BotanicalSprig className="mx-auto mb-5 h-8 w-20 sm:mb-7 sm:h-10 sm:w-24" />

            {/* Sello */}
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
              <span
                className="absolute inset-0 rotate-45"
                style={{
                  border: `1px solid ${GOLD}90`,
                }}
              />
              <span
                className="absolute inset-1 rotate-45"
                style={{
                  border: `1px solid ${GOLD}50`,
                }}
              />
              <HeartIcon
                aria-hidden="true"
                className="relative h-5 w-5 sm:h-6 sm:w-6"
                strokeWidth={1.2}
                style={{ color: GOLD }}
              />
            </div>

            <p
              className="mt-6 font-serif text-xl leading-relaxed sm:mt-7 sm:text-2xl md:text-[1.75rem]"
              style={{ color: "var(--theme-primary)" }}
            >
              Adoramos a los pequeños y sabemos lo especiales que son.
            </p>

            {/* Separador */}
            <div className="my-5 flex items-center justify-center gap-3 sm:my-7">
              <span
                className="h-px w-8 sm:w-12"
                style={{ backgroundColor: GOLD, opacity: 0.55 }}
              />
              <span
                className="text-xs"
                style={{ color: GOLD_LIGHT }}
              >
                ❦
              </span>
              <span
                className="h-px w-8 sm:w-12"
                style={{ backgroundColor: GOLD, opacity: 0.55 }}
              />
            </div>

            <p
              className="mx-auto max-w-lg text-sm leading-7 sm:text-base sm:leading-8"
              style={{ color: "var(--theme-secondary)" }}
            >
              Sin embargo, esta celebración ha sido pensada exclusivamente
              para adultos. Deseamos compartir una velada íntima, llena de
              alegría y momentos inolvidables.
            </p>

            <p
              className="mt-5 font-serif text-base italic sm:mt-6 sm:text-lg"
              style={{ color: GOLD }}
            >
              Gracias por comprender y acompañarnos.
            </p>

            <BotanicalSprig className="mx-auto mt-6 h-8 w-20 rotate-180 sm:mt-8 sm:h-10 sm:w-24" />
          </div>
        </div>

        {/* Cierre */}
        <div
          className="mt-7 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.25em] sm:mt-9 sm:text-[10px] sm:tracking-[0.35em]"
          style={{ color: "var(--theme-secondary)" }}
        >
          <span style={{ color: GOLD }}>✧</span>
          <span>Con cariño y gratitud</span>
          <span style={{ color: GOLD }}>✧</span>
        </div>
      </div>
    </section>
  )
}
