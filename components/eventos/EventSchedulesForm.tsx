"use client"

import { FormEvent, useState } from "react"
import { createEventSchedule } from "@/actions/event-actions"

type Location = {
  id: string
  name: string
}

type Schedule = {
  id: string
  title: string
  date: Date
  time: string | null
  description: string | null
  locationId: string | null
  location: Location | null
}

type Props = {
  eventId: string
  eventDate: Date
  locations: Location[]
  schedules: Schedule[]
}

export default function EventSchedulesForm({eventId,eventDate,locations, schedules}: Props) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(eventDate.toISOString().split("T")[0])
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [locationId, setLocationId] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")
    setMessage("")

    const result = await createEventSchedule({
      eventId,
      title,
      date,
      time,
      description,
      locationId,
    })

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setTitle("")
    setTime("")
    setDescription("")
    setLocationId("")

    setMessage("Horario agregado correctamente")
    setLoading(false)
  }

  return (
    <div className="mt-6 space-y-6">
      {/* Horarios existentes */}
      {schedules.length > 0 && (
        <div className="space-y-3">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-800">{schedule.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{schedule.date.toLocaleDateString("es-MX")}{schedule.time && ` · ${schedule.time}`}</p>
                  {schedule.location && (<p className="mt-1 text-sm text-slate-500">📍 {schedule.location.name}</p>)}
                  {schedule.description && (<p className="mt-2 text-sm text-slate-500">{schedule.description}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nuevo horario */}
      <form onSubmit={handleSubmit} className="rounded-lg border border-dashed border-slate-300 p-5">
        <h3 className="font-medium text-slate-800">Agregar horario</h3>
        <div className="mt-4 space-y-4">
          {/* Título */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre del momento</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ceremonia" required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Fecha</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>

          {/* Hora */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Hora</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>

          {/* Ubicación */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Ubicación</label>
            <select value={locationId} onChange={(e) => setLocationId(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
              <option value="">Sin ubicación</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>{location.name}</option>
              ))}
            </select>
          </div>

          {/* Descripción */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Descripción</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Ceremonia religiosa..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
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
            <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Agregando..." : "Agregar horario"}
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}