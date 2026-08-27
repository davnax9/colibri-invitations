type Props = {
  details: {
    title: string | null
    subtitle: string | null
    description: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
  } | null
}

export default function WeddingRomanticStory({ details }: Props) {
  if (!details) return null

  const brideName = details.brideName ?? ""
  const groomName = details.groomName ?? ""

  return (
    <section
      className="relative overflow-hidden px-6 py-24"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-text)",
      }}
    >
      {/* DECORACIÓN */}
      <div
        className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{ backgroundColor: "var(--theme-accent)" }}
      />

      <div
        className="absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full opacity-10"
        style={{ backgroundColor: "var(--theme-primary)" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">

        <span
          className="text-4xl"
          style={{ color: "var(--theme-accent)" }}
        >
          ♡
        </span>

        <p
          className="mt-6 text-xs uppercase tracking-[0.35em]"
          style={{ color: "var(--theme-secondary)" }}
        >
          Nuestra historia
        </p>

        <h2
          className="mt-4 text-4xl font-serif md:text-5xl"
          style={{ color: "var(--theme-primary)" }}
        >
          Un amor para recordar
        </h2>

        {details.phrase && (
          <blockquote
            className="mx-auto mt-10 max-w-2xl text-2xl font-serif italic leading-relaxed md:text-3xl"
            style={{ color: "var(--theme-primary)" }}
          >
            “{details.phrase}”
          </blockquote>
        )}

        {details.description && (
          <p
            className="mx-auto mt-8 max-w-2xl text-sm leading-7"
            style={{ color: "var(--theme-secondary)" }}
          >
            {details.description}
          </p>
        )}

        <div
          className="mx-auto mt-10 h-px w-16"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />

        <p
          className="mt-8 font-serif text-xl"
          style={{ color: "var(--theme-primary)" }}
        >
          {brideName}
          <span
            className="mx-3"
            style={{ color: "var(--theme-accent)" }}
          >
            ♡
          </span>
          {groomName}
        </p>
      </div>
    </section>
  )
}