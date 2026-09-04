import Image from "next/image"
import { EventTheme } from "@/app/generated/prisma/client"

type Props = {
  event: {
    name: string
    eventDate: Date
    theme: EventTheme | null

    template: {
      name: string
      type: "WEDDING" | "QUINCEANOS" | "COMUNION" | "BAUTIZO"
    }

    details: {
      title: string | null
      subtitle: string | null
      description: string | null
      phrase: string | null
      groomName: string | null
      brideName: string | null
      quinceaneraName: string | null
      childName: string | null
      dressCode: string | null
    } | null

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    schedules: {
      id: string
      title: string
      date: Date
      time: string | null
      description: string | null
      location: {
        name: string
      } | null
    }[]
  }
}

const defaultTheme = {
  primaryColor: "#292524",
  secondaryColor: "#78716c",
  accentColor: "#a8a29e",
  backgroundColor: "#fafaf9",
  surfaceColor: "#ffffff",
  textColor: "#292524",
}

export default function EventInvitationPreview({ event }: Props) {
  const theme = event.theme ?? defaultTheme

  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  // const isWedding = event.template.type === "WEDDING"
  const eventTypeContent = { WEDDING: { label: "Nuestra boda", title: `${event.details?.brideName ?? ""} & ${event.details?.groomName ?? ""}`, }, QUINCEANOS: { label: "Mis XV años", title: event.details?.quinceaneraName ?? event.name, }, BAUTIZO: { label: "Mi bautizo", title: event.details?.childName ?? event.name, }, COMUNION: { label: "Mi Primera Comunión", title: event.details?.childName ?? event.name, }, }[event.template.type]
  // const mainTitle = isWedding ? `${event.details?.brideName ?? ""} & ${event.details?.groomName ?? ""}` : event.details?.quinceaneraName ?? event.name
  const eventLabel = eventTypeContent?.label ?? "Mi evento" 
  const mainTitle = eventTypeContent?.title ?? event.name
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long", year: "numeric"})

  return (
    <div className="mx-auto w-full max-w-87.5 overflow-hidden rounded-4xl border-8 border-slate-800 shadow-2xl" style={{backgroundColor: theme.backgroundColor, color: theme.textColor}}>
      {/* PORTADA */}
      <section className="relative flex h-105 items-end overflow-hidden" style={{backgroundColor: theme.primaryColor}}>
        {coverPhoto && (
          <>
            <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill sizes="350px" className="object-cover"/>
            <div className="absolute inset-0 bg-black/45" />
          </>
        )}
        <div className="relative z-10 w-full px-6 pb-10 text-center text-white">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/70">{eventLabel}</p>
          <div className="mx-auto mt-4 h-px w-10 bg-white/50" />
          <h1 className="mt-5 font-serif text-3xl font-light leading-tight">{mainTitle}</h1>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/80">{formattedDate}</p>
          {event.details?.phrase && (<p className="mt-5 text-xs italic leading-5 text-white/80">"{event.details.phrase}"</p>)}
        </div>
      </section>
      {/* INTRODUCCIÓN */}
      {(event.details?.title || event.details?.subtitle || event.details?.description) && (
        <section className="px-6 py-10 text-center" style={{backgroundColor: theme.backgroundColor}}>
          {event.details.title && (<h2 className="font-serif text-2xl" style={{color: theme.primaryColor}}>{event.details.title}</h2>)}
          {event.details.subtitle && (<p className="mt-2 text-xs" style={{color: theme.secondaryColor}}>{event.details.subtitle}</p>)}
          {event.details.description && (<p className="mt-4 text-xs leading-5" style={{color: theme.textColor}}>{event.details.description}</p>)}
        </section>
      )}
      {/* FECHA */}
      <section className="px-6 py-10 text-center" style={{backgroundColor: theme.surfaceColor}}>
        <p className="text-[9px] uppercase tracking-[0.25em]" style={{color: theme.secondaryColor}}>Reserva la fecha</p>
        <h2 className="mt-3 font-serif text-2xl" style={{color: theme.primaryColor}}>{formattedDate}</h2>
      </section>
      {/* HORARIOS */}
      {event.schedules.length > 0 && (
        <section className="px-5 py-10" style={{backgroundColor: theme.backgroundColor}}>
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.25em]" style={{color: theme.secondaryColor}}>Celebremos juntos</p>
            <h2 className="mt-2 font-serif text-2xl" style={{color: theme.primaryColor}}>Nuestro día</h2>
          </div>
          <div className="mt-6 space-y-3">
            {event.schedules.slice(0, 3).map((schedule) => (
              <div key={schedule.id} className="rounded-xl p-4 text-center shadow-sm" style={{backgroundColor: theme.surfaceColor}}>
                <h3 className="font-serif text-base" style={{color: theme.primaryColor}}>{schedule.title}</h3>
                <p className="mt-2 text-[10px]" style={{color: theme.secondaryColor}}>{schedule.date.toLocaleDateString("es-MX", {day: "numeric", month: "long"})}{schedule.time && ` · ${schedule.time}`}</p>
                {schedule.location && (<p className="mt-2 text-[10px] font-medium" style={{ color: theme.textColor}}>📍 {schedule.location.name}</p>)}
              </div>
            ))}
          </div>
          {event.schedules.length > 3 && (<p className="mt-4 text-center text-[9px]" style={{color: theme.secondaryColor}}>+ {event.schedules.length - 3} eventos más</p>)}
        </section>
      )}
      {/* FOOTER */}
      <footer className="px-6 py-10 text-center" style={{backgroundColor: theme.primaryColor,color: "#ffffff"}}>
        <p className="font-serif text-xl">{mainTitle}</p>
        <p className="mt-2 text-[9px] text-white/60">Gracias por acompañarnos en este día tan especial.</p>
      </footer>
    </div>
  )
}