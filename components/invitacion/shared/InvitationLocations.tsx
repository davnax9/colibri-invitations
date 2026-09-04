type InvitationLocationsProps = {
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

export default function InvitationLocations({ event }: InvitationLocationsProps) {
  if (event.locations.length === 0) return null

  return (
    <section className="px-6 py-24" style={{backgroundColor: "var(--theme-surface)"}}>
      <div className="mx-auto max-w-5xl">
        {/* ENCABEZADO */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>¿Dónde será?</p>
          <h2 className="mt-4 text-4xl font-serif md:text-5xl" style={{color: "var(--theme-primary)"}}>Nuestras ubicaciones</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6" style={{color: "var(--theme-secondary)"}}>Te compartimos los lugares donde estaremos celebrando este día tan especial.</p>
          {/* DETALLE DECORATIVO */}
          <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}} />
        </div>
        {/* UBICACIONES */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {event.locations.map((location) => (
            <div key={location.id} className="group rounded-2xl border p-8 text-center transition hover:-translate-y-1 hover:shadow-md" style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-accent)"}}>
              {/* ICONO */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-sm" style={{backgroundColor: "var(--theme-surface)", color: "var(--theme-primary)"}}>
                📍
              </div>
              {/* NOMBRE */}
              <h3 className="mt-6 text-2xl font-serif" style={{color: "var(--theme-primary)"}}>{location.name}</h3>
              {/* DIRECCIÓN */}
              {location.address ? (<p className="mx-auto mt-4 max-w-sm text-sm leading-6" style={{color: "var(--theme-secondary)"}}>{location.address}</p>
              ) : (<p className="mt-4 text-sm italic" style={{color: "var(--theme-secondary)"}}>Dirección no disponible</p>)}
              {/* MAPA */}
              {location.mapsUrl && (
                <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:opacity-90" style={{backgroundColor: "var(--theme-primary)"}}>
                  🗺️ Cómo llegar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}