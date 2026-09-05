"use client"

import { FormEvent, useState } from "react"

type Props = {
  onClose: () => void
}

export default function PasswordRecoveryModal({onClose}: Props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
Hola, necesito ayuda para recuperar mi contraseña de Colibrí Invitaciones. 🔐

👤 Nombre: ${name || "No proporcionado"}
📧 Correo de la cuenta: ${email}

Solicito apoyo para recuperar el acceso a mi cuenta.
`.trim()

    const whatsappUrl =`https://wa.me/${adminWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl,"_blank","noopener,noreferrer")

    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#263832]/60 px-4 backdrop-blur-sm" onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="relative overflow-hidden bg-[#2F5D50] px-6 py-6 text-white">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A86A]/20" />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">
                🔐
              </div>
              <h2 className="mt-4 text-2xl font-bold">Recuperar acceso</h2>
              <p className="mt-2 text-sm leading-6 text-[#D7E3DE]">Proporciónanos tu correo y te ayudaremos a recuperar el acceso a tu cuenta.</p>
            </div>
            <button type="button" onClick={onClose} className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-white/20">
              ×
            </button>
          </div>
        </div>
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label htmlFor="recovery-name" className="mb-2 block text-sm font-semibold text-[#263832]">Nombre</label>
            <input id="recovery-name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Tu nombre" className="w-full rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"/>
          </div>
          <div>
            <label htmlFor="recovery-email" className="mb-2 block text-sm font-semibold text-[#263832]">Correo de tu cuenta</label>
            <input id="recovery-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" placeholder="correo@ejemplo.com"
              className="w-full rounded-xl border border-[#DCE4DF] bg-[#FAF8F3] px-4 py-3 text-sm text-[#263832] outline-none transition placeholder:text-[#A0ADA7] focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>
          <div className="rounded-2xl bg-[#FAF8F3] p-4">
            <p className="text-sm font-semibold text-[#263832]">¿Qué sucederá?</p>
            <p className="mt-1 text-xs leading-5 text-[#687A72]">Se abrirá WhatsApp para solicitar asistencia. Nuestro administrador podrá verificar tu cuenta y ayudarte a recuperar el acceso.</p>
          </div>
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#2F5D50] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2F5D50]/15 transition hover:-translate-y-0.5 hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Preparando..." : "Solicitar ayuda por WhatsApp →"}
          </button>
        </form>
      </div>
    </div>
  )
}