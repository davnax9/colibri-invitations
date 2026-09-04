import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }
  details: {
    title: string | null
    subtitle: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
  } | null
  event: {
    name: string
    eventDate: Date
  }
}

export default function WeddingModernHero({coverPhoto,details,event}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* INFORMACIÓN */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)" }}>Save the date</p>
          <h1 className="mt-8 text-6xl font-serif leading-[0.9] tracking-tight md:text-8xl" style={{ color: "var(--theme-primary)" }}>{brideName}</h1>
          <div className="my-2 text-5xl font-light" style={{ color: "var(--theme-accent)" }}>&</div>
          <h1 className="text-6xl font-serif leading-[0.9] tracking-tight md:text-8xl" style={{ color: "var(--theme-primary)" }}>{groomName}</h1>
          <div className="mt-10 h-px w-20" style={{ backgroundColor: "var(--theme-primary)" }}/>
          <p className="mt-5 text-sm" style={{ color: "var(--theme-secondary)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "2-digit", month: "long", year: "numeric"})}</p>
          {details?.phrase && (<p className="mt-8 max-w-md text-sm leading-7" style={{ color: "var(--theme-secondary)" }}>{details.phrase}</p>)}
        </div>
        {/* FOTO */}
        <div className="relative min-h-125 lg:min-h-screen">
          {coverPhoto ? (<Image src={coverPhoto.url} alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
          ) : (
            <div className="flex h-full items-center justify-center" style={{ backgroundColor: "var(--theme-surface)" }}>
              <span className="text-6xl" style={{ color: "var(--theme-primary)" }}> ♡ </span>
            </div>
          )}
          <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(0,0,0,0.35), transparent 50%)"}}/>
          <div className="absolute bottom-8 left-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white">Nuestra historia comienza aquí</p>
          </div>
        </div>
      </div>
    </section>
  )
}