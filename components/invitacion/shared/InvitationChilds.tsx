import { HeartIcon } from "@heroicons/react/24/outline"
import BotanicalBackground from "./BotanicalBackground"

const GOLD = "#B89455"

export default function InvitationChilds() {
  return (
    <section
      className="relative overflow-hidden px-6 py-8 text-center sm:px-10 md:py-12"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <BotanicalBackground />

      {/* BRILLO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* ORNAMENTO */}

        <div
          className="mb-7 flex items-center justify-center gap-4"
          style={{
            color: GOLD,
          }}
        >

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

          <span className="text-lg">
            ✦
          </span>

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

        </div>


        {/* HEADER */}

        {/* <p
          className="text-[10px] uppercase tracking-[0.45em]"
          style={{
            color: DARK_GOLD,
          }}
        >
          Solo adultos
        </p> */}

        {/* MARCO ARCO */}

        <div
          className="relative mx-auto mt-10 max-w-md px-8 pb-12 pt-24 sm:px-12 sm:pt-28"
          style={{
            border: "1px solid rgba(184,148,85,0.35)",
            borderTopLeftRadius: "50% 45%",
            borderTopRightRadius: "50% 45%",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            backgroundColor: "rgba(216,192,138,0.05)",
          }}
        >

          {/* ARCO INTERIOR */}

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-3"
            style={{
              border: "1px solid rgba(184,148,85,0.25)",
              borderTopLeftRadius: "50% 45%",
              borderTopRightRadius: "50% 45%",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          />

          <div className="relative">

            <div
              className="mb-6 flex items-center justify-center gap-3"
              style={{ color: GOLD }}
            >

              <span
                className="h-px w-10"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.4,
                }}
              />

              <span className="text-sm">
                ❦
              </span>

              <span
                className="h-px w-10"
                style={{
                  backgroundColor: GOLD,
                  opacity: 0.4,
                }}
              />

            </div>

            <p
              className="font-serif text-lg italic leading-8 sm:text-xl sm:leading-9"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              Adoramos a los pequeños, sin embargo esta celebración está diseñada solo para adultos. ¡Agradecemos su comprensión!
            </p>

          </div>

        </div>


        {/* LINEA */}

        <div
          className="mx-auto mt-8 h-px w-20"
          style={{
            backgroundColor: GOLD,
            opacity: 0.45,
          }}
        />


        {/* FINAL */}

        <div
          className="mt-12 flex items-center justify-center gap-3 text-xs"
          style={{
            color: "var(--theme-secondary)",
          }}
        >

          <HeartIcon
            className="h-4 w-4"
            style={{
              color: GOLD,
            }}
          />

          <span>
            Gracias por su comprensión
          </span>

        </div>

      </div>

    </section>
  )
}
