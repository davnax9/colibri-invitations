import WeddingHero from "./wedding/WeddingHero"
import WeddingIntro from "./wedding/WeddingIntro"
import WeddingDate from "./wedding/WeddingDate"
import WeddingDressCode from "./wedding/WeddingDressCode"
import WeddingFooter from "./wedding/WeddingFooter"
import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"
import { EventTheme } from "@/app/generated/prisma/client"
import WeddingElegantHero from "./wedding/WeddingElegantHero"
import WeddingElegantEvents from "./wedding/WeddingElegantEvents"

type Props = {
  event: {
    name: string
    slug: string
    eventDate: Date
    theme: any

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

    locations: {
      id: string
      name: string
      address: string | null
      mapsUrl: string | null
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

    photos: {
      id: string
      url: string
      title: string | null
      isCover: boolean
    }[]

    music: {
      url: string
      title: string | null
      artist: string | null
      autoplay: boolean
    } | null
  }

  guest?: GuestInfo
}

type GuestInfo = {
  name: string
  passes: number
  confirmedPasses: number | null
  status: "PENDING" | "CONFIRMED" | "DECLINED"
  token: string
}

export default function WeddingElegant({event, guest}: Props) {
    const details = event.details
  
    const brideName = details?.brideName ?? ""
    const groomName = details?.groomName ?? ""

    const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]

    const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

    return (
        <InvitationTheme theme={event.theme}>
            <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
                {/* PORTADA */}
                {/* <WeddingHero coverPhoto={coverPhoto} details={details} event={event}/> */}
                <WeddingElegantHero coverPhoto={coverPhoto} details={details} event={event}/>

                {/* INTRODUCCIÓN */}
                <WeddingIntro details={details}/>

                {/* FECHA */}
                <WeddingDate event={event}/>

                {/* CONTADOR RETROCESO */}
                <Countdown targetDate={event.eventDate.toISOString()}/>

                {/* PROGRAMA ELEGANTE */}
                <WeddingElegantEvents schedules={event.schedules}/>

                {/* HORARIOS */}
                {/* <InvitationSchedule event={event}/> */}

                {/* UBICACIONES */}
                <InvitationLocations event={event}/>

                {/* CALENDARIO */}
                <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
                <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-secondary)" }}>No olvides la fecha</p>
                <h2 className="mt-4 text-4xl font-serif" style={{ color: "var(--theme-primary)" }}>Guarda nuestro día</h2>
                <p className="mx-auto mt-4 max-w-xl" style={{ color: "var(--theme-secondary)" }}>Agrega nuestra celebración a tu calendario para que no olvides acompañarnos.</p>
                <div className="mt-8">
                    <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
                </div>
                </section>

                {/* FOTOGRAFÍAS */}
                <InvitationGallery event={event} />

                {/* VESTIMENTA */}
                <WeddingDressCode details={details} />

                {/* FOOTER */}
                <WeddingFooter details={details} />

                {/* REPRODUCTOR MUSICA */}
                {event.music && (
                <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>
                )}
            </main>
        </InvitationTheme>
    )
}
