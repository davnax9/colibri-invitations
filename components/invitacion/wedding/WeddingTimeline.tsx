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

export default function WeddingTimeline({ schedules }: Props) {
  if (schedules.length === 0) {
    return null
  }

  return (
    <section className="px-6 py-24 sm:py-32" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      <div className="mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <div className="mb-16 grid gap-6 md:grid-cols-[180px_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>02</p>
            <div className="mt-4 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>El gran día</p>
            <h2 className="mt-4 text-4xl font-serif sm:text-5xl" style={{color: "var(--theme-primary)"}}>Nuestro día</h2>
          </div>
        </div>
        {/* TIMELINE */}
        <div className="relative">
          {/* LINEA */}
          <div className="absolute bottom-0 left-5.75 top-0 w-px md:left-1/2" style={{backgroundColor: "var(--theme-accent)"}}/>
          <div className="space-y-12">
            {schedules.map((schedule, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={schedule.id} className="relative grid gap-8 md:grid-cols-2 md:gap-16">
                  {/* IZQUIERDA */}
                  <div className={`pl-14 md:pl-0 ${isEven ? "md:text-right" : "md:order-2 md:text-left"}`}>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{color: "var(--theme-secondary)"}}>{schedule.time ?? "Momento especial"}</p>
                    <h3 className="mt-3 text-2xl font-serif sm:text-3xl" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
                    {schedule.description && (<p className="mt-3 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}
                    {schedule.location && (<p className="mt-4 text-sm font-medium" style={{color: "var(--theme-text)"}}>📍 {schedule.location.name}</p>)}
                  </div>
                  {/* PUNTO CENTRAL */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border-4" style={{backgroundColor: "var(--theme-background)",borderColor: "var(--theme-accent)"}}/>
                  </div>
                  {/* LADO DERECHO */}
                  <div className={`hidden md:block ${ isEven ? "md:order-2" : "md:order-1"}`}>
                    <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
                      <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{color: "var(--theme-accent)"}}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
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