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

export default function WeddingLuxuryHero({coverPhoto,details,event}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* MARCO EXTERIOR */}
      <div className="absolute inset-5 border md:inset-10" style={{ borderColor: "var(--theme-accent)" }}/>
      <div className="absolute inset-8 border md:inset-14" style={{ borderColor: "var(--theme-accent)" }}/>
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.5em]" style={{ color: "var(--theme-secondary)" }}>The wedding of</p>
        <div className="mx-auto mt-6 flex h-10 w-10 items-center justify-center rounded-full border text-lg" style={{borderColor: "var(--theme-accent)",color: "var(--theme-primary)",}}>
          ✦
        </div>
        {coverPhoto && (
          <div className="mx-auto mt-8 max-w-sm">
            <div className="relative aspect-3/4 overflow-hidden border-4 p-2 shadow-2xl" style={{borderColor: "var(--theme-accent)",backgroundColor: "var(--theme-surface)"}}>
              <div className="relative h-full w-full overflow-hidden">
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
              </div>
            </div>
          </div>
        )}
        <h1 className="mt-9 text-5xl font-serif md:text-7xl"  style={{ color: "var(--theme-primary)"}}>{brideName}<span className="mx-3 italic" style={{ color: "var(--theme-accent)" }}>&</span>{groomName}</h1>
        {details?.phrase && (<p className="mx-auto mt-5 max-w-lg text-sm italic leading-7" style={{ color: "var(--theme-secondary)" }}>{details.phrase}</p>)}
        <div className="mx-auto mt-7 flex items-center justify-center gap-3">
          <div className="h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
          <span style={{ color: "var(--theme-accent)" }}>✦</span>
          <div className="h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})}</p>
      </div>
    </section>
  )
}