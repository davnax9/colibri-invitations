import QuinceanosPrincessHero from "./quinceanos/QuinceanosPrincessHero"
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
import InvitationGifts from "./shared/InvitationGifts"
import QuinceanosPrincessOpening from "./quinceanos/QuinceanosPrincessOpening"

export default function QuinceanosPrincess({event,guest}: InvitationTemplateProps) {

  const details = event.details

  const quinceaneraName =
    details?.quinceaneraName ?? ""

  const coverPhoto =
    event.photos.find((photo) => photo.isCover) ??
    event.photos[0]

  const invitationUrl = guest
    ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}`
    : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosPrincessOpening quinceaneraName={quinceaneraName} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {/* HERO */}
          <QuinceanosPrincessHero coverPhoto={coverPhoto} details={details} event={event}/>
          {/* INTRO */}
          <QuinceanosIntro details={details} />
          {/* FECHA */}
          <QuinceanosDate event={event} />
          {/* CUENTA REGRESIVA */}
          <Countdown targetDate={event.eventDate.toISOString()}/>
          {/* FRASE */}
          {details?.phrase && (<section className="px-6 py-24" style={{backgroundColor: "var(--theme-surface)"}}>
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-4xl" aria-hidden="true">✦</span><p className="mt-6 font-serif text-3xl italic leading-relaxed md:text-4xl" style={{color: "var(--theme-primary)"}}>“{details.phrase}”</p>
                <div className="mx-auto mt-8 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
              </div>
            </section>
          )}
          {/* MOMENTOS DE LA CELEBRACIÓN */}
          <section className="px-6 py-24" style={{backgroundColor: "var(--theme-background)"}}>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Un día para recordar</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl" style={{color: "var(--theme-primary)"}}>Momentos especiales</h2>
                <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
              </div>
              <div className="mt-16">
                <InvitationSchedule event={event} />
              </div>
            </div>
          </section>
          {/* UBICACIONES */}
          <InvitationLocations event={event} />
          {/* CALENDARIO */}
          <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
            <span className="text-3xl" aria-hidden="true">✦</span>
            <p className="mt-5 text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Reserva este día</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl" style={{color: "var(--theme-primary)"}}>No faltes a mi celebración</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6" style={{color: "var(--theme-secondary)"}}>Guarda la fecha en tu calendario y acompáñame a celebrar este momento inolvidable.</p>
            <div className="mt-8">
              <AddToCalendar title={quinceaneraName || event.name} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>
          {/* FOTOGRAFÍAS */}
          <InvitationGallery event={event} />
          <InvitationGifts gifts={event.gifts} />
          {/* VESTIMENTA */}
          <QuinceanosDressCode details={details} />
          {/* FOOTER */}
          <QuinceanosFooter details={details} />
          {/* MÚSICA */}
          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
        </main>
      </QuinceanosPrincessOpening>    
    </InvitationTheme>
  )
}