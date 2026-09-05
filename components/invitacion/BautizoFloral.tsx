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
import BautizoElegantOpening from "./bautizo/BautizoElegantOpening"
import BautizoFloralOpening from "./bautizo/BautizoFloralOpening"
import BautizoFloralHero from "./bautizo/BautizoFloralHero"

export default function BautizoFloral({event,guest}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <BautizoFloralOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-[#f7f4ed] text-[#405047]">
          <BautizoFloralHero childName={childName} eventDate={event.eventDate} coverPhoto={coverPhoto}/>
          {/* PORTADA */}
          <section className="relative min-h-screen overflow-hidden">
            {coverPhoto && (
              <>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-[#f7f4ed]/70" />
                <div className="absolute inset-0 bg-linear-to-b from-[#f7f4ed]/30 via-[#f7f4ed]/55 to-[#f7f4ed]" />
              </>
            )}
            {/* Decoraciones florales */}
            <div className="pointer-events-none absolute left-0 top-0 text-7xl text-green-700/20">
              ❦
            </div>
            <div className="pointer-events-none absolute right-0 top-12 rotate-180 text-7xl text-green-700/20">
              ❦
            </div>
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.4em] text-green-700">Mi Bautizo</p>
                <div className="mx-auto my-6 flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-green-300" />
                  <span className="text-xl text-green-600">✦</span>
                  <span className="h-px w-12 bg-green-300" />
                </div>
                <h1 className="font-serif text-6xl font-light text-[#405047]">{childName}</h1>
                <p className="mt-6 font-serif text-lg italic text-green-700/80">Un día lleno de amor, fe y bendiciones.</p>
                <div className="mx-auto mt-10 inline-flex items-center gap-5 rounded-full border border-green-300/70 bg-white/60 px-7 py-3 backdrop-blur-sm">
                  <span className="text-sm">{formattedDate}</span>
                </div>
                {event.details?.phrase && (<p className="mt-10 text-sm italic leading-6 text-[#68776e]">"{event.details.phrase}"</p>)}
              </div>
            </div>
          </section>
          {/* INTRODUCCIÓN */}
          {event.details?.description && (
            <section className="px-6 py-24 text-center">
              <div className="mx-auto max-w-2xl">
                <span className="text-3xl text-green-600/60">❦</span>
                <h2 className="mt-4 font-serif text-3xl text-[#405047]">Con mucho amor</h2>
                <p className="mt-6 text-sm leading-7 text-[#68776e]">{event.details.description}</p>
                <span className="mt-8 block text-3xl text-green-600/60">❦</span>
              </div>
            </section>
          )}
          {/* FECHA */}
          <section className="bg-white/70 px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-green-700">Una fecha especial</p>
            <h2 className="mt-5 font-serif text-4xl font-light">{formattedDate}</h2>
            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>
          {/* HORARIOS */}
          {event.schedules.length > 0 && (
            <section className="px-6 py-20">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-green-700">Celebremos juntos</p>
                <h2 className="mt-3 font-serif text-4xl">Nuestro día</h2>
                <div className="mt-12">
                  <InvitationSchedule event={event} />
                </div>
              </div>
            </section>
          )}
          {/* UBICACIONES */}
          {event.locations.length > 0 && (<InvitationLocations event={event} />)}
          {/* GALERÍA */}
          {event.photos.length > 0 && (<InvitationGallery event={event} />)}
          {/* REGALOS */}
          {event.gifts.length > 0 && (<InvitationGifts gifts={event.gifts} />)}
          <section className="px-6 py-16 text-center">
            <AddToCalendar title={`Bautizo de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={`/invitacion/${event.slug}`}/>
          </section>
          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}
          <footer className="bg-[#405047] px-6 py-20 text-center text-white">
            <span className="text-4xl text-green-200/80">❦</span>
            <p className="mt-6 font-serif text-4xl">{childName}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">Mi Bautizo</p>
          </footer>
        </main>
      </BautizoFloralOpening>
    </InvitationTheme>
  )
}