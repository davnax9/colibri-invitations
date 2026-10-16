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
import WeddingEnvelopeHZOpening from "./wedding/WeddingEnvelopeHZOpening"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import InvitationGalleryHelen from "./wedding/weddingHelen/InvitationGalleryHelen"
import QuinceanosFamily from "../eventos/QuinceanosFamily"
import QuinceanosFamilyHelen from "./wedding/weddingHelen/QuinceanosFamilyHelen"
import WeddingMinimalHeroHelen from "./wedding/weddingHelen/WeddingMinimalHeroHelen"
import InvitationScheduleHelen from "./wedding/weddingHelen/InvitationScheduleHelen"
import CountdownHelen from "./wedding/weddingHelen/CountDownHelen"
import WeddingDressCodeHelen from "./wedding/weddingHelen/WeddingDressCodeHelen"
import WeddingDateHelen from "./wedding/weddingHelen/WeddingDateHelen"
import Image from "next/image"

export default function WeddingMinimal({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <WeddingEnvelopeHZOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate}>
      {/* <WeddingMinimalOpening brideName={brideName} groomName={groomName} eventDate={event.eventDate}> */}
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          <ScrollReveal direction="right" delay={700} duration={700}>
            {/* <InvitationGallery event={event} /> */}
            <InvitationGalleryHelen event={event} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={700} duration={700}>
            {/* <QuinceanosFamily details={details} type='W'/> */}
            <QuinceanosFamilyHelen details={details} type='W'/>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0} duration={800}>
            {/* <WeddingMinimalHero coverPhoto={coverPhoto} details={details} event={event}/> */}
            <WeddingMinimalHeroHelen coverPhoto={coverPhoto} details={details} event={event}/>
          </ScrollReveal>

          {/* <ScrollReveal direction="right" delay={100} duration={700}>
            <section className="px-6 py-2 text-center" style={{backgroundColor: "var(--theme-background)"}}>
              <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>{details?.title ?? "Nos casamos"}</p>
              <h2 className="mt-6 text-4xl font-light tracking-tight md:text-6xl" style={{color: "var(--theme-primary)"}}>{brideName}<span className="mx-3" style={{color: "var(--theme-accent)"}}>&</span>{groomName}</h2>
              <div className="mx-auto mt-8 h-px w-10" style={{backgroundColor: "var(--theme-accent)"}}/>
            </section>
          </ScrollReveal> */}

          <ScrollReveal direction="left" delay={200} duration={700}>
            {/* <WeddingDate event={event} /> */}
            <WeddingDateHelen event={event} />
          </ScrollReveal>

          {/* Agregar una foto */}
          {/* <section className="min-h-screen px-6 py-2" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
            <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col justify-center">
              <div className="mx-auto mt-2 w-full max-w-2xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image src="./" alt={coverPhoto.title ?? event.name} fill priority className="object-cover"/>
                </div>
              </div>
            </div>
          </section> */}

          <ScrollReveal direction="left" delay={400} duration={700}>
            {/* <InvitationSchedule event={event} /> */}
            <InvitationScheduleHelen event={event} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300} duration={700}>
            {/* <Countdown targetDate={event.eventDate.toISOString()}/> */}
            <CountdownHelen targetDate={event.eventDate.toISOString()}/>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={900} duration={700}>
            {/* <WeddingDressCode details={details} /> */}
            <WeddingDressCodeHelen details={details} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={600} duration={700}>
            <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
              <h2 className="text-3xl font-light" style={{color: "var(--theme-primary)"}}>Guarda la fecha</h2>
              <div className="mt-7">
                <AddToCalendar title={`${brideName} & ${groomName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl} />
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={700} duration={700}>
            <InvitationGallery event={event} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={800} duration={700}>
            <InvitationGifts gifts={event.gifts} />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={500} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={1000} duration={700}>
            <WeddingFooter details={details} />
          </ScrollReveal>

          {event.music && (
            <ScrollReveal direction="right" delay={1100} duration={700}>
              <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />
            </ScrollReveal>
          )}
        </main>
      </WeddingEnvelopeHZOpening>
      {/* </WeddingMinimalOpening> */}
    </InvitationTheme>
  )
}