type WeddingFooterProps = {
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

export default function WeddingFooter({ details }: WeddingFooterProps) {

  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <footer className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-primary)",color: "white"}}>
      <div className="mx-auto max-w-2xl">
        <p className="text-4xl font-serif">{brideName} & {groomName}</p>
        <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
        <p className="mt-6 text-sm leading-7 text-white/70">Gracias por acompañarnos en este día tan especial.</p>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/50">Con cariño</p>
      </div>
    </footer>
  )
}