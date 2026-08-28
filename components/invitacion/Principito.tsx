import { InvitationTemplateProps } from "@/utils/types/invitation"
import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationTheme from "./shared/InvitationTheme"
import PrincipitoHero from "./principito/PrincipitoHero"
import PrincipitoIntro from "./principito/PrincipitoIntro"

export default function Principito({
  event,
  guest,
}: InvitationTemplateProps) {

  const details = event.details

  const childName = details?.quinceaneraName ?? ""

  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]

  const invitationUrl = guest ? `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}/${guest.token}` : `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme}>
      <main className="min-h-screen overflow-hidden" style={{backgroundColor: "var(--theme-background)", color: "var(--theme-text)"}}>
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}
        <PrincipitoHero coverPhoto={coverPhoto} details={details} event={event}/>
        {/* ================================================= */}
        {/* INTRODUCCIÓN */}
        {/* ================================================= */}
        <PrincipitoIntro details={details}/>
        {/* ================================================= */}
        {/* CUENTA REGRESIVA */}
        {/* ================================================= */}
        <section className="relative px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}>
          {/* Estrellas decorativas */}
          <div className="pointer-events-none absolute left-[10%] top-10 text-xl opacity-60">✦</div>
          <div className="pointer-events-none absolute right-[15%] top-20 text-sm opacity-50">✧</div>
          <div className="pointer-events-none absolute bottom-10 left-[20%] text-sm opacity-40">✦</div>
          <p className="text-xs uppercase tracking-[0.35em]" style={{color: "var(--theme-secondary)"}}>El gran día se acerca</p>
          <h2 className="mt-4 text-4xl font-serif sm:text-5xl" style={{color: "var(--theme-primary)"}}>Falta muy poco</h2>
          <div className="mt-8">
            <Countdown targetDate={event.eventDate.toISOString()}/>
          </div>
        </section>
        {/* ================================================= */}
        {/* HORARIOS */}
        {/* ================================================= */}
        <InvitationSchedule event={event} />
        {/* ================================================= */}
        {/* UBICACIONES */}
        {/* ================================================= */}
        <InvitationLocations event={event} />
        {/* ================================================= */}
        {/* CALENDARIO */}
        {/* ================================================= */}
        {/* <section className="relative overflow-hidden px-6 py-20 text-center" style={{backgroundColor: "var(--theme-background)"}}> */}
          {/* Luna decorativa */}
          {/* <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full opacity-20"style={{backgroundColor: "var(--theme-secondary)",}}/>
          <p className="text-sm uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)",}}>No olvides la fecha</p>
          <h2 className="mt-4 text-4xl font-serif sm:text-5xl" style={{color: "var(--theme-primary)",}}>Guarda este día</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 opacity-80">Acompáñanos a celebrar una aventura muy especial.</p>
          <div className="mt-8">
            <AddToCalendar title={`Cumpleaños de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
          </div>
        </section> */}
        {/* ================================================= */}
        {/* GALERÍA */}
        {/* ================================================= */}
        <InvitationGallery event={event} />
        {/* ================================================= */}
        {/* CIERRE */}
        {/* ================================================= */}
        <section className="relative overflow-hidden px-6 py-24 text-center" style={{backgroundColor: "var(--theme-primary)", color: "var(--theme-background)"}}>
          {/* Estrellas */}
          <div className="pointer-events-none absolute left-[10%] top-10 text-xl opacity-50">✦</div>
          <div className="pointer-events-none absolute right-[12%] top-20 text-2xl opacity-50">✧</div>
          <div className="pointer-events-none absolute bottom-16 left-[25%] text-sm opacity-40">✦</div>
          <p className="text-sm uppercase tracking-[0.35em] opacity-70">Te esperamos</p>
          <h2 className="mt-5 text-4xl font-serif sm:text-5xl">{childName}</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 opacity-80">Una pequeña aventura está por comenzar, y sería maravilloso compartirla contigo.</p>
          <div className="mt-8 text-3xl">✦ 🌹 ✦</div>
        </section>
        {/* ================================================= */}
        {/* MÚSICA */}
        {/* ================================================= */}
        {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
      </main>
    </InvitationTheme>
  )
}