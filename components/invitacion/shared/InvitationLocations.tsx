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
  
  const hasSingleLocation = event.locations.length === 1
  
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
        <div className={hasSingleLocation ? "mt-14 flex justify-center" : "mt-14 grid gap-6 md:grid-cols-2"}>
          {event.locations.map((location) => (
            <div key={location.id} className={`group relative overflow-hidden rounded-3xl border p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg ${hasSingleLocation ? "w-full max-w-2xl px-8 py-10 md:px-12 md:py-12" : ""}`}
              style={{backgroundColor: "var(--theme-background)", borderColor: "var(--theme-accent)"}}
            >
              {/* DECORACIÓN */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 blur-2xl" style={{backgroundColor: "var(--theme-accent)"}}/>
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full opacity-10 blur-2xl" style={{backgroundColor: "var(--theme-secondary)"}}/>
              {/* CONTENIDO */}
              <div className="relative">
                {/* ETIQUETA */}
                {hasSingleLocation && (<p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em]" style={{ color: "var(--theme-secondary)" }}>Lugar de celebración</p>)}
                {/* ICONO */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border shadow-sm" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-accent)", color: "var(--theme-primary)",}}>
                  <span className="text-2xl">📍</span>
                </div>
                {/* NOMBRE */}
                <h3 className={`mt-6 font-serif ${hasSingleLocation ? "text-3xl md:text-4xl" : "text-2xl"}`} style={{ color: "var(--theme-primary)" }}>{location.name}</h3>
                {/* LÍNEA DECORATIVA */}
                <div className="mx-auto mt-5 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
                {/* DIRECCIÓN */}
                {location.address ? (<p className={`mx-auto mt-5 leading-6 ${hasSingleLocation ? "max-w-lg text-base" : "max-w-sm text-sm"}`} style={{ color: "var(--theme-secondary)" }}>{location.address}</p>
                ) : (<p className="mt-5 text-sm italic" style={{ color: "var(--theme-secondary)" }}>Dirección no disponible</p>)}
                {/* MAPA */}
                {location.mapsUrl && (
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md" style={{backgroundColor: "var(--theme-primary)"}}>
                    <span>🗺️</span>
                    <span>Cómo llegar</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}