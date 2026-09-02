import QuinceanosHero from "./quinceanos/QuinceanosHero"
import QuinceanosIntro from "./quinceanos/QuinceanosIntro"
import QuinceanosDate from "./quinceanos/QuinceanosDate"
import QuinceanosDressCode from "./quinceanos/QuinceanosDressCode"
import QuinceanosFooter from "./quinceanos/QuinceanosFooter"
import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"

import { InvitationTemplateProps } from "@/utils/types/invitation"
import QuinceanosElegantHero from "./quinceanos/QuinceanosElegantHero"
import InvitationGifts from "./shared/InvitationGifts"
import QuinceanosElegantEnvelope from "./quinceanos/QuinceanosElegantEnvelope"

export default function QuinceanosElegant({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const quinceaneraName = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosElegantEnvelope quinceaneraName={quinceaneraName}>
      <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          <QuinceanosElegantHero coverPhoto={coverPhoto} details={details} event={event} />

          <QuinceanosIntro details={details} />

          <QuinceanosDate event={event} />

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <InvitationSchedule event={event} />

          <InvitationLocations event={event} />

          <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
            <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>No olvides la fecha</p>
            <h2 className="mt-4 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Guarda este día</h2>
            <div className="mt-8">
              <AddToCalendar title={`XV años de ${quinceaneraName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>

          <InvitationGallery event={event} />

          <InvitationGifts gifts={event.gifts} />

          <QuinceanosDressCode details={details} />

          <QuinceanosFooter details={details} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />)}
        </main>
      </QuinceanosElegantEnvelope>
    </InvitationTheme>
  )
}