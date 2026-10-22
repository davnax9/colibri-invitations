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
import WeddingRomanticHero from "./wedding/WeddingRomanticHero"
import WeddingRomanticStory from "./wedding/WeddingRomanticStory"
import WeddingRomanticTimeline from "./wedding/WeddingRomanticTimeline"
import InvitationGifts from "./shared/InvitationGifts"
import WeddingRomanticOpening from "./wedding/WeddingRomanticOpening"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import ColibriBranding from "./shared/ColibriBranding"
import InvitationChilds from "./shared/InvitationChilds"

export default function WeddingRomantic({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <WeddingRomanticOpening brideName={brideName} groomName={groomName} phrase={details?.phrase} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{ backgroundColor: "var(--theme-background)", color: "var(--theme-text)",}}>
          {/* HERO */}
          <ScrollReveal direction="left" delay={0} duration={800}>
            <WeddingRomanticHero coverPhoto={coverPhoto} details={details} event={event}/>
          </ScrollReveal>
          {/* FRASE */}
          <ScrollReveal direction="right" delay={100} duration={700}>
            <section className="px-6 py-24 text-center" style={{ backgroundColor: "var(--theme-surface)",}}>
              <div className="mx-auto max-w-3xl">
                <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Nuestra historia</p>
                <div className="mx-auto mt-6 h-px w-12" style={{backgroundColor: "var(--theme-accent)"}}/>
                <blockquote className="mt-8 text-3xl font-serif italic leading-relaxed md:text-5xl" style={{color: "var(--theme-primary)"}}>“{details?.phrase ?? "El amor nos trajo hasta aquí."}”</blockquote>
              </div>
            </section>
          </ScrollReveal>
          {/* HISTORIA */}
          <ScrollReveal direction="left" delay={200} duration={700}>
            <WeddingRomanticStory details={details} />
          </ScrollReveal>
          {/* FECHA */}
          <ScrollReveal direction="right" delay={300} duration={700}>
            <WeddingDate event={event} />
          </ScrollReveal>
          {/* COUNTDOWN */}
          <ScrollReveal direction="left" delay={400} duration={700}>
            <Countdown targetDate={event.eventDate.toISOString()}/>
          </ScrollReveal>
          {/* TIMELINE */}
          <ScrollReveal direction="right" delay={500} duration={700}>
            <WeddingRomanticTimeline schedules={event.schedules}/>
          </ScrollReveal>
          {/* UBICACIONES */}
          <ScrollReveal direction="left" delay={600} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>
          {/* CALENDARIO */}
          <ScrollReveal direction="right" delay={700} duration={700}>
            <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
              <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
              <h2 className="mt-4 text-4xl font-serif md:text-5xl" style={{color: "var(--theme-primary)"}}>Acompáñanos</h2>
              <div className="mt-8">
                <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
              </div>
            </section>
          </ScrollReveal>
          {/* FOTOS */}
          <ScrollReveal direction="left" delay={800} duration={700}>
            <InvitationGallery event={event} />
          </ScrollReveal>
          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChilds />
            </ScrollReveal>
          )}
          <ScrollReveal direction="right" delay={900} duration={700}>
            <InvitationGifts gifts={event.gifts} />
          </ScrollReveal>
          {/* VESTIMENTA */}
          <ScrollReveal direction="left" delay={1000} duration={700}>
            <WeddingDressCode details={details} />
          </ScrollReveal>
          {/* FOOTER */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <WeddingFooter details={details} />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={1100} duration={700}>
            <ColibriBranding />
          </ScrollReveal>
          {event.music && (
            <ScrollReveal direction="left" delay={1200} duration={700}>
              <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />
            </ScrollReveal>
          )}
        </main>
      </WeddingRomanticOpening>
    </InvitationTheme>
  )
}