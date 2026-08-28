import { GiftType } from "@/utils/types"
import { GiftIcon, HeartIcon } from "@heroicons/react/24/outline"

type Gift = {
  id: string
  type: GiftType
  title: string | null
  description: string | null
  url: string | null
  accountName: string | null
  accountNumber: string | null
  order: number
}

type Props = {
  gifts: Gift[]
}

const icons: Record<GiftType, string> = {
  ENVELOPE: "💌",
  PHYSICAL_GIFT: "🎁",
  GIFT_TABLE: "🛍️",
  BANK_TRANSFER: "💳",
  CUSTOM: "✨",
}

export default function InvitationGifts({ gifts }: Props) {
  if (!gifts.length) {
    return null
  }

  return (
    <section
      className="px-6 py-16 text-center"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <div className="mx-auto max-w-4xl">

        {/* ICONO */}
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/5">
          <GiftIcon
            className="h-5 w-5"
            style={{
              color: "var(--theme-primary)",
            }}
          />
        </div>

        {/* ENCABEZADO */}
        <p
          className="mt-4 text-xs uppercase tracking-[0.3em]"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Mesa de regalos
        </p>

        <h2
          className="mt-2 text-3xl font-serif"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Un detalle para nosotros
        </h2>

        <p
          className="mx-auto mt-3 max-w-xl text-sm leading-6 opacity-70"
          style={{
            color: "var(--theme-text)",
          }}
        >
          Tu presencia es lo más importante para nosotros.
          Si deseas tener un detalle, aquí encontrarás algunas opciones.
        </p>

        {/* REGALOS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[...gifts]
            .sort((a, b) => a.order - b.order)
            .map((gift) => (
              <div
                key={gift.id}
                className="flex flex-col items-center rounded-2xl border border-black/5 bg-white/50 px-5 py-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >

                {/* ICONO */}
                <div className="text-2xl">
                  {icons[gift.type]}
                </div>

                {/* TITULO */}
                {gift.title && (
                  <h3
                    className="mt-2 text-base font-semibold"
                    style={{
                      color: "var(--theme-primary)",
                    }}
                  >
                    {gift.title}
                  </h3>
                )}

                {/* DESCRIPCIÓN */}
                {gift.description && (
                  <p
                    className="mt-1 max-w-sm text-xs leading-5 opacity-70"
                    style={{
                      color: "var(--theme-text)",
                    }}
                  >
                    {gift.description}
                  </p>
                )}

                {/* DATOS BANCARIOS */}
                {gift.type === "BANK_TRANSFER" && (
                  <div
                    className="mt-3 space-y-1 text-xs"
                    style={{
                      color: "var(--theme-text)",
                    }}
                  >
                    {gift.accountName && (
                      <p>
                        <strong>Titular:</strong>{" "}
                        {gift.accountName}
                      </p>
                    )}

                    {gift.accountNumber && (
                      <p>
                        <strong>Cuenta:</strong>{" "}
                        {gift.accountNumber}
                      </p>
                    )}
                  </div>
                )}

                {/* BOTÓN */}
                {gift.url && (
                  <a
                    href={gift.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                    style={{
                      backgroundColor: "var(--theme-primary)",
                    }}
                  >
                    {gift.type === "GIFT_TABLE"
                      ? "Ver mesa de regalos"
                      : "Ver más"}
                  </a>
                )}
              </div>
            ))}
        </div>

        {/* MENSAJE FINAL */}
        <div
          className="mt-8 flex items-center justify-center gap-2 text-xs opacity-60"
          style={{
            color: "var(--theme-text)",
          }}
        >
          <HeartIcon className="h-4 w-4" />
          <span>Gracias por ser parte de este momento</span>
        </div>

      </div>
    </section>
  )
}