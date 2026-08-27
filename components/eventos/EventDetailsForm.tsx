"use client"

import { FormEvent, useState } from "react"
import { saveEventDetails } from "@/actions/event-actions"

type EventDetails = {
  groomName: string | null
  brideName: string | null
  quinceaneraName: string | null
  phrase: string | null
  description: string | null
  dressCode: string | null
}

type Props = {
  eventId: string
  eventType: "WEDDING" | "QUINCEANOS"
  details: EventDetails | null
}

export default function EventDetailsForm({eventId,eventType,details}: Props) {
  const [groomName, setGroomName] = useState(details?.groomName ?? "")
  const [brideName, setBrideName] = useState(details?.brideName ?? "")
  const [quinceaneraName, setQuinceaneraName] = useState(details?.quinceaneraName ?? "")
  const [phrase, setPhrase] = useState(details?.phrase ?? "")
  const [description, setDescription] = useState(details?.description ?? "")
  const [dressCode, setDressCode] = useState(details?.dressCode ?? "")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setMessage("")
    setError("")

    const result = await saveEventDetails({
      eventId,
      groomName,
      brideName,
      quinceaneraName,
      phrase,
      description,
      dressCode,
    })

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setMessage("Información guardada correctamente")
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {eventType === "WEDDING" ? (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre del novio</label>
            <input type="text" value={groomName} onChange={(e) => setGroomName(e.target.value)} placeholder="Carlos" className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre de la novia</label>
            <input type="text" value={brideName} onChange={(e) => setBrideName(e.target.value)} placeholder="Ana" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>
        </>
      ) : (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Nombre de la quinceañera</label>
          <input type="text" value={quinceaneraName} onChange={(e) => setQuinceaneraName(e.target.value)} placeholder="María" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Frase</label>
        <textarea value={phrase} onChange={(e) => setPhrase(e.target.value)} rows={3} placeholder="El amor no consiste en mirarse el uno al otro..."
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Descripción</label>
        <textarea value={description} onChange={(e) =>setDescription(e.target.value)} rows={4} placeholder="Queremos compartir este momento tan especial contigo..."
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Código de vestimenta</label>
        <input type="text" value={dressCode} onChange={(e) => setDressCode(e.target.value)} placeholder="Formal" className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
          {message}
        </div>
      )}

      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Guardando..." : "Guardar cambios"}
        </button>
      </div>
    </form>
  )
}