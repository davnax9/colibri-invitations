import { Clock, MapPin } from "lucide-react"

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

export default function InvitationLuxurySchedule({schedules}: Props) {
  return (
    <section className="px-6 py-28" style={{backgroundColor: "var(--theme-primary)",color: "var(--theme-text)"}}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em]" style={{color: "var(--theme-accent)"}}>Programa</p>
          <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl">La celebración</h2>
          <div className="mx-auto mt-7 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden border md:grid-cols-2" style={{borderColor: "var(--theme-accent)"}}>
          {schedules.map((schedule) => (
            <article key={schedule.id} className="p-8 md:p-10" style={{backgroundColor: "var(--theme-primary)", borderColor: "var(--theme-accent)"}}>
              <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-accent)"}}>{schedule.date.toLocaleDateString("es-MX",{day: "numeric", month: "long", year: "numeric"})}</p>
              <h3 className="mt-5 font-serif text-3xl text-white">{schedule.title}</h3>
              {schedule.time && (<div className="mt-6 flex items-center gap-2 text-sm" style={{color: "var(--theme-accent)"}}><Clock size={16} />{schedule.time}</div>)}
              {schedule.location && (<div className="mt-3 flex items-center gap-2 text-sm text-white/70"><MapPin size={16} />{schedule.location.name}</div>)}
              {schedule.description && (<p className="mt-5 text-sm leading-7 text-white/60">{schedule.description}</p>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}