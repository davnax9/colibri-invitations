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
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import ColibriBranding from "./shared/ColibriBranding"
import InvitationChilds from "./shared/InvitationChilds"
import QuinceanosFamilyHelen from "./wedding/weddingHelen/QuinceanosFamilyHelen"
import BotanicalBackground from "./shared/BotanicalBackground"

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
          <ScrollReveal direction="left" delay={0} duration={800}>
            <WeddingModernHero coverPhoto={coverPhoto} details={details} event={event}/>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={700} duration={700}>
            <QuinceanosFamilyHelen details={details} type='W'/>
          </ScrollReveal>
          {/* NOMBRES */}
          <ScrollReveal direction="right" delay={100} duration={700}>
            <section className="px-6 py-12" style={{backgroundColor: "var(--theme-surface)"}}>
              <BotanicalBackground />
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 md:grid-cols-2 md:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>Celebramos nuestro amor</p>
                    <h2 className="mt-5 text-5xl font-wedding tracking-tight md:text-7xl" style={{color: "var(--theme-primary)"}}>{brideName}</h2>
                    <h2 className="mt-5 text-5xl font-wedding tracking-tight md:text-7xl" style={{color: "var(--theme-primary)"}}><span className="mx-3 font-serif italic" style={{color: "var(--theme-accent)"}}>&</span></h2>
                    <h2 className="mt-5 text-5xl font-wedding tracking-tight md:text-7xl" style={{color: "var(--theme-primary)"}}>{groomName}</h2>
                  </div>
                  <p className="max-w-md text-sm leading-7 md:ml-auto" style={{color: "var(--theme-secondary)"}}>{details?.description ?? "Queremos compartir contigo uno de los días más importantes de nuestras vidas."}</p>
                </div>
              </div>
            </section>
          </ScrollReveal>
          {/* HISTORIA */}
          <ScrollReveal direction="left" delay={200} duration={700}>
            <WeddingModernStory details={details} />
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
            <WeddingTimeline schedules={event.schedules} />
          </ScrollReveal>
          {/* UBICACIONES */}
          <ScrollReveal direction="left" delay={600} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>
          {/* GALERÍA */}
          <ScrollReveal direction="right" delay={700} duration={700}>
            <InvitationGallery event={event} />
          </ScrollReveal>
          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChilds />
            </ScrollReveal>
          )}
          <ScrollReveal direction="left" delay={800} duration={700}>
            <InvitationGifts gifts={event.gifts} />
          </ScrollReveal>
          {/* DRESS CODE */}
          <ScrollReveal direction="right" delay={900} duration={700}>
            <WeddingDressCode details={details} />
          </ScrollReveal>
          {/* CALENDARIO */}
          <ScrollReveal direction="left" delay={1000} duration={700}>
            <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
              <BotanicalBackground />
              <h2 className="text-4xl font-light md:text-5xl" style={{color: "var(--theme-primary)"}}>Reserva la fecha</h2>
              <div className="mt-8">
                <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
              </div>
            </section>
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
              <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>
            </ScrollReveal>
          )}
        </main>
      </WeddingModernOpening>
    </InvitationTheme>
  )
}