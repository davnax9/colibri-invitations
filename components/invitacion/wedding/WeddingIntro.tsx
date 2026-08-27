type WeddingIntroProps = {
    details: {
        title: string | null;
        subtitle: string | null;
        description: string | null;
        phrase: string | null;
        groomName: string | null;
        brideName: string | null;
        quinceaneraName: string | null;
        dressCode: string | null;
    } | null
}

export default function WeddingIntro({details}: WeddingIntroProps) {
  return (
    <>
        {(details?.title || details?.subtitle || details?.description) && (
        <section className="mx-auto max-w-3xl px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {details.title && (<h2 className="text-3xl font-serif md:text-4xl" style={{color: "var(--theme-primary)"}}>{details.title}</h2>)}
          {details.subtitle && (<p className="mt-4 text-lg text-stone-500" style={{color: "var(--theme-secondary)"}}>{details.subtitle}</p>)}
          {details.description && (<p className="mt-8 leading-8 text-stone-600" style={{color: "var(--theme-text)"}}>{details.description}</p>)}
        </section>
      )}
    </>
  )
}
