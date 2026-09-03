import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }
  details: {
    title: string | null
    subtitle: string | null
    quinceaneraName: string | null
    phrase: string | null
  } | null
  event: {
    name: string
    eventDate: Date
  }
}

export default function QuinceanosFloralHero({coverPhoto,details,event}: Props) {

  const quinceaneraName = details?.quinceaneraName ?? event.name

  return (
    <section className="relative overflow-hidden px-6 py-20" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* FLORES DECORATIVAS */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border-18 opacity-30" style={{borderColor: "var(--theme-accent)"}}/>
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border-24px opacity-20" style={{borderColor: "var(--theme-secondary)"}}/>
      <div className="absolute bottom-0 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border opacity-20" style={{borderColor: "var(--theme-accent)"}}/>
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ENCABEZADO */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Una celebración muy especial</p>
          <h1 className="mt-5 text-5xl font-serif md:text-7xl" style={{color: "var(--theme-primary)"}}>{quinceaneraName}</h1>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="text-xl" style={{color: "var(--theme-accent)"}}>✿</span>
            <div className="h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-xl" style={{color: "var(--theme-accent)"}}>❀</span>
            <div className="h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-xl" style={{color: "var(--theme-accent)"}}>✿</span>
          </div>
        </div>
        {/* FOTO */}
        {coverPhoto && (
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative overflow-hidden rounded-[3rem]">
              <Image src={coverPhoto.url} alt={coverPhoto.title ?? quinceaneraName} width={1600} height={1100} priority className="h-125 w-full object-cover md:h-162.5"/>
              <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(0,0,0,.4), transparent 55%)"}}/>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-white">Mis XV años</p>
                <p className="mt-3 text-2xl font-serif text-white md:text-4xl">{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
              </div>
            </div>
          </div>
        )}
        {/* FRASE */}
        {details?.phrase && (
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-lg italic leading-8" style={{color: "var(--theme-secondary)"}}>"{details.phrase}"</p>
          </div>
        )}
      </div>
    </section>
  )
}