
import Image from "next/image"
import { InvitationTemplateProps } from "@/utils/types/invitation"
import KuromiDecorations from "./KuromiDecorations"

type Props = {
  details: InvitationTemplateProps["event"]["details"]
  event: InvitationTemplateProps["event"]
  coverPhoto: InvitationTemplateProps["event"]["photos"][number] | undefined
}

export default function KuromiHero({
  details,
  event,
  coverPhoto,
}: Props) {
  const childName = details?.quinceaneraName ?? ""

  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(event.eventDate)

  return (
    <section className="relative isolate flex min-h-[90svh] items-center justify-center overflow-hidden bg-[#130f1d] px-5 pb-20 pt-24 text-center">

      <KuromiDecorations />

      {/* ILUMINACIÓN SUPERIOR */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(126,34,206,0.24),transparent_65%)]" />

      {/* TRANSICIÓN INFERIOR HACIA INTRO */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#171020]/70 to-[#1b1426]" />

      {/* MARCOS CIRCULARES */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85vw,550px)] w-[min(85vw,550px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/15" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,440px)] w-[min(70vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300/10" />

      <div className="relative z-10 mx-auto max-w-3xl">

        <p className="text-xs font-bold uppercase tracking-[0.4em] text-pink-200">
          Una celebración especial
        </p>

        {/* FOTOGRAFÍA */}
        <div className="relative mx-auto my-8 h-56 w-56 sm:h-72 sm:w-72">
          <div className="absolute -inset-3 rounded-full border border-pink-200/40" />

          <div className="absolute -inset-6 rounded-full border border-violet-200/15" />

          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#b994d5]/70 bg-gradient-to-br from-purple-700 to-fuchsia-900 shadow-[0_0_60px_rgba(192,132,252,0.25)]">
            {coverPhoto ? (
              <Image
                src={coverPhoto.url}
                alt={`Fotografía de ${childName}`}
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-7xl text-pink-200">♡</span>
              </div>
            )}
          </div>

          <span className="absolute -right-5 top-8 text-3xl text-pink-200">✦</span>
          <span className="absolute -bottom-2 left-0 text-3xl text-violet-200">✧</span>
        </div>

        <p className="font-serif text-2xl italic text-purple-100/80">
          Estás invitado a celebrar a
        </p>

        <h1 className="mt-4 break-words font-wedding text-6xl font-semibold tracking-wide text-pink-400 drop-shadow-[0_0_20px_rgba(216,180,254,0.35)] sm:text-7xl">
          {childName}
        </h1>

        <div className="my-7 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-purple-300/50" />
          <span className="text-3xl text-pink-300">✦</span>
          <span className="h-px w-12 bg-purple-300/50" />
        </div>

        <p className="font-serif text-3xl text-pink-200 sm:text-4xl">
          Mis cumpleaños
        </p>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-purple-100/70">
          {formattedDate}
        </p>

        <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-purple-100/70">
          Una noche llena de magia, diversión y momentos inolvidables.
          ¡Me encantará compartirla contigo!
        </p>

        <div className="mt-10 text-2xl tracking-[0.5em] text-fuchsia-200/70">
          ♡ ✧ ♡
        </div>
      </div>
    </section>
  )
}
