import WeddingDate from "./wedding/WeddingDate"
import WeddingDressCode from "./wedding/WeddingDressCode"
import WeddingFooter from "./wedding/WeddingFooter"

import Countdown from "./shared/Countdown"
import InvitationLocations from "./shared/InvitationLocations"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"

import { InvitationTemplateProps } from "@/utils/types/invitation"
import WeddingLuxuryHero from "./wedding/WeddingLuxuryHero"
import WeddingLuxuryCelebration from "./wedding/WeddingLuxuryCelebration"
import WeddingLuxuryGallery from "./wedding/WeddingLuxuryGallery"
import InvitationGifts from "./shared/InvitationGifts"
import WeddingLuxuryOpening from "./wedding/WeddingLuxuryOpening"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import ColibriBranding from "./shared/ColibriBranding"
import InvitationChilds from "./shared/InvitationChilds"
import QuinceanosFamilyHelen from "./wedding/weddingHelen/QuinceanosFamilyHelen"
import WeddingDressCodeHelen from "./wedding/weddingHelen/WeddingDressCodeHelen"
import BotanicalBackground from "./shared/BotanicalBackground"
import Image from "next/image"
import WeddingDateRomanticArch from "./shared/WeddingDateRomanticArch"
import InvitationScheduleRomanticArch from "./shared/InvitationScheduleRomanticArch"
import InvitationChildsOrnamentalFrame from "./shared/InvitationChildsOrnamentalFrame"
import InvitationGiftsGoldenKeepsake from "./shared/InvitationGiftsGoldenKeepsake"
import WeddingDressCodeLuxury from "./shared/WeddingDressCodeLuxury"

export default function WeddingLuxury({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const featurePhoto = event.photos[3] ?? null
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

return (
    <InvitationTheme theme={event.theme} event={event}>
      <WeddingLuxuryOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          {/* HERO */}
          <ScrollReveal direction="left" delay={0} duration={800}>
            <WeddingLuxuryHero coverPhoto={coverPhoto} details={details} event={event}/>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={700} duration={700}>
            <QuinceanosFamilyHelen details={details} type='W'/>
          </ScrollReveal>
          {/* INTRO PREMIUM */}
          <ScrollReveal direction="right" delay={100} duration={700}>
            <section className="px-6 py-12 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
              <BotanicalBackground />
              <div className="mx-auto max-w-3xl">
                <div className="mx-auto h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
                <p className="mt-8 text-xs uppercase tracking-[0.5em]" style={{color: "var(--theme-secondary)"}}>Una celebración especial</p>
                <h2 className="mt-8 text-3xl font-wedding md:text-7xl" style={{color: "var(--theme-primary)"}}>{brideName}<span className="mx-3 italic" style={{color: "var(--theme-accent)"}}>&</span>{groomName}</h2>
                <p className="mx-auto mt-8 max-w-2xl text-sm leading-8" style={{color: "var(--theme-secondary)"}}>{details?.description}</p>
                <div className="mx-auto mt-10 h-px w-20" style={{backgroundColor: "var(--theme-accent)"}}/>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200} duration={700}>
              {/* <WeddingDateHelen event={event} /> */}
              <WeddingDateRomanticArch event={event} /> 
          </ScrollReveal>

          {featurePhoto && (
            <ScrollReveal direction="left" delay={200} duration={700}>
              <section className="w-full px-0" style={{backgroundColor: "var(--theme-background)"}}>
                <div className="relative mx-auto w-full max-w-5xl">
                  <Image src={featurePhoto.url} alt={featurePhoto.title ?? event.name} width={1200} height={800} sizes="(max-width: 768px) 100vw, 80vw" className="block h-auto w-full object-contain"/>
                </div>
              </section>
            </ScrollReveal>
          )}

          <ScrollReveal direction="right" delay={300} duration={700}>
            <Countdown targetDate={event.eventDate.toISOString()}/>
          </ScrollReveal>
          {/* CELEBRACIÓN */}
          <ScrollReveal direction="left" delay={400} duration={700}>
            {/* <WeddingLuxuryCelebration schedules={event.schedules} /> */}
            <InvitationScheduleRomanticArch event={event} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={500} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={600} duration={700}>
            <section className="px-6 py-6 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
              <BotanicalBackground />
              <p className="text-xs uppercase tracking-[0.4em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
              <h2 className="mt-5 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Guarda nuestro día</h2>
              <div className="mt-8">
                <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
              </div>
            </section>
          </ScrollReveal>
          {/* GALERÍA LUXURY */}
          <ScrollReveal direction="right" delay={700} duration={700}>
            <WeddingLuxuryGallery photos={event.photos} />
          </ScrollReveal>

          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChildsOrnamentalFrame />
            </ScrollReveal>
          )}

          <ScrollReveal direction="left" delay={800} duration={700}>
            <InvitationGiftsGoldenKeepsake gifts={event.gifts} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={900} duration={700}>
            {/* <WeddingDressCode details={details} /> */}
            <WeddingDressCodeLuxury details={details} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={1000} duration={700}>
            <WeddingFooter details={details} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1100} duration={700}>
            <ColibriBranding />
          </ScrollReveal>

          {event.music && (
            <ScrollReveal direction="right" delay={1100} duration={700}>
              <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>
            </ScrollReveal>
          )}
        </main>
      </WeddingLuxuryOpening>
    </InvitationTheme>
  )
}