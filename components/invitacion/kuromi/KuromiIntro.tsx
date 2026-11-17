
import { InvitationTemplateProps } from "@/utils/types/invitation"
import KuromiDecorations from "./KuromiDecorations"

type Props = {
  details: InvitationTemplateProps["event"]["details"]
}

export default function KuromiIntro({ details }: Props) {
  const childName = details?.quinceaneraName ?? ""

  return (
    <section className="relative isolate overflow-hidden bg-[#1b1426] px-6 pb-28 pt-20 text-center">

      <KuromiDecorations variant="corners" />

      {/* ILUMINACIÓN AMBIENTAL SUAVE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(168,85,247,0.12),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-2xl">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-pink-200/30 bg-fuchsia-300/10 text-3xl text-pink-200 shadow-[0_0_25px_rgba(244,114,182,0.12)]">
          ♡
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-purple-300">
          Un día para celebrar
        </p>

        <h2 className="mt-5 font-serif text-4xl text-white sm:text-5xl">
          ¡Quiero compartirlo contigo!
        </h2>

        <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

        <p className="text-base leading-9 text-purple-100/80 sm:text-lg">
          Hoy comienza una etapa llena de sueños, aventuras y nuevas
          experiencias. Quiero celebrar este momento rodeada de las
          personas que más quiero.
        </p>

        <p className="mt-6 font-serif text-2xl italic text-pink-200">
          Tu compañía hará esta noche inolvidable.
        </p>

        <div className="mt-10 flex justify-center gap-5 text-2xl text-pink-300/80">
          <span>✧</span>
          <span>♡</span>
          <span>✧</span>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-purple-200/50">
          Con cariño, {childName}
        </p>
      </div>
    </section>
  )
}
