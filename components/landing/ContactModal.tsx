"use client"

import { FormEvent, useState } from "react"

type Props = {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [plan, setPlan] = useState<"BASIC" | "PRO">("PRO")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    const adminWhatsapp = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP

    if (!adminWhatsapp) {
      setLoading(false)
      return
    }

    const whatsappMessage = `
Hola, quiero información sobre Colibrí Invitaciones. 👋

👤 Nombre: ${name}
📧 Correo: ${email}
📱 Teléfono: ${phone || "No proporcionado"}
⭐ Plan de interés: ${plan}

💬 Mensaje:
${message || "Me gustaría recibir más información sobre el servicio."}
`.trim()

    const whatsappUrl = `https://wa.me/${adminWhatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    )

    setLoading(false)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#263832]/60 px-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* HEADER */}

        <div className="relative overflow-hidden bg-[#2F5D50] px-6 py-6 text-white">

          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#8FA89D]/20" />

          <div className="relative flex items-start justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E3DE]">
                Contáctanos
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Hagamos realidad tu invitación
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#D7E3DE]">
                Cuéntanos un poco sobre lo que necesitas y nos pondremos
                en contacto contigo.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20"
            >
              ×
            </button>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >

          {/* NOMBRE */}

          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-[#263832]"
            >
              Nombre
            </label>

            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder="Tu nombre"
              className="w-full rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>

          {/* CORREO */}

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-[#263832]"
            >
              Correo electrónico
            </label>

            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="correo@ejemplo.com"
              className="w-full rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>

          {/* TELEFONO */}

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-[#263832]"
            >
              Teléfono
              <span className="ml-1 font-normal text-[#8A9A8F]">
                (opcional)
              </span>
            </label>

            <input
              id="contact-phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="10 dígitos"
              className="w-full rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>

          {/* PLAN */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#263832]">
              ¿Qué plan te interesa?
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() => setPlan("BASIC")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  plan === "BASIC"
                    ? "border-[#2F5D50] bg-[#2F5D50]/10 text-[#2F5D50]"
                    : "border-[#DCE4DF] bg-white text-[#687A72] hover:bg-[#FAF8F3]"
                }`}
              >
                BASIC
              </button>

              <button
                type="button"
                onClick={() => setPlan("PRO")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  plan === "PRO"
                    ? "border-[#2F5D50] bg-[#2F5D50]/10 text-[#2F5D50]"
                    : "border-[#DCE4DF] bg-white text-[#687A72] hover:bg-[#FAF8F3]"
                }`}
              >
                PRO
              </button>

            </div>
          </div>

          {/* MENSAJE */}

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-[#263832]"
            >
              ¿En qué podemos ayudarte?
            </label>

            <textarea
              id="contact-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={3}
              placeholder="Cuéntanos sobre tu evento..."
              className="w-full resize-none rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>

          {/* BOTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#2F5D50] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2F5D50]/15 transition hover:-translate-y-0.5 hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Preparando..."
              : "Continuar por WhatsApp →"}
          </button>

          <p className="text-center text-xs leading-5 text-[#8A9A8F]">
            Al continuar se abrirá WhatsApp para que podamos atender
            personalmente tu solicitud.
          </p>

        </form>

      </div>
    </div>
  )
}