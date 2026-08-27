import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }
  details: {
    title: string | null
    subtitle: string | null
    quinceaneraName: string | null
    phrase: string | null
  } | null
  event: {
    eventDate: Date
  }
}

export default function QuinceanosModernHero({
  coverPhoto,
  details,
  event,
}: Props) {
  const quinceaneraName = details?.quinceaneraName ?? "Mis XV"

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* FOTO */}
        <div className="relative min-h-[55vh] lg:order-2 lg:min-h-screen">
          {coverPhoto ? (
            <Image
              src={coverPhoto.url}
              alt={
                coverPhoto.title ??
                `Fotografía de ${quinceaneraName}`
              }
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                backgroundColor: "var(--theme-surface)",
              }}
            />
          )}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.5), transparent 50%)",
            }}
          />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              15 años
            </p>

            <p className="mt-2 font-serif text-3xl text-white">
              {event.eventDate.toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="flex items-center px-8 py-20 lg:order-1 lg:px-16">

          <div className="max-w-xl">

            <div
              className="h-1 w-14"
              style={{
                backgroundColor: "var(--theme-primary)",
              }}
            />

            <p
              className="mt-8 text-sm uppercase tracking-[0.35em]"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              Una celebración especial
            </p>

            <h1
              className="mt-5 text-6xl font-bold tracking-tight sm:text-7xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              {quinceaneraName}
            </h1>

            {details?.phrase && (
              <p
                className="mt-8 max-w-md text-base leading-7"
                style={{
                  color: "var(--theme-secondary)",
                }}
              >
                {details.phrase}
              </p>
            )}

            <div
              className="mt-10 flex items-center gap-4 text-sm"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              <span className="h-px w-10" style={{
                backgroundColor: "var(--theme-accent)",
              }} />

              Mis XV años
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}