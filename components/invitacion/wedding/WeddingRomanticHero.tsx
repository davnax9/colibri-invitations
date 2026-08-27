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

export default function WeddingRomanticHero({coverPhoto,details,event}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-16" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* DECORACIONES */}
      <div className="absolute -left-20 top-20 h-48 w-48 rounded-full border" style={{ borderColor: "var(--theme-accent)" }}/>
      <div className="absolute -right-24 bottom-20 h-64 w-64 rounded-full border" style={{ borderColor: "var(--theme-accent)" }}/>
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center">
        <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)" }}>El comienzo de nuestro para siempre</p>
        <div className="mt-8 grid w-full items-center gap-10 md:grid-cols-2">
          {/* FOTO */}
          <div className="relative mx-auto w-full max-w-lg">
            {coverPhoto && (
              <div className="relative aspect-4/5 overflow-hidden rounded-[50%] border-8 shadow-xl"style={{borderColor: "var(--theme-surface)",backgroundColor: "var(--theme-surface)"}}>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
              </div>
            )}
            <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full border shadow-md" style={{backgroundColor: "var(--theme-surface)",borderColor: "var(--theme-accent)",color: "var(--theme-primary)"}}>
              <span className="text-2xl">♡</span>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>Nuestra boda</p>
            <h1 className="mt-5 text-5xl font-serif italic leading-tight md:text-7xl" style={{ color: "var(--theme-primary)" }}>{brideName}</h1>
            <div className="my-2 text-3xl font-serif" style={{ color: "var(--theme-accent)" }}>&</div>
            <h1 className="text-5xl font-serif italic leading-tight md:text-7xl" style={{ color: "var(--theme-primary)" }}>{groomName}</h1>
            {details?.phrase && (
              <p className="mt-7 max-w-md text-sm leading-7" style={{ color: "var(--theme-secondary)" }}>{details.phrase}</p>
            )}
            <div className="mt-8 h-px w-20 md:mx-0" style={{ backgroundColor: "var(--theme-accent)" }}/>
            <p className="mt-5 text-sm" style={{ color: "var(--theme-secondary)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
          </div>
        </div>
      </div>
    </section>
  )
}