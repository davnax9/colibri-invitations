import { InvitationTemplateProps } from "@/utils/types/invitation"
import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import InvitationGallery from "./shared/InvitationGallery"
import MusicPlayer from "./shared/MusicPlayer"
import InvitationGifts from "./shared/InvitationGifts"
import InvitationTheme from "./shared/InvitationTheme"

import KpopWarriorsExperience from "./KpopWarriorsExperience"
import KpopWarriorsHero from "./kpop/KpopWarriorsHero"
import KpopWarriorsIntro from "./kpop/KpopWarriorsIntro"

export default function KpopWarriors({
  event,
  guest,
}: InvitationTemplateProps) {

  const details = event.details

  const childName = details?.quinceaneraName ?? ""

  const coverPhoto =
    event.photos.find((photo) => photo.isCover) ??
    event.photos[0]

  return (
    <InvitationTheme
      theme={event.theme}
      event={event}
    >
      <KpopWarriorsExperience>
        <main
          className="min-h-screen overflow-hidden"
          style={{
            backgroundColor: "var(--theme-background)",
            color: "var(--theme-text)",
          }}
        >

          {/* HERO */}

          <KpopWarriorsHero
            coverPhoto={coverPhoto}
            details={details}
            event={event}
          />

          {/* INTRO */}

          <KpopWarriorsIntro
            details={details}
          />

          {/* COUNTDOWN */}

          <section
            className="relative overflow-hidden px-6 py-2 text-center"
            style={{
              backgroundColor: "var(--theme-background)",
            }}
          >

            {/* <p
              className="text-xs uppercase tracking-[0.35em]"
              style={{
                color: "var(--theme-secondary)",
              }}
            >
              La cuenta regresiva comienza
            </p> */}

            {/* <h2
              className="mt-4 text-4xl font-serif sm:text-5xl"
              style={{
                color: "var(--theme-primary)",
              }}
            >
              Falta muy poco
            </h2> */}

            <div className="mt-1">
              <Countdown
                targetDate={event.eventDate.toISOString()}
              />
            </div>

          </section>

          {/* HORARIOS */}

          <InvitationSchedule event={event} />

          {/* UBICACIONES */}

          <InvitationLocations event={event} />

          {/* GALERÍA */}

          <InvitationGallery event={event} />

          {/* CIERRE */}

          <section
            className="relative overflow-hidden px-6 py-5 text-center"
            style={{
              backgroundColor: "var(--theme-primary)",
              color: "var(--theme-background)",
            }}
          >

            <p className="text-sm uppercase tracking-[0.35em] opacity-70">
              The stage is yours
            </p>

            <h2 className="mt-5 text-4xl font-serif sm:text-5xl">
              {childName}
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 opacity-80">
              Una noche especial, llena de música, sueños,
              brillo y momentos inolvidables.
            </p>

            <div className="mt-8 text-3xl">
              ✦ ✨ ✦
            </div>

          </section>

          {/* REGALOS */}

          {event.gifts.length > 0 && (
            <InvitationGifts
              gifts={event.gifts}
            />
          )}

          {/* MÚSICA */}

          {event.music && (
            <MusicPlayer
              videoId={event.music.url}
              title={event.music.title}
              artist={event.music.artist}
              autoplay={event.music.autoplay}
            />
          )}

        </main>

      </KpopWarriorsExperience>

    </InvitationTheme>
  )
}