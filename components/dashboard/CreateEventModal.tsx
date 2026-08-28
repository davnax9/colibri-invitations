"use client"

import { FormEvent, useState } from "react"
import { createEvent } from "@/actions/event-actions"
import { toast } from "react-toastify"

type Template = {
  id: string
  name: string
  type: "WEDDING" | "QUINCEANOS"
}

type Props = {
  templates: Template[]
}

export default function CreateEventModal({ templates }: Props) {
  const [open, setOpen] = useState(false)

  const [name, setName] = useState("")
  const [type, setType] = useState<"WEDDING" | "QUINCEANOS">("WEDDING")
  const [eventDate, setEventDate] = useState("")
  const [templateId, setTemplateId] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const availableTemplates = templates.filter(
    (template) => template.type === type
  )

  function handleTypeChange(value: "WEDDING" | "QUINCEANOS") {
    setType(value)
    setTemplateId("")
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")

    const result = await createEvent({
      name,
      type,
      eventDate,
      templateId,
    })

    if (!result.success) {
        setError(result.error)
        toast.error(result.error)
        setLoading(false)
        return
    }

    setName("")
    setType("WEDDING")
    setEventDate("")
    setTemplateId("")

    setLoading(false)
    setOpen(false)

    toast.success("¡Evento creado correctamente!")
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
        + Nuevo evento
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">Nuevo evento</h2>
                <p className="mt-1 text-sm text-slate-500">Configura los datos básicos de tu evento.</p>
              </div>

              <button type="button" onClick={() => setOpen(false)} className="text-2xl text-slate-400 hover:text-slate-600">×</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Nombre del evento</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ana & Carlos" required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-slate-800 bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Tipo de evento</label>
                <select value={type} onChange={(event) => handleTypeChange(event.target.value as "WEDDING" | "QUINCEANOS")}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="WEDDING">Boda</option>
                  <option value="QUINCEANOS">Quinceaños</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Fecha del evento</label>
                <input type="date" value={eventDate} onChange={(event) => setEventDate(event.target.value)} required className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Diseño</label>
                <select value={templateId} onChange={(event) => setTemplateId(event.target.value)} required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="">Selecciona un diseño</option>
                  {availableTemplates.map((template) => (
                    <option key={template.id} value={template.id}>{template.name}</option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setOpen(false)} disabled={loading} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Cancelar
                </button>

                <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? "Creando..." : "Crear evento"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}