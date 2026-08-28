"use client"

import { FormEvent, useState, useRef } from "react"
import { createEventLocation, deleteEventLocation, updateEventLocation } from "@/actions/event-actions"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { MapPinIcon, PencilIcon, TrashIcon} from "@heroicons/react/24/outline"

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
  const router = useRouter()

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [mapsUrl, setMapsUrl] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const [editingLocationId, setEditingLocationId] = useState<string | null>(null)

  const formRef = useRef<HTMLFormElement>(null)

  function handleEdit(location: Location) {
    setEditingLocationId(location.id)

    setName(location.name)
    setAddress(location.address ?? "")
    setMapsUrl(location.mapsUrl ?? "")

    setError("")
    setMessage("")
    setTimeout(() => {
      formRef.current?.scrollIntoView({behavior: "smooth", block: "center"})
    }, 100)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")
    setMessage("")

    // const result = await createEventLocation({
    //   eventId,
    //   name,
    //   address,
    //   mapsUrl,
    // })
    const result = editingLocationId ? await updateEventLocation({id: editingLocationId, eventId, name, address, mapsUrl}): await createEventLocation({eventId, name, address, mapsUrl})

    if (!result.success) {
      setError(result.error)
      toast.error(result.error)
      setLoading(false)
      return
    }

    setName("")
    setAddress("")
    setMapsUrl("")
    setEditingLocationId(null)

    // setMessage(editingLocationId ? "Ubicación actualizada correctamente": "Ubicación agregada correctamente")
    toast.success(editingLocationId ? "Ubicación actualizada correctamente": "Ubicación agregada correctamente")
    setLoading(false)
    router.refresh()
  }

  async function handleDelete(locationId: string) {
    if (loading) return

    const confirmed = window.confirm("¿Estás seguro de eliminar esta ubicación?")

    if (!confirmed) return

    setLoading(true)
    setError("")
    setMessage("")

    const result = await deleteEventLocation({id: locationId, eventId})

    if (!result.success) {
      setError(result.error)
      toast.error(result.error)
      setLoading(false)
      return
    }

    if (editingLocationId === locationId) {
      setEditingLocationId(null)
      setName("")
      setAddress("")
      setMapsUrl("")
    }

    // setMessage("Ubicación eliminada correctamente")
    toast.success("Ubicación eliminada correctamente")
    setLoading(false)
    router.refresh()
  }

  return (
    <div className="mt-6 space-y-6">
      {/* Ubicaciones existentes */}
      {locations.length > 0 && (
        <div className="space-y-3">
          {locations.map((location) => (
            <div key={location.id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium text-slate-800">{location.name}</p>
                  {location.address && (<p className="mt-1 text-sm text-slate-500">{location.address}</p>)}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {location.mapsUrl && (
                    <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50"><MapPinIcon className="h-5 w-5"/></a>
                  )}
                  <button type="button" onClick={() => handleEdit(location)} aria-label="Editar ubicación" className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"><PencilIcon className="h-5 w-5" /></button>
                  <button type="button" onClick={() => handleDelete(location.id)} aria-label="Eliminar ubicación" className="flex h-9 w-9 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 hover:text-red-700"><TrashIcon className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nueva ubicación */}
      <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border border-dashed border-slate-300 p-5">
        <h3 className="font-medium text-slate-800">{editingLocationId ? "Editar ubicación" : "Agregar ubicación"}</h3>
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
              {loading ? "Guardando..." : editingLocationId ? "Guardar cambios": "Agregar ubicación"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}