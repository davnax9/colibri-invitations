import QuinceanosDate from "./quinceanos/QuinceanosDate"
import QuinceanosDressCode from "./quinceanos/QuinceanosDressCode"
import QuinceanosFooter from "./quinceanos/QuinceanosFooter"

import Countdown from "./shared/Countdown"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"

import { InvitationTemplateProps } from "@/utils/types/invitation"
import QuinceanosLuxuryHero from "./quinceanos/QuinceanosLuxuryHero"
import InvitationLuxurySchedule from "./shared/InvitationLuxurySchedule"
import InvitationLuxuryLocations from "./shared/InvitationLuxuryLocations"
import InvitationLuxuryGallery from "./shared/InvitationLuxuryGallery"
import InvitationGifts from "./shared/InvitationGifts"
import QuinceanosLuxuryEnvelope from "./quinceanos/QuinceanosLuxuryEnvelope"

export default function QuinceanosLuxury({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const name = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosLuxuryEnvelope quinceaneraName={name}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>

          <QuinceanosLuxuryHero coverPhoto={coverPhoto} details={details} event={event}/>

          <section className="px-6 py-28 text-center" style={{ backgroundColor: "var(--theme-surface)"}}>
            <div className="mx-auto max-w-3xl">
              <div className="mx-auto h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
              <p className="mt-8 text-xs uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)",}}>Mis XV años</p>
              <h2 className="mt-8 text-6xl font-serif md:text-8xl" style={{color: "var(--theme-primary)"}}>{name}</h2>
              <p className="mx-auto mt-8 max-w-xl text-sm leading-8" style={{color: "var(--theme-secondary)"}}>{details?.phrase ?? "Una noche especial que quiero compartir contigo."}</p>
              <div className="mx-auto mt-10 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
            </div>
          </section>

          <QuinceanosDate event={event} />

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <InvitationLuxurySchedule schedules={event.schedules} />

          <InvitationLuxuryLocations locations={event.locations} />

          <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
            <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
            <h2 className="mt-5 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Celebra conmigo</h2>
            <div className="mt-8">
              <AddToCalendar title={`XV años de ${name}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>

          <InvitationLuxuryGallery photos={event.photos} />

          <InvitationGifts gifts={event.gifts} />

          <QuinceanosDressCode details={details} />

          <QuinceanosFooter details={details} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />)}
        </main>
      </QuinceanosLuxuryEnvelope>
    </InvitationTheme>
  )
}