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

export default function GuestInvitationActions({guestId, slug, token, guestName, passes, messageTemplate, currentMessage, canCustomizeMessage}: Props) {
  const [copied, setCopied] = useState(false)
  const [messageOpen, setMessageOpen] = useState(false)

  const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${slug}/${token}`

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(invitationUrl)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)

    } catch (error) {
      console.error("Error al copiar invitación:",error)
    }
  }

  function handleWhatsApp() {
    // const invitationUrl = `${window.location.origin}/invitacion/${encodeURIComponent(slug)}/${encodeURIComponent(token)}`
    const invitationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invitacion/${encodeURIComponent(slug)}/${encodeURIComponent(token)}`

    const template = currentMessage?.trim() || messageTemplate?.trim() ||
      `Hola {nombre} 👋

      Nos encantaría contar contigo en este día tan especial.

      Te compartimos nuestra invitación:

      {link}

      ¡Esperamos verte! ❤️`

    console.log("TEMPLATE FINAL:", template)

    const message = generateInvitationMessage({template, guestName, passes, invitationUrl})

    console.log("MENSAJE FINAL WHATSAPP:", message)

    const whatsappUrl = `https://wa.me/?${new URLSearchParams({text: message}).toString()}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => {window.open(invitationUrl,"_blank","noopener,noreferrer")}} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
            Ver
          </button>

          <button type="button" onClick={handleCopy} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
            {copied ? "✓ Copiado" : "Copiar"}
          </button>

          <button type="button" onClick={handleWhatsApp} className="rounded-lg bg-green-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-green-700">
            WhatsApp
          </button>

          {canCustomizeMessage ? (
            <button type="button" onClick={() => setMessageOpen(true)} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
              Mensaje
            </button>
          ) : (
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-400">Mensaje base</span>
          )}
        </div>

        {messageOpen && (
          <GuestMessageModal guestId={guestId} guestName={guestName} passes={passes} currentMessage={currentMessage} defaultMessage={messageTemplate} invitationUrl={invitationUrl}
            onClose={() => setMessageOpen(false)}
          />
        )}
    </>
  )
}