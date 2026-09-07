"use client"

import { generateInvitationMessage } from "@/utils/invitation-url"
import { useState } from "react"
import GuestMessageModal from "./GuestMessageModal"

type Props = {
  guestId: string
  slug: string
  token: string
  guestName: string
  passes: number
  messageTemplate?: string
  currentMessage: string | null
  canCustomizeMessage: boolean
}

export default function GuestInvitationActions({
  guestId,
  slug,
  token,
  guestName,
  passes,
  messageTemplate,
  currentMessage,
  canCustomizeMessage,
}: Props) {
  const [copied, setCopied] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  // const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${slug}/${token}`  
  const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${encodeURIComponent(slug)}/${encodeURIComponent(token)}`

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(invitationUrl)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Error al copiar invitación:", error)
    }
  }

  function handleWhatsApp() {
    // const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${encodeURIComponent(slug)}/${encodeURIComponent(token)}`

    const template = currentMessage?.trim() || messageTemplate?.trim() ||
      `Hola {nombre} 👋

Nos encantaría contar contigo en este día tan especial.

Te compartimos nuestra invitación:

{link}

¡Esperamos verte! ❤️`

    const message = generateInvitationMessage({template,guestName, passes,invitationUrl})

    const whatsappUrl = `https://wa.me/?${new URLSearchParams({text: message}).toString()}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {/* VER */}
        <button type="button" onClick={() => {window.open(invitationUrl,"_blank","noopener,noreferrer")}} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700
            transition hover:bg-slate-50 active:scale-[0.98]"
        >
          Ver
        </button>
        {/* COPIAR */}
        <button type="button" onClick={handleCopy} className={`inline-flex min-h-10 items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-medium transition active:scale-[0.98]
            ${copied ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
        >
          {copied ? "✓ Copiado" : "Copiar"}
        </button>
        {/* WHATSAPP */}
        <button type="button" onClick={handleWhatsApp} className="inline-flex min-h-10 items-center justify-center rounded-lg bg-green-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-green-700 active:scale-[0.98]">
          WhatsApp
        </button>
        {/* MENSAJE */}
        {canCustomizeMessage ? (
          <button type="button" onClick={() => setMessageOpen(true)} className=" inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]">
            Mensaje
          </button>
        ) : (
          <div className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-400">
            Mensaje
          </div>
        )}
      </div>
      {messageOpen && (
        <GuestMessageModal guestId={guestId} guestName={guestName} passes={passes} currentMessage={currentMessage} defaultMessage={messageTemplate} invitationUrl={invitationUrl} onClose={() => setMessageOpen(false)}/>
      )}
    </>
  )
}