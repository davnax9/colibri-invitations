import Image from "next/image"
import { InvitationTemplateProps } from "@/utils/types/invitation"
import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import InvitationGifts from "./shared/InvitationGifts"
import AddToCalendar from "./shared/AddToCalendar"
import MusicPlayer from "./shared/MusicPlayer"
import InvitationTheme from "./shared/InvitationTheme"
import ComunionModernOpening from "./comunion/ComunionModernOpening"
import ComunionModernHero from "./comunion/ComunionModernHero"

export default function ComunionModern({event, guest}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <ComunionModernOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-[#f4f3ef] text-[#252525]">
          <ComunionModernHero childName={childName} eventDate={event.eventDate} coverPhoto={coverPhoto}/>
          {/* PORTADA */}
          <section className="relative min-h-screen overflow-hidden bg-[#252525] text-white">
            {coverPhoto && (
              <>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority className="object-cover opacity-55 grayscale-20"/>
                <div className="absolute inset-0 bg-black/45" />
              </>
            )}
            <div className="absolute left-6 top-6 right-6 bottom-6 border border-white/30" />
            <div className="relative z-10 flex min-h-screen items-end px-8 pb-16 sm:px-16">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.5em] text-white/70">Primera Comunión</p>
                <h1 className="mt-6 font-serif text-6xl font-light leading-none sm:text-8xl">{childName}</h1>
                <div className="mt-10 flex items-center gap-6">
                  <span className="text-3xl text-[#d1b36a]">✝</span>
                  <div className="h-px w-20 bg-[#d1b36a]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">{formattedDate}</span>
                </div>
                {event.details?.phrase && (<p className="mt-8 max-w-lg text-sm italic text-white/70">"{event.details.phrase}"</p>)}
              </div>
            </div>
          </section>
          {/* INTRO */}
          {event.details?.description && (
            <section className="px-8 py-28">
              <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Un día especial</p>
                  <h2 className="mt-5 font-serif text-5xl font-light">Con fe y alegría</h2>
                </div>
                <div className="flex items-center">
                  <p className="text-sm leading-8 text-stone-600">{event.details.description}</p>
                </div>
              </div>
            </section>
          )}
          {/* FECHA */}
          <section className="bg-[#252525] px-8 py-24 text-center text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d1b36a]">Reserva la fecha</p>
            <h2 className="mt-5 font-serif text-5xl font-light">{formattedDate}</h2>
            <div className="mx-auto mt-10 h-px w-16 bg-[#d1b36a]" />
            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>
          {/* HORARIOS */}
          {event.schedules.length > 0 && (
            <section className="px-8 py-28">
              <div className="mx-auto max-w-5xl">
                <div className="mb-16 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Agenda</p>
                    <h2 className="mt-4 font-serif text-5xl font-light">Nuestro día</h2>
                  </div>
                  <span className="hidden text-4xl text-[#c4a55e] sm:block">✝</span>
                </div>
                <InvitationSchedule event={event} />
              </div>
            </section>
          )}
          {event.locations.length > 0 && (<InvitationLocations event={event} />)}
          {event.photos.length > 0 && (<InvitationGallery event={event} />)}
          {event.gifts.length > 0 && (<InvitationGifts gifts={event.gifts} />)}
          <section className="px-8 py-16 text-center">
            <AddToCalendar title={`Primera Comunión de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={`/invitacion/${event.slug}`}/>
          </section>
          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}
          <footer className="bg-[#151515] px-8 py-24 text-center text-white">
            <span className="text-3xl text-[#d1b36a]">✝</span>
            <p className="mt-7 font-serif text-4xl font-light">{childName}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">Mi Primera Comunión</p>
          </footer>
        </main>
      </ComunionModernOpening>
    </InvitationTheme>
  )
}