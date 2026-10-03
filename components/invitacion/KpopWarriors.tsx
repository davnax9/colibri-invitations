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
import Image from "next/image"
import KpopWarriorsVipPass from "./kpop/KpopWarriorsVipPass"
import KpopWarriorsDressCode from "./kpop/KpopWarriorsDressCode"

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

          {/* VIP PASS */}

          <KpopWarriorsVipPass
            childName={childName}
            eventDate={event.eventDate}
            dressCode={details?.dressCode}
          />

          {/* COUNTDOWN */}

          <section
            className="relative overflow-hidden px-6 py-2 text-center"
            style={{
              backgroundColor: "var(--theme-background)",
            }}
          >
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

          {/* DRESS CODE */}

          <KpopWarriorsDressCode
            dressCode={details?.dressCode}
          />

          {/* ================================================= */}
          {/* CIERRE */}
          {/* ================================================= */}

          <section
            className="
              relative
              overflow-hidden
              px-6
              py-20
              text-center
            "
            style={{
              background:
                "radial-gradient(circle at 50% 20%, #5B1F68 0%, #29103F 35%, #100819 68%, #07050B 100%)",
              color: "#ffffff",
            }}
          >

            {/* ================================================= */}
            {/* GUERRERA CYAN DECORATIVA */}
            {/* ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-40
                bottom-[-100px]
                h-[560px]
                w-[390px]
                opacity-[0.12]

                sm:-right-28
                sm:h-[650px]
                sm:w-[450px]
                sm:opacity-[0.14]

                lg:-right-20
                lg:h-[720px]
                lg:w-[500px]
                lg:opacity-[0.16]
              "
              aria-hidden="true"
            >

              <Image
                src="/kpop/warriors/kpop2.png"
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="500px"
              />

            </div>

            {/* ================================================= */}
            {/* GLOW */}
            {/* ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-72
                w-72
                -translate-x-1/2
                rounded-full
                bg-fuchsia-500/20
                blur-3xl
              "
            />

            {/* ================================================= */}
            {/* AURORA CYAN */}
            {/* ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                top-1/3
                h-72
                w-72
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
            />

            {/* ================================================= */}
            {/* DESTELLOS */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute left-[12%] top-10 text-xl text-pink-300/60">
              ✦
            </div>

            <div className="pointer-events-none absolute right-[15%] top-16 text-lg text-cyan-300/60">
              ✧
            </div>

            <div className="pointer-events-none absolute bottom-12 left-[20%] text-sm text-cyan-300/40">
              ✦
            </div>

            {/* ================================================= */}
            {/* CONTENIDO */}
            {/* ================================================= */}

            <div className="relative z-10 mx-auto max-w-2xl">

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-pink-200/80
                "
              >
                Esta etapa es tuya
              </p>

              <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-pink-300/70 to-transparent" />

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  tracking-wide
                  text-white
                  drop-shadow-[0_0_20px_rgba(236,72,153,0.35)]
                  sm:text-5xl
                "
              >
                {childName}
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-purple-100/75
                "
              >
                Una noche especial, llena de música, sueños,
                brillo y momentos inolvidables.
              </p>

              <div className="mt-8 text-3xl text-pink-200">
                ✦ ✨ ✦
              </div>

              <p className="mt-6 text-[10px] uppercase tracking-[0.45em] text-cyan-200/60">
                guerreras K-POP 
              </p>

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