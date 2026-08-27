type Props = {
  details: {
    title: string | null
    subtitle: string | null
    description: string | null
  } | null
}

export default function QuinceanosIntro({ details }: Props) {

  if (!details?.title && !details?.subtitle && !details?.description) {
    return null
  }

  return (
    <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)"}}>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em]" style={{color: "var(--theme-accent)"}}> Un día muy especial </p>
        {details.title && (<h2 className="mt-5 text-4xl font-serif md:text-5xl" style={{color: "var(--theme-primary)"}}>{details.title}</h2>)}
        {details.subtitle && (<p className="mt-5 text-lg" style={{color: "var(--theme-secondary)"}}>{details.subtitle}</p>)}
        {details.description && (<p className="mt-8 leading-8" style={{color: "var(--theme-text)", opacity: 0.75}}>{details.description}</p>)}
        <div className="mx-auto mt-10 flex items-center justify-center gap-3" style={{color: "var(--theme-accent)"}}>
          <span>✦</span>
          <span>♡</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  )
}