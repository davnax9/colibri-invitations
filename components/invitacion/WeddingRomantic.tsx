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
import WeddingRomanticHero from "./wedding/WeddingRomanticHero"
import WeddingRomanticStory from "./wedding/WeddingRomanticStory"
import WeddingRomanticTimeline from "./wedding/WeddingRomanticTimeline"
import InvitationGifts from "./shared/InvitationGifts"

export default function WeddingRomantic({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <main className="min-h-screen" style={{ backgroundColor: "var(--theme-background)", color: "var(--theme-text)",}}>
        {/* HERO */}
        {/* <WeddingHero coverPhoto={coverPhoto} details={details} event={event}/> */}
        <WeddingRomanticHero coverPhoto={coverPhoto} details={details} event={event}/>

        {/* FRASE */}
        <section className="px-6 py-24 text-center" style={{ backgroundColor: "var(--theme-surface)",}}>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Nuestra historia</p>
            <div className="mx-auto mt-6 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
            <blockquote className="mt-8 text-3xl font-serif italic leading-relaxed md:text-5xl" style={{color: "var(--theme-primary)"}}>“{details?.phrase ?? "El amor nos trajo hasta aquí."}”</blockquote>
          </div>
        </section>

        {/* INTRO */}
        {/* <WeddingIntro details={details} /> */}

        {/* HISTORIA */}
        <WeddingRomanticStory details={details} />

        {/* FECHA */}
        <WeddingDate event={event} />

        {/* COUNTDOWN */}
        <Countdown targetDate={event.eventDate.toISOString()}/>

        {/* TIMELINE */}
        <WeddingRomanticTimeline schedules={event.schedules}/>

        {/* HORARIOS */}
        {/* <InvitationSchedule event={event} /> */}

        {/* UBICACIONES */}
        <InvitationLocations event={event} />

        {/* CALENDARIO */}
        <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
          <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
          <h2 className="mt-4 text-4xl font-serif md:text-5xl" style={{color: "var(--theme-primary)"}}>Acompáñanos</h2>
          <div className="mt-8">
            <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
          </div>
        </section>

        {/* FOTOS */}
        <InvitationGallery event={event} />

        <InvitationGifts gifts={event.gifts} />

        {/* VESTIMENTA */}
        <WeddingDressCode details={details} />

        {/* FOOTER */}
        <WeddingFooter details={details} />

        {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />)}
      </main>
    </InvitationTheme>
  )
}