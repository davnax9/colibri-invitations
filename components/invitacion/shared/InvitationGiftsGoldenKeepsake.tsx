
"use client"

import type { GiftType } from "@/utils/types"
import {
  GiftIcon,
  HeartIcon,
  CreditCardIcon,
  ArrowUpRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"
import BotanicalBackground from "./BotanicalBackground"

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
  gifts?: Gift[] | null
}

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"
const LIGHT_GOLD = "#D8C08A"

function getIcon(type: GiftType) {
  return type === "BANK_TRANSFER" ? CreditCardIcon : GiftIcon
}

function getGiftLabel(type: GiftType) {
  switch (type) {
    case "BANK_TRANSFER":
      return "Transferencia"
    case "GIFT_TABLE":
      return "Mesa de regalos"
    default:
      return "Detalle especial"
  }
}

export default function InvitationGiftsGoldenKeepsake({
  gifts,
}: Props) {
  if (!gifts?.length) return null

  const orderedGifts = [...gifts].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  )

  return (
    <section
      className="relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-14"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-primary)",
      }}
    >
      <BotanicalBackground />

      {/* Brillos ambientales */}
      <div
        className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: `${GOLD}15` }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: `${LIGHT_GOLD}20` }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Encabezado compacto */}
        <div className="mb-7 text-center sm:mb-9">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span
              className="h-px w-7"
              style={{ backgroundColor: GOLD }}
            />
            <SparklesIcon
              className="h-4 w-4"
              style={{ color: GOLD }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.25em]"
              style={{ color: DARK_GOLD }}
            >
              Con cariño
            </span>
            <SparklesIcon
              className="h-4 w-4"
              style={{ color: GOLD }}
            />
            <span
              className="h-px w-7"
              style={{ backgroundColor: GOLD }}
            />
          </div>

          <p
            className="mb-1 text-[10px] uppercase tracking-[0.3em] sm:text-xs"
            style={{ color: DARK_GOLD }}
          >
            Mesa de regalos
          </p>

          <h2
            className="font-serif text-2xl font-normal sm:text-3xl"
            style={{ color: "var(--theme-primary)" }}
          >
            Un detalle para nosotros
          </h2>

          <p
            className="mx-auto mt-2 max-w-md text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--theme-secondary)" }}
          >
            Lo más importante es compartir este día contigo.
            Si deseas obsequiarnos algo, aquí encontrarás algunas opciones.
          </p>
        </div>

        {/* Tarjetas compactas */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {orderedGifts.map((gift, index) => {
            const Icon = getIcon(gift.type)

            return (
              <article
                key={gift.id}
                className="relative overflow-hidden rounded-sm border px-4 py-4 sm:px-5 sm:py-5"
                style={{
                  borderColor: `${GOLD}75`,
                  backgroundColor: "var(--theme-background)",
                }}
              >
                {/* Esquinas decorativas sutiles */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t"
                  style={{ borderColor: GOLD }}
                />
                <span
                  className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t"
                  style={{ borderColor: GOLD }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l"
                  style={{ borderColor: GOLD }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r"
                  style={{ borderColor: GOLD }}
                />

                <div className="flex items-start gap-3">
                  {/* Icono pequeño */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: `${GOLD}80`,
                      color: DARK_GOLD,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span
                        className="text-[9px] uppercase tracking-[0.16em]"
                        style={{ color: DARK_GOLD }}
                      >
                        {getGiftLabel(gift.type)}
                      </span>

                      <span
                        className="text-[9px]"
                        style={{ color: GOLD }}
                      >
                        ✦ {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3
                      className="font-serif text-base leading-snug sm:text-lg"
                      style={{ color: "var(--theme-primary)" }}
                    >
                      {gift.title}
                    </h3>

                    {gift.description && (
                      <p
                        className="mt-1 text-xs leading-relaxed"
                        style={{ color: "var(--theme-secondary)" }}
                      >
                        {gift.description}
                      </p>
                    )}

                    {gift.type === "BANK_TRANSFER" &&
                      (gift.accountName || gift.accountNumber) && (
                        <div
                          className="mt-3 space-y-1 border-t pt-2 text-xs"
                          style={{
                            borderColor: `${GOLD}45`,
                            color: "var(--theme-secondary)",
                          }}
                        >
                          {gift.accountName && (
                            <p className="break-words">
                              <span style={{ color: DARK_GOLD }}>
                                Titular:
                              </span>{" "}
                              {gift.accountName}
                            </p>
                          )}

                          {gift.accountNumber && (
                            <p className="break-words">
                              <span style={{ color: DARK_GOLD }}>
                                Cuenta:
                              </span>{" "}
                              {gift.accountNumber}
                            </p>
                          )}
                        </div>
                      )}

                    {gift.url && (
                      <a
                        href={gift.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-9 items-center gap-2 border px-3 py-2 text-[10px] uppercase tracking-[0.12em] transition-opacity hover:opacity-75"
                        style={{
                          borderColor: GOLD,
                          backgroundColor: GOLD,
                          color: "var(--theme-background)",
                        }}
                      >
                        Ver opción
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Cierre más discreto */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
          <span
            className="h-px w-8"
            style={{ backgroundColor: `${GOLD}80` }}
          />
          <HeartIcon
            className="h-4 w-4"
            style={{ color: GOLD }}
          />
          <p
            className="text-center text-[10px] italic sm:text-xs"
            style={{ color: "var(--theme-secondary)" }}
          >
            Gracias por ser parte de este momento
          </p>
          <span
            className="h-px w-8"
            style={{ backgroundColor: `${GOLD}80` }}
          />
        </div>
      </div>
    </section>
  )
}
