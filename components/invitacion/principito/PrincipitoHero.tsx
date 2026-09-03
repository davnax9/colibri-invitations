import Image from "next/image"

type Props = {
  coverPhoto?: {
    url: string
  }

  details: {
    quinceaneraName?: string | null
  } | null

  event: {
    eventDate: Date
  }
}

export default function PrincipitoHero({coverPhoto,details,event}: Props) {

  const childName = details?.quinceaneraName ?? "Nuestro pequeño protagonista"
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <section className="relative flex min-h-190 items-center justify-center overflow-hidden px-6 py-20" style={{background:"linear-gradient(180deg, #101D3A 0%, #172A52 55%, #243D68 100%)"}}>
      {/* ================================================= */}
      {/* ESTRELLAS */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[15%] text-sm text-white/70">✦</span>
        <span className="absolute left-[18%] top-[35%] text-xs text-white/50">✧</span>
        <span className="absolute left-[30%] top-[12%] text-lg text-white/80">✦</span>
        <span className="absolute right-[12%] top-[18%] text-sm text-white/70">✧</span>
        <span className="absolute right-[24%] top-[38%] text-lg text-white/60">✦</span>
        <span className="absolute right-[8%] bottom-[30%] text-xs text-white/50">✧</span>
        <span className="absolute left-[12%] bottom-[20%] text-lg text-white/60">✦</span>
      </div>
      {/* ================================================= */}
      {/* LUNA */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute right-[8%] top-[8%] h-28 w-28 rounded-full opacity-90 sm:h-36 sm:w-36" style={{backgroundColor: "#F4E7B2", boxShadow: "0 0 50px rgba(244,231,178,0.25)"}}>
        <div className="absolute -left-4 top-2 h-28 w-28 rounded-full sm:h-36 sm:w-36" style={{backgroundColor: "#101D3A"}}/>
      </div>
      {/* ================================================= */}
      {/* PLANETA */}
      {/* ================================================= */}
      <div className="pointer-events-none absolute bottom-[8%] left-[5%] h-20 w-20 rounded-full opacity-80" style={{backgroundColor: "#D9A441"}}/>
      <div className="pointer-events-none absolute bottom-[13%] left-[2%] h-1 w-28 rotate-12 rounded-full bg-white/30"/>
      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-[#F4E7B2]/80">Una aventura está por comenzar</p>
        {/* FOTO */}
        <div className="relative mx-auto mt-10 h-72 w-72 sm:h-80 sm:w-80">
          {/* Halo */}
          <div className="absolute inset-0 rounded-full" style={{background:"radial-gradient(circle, rgba(244,231,178,0.25), transparent 65%)"}}/>
          {coverPhoto ? (
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#F4E7B2]/70 shadow-2xl">
              <Image src={coverPhoto.url} alt={childName} fill className="object-cover" sizes="320px"/>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-[#F4E7B2]/70" style={{backgroundColor: "#243D68"}}>
              <span className="text-7xl">⭐</span>
            </div>
          )}
          {/* Rosa */}
          <div className="absolute -bottom-2 -right-2 text-4xl">🌹</div>
        </div>
        {/* NOMBRE */}
        <h1 className="mt-10 text-5xl font-serif tracking-wide text-[#F4E7B2] sm:text-6xl">{childName}</h1>
        <p className="mt-5 text-lg text-white/80">celebra un día muy especial</p>
        {/* FECHA */}
        <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4">
          <div className="h-px flex-1 bg-white/20" />
          <p className="text-sm font-medium text-white/80">{formattedDate}</p>
          <div className="h-px flex-1 bg-white/20" />
        </div>
        {/* INDICADOR */}
        <div className="mt-12 animate-bounce text-xl text-[#F4E7B2]/70">
          ↓
        </div>
      </div>
    </section>
  )
}