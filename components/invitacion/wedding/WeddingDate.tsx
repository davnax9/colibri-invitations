type WeddingDateProps = {
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

export default function WeddingDate({event}: WeddingDateProps) {
  return (
    <>
        <section className="bg-white px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
            <div className="mx-auto mt-5 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}} />
            <h2 className="mt-5 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>{event.eventDate.toLocaleDateString("es-MX",{day: "numeric", month: "long",year: "numeric"})}</h2>
        </section>
    </>
  )
}
