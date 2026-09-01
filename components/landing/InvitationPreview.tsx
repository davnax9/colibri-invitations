import Link from "next/link"

interface InvitationPreviewProps {
  slug: string
}

export default function InvitationPreview({
  slug,
}: InvitationPreviewProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">

      {/* Glow detrás del teléfono */}
      <div className="absolute -inset-8 rounded-[4rem] bg-[#2F5D50]/10 blur-3xl" />

      {/* TELÉFONO */}
      <div className="relative mx-auto w-70 rounded-[2.8rem] border-8 border-[#263832] bg-[#263832] p-1 shadow-2xl shadow-[#263832]/20 sm:w-75">

        {/* Cámara / notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#263832]" />

        {/* Pantalla */}
        <div className="relative h-145 overflow-hidden rounded-[2.2rem] bg-white">

          <iframe
            src={`/invitacion/${slug}`}
            title="Vista previa de invitación"
            className="h-full w-full border-0"
          />

        </div>
      </div>

      {/* TEXTO DEL PREVIEW */}
      <div className="relative mt-6 text-center">

        <p className="text-sm font-medium text-[#687A72]">
          Así se verá tu invitación
        </p>

        <Link
          href={`/invitacion/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center text-sm font-semibold text-[#2F5D50] transition hover:text-[#244A40]"
        >
          Ver invitación completa
          <span className="ml-1">→</span>
        </Link>

      </div>
    </div>
  )
}