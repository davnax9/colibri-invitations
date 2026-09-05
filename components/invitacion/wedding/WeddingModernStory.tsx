type Props = {
  details: {
    title: string | null
    description: string | null
    phrase: string | null
  } | null
}

export default function WeddingModernStory({ details }: Props) {
  if (!details?.description && !details?.phrase) {
    return null
  }

  return (
    <section className="px-6 py-24 sm:py-32" style={{backgroundColor: "var(--theme-surface)", color: "var(--theme-text)"}}>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[180px_1fr]">
        {/* NUMERO */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>01</p>
          <div className="mt-4 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
        </div>
        {/* CONTENIDO */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Nuestra historia</p>
          {details.title && (<h2 className="mt-5 text-4xl font-serif sm:text-5xl" style={{color: "var(--theme-primary)"}}>{details.title}</h2>)}
          {details.description && (<p className="mt-8 text-lg leading-8" style={{color: "var(--theme-secondary)"}}>{details.description}</p>)}
          {details.phrase && (<blockquote className="mt-10 border-l-2 pl-6 text-xl italic leading-8" style={{borderColor: "var(--theme-accent)", color: "var(--theme-primary)"}}>“{details.phrase}”</blockquote>)}
        </div>
      </div>
    </section>
  )
}