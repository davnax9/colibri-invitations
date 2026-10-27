
import BotanicalBackground from "./BotanicalBackground"

type InvitationLocationsProps = {
  event: {
    name: string
    eventDate: Date
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
    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]
    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null
      location: { name: string } | null
    }[]
    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]
    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function MapArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export default function InvitationLocationsEditorial({
  event,
}: InvitationLocationsProps) {
  if (event.locations.length === 0) return null

  const locations = event.locations

  return (
    <section
      className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16 md:py-20"
      style={{
        backgroundColor: "var(--theme-surface)",
      }}
    >
      <BotanicalBackground />

      {/* Decoración sutil de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-16 h-40 w-40 rounded-full opacity-[0.07] blur-3xl sm:h-56 sm:w-56"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Encabezado editorial */}
        <header className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              className="h-px w-8 sm:w-12"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />

            <span
              className="text-[9px] uppercase tracking-[0.3em] sm:text-[10px]"
              style={{ color: "var(--theme-secondary)" }}
            >
              Los lugares
            </span>

            <span
              className="h-px w-8 sm:w-12"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
          </div>

          <h2
            className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Nos encontramos aquí
          </h2>

          <p
            className="mx-auto mt-3 max-w-md text-xs leading-6 sm:mt-4 sm:text-sm"
            style={{ color: "var(--theme-secondary)" }}
          >
            Será un placer compartir contigo este día tan especial.
            Aquí encontrarás los lugares para acompañarnos.
          </p>

          {/* Ornamento central */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span
              className="h-px w-10 opacity-60"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
            <span
              className="text-sm"
              style={{ color: "var(--theme-accent)" }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="h-px w-10 opacity-60"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
          </div>
        </header>

        {/* Ubicaciones sin tarjetas */}
        <div
          className={`mt-9 grid grid-cols-1 sm:mt-12 ${
            locations.length > 1
              ? "md:grid-cols-2 md:gap-x-12"
              : "mx-auto max-w-2xl"
          }`}
        >
          {locations.map((location, index) => (
            <article
              key={location.id}
              className="group relative flex gap-4 py-6 sm:gap-5 sm:py-8"
            >
              {/* Número decorativo */}
              <div className="flex shrink-0 flex-col items-center">
                <span
                  className="font-serif text-3xl leading-none sm:text-4xl"
                  style={{
                    color: "var(--theme-accent)",
                    opacity: 0.85,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="mt-3 h-full min-h-8 w-px"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    opacity: 0.45,
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center"
                    style={{
                      color: "var(--theme-primary)",
                      backgroundColor: "var(--theme-background)",
                    }}
                  >
                    <PinIcon />
                  </span>

                  <span
                    className="text-[9px] uppercase tracking-[0.2em] sm:text-[10px]"
                    style={{ color: "var(--theme-secondary)" }}
                  >
                    {locations.length === 1
                      ? "Lugar de celebración"
                      : `Ubicación ${String(index + 1).padStart(2, "0")}`}
                  </span>
                </div>

                <h3
                  className="mt-3 font-serif text-xl leading-snug sm:text-2xl"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {location.name}
                </h3>

                <div
                  className="mt-3 h-px w-10 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "var(--theme-accent)" }}
                />

                <p
                  className="mt-3 max-w-md text-xs leading-6 sm:text-sm sm:leading-6"
                  style={{ color: "var(--theme-secondary)" }}
                >
                  {location.address || "Consulta los detalles del lugar de celebración."}
                </p>

                {location.mapsUrl && (
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-4 inline-flex items-center gap-2 py-1 text-xs font-medium transition-opacity hover:opacity-70 sm:mt-5 sm:text-sm"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    <span
                      className="border-b pb-1"
                      style={{ borderColor: "var(--theme-accent)" }}
                    >
                      Cómo llegar
                    </span>
                    <MapArrowIcon />
                  </a>
                )}
              </div>

              {/* Separador inferior */}
              {index < locations.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-px md:hidden"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    opacity: 0.35,
                  }}
                />
              )}

              {index < locations.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-12 right-0 hidden h-px md:block"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    opacity: 0.35,
                  }}
                />
              )}
            </article>
          ))}
        </div>

        {/* Cierre decorativo */}
        <div className="mt-5 flex flex-col items-center text-center sm:mt-8">
          <span
            className="font-serif text-2xl"
            style={{ color: "var(--theme-accent)" }}
            aria-hidden="true"
          >
            ❦
          </span>

          <p
            className="mt-2 text-[9px] uppercase tracking-[0.22em] sm:text-[10px]"
            style={{ color: "var(--theme-secondary)" }}
          >
            Gracias por ser parte de nuestra historia
          </p>
        </div>
      </div>
    </section>
  )
}
