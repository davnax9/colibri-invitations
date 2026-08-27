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

export default function QuinceanosElegantHero({
  coverPhoto,
  details,
  event,
}: Props) {
  const quinceaneraName = details?.quinceaneraName ?? "Mis XV Años"

  return (
    <section
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-20"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Decoración superior */}
      <div
        className="absolute left-1/2 top-10 h-px w-24 -translate-x-1/2"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* TEXTO */}
          <div className="text-center md:text-left">

            <p
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "var(--theme-secondary)" }}
            >
              Mis XV años
            </p>

            <h1
              className="mt-6 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl"
              style={{ color: "var(--theme-primary)" }}
            >
              {quinceaneraName}
            </h1>

            {details?.phrase && (
              <p
                className="mx-auto mt-6 max-w-md text-base italic leading-7 md:mx-0"
                style={{ color: "var(--theme-secondary)" }}
              >
                "{details.phrase}"
              </p>
            )}

            <div
              className="mx-auto mt-8 h-px w-16 md:mx-0"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />

            <p
              className="mt-6 text-sm"
              style={{ color: "var(--theme-secondary)" }}
            >
              {event.eventDate.toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

          </div>

          {/* FOTO */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -inset-3 rounded-4xl border"
              style={{ borderColor: "var(--theme-accent)" }}
            />

            <div className="relative overflow-hidden rounded-[1.75rem]">
              {coverPhoto ? (
                <Image
                  src={coverPhoto.url}
                  alt={
                    coverPhoto.title ??
                    `Fotografía de ${quinceaneraName}`
                  }
                  width={900}
                  height={1200}
                  priority
                  className="aspect-3/4 w-full object-cover"
                />
              ) : (
                <div
                  className="flex aspect-3/4 items-center justify-center"
                  style={{
                    backgroundColor: "var(--theme-surface)",
                  }}
                >
                  <span
                    className="font-serif text-4xl"
                    style={{ color: "var(--theme-primary)" }}
                  >
                    Mis XV
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}