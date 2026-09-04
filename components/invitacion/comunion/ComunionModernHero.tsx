import Image from "next/image"

type Props = {
  childName: string
  eventDate: Date
  coverPhoto: {
    id: string;
    url: string;
    title: string | null;
    isCover: boolean;
  }
}

export default function ComunionModernHero({
  childName,
  eventDate,
  coverPhoto,
}: Props) {
  const formattedDate = eventDate.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Número decorativo */}
      <div
        className="absolute right-[-20px] top-10 select-none text-[180px] font-light leading-none sm:text-[260px]"
        style={{
          color: "var(--theme-primary)",
          opacity: 0.05,
        }}
      >
        01
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <p
            className="text-[10px] uppercase tracking-[0.5em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            First Communion
          </p>

          <h1
            className="mt-6 text-6xl font-light leading-[0.9] tracking-tight sm:text-8xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Mi
            <br />
            Primera
            <br />
            Comunión
          </h1>

          <div
            className="my-8 h-px w-20"
            style={{
              backgroundColor: "var(--theme-accent)",
            }}
          />

          <p
            className="font-serif text-3xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {childName}
          </p>

          <p
            className="mt-5 text-xs uppercase tracking-[0.3em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            {formattedDate}
          </p>
        </div>

        {/* Fotografía */}
        <div className="order-1 md:order-2">
          {coverPhoto ? (
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
              <Image
                src={coverPhoto.url}
                alt={`Fotografía de ${childName}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-cover"
              />

              <div
                className="absolute inset-5 border"
                style={{
                  borderColor: "white",
                  opacity: 0.5,
                }}
              />
            </div>
          ) : (
            <div
              className="mx-auto aspect-[3/4] w-full max-w-md border"
              style={{
                borderColor: "var(--theme-accent)",
              }}
            />
          )}
        </div>
      </div>

      {/* Indicador */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em]"
        style={{
          color: "var(--theme-secondary)",
        }}
      >
        Scroll
      </div>
    </section>
  )
}