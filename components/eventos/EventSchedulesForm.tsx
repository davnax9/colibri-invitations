"use client"

import { FormEvent, useState, useRef } from "react"
import { createEventSchedule, deleteEventSchedule, updateEventSchedule } from "@/actions/event-actions"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { MapPinIcon, PencilIcon, TrashIcon} from "@heroicons/react/24/outline"
import ConfirmModal from "../ui/ConfirmModal"

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

export default function EventSchedulesForm({eventId, eventDate, locations, schedules}: Props) {
  const router = useRouter()
  
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(eventDate.toISOString().split("T")[0])
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [locationId, setLocationId] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const [scheduleToDelete, setScheduleToDelete] = useState<Schedule | null>(null)

  const [editingScheduleId, setEditingScheduleId] = useState<string | null>(null)

  const formRef = useRef<HTMLFormElement>(null)

  function handleEdit(schedule: Schedule) {
    setEditingScheduleId(schedule.id)

    setTitle(schedule.title)
    setDate(schedule.date.toISOString().split("T")[0])
    setTime(schedule.time ?? "")
    setDescription(schedule.description ?? "")
    setLocationId(schedule.locationId ?? "")

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

    // const result = await createEventSchedule({
    //   eventId,
    //   title,
    //   date,
    //   time,
    //   description,
    //   locationId,
    // })
    const result = editingScheduleId ? 
      await updateEventSchedule({id: editingScheduleId, eventId, title, date, time, description,locationId}): 
      await createEventSchedule({eventId, title, date, time, description,locationId})

    if (!result.success) {
      setError(result.error)
      toast.error(result.error)
      setLoading(false)
      return
    }

    setTitle("")
    setTime("")
    setDescription("")
    setLocationId("")
    setEditingScheduleId(null)

    toast.success(editingScheduleId ? "Horario actualizado correctamente": "Horario agregado correctamente")
    setLoading(false)
    router.refresh()
  }

  async function handleDelete(scheduleId: string) {
    if (loading) return

    // const confirmed = window.confirm("¿Estás seguro de eliminar este horario?")

    // if (!confirmed) return

    setLoading(true)
    setError("")
    setMessage("")

    const result = await deleteEventSchedule({id: scheduleId, eventId})

    if (!result.success) {
      setError(result.error)
      toast.error(result.error)
      setLoading(false)
      return
    }

    if (editingScheduleId === scheduleId) {
      setEditingScheduleId(null)
      setTitle("")
      setTime("")
      setDescription("")
      setLocationId("")
    }

    toast.success("Horario eliminado correctamente")
    setLoading(false)
    setScheduleToDelete(null)
    router.refresh()
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
                <div className="flex shrink-0 items-center gap-2">
                  <button type="button" onClick={() => handleEdit(schedule)} aria-label="Editar horario" className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"><PencilIcon className="h-5 w-5" /></button>
                  <button type="button" onClick={() => setScheduleToDelete(schedule)} disabled={loading} aria-label="Eliminar horario" className="flex h-9 w-9 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 hover:text-red-700"><TrashIcon className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nuevo horario */}
      <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg border border-dashed border-slate-300 p-5">
        <h3 className="font-medium text-slate-800">{editingScheduleId ? "Editar horario" : "Agregar horario"}</h3>
        <div className="mt-4 space-y-4">
          {/* Título */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre del momento</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ceremonia" required
              className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Fecha</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>

          {/* Hora */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Hora</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>

          {/* Ubicación */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Ubicación</label>
            <select value={locationId} onChange={(e) => setLocationId(e.target.value)} className="w-full text-slate-800 rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
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
              className="w-full text-slate-800 bg-white resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
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
              {loading ? "Guardando..." : editingScheduleId ? "Guardar cambios": "Agregar Horario"}
            </button>
          </div>

        </div>
      </form>
      <ConfirmModal
        open={scheduleToDelete !== null}
        onClose={() => setScheduleToDelete(null)}
        onConfirm={() => {if (scheduleToDelete) handleDelete(scheduleToDelete.id)}}
        title="Eliminar horario"
        message={scheduleToDelete ? `¿Estás seguro de que deseas eliminar "${scheduleToDelete.title}"? Esta acción no se puede deshacer.` : ""}
        confirmText="Eliminar"
        cancelText="Cancelar"
        variant="danger"
        loading={loading}
      />
    </div>
  )
}