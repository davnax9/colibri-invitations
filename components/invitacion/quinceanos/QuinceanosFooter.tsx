type Props = {
  details: {
    quinceaneraName: string | null
  } | null
}

export default function QuinceanosFooter({ details }: Props) {

  const name = details?.quinceaneraName ?? ""

  return (
    <footer className="px-6 py-20 text-center text-white" style={{backgroundColor: "var(--theme-primary)"}}>
      <div className="mx-auto max-w-xl">
        <p className="text-4xl font-serif md:text-5xl">{name}</p>
        <div className="mx-auto mt-6 h-px w-20" style={{backgroundColor: "var(--theme-accent)", opacity: 0.6}}/>
        <p className="mt-6 text-sm leading-6 text-white/70">Gracias por acompañarme en este día tan especial.</p>
        <p className="mt-8 text-2xl" style={{color: "var(--theme-accent)"}}>♡</p>
      </div>
    </footer>
  )
}