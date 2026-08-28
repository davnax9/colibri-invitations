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

export default function QuinceanosFloral({ event, guest }: InvitationTemplateProps) {
  const details = event.details
  const quinceaneraName = details?.quinceaneraName ?? ""
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme}>
      <main className="min-h-screen overflow-hidden" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
        {/* HERO */}
        <section className="relative" style={{backgroundColor: "var(--theme-surface)"}}>
          <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: "var(--theme-accent)" }}/>
          {/* <QuinceanosHero coverPhoto={coverPhoto} details={details} event={event}/> */}
          <QuinceanosFloralHero coverPhoto={coverPhoto} details={details} event={event}/>

          {/* DETALLE FLORAL */}
          <div className="relative mx-auto -mt-8 flex w-fit items-center gap-4 rounded-full px-6 py-3 shadow-sm" style={{ backgroundColor: "var(--theme-background)", color: "var(--theme-primary)"}}>
            <span>✿</span><span className="text-xs uppercase tracking-[0.35em]">Mis XV años</span><span>✿</span>
          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className="relative">
          <div className="pointer-events-none absolute left-0 top-0 text-7xl opacity-10" style={{ color: "var(--theme-primary)" }}>
            ❀
          </div>

          <QuinceanosIntro details={details} />
        </section>

        {/* FRASE */}
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

        {/* FECHA */}
        <QuinceanosDate event={event} />

        {/* COUNTDOWN */}
        <section className="relative overflow-hidden" style={{backgroundColor: "var(--theme-background)"}}>
          <div className="pointer-events-none absolute -left-16 top-10 text-8xl opacity-10" style={{ color: "var(--theme-primary)" }}>
            ❀
          </div>

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <div className="pointer-events-none absolute -right-16 bottom-0 text-8xl opacity-10" style={{ color: "var(--theme-primary)" }}>
            ✿
          </div>
        </section>

        {/* HORARIOS */}
        <InvitationSchedule event={event} />

        {/* UBICACIONES */}
        <InvitationLocations event={event} />

        {/* CALENDARIO */}
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

        {/* GALERÍA */}
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

        <InvitationGifts gifts={event.gifts} />

        {/* VESTIMENTA */}
        <QuinceanosDressCode details={details} />

        {/* FOOTER */}
        <QuinceanosFooter details={details} />

        {/* MÚSICA */}
        {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
      </main>
    </InvitationTheme>
  )
}