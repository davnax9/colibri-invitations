type InvitationScheduleProps = {
  event: {
    name: string
    eventDate: Date

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      dressCode: string | null
    } | null

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
    }[]

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

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }
}

export default function InvitationSchedule({ event }: InvitationScheduleProps) {
  return (
    <>
      {event.schedules.length > 0 && (
        <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
          {/* ENCABEZADO */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Celebremos juntos</p>
            <h2 className="mt-4 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Nuestro día</h2>

            {/* DETALLE DECORATIVO */}
            <div className="mx-auto mt-5 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>

          {/* HORARIOS */}
          <div className="mx-auto mt-16 max-w-4xl space-y-8">
            {event.schedules.map((schedule) => (
              <div key={schedule.id} className="rounded-2xl p-8 text-center shadow-sm" style={{backgroundColor: "var(--theme-surface)", color: "var(--theme-text)"}}>
                {/* TÍTULO */}
                <h3 className="text-2xl font-serif" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>

                {/* FECHA Y HORA */}
                <p className="mt-3" style={{color: "var(--theme-secondary)"}}>
                  {schedule.date.toLocaleDateString("es-MX", { day: "numeric", month: "long",year: "numeric"})} {schedule.time && <> · {schedule.time}</>}
                </p>

                {/* UBICACIÓN */}
                {schedule.location && (<p className="mt-3 font-medium" style={{color: "var(--theme-text)"}}>📍 {schedule.location.name}</p>)}

                {/* DESCRIPCIÓN */}
                {schedule.description && (<p className="mt-4 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}

                {/* DETALLE DECORATIVO */}
                <div className="mx-auto mt-6 h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}