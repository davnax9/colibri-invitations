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

export default function InvitationSchedule({event}: InvitationScheduleProps) {
  return (
    <>
      {event.schedules.length > 0 && (
        <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
          {/* ENCABEZADO */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Celebremos juntos</p>
            <h2 className="mt-4 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Nuestro día</h2>
            <div className="mx-auto mt-5 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
          {/* LÍNEA DE TIEMPO */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* LÍNEA CENTRAL */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2" style={{backgroundColor: "var(--theme-accent)", opacity: 0.5}}/>
              <div className="space-y-12">
                {event.schedules.map((schedule, index) => {
                  const isLeft = index % 2 === 0
                  return (
                    <div key={schedule.id} className="relative grid grid-cols-2">
                      {/* CONTENIDO IZQUIERDO */}
                      <div className={`pr-10 ${isLeft ? "text-right" : "pointer-events-none"}`}>{isLeft && (<TimelineContent schedule={schedule} />)}</div>
                      {/* CONTENIDO DERECHO */}
                      <div className={`pl-10 ${!isLeft ? "text-left" : "pointer-events-none"}`}>{!isLeft && (<TimelineContent schedule={schedule} />)}</div>
                      {/* PUNTO CENTRAL */}
                      <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2" style={{backgroundColor:"var(--theme-background)",borderColor:"var(--theme-primary)"}}>
                        <div className="h-1.5 w-1.5 rounded-full" style={{backgroundColor:"var(--theme-accent)"}}/>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function TimelineContent({schedule}: {schedule: InvitationScheduleProps["event"]["schedules"][number]}) {
  return (
    <div className="py-2">
      {/* HORA */}
      {schedule.time && (<p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{color: "var(--theme-secondary)"}}>{schedule.time}</p>)}
      {/* TÍTULO */}
      <h3 className="mt-2 text-2xl font-serif" style={{color: "var(--theme-primary)"}}>{schedule.title}</h3>
      {/* FECHA */}
      <p className="mt-2 text-sm" style={{color: "var(--theme-secondary)"}}>{schedule.date.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
      {/* UBICACIÓN */}
      {schedule.location && (<p className="mt-2 text-sm font-medium" style={{color: "var(--theme-text)"}}>📍 {schedule.location.name}</p>)}
      {/* DESCRIPCIÓN */}
      {schedule.description && (<p className="mt-3 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{schedule.description}</p>)}
      {/* DETALLE */}
      <div className="mt-4 h-px w-8" style={{backgroundColor: "var(--theme-accent)", marginLeft: "auto"}}/>
    </div>
  )
}