
import { GiftType } from "@/utils/types"

import {
  GiftIcon,
  HeartIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"

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

const PINK = "#f9a8d4"
const LIGHT_PINK = "#fbcfe8"
const PURPLE = "#c4b5fd"

function getIcon(type: GiftType) {
  switch (type) {
    case "BANK_TRANSFER":
      return CreditCardIcon

    default:
      return GiftIcon
  }
}

function KuromiSkull({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 13 9 4l2 17M47 13l8-9-2 17"
        stroke="#c4b5fd"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 10c-13 0-22 9-22 21 0 9 5 15 11 18v7h22v-7c6-3 11-9 11-18 0-12-9-21-22-21Z"
        fill="#f9a8d4"
        stroke="#e879b9"
        strokeWidth="2"
      />
      <path
        d="M19 31c2-3 7-3 9 0M36 31c2-3 7-3 9 0"
        stroke="#30203e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="m32 36-3 4h6l-3-4Z"
        fill="#30203e"
      />
      <path
        d="M25 46v6m7-6v6m7-6v6"
        stroke="#30203e"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function KuromiBow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 42"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M29 20 7 5 3 28l25-4"
        fill="#d8b4fe"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m35 20 22-15 4 23-25-4"
        fill="#f9a8d4"
        stroke="#e879b9"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m32 15 5 6-5 6-5-6 5-6Z"
        fill="#fce7f3"
        stroke="#e879b9"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function KuromiGifts({ gifts }: Props) {
  if (!gifts.length) {
    return null
  }

  const sortedGifts = [...gifts].sort(
    (a, b) => a.order - b.order
  )

  return (
    <section className="relative isolate overflow-hidden bg-[#1b1426] px-6 py-20 text-center sm:px-10 md:py-28">

      {/* ILUMINACIÓN AMBIENTAL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 15%, rgba(168,85,247,0.15), transparent 55%),
            radial-gradient(ellipse at 10% 80%, rgba(236,72,153,0.08), transparent 45%),
            radial-gradient(ellipse at 90% 70%, rgba(139,92,246,0.08), transparent 45%)
          `,
        }}
      />

      {/* ESTRELLAS DECORATIVAS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(#f9a8d4 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* BRILLOS */}
      <div className="pointer-events-none absolute left-[8%] top-24 text-xl text-purple-300/40">
        ✦
      </div>
      <div className="pointer-events-none absolute right-[10%] top-40 text-2xl text-pink-300/40">
        ✧
      </div>
      <div className="pointer-events-none absolute bottom-32 left-[15%] text-lg text-pink-300/30">
        ✧
      </div>
      <div className="pointer-events-none absolute bottom-24 right-[12%] text-xl text-purple-300/40">
        ✦
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* MOÑO SUPERIOR */}
        <div className="mb-5 flex justify-center">
          <KuromiBow className="h-12 w-16 drop-shadow-[0_0_12px_rgba(249,168,212,0.3)]" />
        </div>

        {/* ORNAMENTO */}
        <div className="mb-7 flex items-center justify-center gap-4 text-pink-300/60">
          <span className="h-px w-12 bg-pink-300/40" />
          <span className="text-lg">✦</span>
          <span className="h-px w-12 bg-pink-300/40" />
        </div>

        {/* HEADER */}
        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-purple-300">
          Un detalle especial
        </p>

        <h2 className="mt-4 font-serif text-4xl text-pink-200 sm:text-5xl">
          Mesa de regalos
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-purple-100/65 sm:text-base">
          Tu presencia es el regalo más bonito. Pero si deseas
          sorprenderme con un detalle, aquí encontrarás algunas opciones.
        </p>

        {/* DIVISOR */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-purple-300/30" />
          <KuromiSkull className="h-9 w-9 opacity-80" />
          <span className="h-px w-10 bg-purple-300/30" />
        </div>

        {/* REGALOS */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2">

          {sortedGifts.map((gift) => {
            const Icon = getIcon(gift.type)

            return (
              <article
                key={gift.id}
                className="group relative overflow-hidden rounded-2xl border border-purple-300/20 bg-gradient-to-br from-[#30203e]/90 via-[#21162f]/95 to-[#191222]/95 px-6 py-9 shadow-[0_15px_45px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/40 hover:shadow-[0_15px_45px_rgba(236,72,153,0.10)]"
              >
                {/* BRILLO INTERIOR */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(249,168,212,0.10), transparent 65%)",
                  }}
                />

                {/* MOÑO */}
                <KuromiBow className="absolute right-4 top-3 h-7 w-10 opacity-50" />

                <div className="relative z-10">

                  {/* ICONO */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-pink-300/30 bg-pink-300/5 text-pink-200 shadow-[0_0_25px_rgba(249,168,212,0.08)]">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.3}
                    />
                  </div>

                  {/* TITULO */}
                  {gift.title && (
                    <h3 className="mt-6 font-serif text-2xl text-pink-100">
                      {gift.title}
                    </h3>
                  )}

                  {/* ORNAMENTO */}
                  <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-purple-300/60">
                    <span className="h-px w-8 bg-purple-300/30" />
                    <span className="text-xs">✧</span>
                    <span className="h-px w-8 bg-purple-300/30" />
                  </div>

                  {/* DESCRIPCIÓN */}
                  {gift.description && (
                    <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-purple-100/65">
                      {gift.description}
                    </p>
                  )}

                  {/* DATOS BANCARIOS */}
                  {gift.type === "BANK_TRANSFER" && (
                    <div className="mx-auto mt-6 max-w-sm space-y-3 rounded-xl border border-purple-300/15 bg-[#130c20]/50 px-4 py-4 text-xs text-purple-100/70">

                      {gift.accountName && (
                        <p>
                          <span className="font-semibold text-pink-200">
                            Titular:
                          </span>{" "}
                          {gift.accountName}
                        </p>
                      )}

                      {gift.accountNumber && (
                        <p className="break-all">
                          <span className="font-semibold text-pink-200">
                            Cuenta:
                          </span>{" "}
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
                      className="mt-7 inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-300/5 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-pink-200 transition-all hover:border-pink-200/60 hover:bg-pink-300/15 hover:text-white"
                    >
                      <GiftIcon className="h-4 w-4" />
                      {gift.type === "GIFT_TABLE"
                        ? "Ver mesa de regalos"
                        : "Ver más"}
                    </a>
                  )}

                </div>

                {/* CALAVERA INFERIOR */}
                <KuromiSkull className="absolute -bottom-2 -left-2 h-9 w-9 rotate-[-15deg] opacity-20" />
              </article>
            )
          })}

        </div>

        {/* MENSAJE FINAL */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-purple-100/60">
          <HeartIcon
            className="h-5 w-5 text-pink-300"
            strokeWidth={1.5}
          />

          <p className="text-xs tracking-wide">
            Gracias por ser parte de este momento tan especial
          </p>

          <div className="mt-2 flex items-center gap-3 text-pink-300/50">
            <span className="text-xs">✧</span>
            <span className="text-sm">♡</span>
            <span className="text-xs">✧</span>
          </div>
        </div>

      </div>
    </section>
  )
}
