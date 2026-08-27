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

export default function InvitationEditorialLocations({
  locations,
}: Props) {
  return (
    <section
      className="px-6 py-24"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-text)",
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>
            <p
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              Dónde sucederá
            </p>

            <h2
              className="mt-3 font-serif text-4xl md:text-5xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              Los lugares
            </h2>
          </div>

          <p
            className="max-w-sm text-sm leading-6"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Te esperamos en los lugares donde compartiremos
            cada momento de esta celebración.
          </p>

        </div>

        {/* LOCATIONS */}

        <div className="grid gap-5 md:grid-cols-2">

          {locations.map((location, index) => (

            <article
              key={location.id}
              className="group relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: "var(--theme-background)",
                borderColor: "var(--theme-accent)",
              }}
            >

              {/* NUMERO */}

              <div className="flex items-start justify-between">

                <span
                  className="font-serif text-5xl"
                  style={{
                    color: "var(--theme-accent)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "var(--theme-surface)",
                    color: "var(--theme-primary)",
                  }}
                >
                  <MapPin size={21} />
                </div>

              </div>

              {/* INFO */}

              <h3
                className="mt-8 font-serif text-2xl"
                style={{
                  color: "var(--theme-primary)",
                }}
              >
                {location.name}
              </h3>

              {location.address ? (
                <p
                  className="mt-3 max-w-md text-sm leading-6"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  {location.address}
                </p>
              ) : (
                <p
                  className="mt-3 text-sm italic"
                  style={{
                    color: "var(--theme-secondary)",
                  }}
                >
                  Dirección no disponible
                </p>
              )}

              {/* BOTON */}

              {location.mapsUrl && (
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                  style={{
                    backgroundColor: "var(--theme-primary)",
                  }}
                >
                  <Navigation size={15} />
                  Ver ubicación
                </a>
              )}

            </article>

          ))}

        </div>
      </div>
    </section>
  )
}