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

export default function WeddingElegantHero({coverPhoto,details,event}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
      {/* DECORACIÓN */}
      <div className="absolute left-1/2 top-20 h-px w-24 -translate-x-1/2" style={{ backgroundColor: "var(--theme-accent)" }}/>
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)" }}>Nuestra boda</p>
        <div className="mt-10">
          {coverPhoto && (
            <div className="mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border p-2 shadow-xl" style={{backgroundColor: "var(--theme-surface)", borderColor: "var(--theme-accent)"}}>
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
              </div>
            </div>
          )}
        </div>
        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>Con amor</p>
          <h1 className="mt-4 text-5xl font-serif leading-tight md:text-7xl" style={{ color: "var(--theme-primary)" }}>{brideName}<span className="mx-3 italic" style={{ color: "var(--theme-accent)" }}>&</span>{groomName}</h1>
          {details?.phrase && (<p className="mx-auto mt-6 max-w-xl text-sm leading-7 md:text-base" style={{ color: "var(--theme-secondary)" }}>{details.phrase}</p>)}
        </div>
        <div className="mx-auto mt-10 h-px w-16" style={{ backgroundColor: "var(--theme-accent)" }}/>
        <p className="mt-6 text-sm" style={{ color: "var(--theme-secondary)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
      </div>
    </section>
  )
}