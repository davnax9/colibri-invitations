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

import { InvitationTemplateProps } from "@/utils/types/invitation"
import WeddingLuxuryHero from "./wedding/WeddingLuxuryHero"
import WeddingLuxuryCelebration from "./wedding/WeddingLuxuryCelebration"
import WeddingLuxuryGallery from "./wedding/WeddingLuxuryGallery"

export default function WeddingLuxury({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme}>
      <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
        {/* HERO */}
        {/* <WeddingHero coverPhoto={coverPhoto} details={details} event={event}/> */}
        <WeddingLuxuryHero coverPhoto={coverPhoto} details={details} event={event}/>

        {/* INTRO PREMIUM */}
        <section className="px-6 py-28 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
            <p className="mt-8 text-xs uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)"}}>Una celebración especial</p>
            <h2 className="mt-8 text-5xl font-serif md:text-7xl" style={{color: "var(--theme-primary)"}}>{brideName}<span className="mx-3 italic" style={{color: "var(--theme-accent)"}}>&</span>{groomName}</h2>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8" style={{color: "var(--theme-secondary)"}}>{details?.description}</p>
            <div className="mx-auto mt-10 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
          </div>
        </section>

        <WeddingDate event={event} />

        <Countdown targetDate={event.eventDate.toISOString()}/>

        {/* CELEBRACIÓN */} 
        <WeddingLuxuryCelebration schedules={event.schedules} />

        {/* <InvitationSchedule event={event} /> */}

        <InvitationLocations event={event} />

        <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
          <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
          <h2 className="mt-5 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Guarda nuestro día</h2>
          <div className="mt-8">
            <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
          </div>
        </section>

        {/* <InvitationGallery event={event} /> */}
        {/* GALERÍA LUXURY */} 
        <WeddingLuxuryGallery photos={event.photos} />

        <WeddingDressCode details={details} />

        <WeddingFooter details={details} />

        {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
      </main>
    </InvitationTheme>
  )
}