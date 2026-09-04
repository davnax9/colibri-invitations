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
import BautizoElegantOpening from "./bautizo/BautizoElegantOpening"
import BautizoLuxuryOpening from "./bautizo/BautizoLuxuryOpening"
import BautizoLuxuryHero from "./bautizo/BautizoLuxuryHero"

export default function BautizoLuxury({event,guest}: InvitationTemplateProps) {
  const childName = event.details?.childName ?? event.name
  const coverPhoto = event.photos.find((photo) => photo.isCover) ?? event.photos[0]
  const formattedDate = event.eventDate.toLocaleDateString("es-MX", {day: "numeric", month: "long", year: "numeric"})

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <BautizoLuxuryOpening childName={childName} eventDate={event.eventDate}>
        <main className="min-h-screen bg-[#f5f1e8] text-[#24382f]">
          <BautizoLuxuryHero childName={childName} eventDate={event.eventDate} coverPhoto={coverPhoto}/>
          {/* PORTADA */}
          <section className="relative min-h-screen overflow-hidden bg-[#24382f]">

            {coverPhoto && (
              <>
                <Image
                  src={coverPhoto.url}
                  alt={coverPhoto.title ?? "Fotografía de portada"}
                  fill
                  priority
                  className="object-cover opacity-45"
                />

                <div className="absolute inset-0 bg-[#24382f]/65" />
              </>
            )}

            <div className="absolute inset-5 border border-[#c9a86a]/50 sm:inset-8" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-10 text-center text-white">
              <div>

                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a86a]">
                  <span className="text-3xl text-[#c9a86a]">✝</span>
                </div>

                <p className="text-xs uppercase tracking-[0.5em] text-[#c9a86a]">
                  Mi Bautizo
                </p>

                <h1 className="mt-7 font-serif text-6xl font-light tracking-wide">
                  {childName}
                </h1>

                <div className="mx-auto my-8 h-px w-24 bg-[#c9a86a]" />

                <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                  {formattedDate}
                </p>

                {event.details?.phrase && (
                  <p className="mx-auto mt-8 max-w-md font-serif text-sm italic text-white/70">
                    "{event.details.phrase}"
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* INTRODUCCIÓN */}
          {event.details?.description && (
            <section className="px-6 py-24 text-center">
              <div className="mx-auto max-w-2xl">

                <p className="text-xs uppercase tracking-[0.4em] text-[#a17d3d]">
                  Con amor y gratitud
                </p>

                <h2 className="mt-5 font-serif text-4xl font-light">
                  Un día especial
                </h2>

                <div className="mx-auto my-7 h-px w-12 bg-[#c9a86a]" />

                <p className="text-sm leading-8 text-[#68756d]">
                  {event.details.description}
                </p>
              </div>
            </section>
          )}

          {/* FECHA */}
          <section className="bg-[#24382f] px-6 py-20 text-center text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a86a]">
              Reserva la fecha
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light">
              {formattedDate}
            </h2>

            <div className="mx-auto my-8 h-px w-12 bg-[#c9a86a]" />

            <Countdown targetDate={event.eventDate.toISOString()} />
          </section>

          {/* HORARIOS */}
          {event.schedules.length > 0 && (
            <section className="px-6 py-24">
              <div className="mx-auto max-w-4xl">

                <div className="mb-14 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-[#a17d3d]">
                    Celebremos juntos
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-light">
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
              title={`Bautizo de ${childName}`}
              eventDate={event.eventDate}
              schedules={event.schedules}
              invitationUrl={`/invitacion/${event.slug}`}
            />
          </section>

          {event.music && <MusicPlayer videoId={event.music.url} title={event.music.title} artist={event.music.artist} autoplay={event.music.autoplay} />}

          <footer className="bg-[#172820] px-6 py-24 text-center text-white">
            <span className="text-3xl text-[#c9a86a]">✦</span>

            <p className="mt-6 font-serif text-4xl font-light">
              {childName}
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-[#c9a86a]">
              Mi Bautizo
            </p>
          </footer>
        </main>
      </BautizoLuxuryOpening>
    </InvitationTheme>
  )
}