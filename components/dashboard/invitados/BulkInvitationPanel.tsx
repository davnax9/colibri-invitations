"use client"

import { useState } from "react"
import { generateInvitationMessage } from "@/utils/invitation-url"

type Guest = {
  id: string
  name: string
  passes: number
  token: string
  message: string | null
  phone: string | null
}

type Props = {
  guests: Guest[]
  slug: string
  messageTemplate?: string
  onClose: () => void
}

const DEFAULT_MESSAGE = `Hola {nombre} 👋

Nos encantaría contar contigo en este día tan especial.

Te compartimos nuestra invitación:

{link}

¡Esperamos verte! ❤️`

export default function BulkInvitationPanel({ guests,slug, messageTemplate,onClose}: Props) {
  const [sentGuests, setSentGuests] = useState<string[]>([])

  function getInvitationUrl(token: string) {
    return `${window.location.origin}/invitacion/${encodeURIComponent(slug)}/${encodeURIComponent(token)}`
  }

  function handleWhatsApp(guest: Guest) {
    const invitationUrl = getInvitationUrl(guest.token)

    const template = guest.message?.trim() || messageTemplate?.trim() || DEFAULT_MESSAGE

    const message = generateInvitationMessage({template, guestName: guest.name, passes: guest.passes, invitationUrl})

    const whatsappUrl = `https://wa.me/?${new URLSearchParams({text: message}).toString()}`

    window.open(whatsappUrl,"_blank","noopener,noreferrer"
    )

    setSentGuests((current) =>current.includes(guest.id)? current: [...current, guest.id])
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Enviar invitaciones</h2>
            <p className="mt-1 text-sm text-slate-500">{sentGuests.length} de {guests.length} invitaciones preparadas</p>
          </div>
          <button type="button" onClick={onClose} className="text-2xl text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>
        {/* LISTA */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-3">
            {guests.map((guest) => {
              const sent = sentGuests.includes(guest.id)
              return (
                <div key={guest.id} className="flex flex-col gap-4 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-800">{guest.name}</p>
                      {sent && (<span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">✓ Preparada</span>)}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {guest.passes}{" "}{guest.passes === 1 ? "pase" : "pases"}
                    </div>
                    {guest.phone && (
                      <div className="mt-1 text-xs text-slate-400">
                        {guest.phone}
                      </div>
                    )}
                    <div className="mt-2 text-xs">
                      {guest.message ? (<span className="text-blue-600">Mensaje personalizado</span>) : (<span className="text-slate-400">Mensaje general</span>)}
                    </div>
                  </div>
                  <button type="button" onClick={() => handleWhatsApp(guest)} className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700">
                    📱 WhatsApp
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        {/* FOOTER */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
          <p className="text-sm text-slate-500">{sentGuests.length === guests.length? "Todas las invitaciones fueron preparadas." : `Faltan ${guests.length - sentGuests.length} invitaciones.`}</p>
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}