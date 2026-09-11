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

const GOLD = "#B89455"
const DARK_GOLD = "#8C6A36"

function getIcon(type: GiftType) {

  switch (type) {

    case "BANK_TRANSFER":
      return CreditCardIcon

    default:
      return GiftIcon
  }
}

export default function InvitationGifts({
  gifts,
}: Props) {

  if (!gifts.length) {
    return null
  }

  const sortedGifts = [...gifts].sort(
    (a, b) => a.order - b.order
  )

  return (
    <section
      className="relative overflow-hidden px-6 py-24 text-center sm:px-10 md:py-32"
      style={{
        backgroundColor:
          "var(--theme-background)",
      }}
    >

      {/* BRILLO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(216,192,138,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">

        {/* ORNAMENTO */}

        <div
          className="mb-7 flex items-center justify-center gap-4"
          style={{
            color: GOLD,
          }}
        >

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

          <span className="text-lg">
            ✦
          </span>

          <span
            className="h-px w-12"
            style={{
              backgroundColor: GOLD,
              opacity: 0.4,
            }}
          />

        </div>


        {/* HEADER */}

        <p
          className="text-[10px] uppercase tracking-[0.45em]"
          style={{
            color: DARK_GOLD,
          }}
        >
          Mesa de regalos
        </p>

        <h2
          className="mt-4 font-serif text-4xl sm:text-5xl"
          style={{
            color: "var(--theme-primary)",
          }}
        >
          Un detalle para nosotros
        </h2>

        <p
          className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7"
          style={{
            color: "var(--theme-secondary)",
          }}
        >
          Tu presencia es lo más importante.
          Si deseas tener un detalle,
          aquí encontrarás algunas opciones.
        </p>


        {/* LINEA */}

        <div
          className="mx-auto mt-8 h-px w-20"
          style={{
            backgroundColor: GOLD,
            opacity: 0.45,
          }}
        />


        {/* REGALOS */}

        <div className="mt-14 grid gap-12 sm:grid-cols-2">

          {sortedGifts.map((gift) => {

            const Icon = getIcon(gift.type)

            return (
              <article
                key={gift.id}
                className="relative px-6 py-8"
              >

                {/* ICONO */}

                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border"
                  style={{
                    borderColor:
                      "rgba(184,148,85,0.50)",
                    color: GOLD,
                  }}
                >

                  <Icon
                    className="h-6 w-6"
                    strokeWidth={1.2}
                  />

                </div>


                {/* TITULO */}

                {gift.title && (
                  <h3
                    className="mt-6 font-serif text-2xl"
                    style={{
                      color:
                        "var(--theme-primary)",
                    }}
                  >
                    {gift.title}
                  </h3>
                )}


                {/* ORNAMENTO */}

                <div
                  className="mx-auto mt-4 flex items-center justify-center gap-3"
                  style={{
                    color: GOLD,
                  }}
                >

                  <span
                    className="h-px w-8"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.3,
                    }}
                  />

                  <span className="text-xs">
                    ❦
                  </span>

                  <span
                    className="h-px w-8"
                    style={{
                      backgroundColor: GOLD,
                      opacity: 0.3,
                    }}
                  />

                </div>


                {/* DESCRIPCIÓN */}

                {gift.description && (
                  <p
                    className="mx-auto mt-5 max-w-sm text-sm leading-7"
                    style={{
                      color:
                        "var(--theme-secondary)",
                    }}
                  >
                    {gift.description}
                  </p>
                )}


                {/* DATOS BANCARIOS */}

                {gift.type === "BANK_TRANSFER" && (
                  <div
                    className="mx-auto mt-5 max-w-sm space-y-2 border-y py-4 text-xs"
                    style={{
                      borderColor:
                        "rgba(184,148,85,0.20)",
                      color:
                        "var(--theme-secondary)",
                    }}
                  >

                    {gift.accountName && (
                      <p>
                        <span
                          style={{
                            color: DARK_GOLD,
                          }}
                        >
                          Titular:
                        </span>{" "}
                        {gift.accountName}
                      </p>
                    )}

                    {gift.accountNumber && (
                      <p>
                        <span
                          style={{
                            color: DARK_GOLD,
                          }}
                        >
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
                    className="mt-6 inline-flex items-center gap-2 border-b pb-2 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                    style={{
                      color: DARK_GOLD,
                      borderColor:
                        "rgba(184,148,85,0.45)",
                    }}
                  >
                    {gift.type === "GIFT_TABLE"
                      ? "Ver mesa de regalos"
                      : "Ver más"}
                  </a>
                )}

              </article>
            )
          })}

        </div>


        {/* FINAL */}

        <div
          className="mt-12 flex items-center justify-center gap-3 text-xs"
          style={{
            color: "var(--theme-secondary)",
          }}
        >

          <HeartIcon
            className="h-4 w-4"
            style={{
              color: GOLD,
            }}
          />

          <span>
            Gracias por ser parte de este momento
          </span>

        </div>

      </div>

    </section>
  )
}