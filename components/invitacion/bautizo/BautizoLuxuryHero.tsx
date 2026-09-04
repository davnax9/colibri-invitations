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

export default function BautizoLuxuryHero({
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
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-primary)",
        color: "var(--theme-background)",
      }}
    >
      {coverPhoto && (
        <>
          <Image
            src={coverPhoto.url}
            alt={`Fotografía de ${childName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Marco exterior */}
      <div
        className="absolute inset-5 border sm:inset-8"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.7,
        }}
      />

      <div
        className="absolute inset-8 border sm:inset-12"
        style={{
          borderColor: "var(--theme-accent)",
          opacity: 0.25,
        }}
      />

      <div className="relative z-10 px-6 py-20 text-center">
        <p
          className="text-[10px] uppercase tracking-[0.6em]"
          style={{
            color: "var(--theme-accent)",
          }}
        >
          Una celebración especial
        </p>

        <div
          className="mx-auto my-10 flex h-24 w-24 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--theme-accent)",
          }}
        >
          <span
            className="text-4xl"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            ✝
          </span>
        </div>

        <p
          className="font-serif text-5xl font-light sm:text-7xl"
          style={{
            color: "var(--theme-background)",
          }}
        >
          Mi Bautizo
        </p>

        <div
          className="mx-auto my-8 h-px w-20"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <h1
          className="font-serif text-4xl font-light sm:text-5xl"
          style={{
            color: "var(--theme-accent)",
          }}
        >
          {childName}
        </h1>

        <p
          className="mt-8 text-xs uppercase tracking-[0.4em]"
          style={{
            color: "var(--theme-background)",
            opacity: 0.75,
          }}
        >
          {formattedDate}
        </p>
      </div>
    </section>
  )
}