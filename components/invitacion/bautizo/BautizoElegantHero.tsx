import Image from "next/image"

type Props = {
  childName: string
  coverPhoto?: {
    url: string
    alt?: string | null
  }
}

export default function BautizoElegantHero({
  childName,
  coverPhoto,
}: Props) {
  return (
    <section
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      {coverPhoto && (
        <Image
          src={coverPhoto.url}
          alt={coverPhoto.alt ?? childName}
          fill
          priority
          className="object-cover"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "var(--theme-background)",
          opacity: coverPhoto ? 0.72 : 1,
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <p
          className="text-xs uppercase tracking-[0.35em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Con alegría y amor
        </p>

        <div
          className="mx-auto my-8 h-px w-16"
          style={{
            backgroundColor: "var(--theme-accent)",
          }}
        />

        <p
          className="text-5xl font-serif md:text-7xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Mi Bautizo
        </p>

        <h1
          className="mt-6 text-4xl font-serif md:text-6xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          {childName}
        </h1>

        <p
          className="mt-6 text-sm uppercase tracking-[0.25em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Una fecha para recordar
        </p>
      </div>
    </section>
  )
}