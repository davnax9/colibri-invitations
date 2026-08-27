type WeddingDressCodeProps = {
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
}

export default function WeddingDressCode({details}: WeddingDressCodeProps) {
  if (!details?.dressCode) return null

  return (
    <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
      <div className="mx-auto max-w-2xl">

        {/* ENCABEZADO */}
        <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Código de vestimenta</p>

        {/* DECORACIÓN */}
        <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>

        {/* ICONO */}
        <div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full border text-2xl" style={{borderColor: "var(--theme-accent)", color: "var(--theme-primary)"}}>
          ✨
        </div>

        {/* CÓDIGO */}
        <h2 className="mt-7 text-3xl font-serif md:text-4xl" style={{ color: "var(--theme-primary)"}}>{details.dressCode}</h2>

        {/* TEXTO */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7" style={{ color: "var(--theme-secondary)"}}>Te invitamos a vestir de acuerdo con el código de vestimenta indicado para acompañarnos en este día tan especial.</p>
      </div>
    </section>
  )
}