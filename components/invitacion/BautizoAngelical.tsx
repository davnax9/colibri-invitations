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
import BautizoAngelicalOpening from "./bautizo/BautizoAngelicalOpening"

export default function BautizoAngelical({
  event,
  guest,
}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <BautizoAngelicalOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-sky-50 text-slate-700" style={{background:"linear-gradient(to bottom, #f8fcff 0%, #ffffff 45%, #f4f9fc 100%)"}}>
          {/* PORTADA */}
          <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {coverPhoto && (
              <>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority className="object-cover"/>
                <div className="absolute inset-0 bg-white/60" />
                <div className="absolute inset-0 bg-linear-to-b from-white/40 via-white/55 to-sky-50/90" />
              </>
            )}
            {/* Decoración */}
            <div className="absolute left-6 top-8 h-24 w-24 rounded-full border border-sky-200/60" />
            <div className="absolute right-6 top-16 h-32 w-32 rounded-full border border-amber-200/50" />
            <div className="relative z-10 mx-auto w-full max-w-lg px-8 text-center">
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-300 bg-white/80 shadow-sm">
                  <span className="text-4xl text-amber-500">✝</span>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-700">Mi Bautizo</p>
              <div className="mx-auto my-6 h-px w-16 bg-amber-400/70" />
              <h1 className="font-serif text-5xl font-light tracking-wide text-slate-700 sm:text-6xl">{childName}</h1>
              <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-slate-500">Con alegría y amor te invitamos a compartir este momento tan especial de mi vida.</p>
              <p className="mt-8 text-sm uppercase tracking-[0.25em] text-sky-700">{formattedDate}</p>
              {event.details?.phrase && (<p className="mt-8 font-serif text-sm italic text-slate-500">"{event.details.phrase}"</p>)}
            </div>
          </section>
          {/* INTRODUCCIÓN */}
          {event.details?.description && (
            <section className="mx-auto max-w-3xl px-6 py-24 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-600">Un día para recordar</p>
              <div className="mx-auto my-5 h-px w-10 bg-amber-400" />
              <p className="font-serif text-lg leading-8 text-slate-600">{event.details.description}</p>
            </section>
          )}
          {/* FECHA */}
          <section className="bg-white px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Reserva la fecha</p>
            <h2 className="mt-5 font-serif text-4xl font-light text-slate-700">{formattedDate}</h2>
            <div className="mx-auto mt-8 h-px w-12 bg-amber-400" />
            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>
          {/* HORARIOS */}
          {event.schedules.length > 0 && (
            <section className="px-6 py-20">
              <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-600">Celebremos juntos</p>
                  <h2 className="mt-3 font-serif text-4xl font-light text-slate-700">Nuestro día</h2>
                </div>
                <InvitationSchedule event={event} />
              </div>
            </section>
          )}
          {/* UBICACIONES */}
          {event.locations.length > 0 && (<InvitationLocations event={event} />)}
          {/* GALERÍA */}
          {event.photos.length > 0 && (<InvitationGallery event={event} />)}
          {/* REGALOS */}
          {event.gifts.length > 0 && (<InvitationGifts gifts={event.gifts} />)}
          {/* CALENDARIO */}
          <section className="px-6 py-16 text-center">
            <AddToCalendar title={`Bautizo de ${childName}`} eventDate={event.eventDate} schedules={event.schedules} invitationUrl={`/invitacion/${event.slug}`}/>
          </section>
          {/* MÚSICA */}
          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}
          {/* FOOTER */}
          <footer className="bg-slate-700 px-6 py-20 text-center text-white">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/60">
              <span className="text-2xl text-amber-300">✝</span>
            </div>
            <p className="font-serif text-3xl font-light">{childName}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/60">Mi Bautizo</p>
            {guest && (<p className="mt-8 text-sm text-white/80">{guest.name}, será un honor contar contigo.</p>
            )}
          </footer>
        </main>
      </BautizoAngelicalOpening>
    </InvitationTheme>
  )
}