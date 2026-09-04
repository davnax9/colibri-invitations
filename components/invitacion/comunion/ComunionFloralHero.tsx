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

export default function ComunionFloralHero({
  childName,
  eventDate,
  coverPhoto,
}: Props) {
  const formattedDate = eventDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      {/* Flores */}
      <div
        className="absolute -left-10 top-10 text-[180px] leading-none"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.12,
        }}
      >
        ❦
      </div>

      <div
        className="absolute -right-10 bottom-10 rotate-180 text-[180px] leading-none"
        style={{
          color: "var(--theme-accent)",
          opacity: 0.12,
        }}
      >
        ❦
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <p
          className="text-xs uppercase tracking-[0.45em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Un día de fe y alegría
        </p>

        <h1
          className="mt-5 font-serif text-4xl font-light sm:text-6xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Mi Primera Comunión
        </h1>

        <div
          className="my-8 flex items-center gap-4"
          style={{
            color: "var(--theme-accent)",
          }}
        >
          <span>❧</span>
          <span>✦</span>
          <span>❧</span>
        </div>

        {coverPhoto && (
          <div
            className="relative h-64 w-64 overflow-hidden rounded-full border-8 shadow-xl sm:h-80 sm:w-80"
            style={{
              borderColor: "var(--theme-surface)",
              boxShadow: "0 0 0 1px var(--theme-accent)",
            }}
          >
            <Image
              src={coverPhoto.url}
              alt={`Fotografía de ${childName}`}
              fill
              priority
              sizes="350px"
              className="object-cover"
            />
          </div>
        )}

        <p
          className="mt-8 font-serif text-4xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          {childName}
        </p>

        <p
          className="mt-5 text-sm uppercase tracking-[0.3em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          {formattedDate}
        </p>
      </div>
    </section>
  )
}