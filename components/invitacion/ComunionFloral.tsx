import Image from "next/image"
import { InvitationTemplateProps } from "@/utils/types/invitation"
import Countdown from "./shared/Countdown"
import MusicPlayer from "./shared/MusicPlayer"
import AddToCalendar from "./shared/AddToCalendar"
import InvitationGifts from "./shared/InvitationGifts"
import InvitationGallery from "./shared/InvitationGallery"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationTheme from "./shared/InvitationTheme"
import ComunionClassicOpening from "./comunion/ComunionClassicOpening"
import ComunionFloralOpening from "./comunion/ComunionFloralOpening"
import ComunionFloralHero from "./comunion/ComunionFloralHero"

export default function ComunionFloral({event,guest}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric",month: "long",year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <ComunionFloralOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-[#faf7f8] text-[#554b55]">
          <ComunionFloralHero childName={childName} eventDate={event.eventDate} coverPhoto={coverPhoto}/>
          {/* PORTADA */}
          <section className="relative min-h-screen overflow-hidden">
            {coverPhoto && (
              <>
                <Image src={coverPhoto.url} alt={coverPhoto.title ?? "Fotografía de portada"} fill priority className="object-cover"/>
                <div className="absolute inset-0 bg-[#faf7f8]/65" />
                <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/50 to-[#faf7f8]" />
              </>
            )}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
              <div className="max-w-xl">
                <div className="mb-8 text-4xl text-[#a993b5]">
                  ✿
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#85718e]">Mi Primera Comunión</p>
                <h1 className="mt-6 font-serif text-6xl font-light text-[#554b55]">{childName}</h1>
                <div className="mx-auto my-8 flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-[#c9b8d0]" />
                  <span className="text-[#9b83a8]">✝</span>
                  <span className="h-px w-12 bg-[#c9b8d0]" />
                </div>
                <p className="font-serif text-lg italic text-[#85718e]">Un día de fe, amor y alegría.</p>
                <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#85718e]">{formattedDate}</p>

                {event.details?.phrase && (
                  <p className="mt-8 text-sm italic text-[#776d77]">
                    "{event.details.phrase}"
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* INTRO */}
          {event.details?.description && (
            <section className="px-6 py-24 text-center">

              <div className="mx-auto max-w-2xl">

                <div className="text-3xl text-[#b49abe]">
                  ✿
                </div>

                <h2 className="mt-4 font-serif text-3xl">
                  Con mucha alegría
                </h2>

                <p className="mt-6 text-sm leading-8 text-[#776d77]">
                  {event.details.description}
                </p>
              </div>
            </section>
          )}

          {/* FECHA */}
          <section className="bg-white px-6 py-20 text-center">

            <p className="text-xs uppercase tracking-[0.3em] text-[#85718e]">
              Guarda este día
            </p>

            <h2 className="mt-5 font-serif text-4xl">
              {formattedDate}
            </h2>

            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>

          {/* HORARIOS */}
          {event.schedules.length > 0 && (
            <section className="px-6 py-24">

              <div className="mx-auto max-w-4xl">

                <div className="mb-14 text-center">

                  <p className="text-xs uppercase tracking-[0.3em] text-[#85718e]">
                    Celebremos juntos
                  </p>

                  <h2 className="mt-3 font-serif text-4xl">
                    Nuestro día
                  </h2>

                </div>

                <InvitationSchedule event={event} />
              </div>
            </section>
          )}

          {event.locations.length > 0 && (
            <InvitationLocations event={event} />
          )}

          {event.photos.length > 0 && (
            <InvitationGallery event={event} />
          )}

          {event.gifts.length > 0 && (
            <InvitationGifts gifts={event.gifts} />
          )}

          <section className="px-6 py-16 text-center">

            <AddToCalendar
              title={`Primera Comunión de ${childName}`}
              eventDate={event.eventDate}
              schedules={event.schedules}
              invitationUrl={`/invitacion/${event.slug}`}
            />

          </section>

          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}

          <footer className="bg-[#554b55] px-6 py-20 text-center text-white">

            <div className="text-3xl text-[#c9b7d1]">
              ✿
            </div>

            <p className="mt-6 font-serif text-4xl">
              {childName}
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
              Mi Primera Comunión
            </p>

          </footer>
        </main>
      </ComunionFloralOpening>
    </InvitationTheme>
  )
}