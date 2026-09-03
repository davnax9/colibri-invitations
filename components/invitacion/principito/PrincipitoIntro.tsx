type Props = {
  details: {
    quinceaneraName?: string | null
  } | null
}

export default function PrincipitoIntro({details}: Props) {

  const childName = details?.quinceaneraName ?? ""

  return (
    <section className="relative overflow-hidden px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)"}}>
      {/* Decoración */}
      <div className="pointer-events-none absolute left-6 top-10 text-2xl opacity-30">✦</div>
      <div className="pointer-events-none absolute right-10 top-20 text-xl opacity-30">✧</div>
      <div className="pointer-events-none absolute bottom-12 left-[15%] text-sm opacity-30">✦</div>
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Había una vez...</p>
        <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-secondary)"}}/>
        <h2 className="mt-8 text-4xl font-serif leading-tight sm:text-5xl" style={{color: "var(--theme-primary)"}}>Una aventura<br />muy especial</h2>
        <p className="mt-8 text-base leading-8 opacity-75 sm:text-lg">Hace algún tiempo comenzó una pequeña historia que hoy queremos celebrar contigo.</p>
        <p className="mt-6 text-base leading-8 opacity-75 sm:text-lg">{childName} está por vivir un día lleno de alegría, sueños, juegos y momentos inolvidables.</p>
        <div className="mt-10 text-3xl">✦</div>
      </div>
    </section>
  )
}