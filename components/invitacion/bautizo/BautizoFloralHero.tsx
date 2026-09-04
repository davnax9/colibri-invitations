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

export default function BautizoFloralHero({
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
      {/* Flores decorativas */}
      <div
        className="absolute -left-8 -top-10 text-[160px] leading-none"
        style={{
          color: "var(--theme-primary)",
          opacity: 0.08,
        }}
      >
        ❦
      </div>

      <div
        className="absolute -bottom-10 -right-8 rotate-180 text-[160px] leading-none"
        style={{
          color: "var(--theme-primary)",
          opacity: 0.08,
        }}
      >
        ❦
      </div>

      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-md">
          {coverPhoto ? (
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-t-[50%] rounded-b-[20%] border-4"
              style={{
                borderColor: "var(--theme-accent)",
              }}
            >
              <Image
                src={coverPhoto.url}
                alt={`Fotografía de ${childName}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 450px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              className="aspect-[4/5] rounded-t-[50%] rounded-b-[20%] border"
              style={{
                borderColor: "var(--theme-accent)",
              }}
            />
          )}

          <div
            className="absolute -bottom-5 -right-5 flex h-20 w-20 items-center justify-center rounded-full border"
            style={{
              backgroundColor: "var(--theme-background)",
              borderColor: "var(--theme-accent)",
              color: "var(--theme-primary)",
            }}
          >
            ✝
          </div>
        </div>

        {/* Contenido */}
        <div className="text-center md:text-left">
          <p
            className="text-xs uppercase tracking-[0.4em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            Un día lleno de bendiciones
          </p>

          <h1
            className="mt-6 font-serif text-5xl font-light sm:text-6xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            Mi Bautizo
          </h1>

          <div
            className="my-6 h-px w-16 md:mx-0 mx-auto"
            style={{
              backgroundColor: "var(--theme-accent)",
            }}
          />

          <p
            className="font-serif text-4xl"
            style={{
              color: "var(--theme-primary)",
            }}
          >
            {childName}
          </p>

          <p
            className="mt-6 text-sm uppercase tracking-[0.25em]"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            {formattedDate}
          </p>

          <p
            className="mx-auto mt-8 max-w-md font-serif text-lg italic md:mx-0"
            style={{
              color: "var(--theme-secondary)",
            }}
          >
            "Que la luz y el amor acompañen siempre tu camino."
          </p>
        </div>
      </div>
    </section>
  )
}