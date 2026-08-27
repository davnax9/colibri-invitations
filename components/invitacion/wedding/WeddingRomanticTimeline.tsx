type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  location: {
    name: string
  } | null
}

type Props = {
  schedules: Schedule[]
}

export default function WeddingRomanticTimeline({ schedules }: Props) {
  if (!schedules.length) return null

  return (
    <section
      className="px-6 py-24"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="mx-auto max-w-4xl">

        {/* ENCABEZADO */}

        <div className="text-center">

          <span
            className="text-3xl"
            style={{ color: "var(--theme-accent)" }}
          >
            ♡
          </span>

          <p
            className="mt-4 text-xs uppercase tracking-[0.35em]"
            style={{ color: "var(--theme-secondary)" }}
          >
            El gran día
          </p>

          <h2
            className="mt-3 text-4xl font-serif md:text-5xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Momentos que viviremos
          </h2>

          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />
        </div>

        {/* TIMELINE */}

        <div className="relative mt-16">

          {/* LÍNEA */}

          <div
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ backgroundColor: "var(--theme-accent)" }}
          />

          <div className="space-y-12">

            {schedules.map((schedule, index) => {

              const isLeft = index % 2 === 0

              return (
                <div
                  key={schedule.id}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >

                  {/* PUNTO */}

                  <div
                    className="absolute left-5 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4"
                    style={{
                      backgroundColor: "var(--theme-background)",
                      borderColor: "var(--theme-accent)",
                    }}
                  />

                  {/* CONTENIDO */}

                  <div
                    className={`
                      ml-10
                      rounded-2xl
                      border
                      p-6
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:shadow-md
                      md:ml-0
                      ${
                        isLeft
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-2 md:row-start-1"
                      }
                    `}
                    style={{
                      backgroundColor: "var(--theme-surface)",
                      borderColor: "var(--theme-accent)",
                    }}
                  >

                    {/* NÚMERO */}

                    <span
                      className="text-xs font-medium"
                      style={{
                        color: "var(--theme-accent)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TÍTULO */}

                    <h3
                      className="mt-2 text-2xl font-serif"
                      style={{
                        color: "var(--theme-primary)",
                      }}
                    >
                      {schedule.title}
                    </h3>

                    {/* FECHA */}

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color: "var(--theme-secondary)",
                      }}
                    >
                      {schedule.date.toLocaleDateString(
                        "es-MX",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}

                      {schedule.time && (
                        <> · {schedule.time}</>
                      )}
                    </p>

                    {/* UBICACIÓN */}

                    {schedule.location && (
                      <p
                        className="mt-3 text-sm font-medium"
                        style={{
                          color: "var(--theme-text)",
                        }}
                      >
                        📍 {schedule.location.name}
                      </p>
                    )}

                    {/* DESCRIPCIÓN */}

                    {schedule.description && (
                      <p
                        className="mt-3 text-sm leading-6"
                        style={{
                          color: "var(--theme-secondary)",
                        }}
                      >
                        {schedule.description}
                      </p>
                    )}

                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}