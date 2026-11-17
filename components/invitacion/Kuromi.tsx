
import { InvitationTemplateProps } from "@/utils/types/invitation"

import Countdown from "./shared/Countdown"
import InvitationSchedule from "./shared/InvitationSchedule"
import InvitationLocations from "./shared/InvitationLocations"
import MusicPlayer from "./shared/MusicPlayer"
import InvitationGifts from "./shared/InvitationGifts"
import InvitationTheme from "./shared/InvitationTheme"
import ColibriBranding from "./shared/ColibriBranding"

import KuromiExperience from "./KuromiExperience"
import KuromiHero from "./kuromi/KuromiHero"
import KuromiIntro from "./kuromi/KuromiIntro"
import KuromiDecorations from "./kuromi/KuromiDecorations"

import ScrollReveal from "@/app/components/ui/ScrollReveal"
import KuromiCountdown from "./kuromi/KuromiCountdown"
import KuromiSchedule from "./kuromi/KuromiSchedule"

export default function Kuromi({
  event,
  guest,
}: InvitationTemplateProps) {
  const details = event.details
  const childName = details?.quinceaneraName ?? ""

  const coverPhoto =
    event.photos.find((photo) => photo.isCover) ??
    event.photos[0]

  return (
    <InvitationTheme theme={event.theme} event={event}>
      <KuromiExperience>
        <main
          className="min-h-screen overflow-hidden"
          style={{
            background: "#130f1d",
            color: "var(--theme-text)",
          }}
        >
          {/* HERO */}
          <ScrollReveal direction="left" delay={800} duration={700}>
            <KuromiHero
              details={details}
              event={event}
              coverPhoto={coverPhoto}
            />
          {/* </ScrollReveal> */}

          {/* INTRO */}
          {/* <ScrollReveal direction="right" delay={800} duration={700}> */}
            <KuromiIntro details={details} />
          </ScrollReveal>

          {/* COUNTDOWN KUROMI */}
          <ScrollReveal direction="left" delay={300} duration={700}>
            <KuromiCountdown
              targetDate={event.eventDate.toISOString()}
            />
          </ScrollReveal>

          {/* HORARIOS */}
          <ScrollReveal direction="right" delay={800} duration={700}>
            <KuromiSchedule event={event} />
          </ScrollReveal>

          {/* UBICACIONES */}
          {/* <ScrollReveal direction="left" delay={800} duration={700}>
            <InvitationLocations event={event} />
          </ScrollReveal> */}

          {/* CIERRE */}
          <ScrollReveal direction="right" delay={800} duration={700}>
            <section className="relative isolate overflow-hidden bg-[#1b1426] px-6 py-28 text-center">

              {/* ILUMINACIÓN AMBIENTAL */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(168,85,247,0.13),transparent_65%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(216,137,226,0.08),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(126,78,180,0.12),transparent_30%)]" />

              {/* BRILLO CENTRAL */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.06] blur-[100px]" />

              {/* DECORACIONES KUROMI */}
              <KuromiDecorations variant="background" />

              {/* DESTELLOS */}
              <div className="pointer-events-none absolute left-[10%] top-[20%] text-2xl text-pink-300/50">
                ✧
              </div>

              <div className="pointer-events-none absolute right-[12%] top-[25%] text-xl text-purple-300/60">
                ♡
              </div>

              <div className="pointer-events-none absolute bottom-[20%] left-[15%] text-xl text-fuchsia-300/40">
                ✦
              </div>

              <div className="pointer-events-none absolute bottom-[18%] right-[10%] text-2xl text-pink-300/40">
                ✧
              </div>

              {/* CONTENIDO */}
              <div className="relative z-10 mx-auto max-w-2xl">

                {/* ENCABEZADO */}
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-300">
                  Una noche para recordar
                </p>

                {/* SEPARADOR */}
                <div className="mx-auto my-7 flex items-center justify-center gap-4">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300/70 sm:w-20" />
                  <span className="text-xl text-pink-300">♡</span>
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300/70 sm:w-20" />
                </div>

                {/* NOMBRE */}
                <h2 className="break-words font-wedding text-5xl font-bold text-pink-300 drop-shadow-[0_0_22px_rgba(232,145,225,0.25)] sm:text-6xl md:text-7xl">
                  {childName}
                </h2>

                {/* MENSAJE */}
                <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-purple-100/80 sm:text-base">
                  Gracias por formar parte de este día tan especial.
                  Tu compañía hará que esta celebración sea todavía
                  más mágica e inolvidable.
                </p>

                {/* DETALLE DECORATIVO */}
                <div className="mt-10 flex items-center justify-center gap-5 text-2xl text-pink-300/80">
                  <span>✧</span>
                  <span>♡</span>
                  <span>✧</span>
                </div>

                {/* FIRMA */}
                <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.4em] text-purple-200/50">
                  Con cariño, {childName}
                </p>

              </div>
            </section>
          </ScrollReveal>

          {/* REGALOS */}
          {event.gifts.length > 0 && (
            <InvitationGifts gifts={event.gifts} />
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

          {/* MARCA COLIBRÍ */}
          <ColibriBranding />
        </main>
      </KuromiExperience>
    </InvitationTheme>
  )
}
