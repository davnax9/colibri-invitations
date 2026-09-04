import { InvitationTemplateProps } from "@/utils/types/invitation";
import ComunionElegantHero from "./comunion/ComunionElegantHero";
import ComunionElegantOpening from "./comunion/ComunionElegantOpening";
import InvitationTheme from "./shared/InvitationTheme";
import Countdown from "./shared/Countdown";
import InvitationSchedule from "./shared/InvitationSchedule";
import InvitationLocations from "./shared/InvitationLocations";
import AddToCalendar from "./shared/AddToCalendar";
import InvitationGallery from "./shared/InvitationGallery";
import InvitationGifts from "./shared/InvitationGifts";
import MusicPlayer from "./shared/MusicPlayer";

export default function ComunionElegant({event, guest}: InvitationTemplateProps) {

  const details = event.details
  const childName = details?.childName ?? event.name
  const coverPhoto = event.photos?.find((photo: any) => photo.isCover) ?? event.photos?.[0]
  const invitationUrl = `/invitacion/${event.slug}`

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <ComunionElegantOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen" style={{backgroundColor: "var(--theme-background)",color: "var(--theme-text)"}}>
          <ComunionElegantHero  childName={childName} coverPhoto={coverPhoto}/>
          {/* Introducción */}
          <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-background)"}}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Un día especial</p>
            <h2 className="mt-5 text-4xl font-serif" style={{color: "var(--theme-primary)"}}>Mi Primera Comunión</h2>
            <div className="mx-auto mt-6 h-px w-16" style={{backgroundColor: "var(--theme-accent)"}}/>
            {details?.phrase && (<p className="mx-auto mt-6 max-w-xl text-base leading-7" style={{color: "var(--theme-secondary)"}}>{details.phrase}</p>)}
          </section>

          <Countdown targetDate={event.eventDate.toISOString()}/>

          <InvitationSchedule event={event} />

          <InvitationLocations event={event} />

          {/* Fecha */}
          <section className="px-6 py-24 text-center" style={{backgroundColor: "var(--theme-surface)"}}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{color: "var(--theme-secondary)"}}>Reserva la fecha</p>
            <h2 className="mt-4 text-3xl font-serif" style={{color: "var(--theme-primary)"}}>{event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})}</h2>
            <div className="mt-8 flex justify-center">
              <AddToCalendar title={`Primera Comunión de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={invitationUrl}/>
            </div>
          </section>
          
          <InvitationGallery event={event} />

          <InvitationGifts gifts={event.gifts} />

          {event.music && (<MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay}/>)}
        </main>
      </ComunionElegantOpening>
    </InvitationTheme>
  )
}
