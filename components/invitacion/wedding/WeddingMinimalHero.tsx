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

export default function WeddingMinimalHero({coverPhoto,details,event}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section className="min-h-screen px-6 py-16" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center">
        {/* FECHA */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--theme-secondary)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "2-digit", month: "2-digit",year: "numeric"})}</p>
        </div>
        {/* NOMBRES */}
        <div className="mt-10 text-center">
          <h1 className="text-6xl font-serif font-light tracking-tight md:text-8xl" style={{ color: "var(--theme-primary)" }}>{brideName}</h1>
          <p className="my-2 text-xl font-light" style={{ color: "var(--theme-accent)" }}>&</p>
          <h1 className="text-6xl font-serif font-light tracking-tight md:text-8xl" style={{ color: "var(--theme-primary)" }}>{groomName}</h1>
        </div>
        {/* FOTO */}
        {coverPhoto && (
          <div className="mx-auto mt-12 w-full max-w-2xl">
            <div className="relative aspect-video overflow-hidden">
              <Image src={coverPhoto.url} alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
            </div>
          </div>
        )}
        {/* FRASE */}
        {details?.phrase && (<p className="mx-auto mt-10 max-w-xl text-center text-sm leading-7" style={{ color: "var(--theme-secondary)" }}>{details.phrase}</p>)}
        <div className="mx-auto mt-10 h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
      </div>
    </section>
  )
}