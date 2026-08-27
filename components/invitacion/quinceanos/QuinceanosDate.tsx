type Props = {
  event: {
    eventDate: Date
  }
}

export default function QuinceanosDate({ event }: Props) {

  const date = event.eventDate

  return (
    <section className="bg-white px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
      <p className="text-sm uppercase tracking-[0.4em]" style={{color: "var(--theme-accent)"}}>Reserva la fecha</p>
      <div className="mx-auto mt-8 max-w-xl">
        <p className="text-2xl font-serif md:text-3xl" style={{color: "var(--theme-primary)"}}>{date.toLocaleDateString("es-MX", {weekday: "long",})}</p>
        <p className="mt-3 text-6xl font-serif md:text-7xl" style={{color: "var(--theme-primary)"}}>{date.getDate()}</p>
        <p className="mt-3 text-xl capitalize" style={{color: "var(--theme-secondary)"}}>{date.toLocaleDateString("es-MX", {month: "long",year: "numeric",})}</p>
        <div className="mx-auto mt-8 h-px w-24" style={{backgroundColor: "var(--theme-accent)"}}/>
        <p className="mt-6 text-sm" style={{color: "var(--theme-secondary)"}}>Será un placer compartir este momento contigo.</p>
      </div>
    </section>
  )
}