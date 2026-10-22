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
import QuinceanosFloralHero from "./quinceanos/QuinceanosFloralHero"
import InvitationGifts from "./shared/InvitationGifts"
import QuinceanosFloralEnvelope from "./quinceanos/QuinceanosFloralEnvelope"
import QuinceanosFamily from "../eventos/QuinceanosFamily"
import QuinceanosOrnaments from "./shared/QuinceanosOrnaments"
import ScrollReveal from "@/app/components/ui/ScrollReveal"
import ColibriBranding from "./shared/ColibriBranding"
import InvitationChilds from "./shared/InvitationChilds"

export default function QuinceanosFloral({ event, guest }: InvitationTemplateProps) {
  const details = event.details
  const quinceaneraName = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <QuinceanosFloralEnvelope quinceaneraName={quinceaneraName}>
        <main className="min-h-screen overflow-hidden" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute left-0 top-0">
              <QuinceanosOrnaments positions={["top-left"]} />
            </div>

            <div className="absolute right-0 top-0">
              <QuinceanosOrnaments positions={["top-right"]} />
            </div>

            <div className="absolute bottom-0 left-0">
              <QuinceanosOrnaments positions={["bottom-left"]} />
            </div>

            <div className="absolute bottom-0 right-0">
              <QuinceanosOrnaments positions={["bottom-right"]} />
            </div>
          </div>
          {/* HERO */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <section className="relative" style={{backgroundColor: "var(--theme-surface)"}}>
              <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: "var(--theme-accent)" }}/>
              <QuinceanosFloralHero coverPhoto={coverPhoto} details={details} event={event}/>
              {/* DETALLE FLORAL */}
              <div className="relative mx-auto -mt-8 flex w-fit items-center gap-4 rounded-full px-6 py-3 shadow-sm" style={{ backgroundColor: "var(--theme-background)", color: "var(--theme-primary)"}}>
                <span>✿</span><span className="text-xs uppercase tracking-[0.35em]">Mis XV años</span><span>✿</span>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosFamily details={details}/>
          </ScrollReveal>
          {/* INTRODUCCIÓN */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <section className="relative">
              <div className="pointer-events-none absolute left-0 top-0 text-7xl opacity-10" style={{ color: "var(--theme-primary)" }}>
                ❀
              </div>
              <QuinceanosIntro details={details} />
            </section>
          </ScrollReveal>
          {/* FRASE */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            {details?.phrase && (
              <section className="px-6 py-20 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
                <div className="mx-auto max-w-3xl">
                  <div className="mx-auto mb-6 text-3xl" style={{ color: "var(--theme-accent)"}}>
                    ❀
                  </div>
                  <p className="font-serif text-2xl italic leading-relaxed md:text-3xl" style={{ color: "var(--theme-primary)" }}>“{details.phrase}”</p>
                  <div className="mx-auto mt-7 h-px w-12" style={{ backgroundColor: "var(--theme-accent)" }}/>
                </div>
              </section>
            )}
          </ScrollReveal>
          {/* FECHA */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosDate event={event} />
          </ScrollReveal>
          {/* COUNTDOWN */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <section className="relative overflow-hidden" style={{backgroundColor: "var(--theme-background)"}}>
              <div className="pointer-events-none absolute -left-16 top-10 text-8xl opacity-10" style={{ color: "var(--theme-primary)" }}>
                ❀
              </div>
              <Countdown targetDate={event.eventDate.toISOString()}/>
              <div className="pointer-events-none absolute -right-16 bottom-0 text-8xl opacity-10" style={{ color: "var(--theme-primary)" }}>
                ✿
              </div>
            </section>
          </ScrollReveal>
          {/* HORARIOS */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationSchedule event={event} />
          </ScrollReveal>
          {/* UBICACIONES */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal>
          {/* CALENDARIO */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
              <div className="mx-auto max-w-2xl">
                <span className="text-3xl" style={{ color: "var(--theme-accent)" }}>
                  ❀
                </span>
                <p className="mt-5 text-xs uppercase tracking-[0.35em]" style={{ color: "var(--theme-secondary)" }}>Reserva la fecha</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl" style={{ color: "var(--theme-primary)" }}>Acompáñame en este día</h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-7" style={{ color: "var(--theme-secondary)" }}>Guarda la fecha en tu calendario para que podamos celebrar juntos este momento tan especial.</p>
                <div className="mt-8">
                  <AddToCalendar title={`XV años de ${quinceaneraName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
                </div>
              </div>
            </section>
          </ScrollReveal>
          {/* GALERÍA */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <section className="px-6 py-24" style={{ backgroundColor: "var(--theme-background)"}}>
              <div className="mx-auto max-w-6xl">
                <div className="text-center">
                  <span className="text-3xl" style={{ color: "var(--theme-accent)" }}> ✿</span>
                  <p className="mt-4 text-xs uppercase tracking-[0.35em]" style={{ color: "var(--theme-secondary)" }}>Momentos especiales</p>
                  <h2 className="mt-3 font-serif text-4xl md:text-5xl" style={{ color: "var(--theme-primary)" }}>Mis recuerdos</h2>
                </div>
                <div className="mt-14">
                  <InvitationGallery event={event} />
                </div>
              </div>
            </section>
          </ScrollReveal>
          {event.showChildsSection && (
            <ScrollReveal direction="right" delay={850} duration={700}>
              <InvitationChilds />
            </ScrollReveal>
          )}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <InvitationGifts gifts={event.gifts} />
          </ScrollReveal>
          {/* VESTIMENTA */}
          <ScrollReveal direction="right" delay={1100} duration={700}>
            <QuinceanosDressCode details={details} />
          </ScrollReveal>
          {/* FOOTER */}
          <ScrollReveal direction="left" delay={1100} duration={700}>
            <QuinceanosFooter details={details} />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1100} duration={700}>
            <ColibriBranding />
          </ScrollReveal>

          {/* MÚSICA */}
          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
        </main>
      </QuinceanosFloralEnvelope>
    </InvitationTheme>
  )
}