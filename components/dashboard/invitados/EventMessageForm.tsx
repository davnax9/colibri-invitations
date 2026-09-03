"use client"

import { saveEventMessage } from "@/actions/event-actions"
import { useState } from "react"

type Props = {
  eventId: string
  eventName: string
  initialMessage?: string
  exampleGuestName?: string
  examplePasses?: number
  exampleLink?: string
}

const DEFAULT_MESSAGE = `Hola {nombre} 👋

Nos encantaría contar contigo en este día tan especial.

Te compartimos nuestra invitación:

{link}

¡Esperamos verte! ❤️`

export default function EventMessageForm({eventId, eventName, initialMessage, exampleGuestName = "Juan Pérez", examplePasses = 2, exampleLink = "https://tudominio.com/invitacion/ejemplo"}: Props) {
  const [message, setMessage] = useState(initialMessage ?? DEFAULT_MESSAGE)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function replaceVariables(text: string) {
    return text.replaceAll("{nombre}", exampleGuestName).replaceAll("{pases}", String(examplePasses)).replaceAll("{link}", exampleLink)
  }

  const previewMessage = replaceVariables(message)

  function insertVariable(variable: string) {
    setMessage((current) => {
        return `${current}${variable}`
    })
   }

    async function handleSave() {
        setLoading(true)
        setError("")

        const result = await saveEventMessage({eventId, content: message})

        if (!result.success) {
            setError(result.error)
            setLoading(false)
            return
        }

        setLoading(false)
    }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* ENCABEZADO */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">Mensaje para invitados</h2>
        <p className="mt-1 text-sm text-slate-500">Personaliza el mensaje que utilizarás para compartir las invitaciones de {eventName}.</p>
      </div>
      {/* EDITOR */}
      <div className="mt-6">
        <label htmlFor="guest-message" className="mb-2 block text-sm font-medium text-slate-700">Mensaje</label>
        <textarea id="guest-message" value={message} onChange={(event) => setMessage(event.target.value)} rows={10}
          className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>
      {/* PREVISUALIZACIÓN */}
      <div className="mt-8">
        <p className="text-sm font-medium text-slate-700">Vista previa</p>
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">{previewMessage}</p>
        </div>
      </div>
      {error && (
        <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
        </div>
       )}
      {/* BOTÓN */}
      <div className="mt-6 flex justify-end">
        <button type="button" onClick={handleSave} disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? "Guardando..." : "Guardar mensaje"}
        </button>
      </div>
    </div>
  )
}

/* =========================================================
   VARIABLE BUTTON
========================================================= */

function VariableButton({value,onClick}: {value: string,onClick: (value: string) => void}) {
  return (
    <button type="button" onClick={() => onClick(value)} className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
      {value}
    </button>
  )
}