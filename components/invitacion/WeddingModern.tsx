import WeddingDate from "./wedding/WeddingDate"
import WeddingDressCode from "./wedding/WeddingDressCode"
import WeddingFooter from "./wedding/WeddingFooter"

import Countdown from "./shared/Countdown"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"
import { InvitationTemplateProps } from "@/utils/types/invitation"
import WeddingModernHero from "./wedding/WeddingModernHero"
import WeddingModernStory from "./wedding/WeddingModernStory"
import WeddingTimeline from "./wedding/WeddingTimeline"
import InvitationGifts from "./shared/InvitationGifts"
import WeddingModernOpening from "./wedding/WeddingModernOpening"

export default function WeddingModern({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <WeddingModernOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate} coverPhoto={coverPhoto}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {/* HERO */}
          <WeddingModernHero coverPhoto={coverPhoto} details={details} event={event}/>
          {/* NOMBRES */}
          <section className="px-6 py-24" style={{backgroundColor: "var(--theme-surface)"}}>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-10 md:grid-cols-2 md:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Celebramos nuestro amor</p>
                  <h2 className="mt-5 text-5xl font-light tracking-tight md:text-7xl" style={{color: "var(--theme-primary)"}}>{brideName}<span className="mx-3 font-serif italic" style={{color: "var(--theme-accent)"}}>&</span>{groomName}</h2>
                </div>
                <p className="max-w-md text-sm leading-7 md:ml-auto" style={{color: "var(--theme-secondary)"}}>{details?.description ?? "Queremos compartir contigo uno de los días más importantes de nuestras vidas."}</p>
              </div>
            </div>
          </section>
          {/* HISTORIA */}
          <WeddingModernStory details={details} />
          {/* FECHA */}
          <WeddingDate event={event} />
          {/* COUNTDOWN */}
          <Countdown targetDate={event.eventDate.toISOString()}/>
          {/* TIMELINE */}
          <WeddingTimeline schedules={event.schedules} />
          {/* UBICACIONES */}
          <InvitationLocations event={event} />
          {/* GALERÍA */}
          <InvitationGallery event={event} />

          <InvitationGifts gifts={event.gifts} />
          {/* DRESS CODE */}
          <WeddingDressCode details={details} />
          {/* CALENDARIO */}
          <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
            <h2 className="text-4xl font-light md:text-5xl" style={{color: "var(--theme-primary)"}}>Reserva la fecha</h2>
            <div className="mt-8">
              <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>
          {/* FOOTER */}
          <WeddingFooter details={details} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
        </main>
      </WeddingModernOpening>
    </InvitationTheme>
  )
}