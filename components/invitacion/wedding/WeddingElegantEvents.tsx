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

export default function WeddingElegantEvents({ schedules }: Props) {
  return (
    <section className="px-6 py-24" style={{backgroundColor: "var(--theme-surface)",color: "var(--theme-text)"}}>
      <div className="mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)" }}>Programa de celebración</p>
          <h2 className="mt-4 text-4xl font-serif md:text-5xl" style={{ color: "var(--theme-primary)" }}>Nuestro gran día</h2>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
            <span className="text-xl" style={{ color: "var(--theme-accent)" }}>✦</span>
            <span className="h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
          </div>
        </div>
        {/* EVENTOS */}
        <div className="mt-16 space-y-6">
          {schedules.map((schedule, index) => (
            <div key={schedule.id} className="group relative overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-lg" style={{borderColor: "var(--theme-accent)", backgroundColor: "var(--theme-background)"}}>
              {/* DETALLE LATERAL */}
              <div className="absolute left-0 top-0 h-full w-1" style={{backgroundColor: "var(--theme-primary)"}}/>
              <div className="grid md:grid-cols-[130px_1fr]">
                {/* NÚMERO */}
                <div className="flex items-center justify-center p-6 md:border-r" style={{borderColor: "var(--theme-accent)"}}>
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>{String(index + 1).padStart(2, "0")}</p>
                    <div className="mx-auto mt-3 h-px w-8" style={{backgroundColor: "var(--theme-accent)"}}/>
                    <p className="mt-3 text-lg" style={{color: "var(--theme-primary)"}}>✦</p>
                  </div>
                </div>
                {/* INFORMACIÓN */}
                <div className="p-7 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-serif" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
                      {schedule.location && (<p className="mt-2 text-sm" style={{color: "var(--theme-secondary)"}}>📍 {schedule.location.name}</p>)}
                    </div>
                    {/* FECHA / HORA */}
                    <div className="shrink-0 rounded-xl border px-4 py-3 text-center" style={{borderColor: "var(--theme-accent)",backgroundColor: "var(--theme-surface)"}}>
                      <p className="text-xs uppercase tracking-widest" style={{color: "var(--theme-secondary)"}}>{schedule.date.toLocaleDateString("es-MX",{day: "numeric",month: "short"})}</p>
                      {schedule.time && (<p className="mt-1 text-sm font-medium" style={{color: "var(--theme-primary)"}}>{schedule.time}</p>)}
                    </div>
                  </div>
                  {schedule.description && (<p className="mt-5 max-w-2xl text-sm leading-7" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}
                  <div className="mt-6 h-px w-full" style={{backgroundColor: "var(--theme-accent)", opacity: 0.5}}/>
                  <p className="mt-4 text-xs italic" style={{color: "var(--theme-secondary)"}}>Será un honor compartir este momento contigo.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}