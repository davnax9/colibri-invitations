type Props = {
  schedules: {
    id: string
    title: string
    date: Date
    time: string | null
    description: string | null
    location: {
      name: string
    } | null
  }[]
}

export default function WeddingLuxuryCelebration({ schedules }: Props) {
  return (
    <section
      className="px-6 py-28"
      style={{
        backgroundColor: "var(--theme-surface)",
        color: "var(--theme-text)",
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* ENCABEZADO */}
        <div className="text-center">
          <p
            className="text-xs uppercase tracking-[0.45em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            La celebración
          </p>

          <h2
            className="mt-5 text-4xl font-serif md:text-6xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Nuestro día
          </h2>

          <div
            className="mx-auto mt-7 h-px w-20"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />
        </div>

        {/* EVENTOS */}
        <div className="mt-20">
          {schedules.map((schedule, index) => (
            <div
              key={schedule.id}
              className="group grid gap-8 border-t py-10 md:grid-cols-[120px_1fr_220px] md:items-center"
              style={{ borderColor: "var(--theme-accent)" }}
            >

              {/* NUMERO */}
              <div className="text-center md:text-left">
                <span
                  className="font-serif text-5xl"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* INFORMACIÓN */}
              <div className="text-center md:text-left">
                <h3
                  className="text-2xl font-serif md:text-3xl"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {schedule.title}
                </h3>

                {schedule.description && (
                  <p
                    className="mt-3 max-w-xl text-sm leading-6"
                    style={{ color: "var(--theme-secondary)" }}
                  >
                    {schedule.description}
                  </p>
                )}

                {schedule.location && (
                  <p
                    className="mt-4 text-sm font-medium"
                    style={{ color: "var(--theme-text)" }}
                  >
                    📍 {schedule.location.name}
                  </p>
                )}
              </div>

              {/* HORA / FECHA */}
              <div className="text-center md:text-right">
                <p
                  className="font-serif text-2xl"
                  style={{ color: "var(--theme-primary)" }}
                >
                  {schedule.time ?? "—"}
                </p>

                <p
                  className="mt-2 text-xs uppercase tracking-wider"
                  style={{ color: "var(--theme-secondary)" }}
                >
                  {schedule.date.toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* CIERRE */}
          <div
            className="border-t py-10 text-center"
            style={{ borderColor: "var(--theme-accent)" }}
          >
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "var(--theme-secondary)" }}
            >
              Y después...
            </span>

            <p
              className="mt-4 font-serif text-2xl italic"
              style={{ color: "var(--theme-primary)" }}
            >
              Celebremos juntos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}