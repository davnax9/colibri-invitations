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

export default function BautizoAngelicalHero({
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
        color: "var(--theme-text)",
      }}
    >
      {/* Cielo */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 15%, var(--theme-accent), transparent 35%)",
        }}
      />

      {/* Fotografía circular */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        {coverPhoto && (
          <div
            className="relative h-56 w-56 overflow-hidden rounded-full border-8 shadow-xl sm:h-72 sm:w-72"
            style={{
              borderColor: "var(--theme-background)",
              boxShadow: "0 0 0 1px var(--theme-accent)",
            }}
          >
            <Image
              src={coverPhoto.url}
              alt={`Fotografía de ${childName}`}
              fill
              priority
              sizes="300px"
              className="object-cover"
            />
          </div>
        )}

        {/* Halo */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-[55%] rounded-full border sm:h-96 sm:w-96"
          style={{
            borderColor: "var(--theme-accent)",
            opacity: 0.25,
          }}
        />

        <div className="relative z-10 mt-10">
          <div
            className="mb-5 text-2xl"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            ✦　✧　✦
          </div>

          <p
            className="text-xs uppercase tracking-[0.5em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Un día lleno de bendiciones
          </p>

          <h1
            className="mt-5 font-serif text-5xl font-light sm:text-7xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Mi Bautizo
          </h1>

          <p
            className="mt-4 font-serif text-3xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {childName}
          </p>

          <div
            className="mx-auto my-6 h-px w-12"
            style={{
              backgroundColor: "var(--theme-accent)",
            }}
          />

          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            {formattedDate}
          </p>
        </div>
      </div>
    </section>
  )
}