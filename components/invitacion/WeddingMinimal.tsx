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
import WeddingMinimalHero from "./wedding/WeddingMinimalHero"
import InvitationGifts from "./shared/InvitationGifts"
import WeddingMinimalOpening from "./wedding/WeddingMinimalOpening"

export default function WeddingMinimal({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <WeddingMinimalOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {/* <WeddingHero coverPhoto={coverPhoto} details={details} event={event}/> */}
          <WeddingMinimalHero coverPhoto={coverPhoto} details={details} event={event}/>

          <section className="px-6 py-28 text-center" style={{backgroundColor: "var(--theme-background)"}}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>{details?.title ?? "Nos casamos"}</p>
            <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl" style={{color: "var(--theme-primary)"}}>{brideName}<span className="mx-3" style={{color: "var(--theme-accent)"}}>&</span>{groomName}</h2>
            <div className="mx-auto mt-8 h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
          </section>

          <WeddingDate event={event} />

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <InvitationSchedule event={event} />

          <InvitationLocations event={event} />

          <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
            <h2 className="text-3xl font-light" style={{color: "var(--theme-primary)"}}>Guarda la fecha</h2>
            <div className="mt-7">
              <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl} />
            </div>
          </section>

          <InvitationGallery event={event} />

          <InvitationGifts gifts={event.gifts} />

          <WeddingDressCode details={details} />

          <WeddingFooter details={details} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} /> )}
        </main>
      </WeddingMinimalOpening>
    </InvitationTheme>
  )
}