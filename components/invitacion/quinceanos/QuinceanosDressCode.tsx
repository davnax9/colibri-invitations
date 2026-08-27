type Props = {
  details: {
    dressCode: string | null
  } | null
}

export default function QuinceanosDressCode({ details }: Props) {

  if (!details?.dressCode) {
    return null
  }

  return (
    <section className="bg-pink-50 px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)"}}>
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.4em]" style={{color: "var(--theme-accent)"}}>Código de vestimenta</p>
        <div className="mt-8 rounded-3xl border border-pink-200 bg-white p-10 shadow-sm" style={{backgroundColor: "var(--theme-surface)", border: "1px solid var(--theme-accent)"}}>
          <div className="text-4xl">
            👗
          </div>
          <h2 className="mt-5 text-3xl font-serif" style={{color: "var(--theme-primary)"}}>{details.dressCode}</h2>
          <p className="mt-4 text-sm leading-6" style={{color: "var(--theme-secondary)"}}>Queremos que formes parte de esta celebración luciendo increíble.</p>
        </div>
      </div>
    </section>
  )
}