import { CalendarDays, Clock, MapPin } from "lucide-react"

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

export default function InvitationTimeline({ schedules }: Props) {
  return (
    <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>El gran día</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl" style={{color: "var(--theme-primary)"}}>Nuestro momento</h2>
          <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
        </div>
        {/* TIMELINE */}
        <div className="relative mt-16">
          {/* LINEA */}
          <div className="absolute left-5 top-0 hidden h-full w-px sm:left-1/2 sm:block" style={{backgroundColor: "var(--theme-accent)"}}/>
          <div className="space-y-12">
            {schedules.map((schedule, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={schedule.id} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                  {/* CONTENIDO */}
                  <div className={isLeft ? "sm:pr-12" : "sm:col-start-2 sm:pl-12"}>
                    <div className="rounded-2xl border p-6 shadow-sm" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-accent)"}}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{backgroundColor:"var(--theme-background)",color: "var(--theme-primary)"}}>
                          <CalendarDays size={18} />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
                          <p className="mt-1 text-xs" style={{color: "var(--theme-secondary)"}}>{schedule.date.toLocaleDateString("es-MX", { day: "numeric",  month: "long", year: "numeric"})}</p>
                        </div>
                      </div>
                      {schedule.time && (
                        <div className="mt-5 flex items-center gap-2 text-sm" style={{color: "var(--theme-secondary)"}}>
                          <Clock size={15} />{schedule.time}
                        </div>
                      )}
                      {schedule.location && (
                        <div className="mt-2 flex items-center gap-2 text-sm" style={{color: "var(--theme-secondary)"}}>
                          <MapPin size={15} />{schedule.location.name}
                        </div>
                      )}
                      {schedule.description && (<p className="mt-4 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}
                    </div>
                  </div>
                  {/* PUNTO */}
                  <div className="absolute left-5 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 sm:left-1/2 sm:block" style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-primary)"}}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}