
import Image from "next/image"
import BotanicalBackground from "@/components/invitacion/shared/BotanicalBackground"

type Props = {
  coverPhoto?: {
    url: string
    title: string | null
  }
  details: {
    title: string | null
    subtitle: string | null
    phrase: string | null
    groomName: string | null
    brideName: string | null
  } | null
  event: {
    name: string
    eventDate: Date
  }
}

export default function WeddingMinimalHeroHelen({
  coverPhoto,
  details,
  event,
}: Props) {
  const brideName = details?.brideName ?? ""
  const groomName = details?.groomName ?? ""

  return (
    <section
      className="relative overflow-hidden px-6 py-2"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <BotanicalBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col">
        {/* NOMBRES */}
        <div className="mt-2 text-center">
          <h1
            className="text-5xl font-wedding font-light tracking-tight md:text-8xl"
            style={{ color: "var(--theme-primary)" }}
          >
            {brideName}
          </h1>

          <p
            className="my-2 text-2xl font-wedding"
            style={{ color: "var(--theme-accent)" }}
          >
            &
          </p>

          <h1
            className="text-5xl font-wedding font-light tracking-tight md:text-8xl"
            style={{ color: "var(--theme-primary)" }}
          >
            {groomName}
          </h1>
        </div>

        {/* FOTO */}
        {coverPhoto && (
          <div className="mx-auto mt-8 w-full max-w-2xl">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={coverPhoto.url}
                alt={coverPhoto.title ?? event.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* FRASE */}
        {details?.phrase && (
          <p
            className="mx-auto mt-8 max-w-xl text-center text-sm leading-7"
            style={{ color: "var(--theme-secondary)" }}
          >
            {details.phrase}
          </p>
        )}

        <div
          className="mx-auto mt-8 h-px w-12"
          style={{ backgroundColor: "var(--theme-accent)" }}
        />
      </div>
    </section>
  )
}
