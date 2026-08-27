"use client"

import { useState } from "react"
import { saveGuestMessage } from "@/actions/event-actions"

type Props = {
  guestId: string
  guestName: string
  passes: number
  currentMessage: string | null
  defaultMessage?: string
  invitationUrl: string
  onClose: () => void
}

export default function GuestMessageModal({guestId, guestName, passes, currentMessage, defaultMessage = "", invitationUrl, onClose}: Props) {
  const [message, setMessage] = useState(currentMessage ?? defaultMessage)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function replaceVariables(text: string) {
    return text.replaceAll("{nombre}", guestName).replaceAll("{pases}", String(passes)).replaceAll("{link}", invitationUrl)
  }

  const previewMessage = replaceVariables(message)

  function insertVariable(variable: string) {
    setMessage((current) => `${current}${variable}`)
  }

  async function handleSave() {
    setLoading(true)
    setError("")
    setSuccess(false)

    const result = await saveGuestMessage({guestId,message})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)

    setTimeout(() => {
      onClose()
    }, 700)
  }

  async function handleDeleteCustomMessage() {
    setLoading(true)
    setError("")

    const result = await saveGuestMessage({guestId, message: ""})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setMessage(defaultMessage)
    setLoading(false)
    setSuccess(true)

    setTimeout(() => {
      onClose()
    }, 700)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">

        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Mensaje personalizado</h2>
            <p className="mt-1 text-sm text-slate-500">Personaliza el mensaje para {guestName}.</p>
          </div>
          <button type="button" onClick={onClose} disabled={loading} className="text-2xl text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>

        {/* EDITOR */}
        <div className="mt-6">
          <label htmlFor="guest-custom-message" className="mb-2 block text-sm font-medium text-slate-700">
            Mensaje
          </label>
          <textarea id="guest-custom-message" value={message} onChange={(event) => setMessage(event.target.value)} rows={12} className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
        </div>

        {/* VARIABLES */}
        <div className="mt-4">
          <p className="text-sm font-medium text-slate-700">Variables disponibles</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <VariableButton value="{nombre}" onClick={insertVariable}/>
            <VariableButton value="{pases}" onClick={insertVariable}/>
            <VariableButton value="{link}" onClick={insertVariable}/>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-700">Vista previa</p>
          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">{previewMessage}</p>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
            Mensaje actualizado correctamente.
          </div>
        )}

        {/* BUTTONS */}
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <button type="button" onClick={handleDeleteCustomMessage} disabled={loading || !currentMessage} className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40">
            Usar mensaje general
          </button>
          <div className="flex gap-3">
            <button type="button" onClick={onClose} disabled={loading} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
              Cancelar
            </button>
            <button type="button" onClick={handleSave} disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Guardando..." : "Guardar mensaje"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function VariableButton({ value, onClick}: {value: string, onClick: (value: string) => void}) {
  return (
    <button type="button" onClick={() => onClick(value)} className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50">
      {value}
    </button>
  )
}