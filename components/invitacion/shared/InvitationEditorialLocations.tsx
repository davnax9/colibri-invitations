import { MapPin, Navigation } from "lucide-react"

type Location = {
  id: string
  name: string
  address: string | null
  mapsUrl: string | null
}

type Props = {
  locations: Location[]
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"

export default function InvitationEditorialLocations({
  locations,
}: Props) {

  if (!locations.length) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-text)",
      }}
    >

      {/* BRILLO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* HEADER */}

        <div className="text-center">

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

          <p
            className="text-[10px] uppercase tracking-[0.45em]"
            style={{
              color: DARK_GOLD,
            }}
          >
            Dónde sucederá
          </p>

          <h2
            className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Los lugares
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7 sm:text-lg"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Te esperamos para compartir
            cada momento de esta celebración.
          </p>

        </div>


        {/* LOCATIONS */}

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-20">

          {locations.map((location, index) => (

            <article
              key={location.id}
              className="relative text-center"
            >

              {/* NÚMERO */}

              <div
                className="font-serif text-5xl"
                style={{
                  color: GOLD,
                  opacity: 0.7,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* ICONO */}

              <div
                className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-full border"
                style={{
                  borderColor:
                    "rgba(184,148,85,0.45)",
                  color: GOLD,
                }}
              >
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                />
              </div>


              {/* NOMBRE */}

              <h3
                className="mt-6 font-serif text-2xl sm:text-3xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {location.name}
              </h3>


              {/* ORNAMENTO */}

              <div
                className="mt-4 flex items-center justify-center gap-3"
                style={{
                  color: GOLD,
                }}
              >

                <span
                  className="h-px w-10"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.3,
                  }}
                />

                <span className="text-xs">
                  ❦
                </span>

                <span
                  className="h-px w-10"
                  style={{
                    backgroundColor: GOLD,
                    opacity: 0.3,
                  }}
                />

              </div>


              {/* DIRECCIÓN */}

              {location.address ? (
                <p
                  className="mx-auto mt-5 max-w-sm text-sm leading-7"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  {location.address}
                </p>
              ) : (
                <p
                  className="mt-5 text-sm italic"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  Dirección no disponible
                </p>
              )}


              {/* BOTÓN */}

              {location.mapsUrl && (
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b px-1 pb-2 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                  style={{
                    color: DARK_GOLD,
                    borderColor:
                      "rgba(184,148,85,0.45)",
                  }}
                >
                  <Navigation
                    size={14}
                    strokeWidth={1.5}
                  />

                  Ver ubicación
                </a>
              )}

            </article>

          ))}

        </div>


        {/* FINAL */}

        <div
          className="mt-16 flex items-center justify-center gap-4"
          style={{
            color: GOLD,
          }}
        >

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.3,
            }}
          />

          <span className="text-sm">
            ❦
          </span>

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.3,
            }}
          />

        </div>

      </div>

    </section>
  )
}