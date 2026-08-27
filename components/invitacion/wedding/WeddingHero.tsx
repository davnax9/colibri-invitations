import Image from "next/image";

type WeddingHeroProps = {
    coverPhoto: {
        id: string;
        url: string;
        title: string | null;
        isCover: boolean;
    },
    details: {
        title: string | null;
        subtitle: string | null;
        description: string | null;
        phrase: string | null;
        groomName: string | null;
        brideName: string | null;
        quinceaneraName: string | null;
        dressCode: string | null;
    } | null,
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
        title: string | null,
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

export default function WeddingHero({coverPhoto, details, event}: WeddingHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: "var(--theme-primary)" }}>
        {coverPhoto && (
            <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority sizes="100vw" className="object-cover"/>
        )}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 text-center text-white">
            <p className="text-xs uppercase tracking-[0.5em] text-white/80 sm:text-sm" style={{ color: "var(--theme-accent)" }}>Nuestra boda</p>
            <div className="mx-auto mt-8 h-px w-16 bg-white/60" />
            <h1 className="mt-8 font-serif text-5xl font-light tracking-wide sm:text-6xl md:text-8xl" style={{ color: "var(--theme-accent)" }}>{details?.brideName}
            <span className="mx-3 block text-3xl font-light text-white/70 sm:inline sm:text-5xl" style={{ color: "var(--theme-accent)" }}>&</span>{details?.groomName}
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/90 sm:text-base" style={{ color: "var(--theme-accent)" }}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</p>
            {details?.phrase && (
            <p className="mx-auto mt-10 max-w-xl font-serif text-lg italic leading-8 text-white/90 sm:text-xl">"{details.phrase}"</p>
            )}
            <div className="mt-16 flex flex-col items-center gap-3 text-white/70">
            <span className="text-[10px] uppercase tracking-[0.4em]" style={{ color: "var(--theme-accent)" }}>Descubre nuestra historia</span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/50 pt-2" style={{ borderColor: "var(--theme-accent)", borderWidth: "1px"}}>
                <div className="h-2 w-1 animate-bounce rounded-full" style={{ backgroundColor: "var(--theme-accent)" }} />
            </div>
            </div>
        </div>
        </section>
  )
}
