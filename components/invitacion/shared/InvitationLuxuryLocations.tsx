import { MapPin, Navigation } from "lucide-react"

type Location = {
  id: string
  name: string
  address: string | null
  mapsUrl: string | null
}

type Props = {
  locations: Location[]
}

export default function InvitationLuxuryLocations({locations}: Props) {
  return (
    <section className="px-6 py-28" style={{backgroundColor: "var(--theme-primary)"}}>
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em]" style={{color: "var(--theme-accent)"}}>Ubicaciones</p>
          <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl">Donde celebraremos</h2>
          <div className="mx-auto mt-7 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
        </div>
        {/* LOCATIONS */}
        <div className="mt-20 space-y-px">
          {locations.map((location, index) => (
            <article key={location.id} className="grid gap-8 border-t px-2 py-10 md:grid-cols-[100px_1fr_auto] md:items-center" style={{borderColor: "var(--theme-accent)"}}>
              {/* NUMERO */}
              <div className="font-serif text-4xl" style={{color: "var(--theme-accent)"}}>{String(index + 1).padStart(2, "0")}</div>
              {/* INFO */}
              <div>
                <div className="flex items-center gap-3">
                  <MapPin size={17} style={{color: "var(--theme-accent)"}}/>
                  <h3 className="font-serif text-2xl text-white">{location.name}</h3>
                </div>
                {location.address && (<p className="mt-3 text-sm leading-6 text-white/60">{location.address}</p>)}
              </div>
              {/* BOTON */}
              {location.mapsUrl && (
                <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-5 py-2.5 text-xs uppercase tracking-wider text-white transition hover:bg-white hover:text-black" style={{borderColor: "var(--theme-accent)"}}>
                  <Navigation size={14} />Cómo llegar
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}