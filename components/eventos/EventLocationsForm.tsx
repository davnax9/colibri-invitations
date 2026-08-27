"use client"

import { FormEvent, useState } from "react"
import { createEventLocation } from "@/actions/event-actions"

type Location = {
  id: string
  name: string
  address: string | null
  mapsUrl: string | null
}

type Props = {
  eventId: string
  locations: Location[]
}

export default function EventLocationsForm({eventId,locations}: Props) {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [mapsUrl, setMapsUrl] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")
    setMessage("")

    const result = await createEventLocation({
      eventId,
      name,
      address,
      mapsUrl,
    })

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setName("")
    setAddress("")
    setMapsUrl("")

    setMessage("Ubicación agregada correctamente")
    setLoading(false)
  }

  return (
    <div className="mt-6 space-y-6">
      {/* Ubicaciones existentes */}
      {locations.length > 0 && (
        <div className="space-y-3">
          {locations.map((location) => (
            <div key={location.id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-800">{location.name}</p>
                  {location.address && (<p className="mt-1 text-sm text-slate-500">{location.address}</p>)}
                </div>
                {location.mapsUrl && (
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700">
                    Ver mapa
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nueva ubicación */}
      <form onSubmit={handleSubmit} className="rounded-lg border border-dashed border-slate-300 p-5">
        <h3 className="font-medium text-slate-800">Agregar ubicación</h3>
        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre del lugar</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Iglesia San José" required
              className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Dirección</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Av. Constitución #123"
              className="w-full text-slate-800 bg-white  rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Enlace de Google Maps</label>
            <input type="url" value={mapsUrl} onChange={(e) => setMapsUrl(e.target.value)} placeholder="https://maps.google.com/..."
              className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
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
              {loading ? "Agregando..." : "Agregar ubicación"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}