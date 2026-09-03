import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }

  details: {
    quinceaneraName: string | null
    phrase: string | null
  } | null

  event: {
    eventDate: Date
  }
}

export default function QuinceanosHero({ coverPhoto,details,event}: Props) {

  const name = details?.quinceaneraName ?? "Mis XV años"

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{backgroundColor: "var(--theme-primary)"}}>
      {/* IMAGEN */}
      {coverPhoto && (<Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de XV años"} fill priority sizes="100vw" className="object-cover"/>)}
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />
      {/* CONTENIDO */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="text-sm uppercase tracking-[0.5em] text-white/80">Mis XV años</p>
        <div className="mx-auto mt-8 h-px w-24" style={{backgroundColor: "var(--theme-accent)",opacity: 0.8}}/>
        <h1 className="mt-8 text-6xl font-serif md:text-8xl">{name}</h1>
        <p className="mt-8 text-lg md:text-xl">{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long",year: "numeric"})}</p>
        {details?.phrase && (<p className="mx-auto mt-10 max-w-xl text-lg italic text-white/90">"{details.phrase}"</p>)}
      </div>
    </section>
  )
}