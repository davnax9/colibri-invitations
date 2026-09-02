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
import QuinceanosModernHero from "./quinceanos/QuinceanosModernHero"
import InvitationTimeline from "./shared/InvitationTimeline"
import InvitationEditorialLocations from "./shared/InvitationEditorialLocations"
import InvitationCollageGallery from "./shared/InvitationCollageGallery"
import InvitationGifts from "./shared/InvitationGifts"
import QuinceanosModernEnvelope from "./quinceanos/QuinceanosModernEnvelope"

export default function QuinceanosModern({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const name = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosModernEnvelope quinceaneraName={name} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {/* <QuinceanosHero coverPhoto={coverPhoto} details={details} event={event}/> */}
          <QuinceanosModernHero coverPhoto={coverPhoto} details={details} event={event}/>

          <section className="px-6 py-24" style={{backgroundColor: "var(--theme-surface)"}}>
            <div className="mx-auto max-w-6xl">
              <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Mis XV años</p>
              <h2 className="mt-5 text-6xl font-light tracking-tight md:text-8xl" style={{color: "var(--theme-primary)"}}>{name}</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <p className="max-w-xl text-sm leading-7" style={{color: "var(--theme-secondary)"}}>{details?.description}</p>
                <p className="md:ml-auto md:max-w-sm text-sm leading-7" style={{color: "var(--theme-secondary)"}}>Quiero compartir contigo una noche muy especial e inolvidable.</p>
              </div>
            </div>
          </section>

          <QuinceanosDate event={event} />

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <QuinceanosIntro details={details} />

          {/* <InvitationSchedule event={event} /> */}
          <InvitationTimeline schedules={event.schedules} />

          {/* <InvitationLocations event={event} /> */}
          <InvitationEditorialLocations locations={event.locations} />

          <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
            <h2 className="text-4xl font-light" style={{color: "var(--theme-primary)"}}>Reserva la fecha</h2>
            <div className="mt-8">
              <AddToCalendar title={`XV años de ${name}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>

          {/* <InvitationGallery event={event} /> */}
          <InvitationCollageGallery photos={event.photos} />

          <InvitationGifts gifts={event.gifts} />

          <QuinceanosDressCode details={details} />

          <QuinceanosFooter details={details} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
        </main>
      </QuinceanosModernEnvelope>
    </InvitationTheme>
  )
}