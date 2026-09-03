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

export default function QuinceanosPrincessHero({coverPhoto,details,event}: Props) {

  const quinceaneraName = details?.quinceaneraName ?? event.name

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-20" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
      {/* DECORACIÓN SUPERIOR */}
      <div className="absolute left-1/2 top-10 h-px w-32 -translate-x-1/2" style={{backgroundColor: "var(--theme-accent)"}}/>
      {/* DECORACIÓN IZQUIERDA */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full border" style={{borderColor: "var(--theme-accent)", opacity: 0.35}}/>
      {/* DECORACIÓN DERECHA */}
      <div className="absolute -right-24 bottom-1/3 h-64 w-64 rounded-full border" style={{borderColor: "var(--theme-accent)", opacity: 0.35}}/>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* TEXTO SUPERIOR */}
        <p className="text-xs uppercase tracking-[0.45em]" style={{color: "var(--theme-secondary)"}}>Mis XV años</p>
        {/* FOTO */}
        {coverPhoto ? (
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative aspect-4/5 overflow-hidden rounded-[45%_45%_8%_8%] border-8 shadow-xl" style={{borderColor: "var(--theme-surface)", boxShadow: "0 20px 60px rgba(0,0,0,0.12)"}}>
              <Image src={coverPhoto.url} alt={coverPhoto.title ?? quinceaneraName} fill priority className="object-cover"/>
              {/* OVERLAY */}
              <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(0,0,0,.35), transparent 45%)"}}/>
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-10 flex aspect-4/5 max-w-md items-center justify-center rounded-[45%_45%_8%_8%]" style={{backgroundColor: "var(--theme-surface)",}}>
            <span className="text-7xl" style={{color: "var(--theme-accent)"}}>♕</span>
          </div>
        )}
        {/* NOMBRE */}
        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>La celebración de</p>
          <h1 className="mt-4 text-5xl font-serif leading-tight md:text-7xl" style={{color: "var(--theme-primary)"}}>{quinceaneraName}</h1>
          {/* DETALLE */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
            <span className="text-2xl" style={{color: "var(--theme-accent)"}}>♕</span>
            <div className="h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
          {/* FRASE */}
          {details?.phrase && (<p className="mx-auto mt-6 max-w-xl text-sm italic leading-7" style={{color: "var(--theme-secondary)"}}>"{details.phrase}"</p>)}
          {/* FECHA */}
          <p className="mt-8 text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
        </div>
      </div>
    </section>
  )
}