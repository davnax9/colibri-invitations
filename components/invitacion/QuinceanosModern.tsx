import QuinceanosIntro from "./quinceanos/QuinceanosIntro"
import QuinceanosDate from "./quinceanos/QuinceanosDate"
import QuinceanosDressCode from "./quinceanos/QuinceanosDressCode"
import QuinceanosFooter from "./quinceanos/QuinceanosFooter"

import Countdown from "./shared/Countdown"
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

import QuinceanosDetails from "./quinceanos/modern/QuinceanosDetails"
import QuinceanosQuote from "./quinceanos/modern/QuinceanosQuote"
import QuinceanosGoldDecor from "./quinceanos/modern/QuinceanosGoldDecor"
import QuinceanosGoldDust from "./quinceanos/modern/QuinceanosGoldDust"
import QuinceanosFamily from "../eventos/QuinceanosFamily"
import QuinceanosBorder from "./quinceanos/modern/QuinceanosBorder"
import ColibriBranding from "./shared/ColibriBranding"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import InvitationChilds from "./shared/InvitationChilds"

export default function QuinceanosModern({event,guest}: InvitationTemplateProps) {

  const details = event.details
  const name = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", { day: "numeric",month: "long",year: "numeric"})
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosModernEnvelope quinceaneraName={name} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
          <QuinceanosBorder position="top" />
          {/* =====================================================
              01. HERO
          ===================================================== */}
          <div className="relative">
            <ScrollReveal direction="left" delay={1100} duration={700}>
              <QuinceanosModernHero coverPhoto={coverPhoto} details={details} event={event}/>
            </ScrollReveal>
            <QuinceanosGoldDecor />
          </div>
          {/* =====================================================
              02. INTRODUCCIÓN
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosFamily details={details}/>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosIntro details={details}/>
          </ScrollReveal>
          <QuinceanosGoldDecor variant="divider" className="py-2"/>
          {/* =====================================================
              03. FRASE
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <div className="relative">
              <QuinceanosQuote />
              <QuinceanosGoldDecor />
            </div>
          </ScrollReveal>
          {/* =====================================================
              04. FECHA PRINCIPAL
          ===================================================== */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <div className="relative">
              <QuinceanosDate event={event}/>
              <QuinceanosGoldDust />
            </div>
          </ScrollReveal>
          {/* =====================================================
              05. CUENTA REGRESIVA
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <Countdown targetDate={event.eventDate.toISOString()}/>
          </ScrollReveal>
          <QuinceanosGoldDecor variant="divider" className="py-2"/>
          {/* =====================================================
              06. DETALLES
          ===================================================== */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosDetails date={formattedDate} />
          </ScrollReveal>
          {/* =====================================================
              07. ITINERARIO
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <InvitationTimeline schedules={event.schedules} />
          </ScrollReveal>
          <QuinceanosGoldDecor variant="divider" className="py-2" />
          {/* =====================================================
              08. UBICACIONES
          ===================================================== */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationEditorialLocations locations={event.locations}/>
          </ScrollReveal>
          {/* =====================================================
              09. GALERÍA
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <div className="relative">
              <InvitationCollageGallery photos={event.photos}/>
              <QuinceanosGoldDecor />
            </div>
          </ScrollReveal>

          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChilds />
            </ScrollReveal>
          )}
          {/* =====================================================
              10. MESA DE REGALOS
          ===================================================== */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationGifts gifts={event.gifts}/>
          </ScrollReveal>
          {/* =====================================================
              11. CÓDIGO DE VESTIMENTA
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosDressCode details={details}/>
          </ScrollReveal>
          {/* =====================================================
              12. RESERVA LA FECHA
          ===================================================== */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10 md:py-32" style={{backgroundColor: "var(--theme-background)"}}>
              <QuinceanosGoldDust />
              <div className="mx-auto max-w-5xl border border-[#B89455]/40 px-8 py-16 sm:px-16 sm:py-20">
                <div className="mx-auto mb-8 flex items-center justify-center gap-4" style={{color: "#B89455"}}>
                  <span className="h-px w-16 bg-current opacity-50" />
                  <span className="text-xl">✦</span>
                  <span className="h-px w-16 bg-current opacity-50" />
                </div>
                <p className="text-xs uppercase tracking-[0.45em]" style={{color: "#8C6A36"}}>Un día para recordar</p>
                <h2 className="mt-5 font-serif text-4xl sm:text-5xl" style={{color: "var(--theme-primary)"}}>Reserva la fecha</h2>
                <div className="mx-auto mt-7 flex items-center justify-center gap-4" style={{color: "#B89455"}}>
                  <span className="h-px w-14 bg-current opacity-40" />
                  <span className="text-xl">✦</span>
                  <span className="h-px w-14 bg-current opacity-40" />
                </div>
                <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-8" style={{color: "var(--theme-secondary)"}}>Será un placer compartir contigo este momento tan especial.</p>
                <div className="mt-9">
                  <AddToCalendar title={`XV años de ${name}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
                </div>
                <div className="mx-auto mt-10 flex items-center justify-center gap-4" style={{color: "#B89455"}}>
                  <span className="h-px w-16 bg-current opacity-40" />
                  <span className="text-sm">❦</span>
                  <span className="h-px w-16 bg-current opacity-40" />
                </div>
              </div>
            </section>
          </ScrollReveal>
          {/* =====================================================
              13. FOOTER
          ===================================================== */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosFooter details={details}/>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1100} duration={700}>
            <ColibriBranding />
          </ScrollReveal>
          {/* =====================================================
              14. MÚSICA
          ===================================================== */}
          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />)}
          <QuinceanosBorder position="bottom" />
        </main>
      </QuinceanosModernEnvelope>
    </InvitationTheme>
  )
}