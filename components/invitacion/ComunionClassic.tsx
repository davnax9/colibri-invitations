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
import ComunionClassicOpening from "./comunion/ComunionClassicOpening"
import ComunionClassicHero from "./comunion/ComunionClassicHero"

export default function ComunionClassic({event,guest}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <ComunionClassicOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-[#faf8f3] text-stone-700">
          <ComunionClassicHero childName={childName} eventDate={event.eventDate} coverPhoto={coverPhoto}/>
          <section className="relative min-h-screen overflow-hidden bg-[#faf8f3]">
            {coverPhoto && (
              <>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority className="object-cover opacity-25"/>
                <div className="absolute inset-0 bg-[#faf8f3]/80" />
              </>
            )}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
              <div className="w-full max-w-xl border border-[#c9a86a]/60 px-8 py-20 sm:px-16">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a86a] bg-white">
                  <span className="text-3xl text-[#b18a46]">✝</span>
                </div>
                <p className="mt-10 text-xs uppercase tracking-[0.35em] text-[#8d7140]">Mi Primera Comunión</p>
                <h1 className="mt-6 font-serif text-5xl font-light text-stone-700">{childName}</h1>
                <div className="mx-auto my-8 h-px w-14 bg-[#c9a86a]" />
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{formattedDate}</p>
                {event.details?.phrase && (<p className="mt-8 font-serif text-sm italic text-stone-500">"{event.details.phrase}"</p>)}
              </div>
            </div>
          </section>
          {event.details?.description && (
            <section className="px-6 py-24 text-center">
              <div className="mx-auto max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-[#8d7140]">Un día de fe</p>
                <h2 className="mt-4 font-serif text-3xl">Un momento para recordar</h2>
                <p className="mt-7 text-sm leading-8 text-stone-500">{event.details.description}</p>
              </div>
            </section>
          )}
          <section className="bg-white px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Reserva la fecha</p>
            <h2 className="mt-5 font-serif text-4xl">{formattedDate}</h2>
            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>
          {event.schedules.length > 0 && (
            <section className="px-6 py-24">
              <div className="mx-auto max-w-4xl">
                <div className="mb-14 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8d7140]">Celebremos juntos</p>
                  <h2 className="mt-3 font-serif text-4xl">Nuestro día</h2>
                </div>
                <InvitationSchedule event={event} />
              </div>
            </section>
          )}
          {event.locations.length > 0 && (<InvitationLocations event={event} />)}
          {event.photos.length > 0 && (<InvitationGallery event={event} />)}
          {event.gifts.length > 0 && (<InvitationGifts gifts={event.gifts} />)}
          <section className="px-6 py-16 text-center">
            <AddToCalendar title={`Primera Comunión de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={`/invitacion/${event.slug}`}/>
          </section>
          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}
          <footer className="bg-stone-700 px-6 py-20 text-center text-white">
            <span className="text-3xl text-[#d4b878]">✝</span>
            <p className="mt-6 font-serif text-3xl">{childName}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">Mi Primera Comunión</p>
          </footer>
        </main>
      </ComunionClassicOpening>
    </InvitationTheme>
  )
}