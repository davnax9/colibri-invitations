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

export default function ComunionClassicHero({
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
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <div
        className="absolute inset-6 border sm:inset-10"
        style={{
          borderColor: "var(--theme-accent)",
        }}
      />

      <div
        className="relative z-10 mx-auto max-w-2xl px-8 py-20 text-center"
      >
        <div
          className="mx-auto mb-8 h-px w-20"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <span
          className="text-4xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          ✝
        </span>

        <p
          className="mt-6 text-[10px] uppercase tracking-[0.5em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          El día de mi Primera Comunión
        </p>

        {coverPhoto && (
          <div
            className="relative mx-auto mt-8 h-52 w-52 overflow-hidden rounded-full border-4"
            style={{
              borderColor: "var(--theme-accent)",
            }}
          >
            <Image
              src={coverPhoto.url}
              alt={`Fotografía de ${childName}`}
              fill
              priority
              sizes="250px"
              className="object-cover"
            />
          </div>
        )}

        <h1
          className="mt-8 font-serif text-4xl font-light sm:text-6xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          {childName}
        </h1>

        <p
          className="mt-5 font-serif text-xl italic"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          "Con el corazón lleno de fe"
        </p>

        <div
          className="mx-auto my-7 h-px w-12"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <p
          className="text-xs uppercase tracking-[0.3em]"
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