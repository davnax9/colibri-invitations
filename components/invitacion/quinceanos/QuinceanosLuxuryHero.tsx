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

export default function QuinceanosLuxuryHero({
  coverPhoto,
  details,
  event,
}: Props) {
  const quinceaneraName = details?.quinceaneraName ?? "Mis XV Años"

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
      style={{
        backgroundColor: "var(--theme-primary)",
      }}
    >

      {/* FOTO */}
      {coverPhoto && (
        <Image
          src={coverPhoto.url}
          alt={
            coverPhoto.title ??
            `Fotografía de ${quinceaneraName}`
          }
          fill
          priority
          className="object-cover opacity-60"
        />
      )}

      {/* CAPA */}
      <div className="absolute inset-0 bg-black/45" />

      {/* MARCO */}
      <div
        className="absolute inset-6 border sm:inset-10 md:inset-16"
        style={{
          borderColor: "var(--theme-accent)",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <p
          className="text-xs uppercase tracking-[0.5em]"
          style={{
            color: "var(--theme-accent)",
          }}
        >
          La celebración de mis XV años
        </p>

        <h1 className="mt-8 font-serif text-6xl text-white sm:text-7xl md:text-8xl">
          {quinceaneraName}
        </h1>

        {details?.phrase && (
          <p className="mx-auto mt-8 max-w-xl text-sm italic leading-7 text-white/80">
            "{details.phrase}"
          </p>
        )}

        <div
          className="mx-auto mt-10 h-px w-20"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/80">
          {event.eventDate.toLocaleDateString("es-MX", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

      </div>
    </section>
  )
}