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
import QuinceanosFamily from "../eventos/QuinceanosFamily"
import QuinceanosElegantDecor from "./quinceanos/elegant/QuinceanosElegantDecor"
import QuinceanosElegantOrnament from "./quinceanos/elegant/QuinceanosElegantOrnament"
import QuinceanosBorder from "./quinceanos/elegant/QuinceanosBorder"
import QuinceanosSideBorder from "./quinceanos/elegant/QuinceanosSideBorders"
import ColibriBranding from "./shared/ColibriBranding"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import InvitationChilds from "./shared/InvitationChilds"

export default function QuinceanosElegant({event,guest}: InvitationTemplateProps) {
  const details = event.details
  const quinceaneraName = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosElegantEnvelope quinceaneraName={quinceaneraName}>
        <QuinceanosElegantDecor>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          <QuinceanosSideBorder side="left" />
          <QuinceanosSideBorder side="right" />
          <QuinceanosBorder position="top" />
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosElegantHero coverPhoto={coverPhoto} details={details} event={event} />
          </ScrollReveal>
          
          <section
            className="relative px-6 py-10"
            style={{
              backgroundColor: "var(--theme-background)",
            }}
          >
            <ScrollReveal direction="right" delay={1100} duration={700}>
              <QuinceanosElegantOrnament
                symbol="star"
                className="mb-10"
              />
            </ScrollReveal>
            <ScrollReveal direction="left" delay={1100} duration={700}>
              <QuinceanosFamily details={details} />
            </ScrollReveal>
          </section>
          
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosIntro details={details} />
          </ScrollReveal>
          
          <QuinceanosElegantOrnament
            symbol="diamond"
            className="my-4"
          />

          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosDate event={event} />
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosElegantOrnament
              symbol="cross"
              className="my-6"
            />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={1100} duration={700}>
            <Countdown targetDate={event.eventDate.toISOString()}/>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <InvitationSchedule event={event} />
          </ScrollReveal>
          
          <QuinceanosElegantOrnament
            symbol="diamond"
            className="my-8"
          />

          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
              <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>No olvides la fecha</p>
              <h2 className="mt-4 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Guarda este día</h2>
              <div className="mt-8">
                <AddToCalendar title={`XV años de ${quinceaneraName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
              </div>
            </section>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationGallery event={event} />
          </ScrollReveal>  

        
          <QuinceanosElegantOrnament
            symbol="star"
            className="my-8"
          />

          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChilds />
            </ScrollReveal>
          )}

          <ScrollReveal direction="right" delay={1100} duration={700}>
            <InvitationGifts gifts={event.gifts} />
          </ScrollReveal>  
          
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosDressCode details={details} />
          </ScrollReveal>  

          <QuinceanosElegantOrnament
            symbol="diamond"
            className="mb-8"
          />

          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosFooter details={details} />  
          </ScrollReveal>    

          <ScrollReveal direction="up" delay={1100} duration={700}>
            <ColibriBranding />
          </ScrollReveal>
          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />)}

          <QuinceanosBorder position="bottom" />
        </main>
        </QuinceanosElegantDecor>
      </QuinceanosElegantEnvelope>
    </InvitationTheme>
  )
}