"use client"

import { useState } from "react"
import {closestCenter,DndContext,DragEndEvent,PointerSensor,useSensor,useSensors} from "@dnd-kit/core"
import {arrayMove,SortableContext,rectSortingStrategy} from "@dnd-kit/sortable"
import { CldUploadWidget } from "next-cloudinary"
import {createEventPhoto,deleteEventPhoto,reorderEventPhotos, setEventPhotoCover} from "@/actions/event-actions"
import SortablePhoto from "./SortablePhoto"
import { getMaxPhotos } from "@/utils/plan-limits"

type Photo = {
  id: string
  url: string
  publicId: string | null
  title: string | null
  order: number
  isCover: boolean
}

type Props = {
  eventId: string
  photos: Photo[]
  plan: "BASIC" | "PRO"
}

export default function EventPhotosForm({eventId, photos, plan}: Props) {
  const [items, setItems] = useState([...photos].sort((a, b) => a.order - b.order))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const maxPhotos = getMaxPhotos(plan)
  const remainingPhotos = Math.max(maxPhotos - items.length, 0)
  const limitReached = items.length >= maxPhotos

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  async function handleUpload(result: any) {
    if (!result?.info) {
      return
    }

    setLoading(true)
    setError("")
    setMessage("")

    const info = result.info

    const response = await createEventPhoto({
      eventId,
      url: info.secure_url,
      publicId: info.public_id,
    })

    if (!response.success) {
      setError(response.error)
      setLoading(false)
      return
    }

    setItems((current) => [
      ...current,
      {
        ...response.photo,
        order: current.length,
      },
    ])

    setMessage("Fotografía agregada correctamente")
    setLoading(false)
  }

  async function handleDelete(photoId: string) {
    const confirmed = window.confirm("¿Seguro que deseas eliminar esta fotografía?")

    if (!confirmed) {
      return
    }

    setLoading(true)
    setError("")
    setMessage("")

    const result = await deleteEventPhoto({eventId, photoId})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setItems((current) => current.filter((photo) => photo.id !== photoId).map((photo, index) => ({...photo,order: index})))

    setMessage("Fotografía eliminada correctamente")
    setLoading(false)
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over || active.id === over.id) {
      return
    }

    const oldIndex = items.findIndex((photo) => photo.id === active.id)

    const newIndex = items.findIndex((photo) => photo.id === over.id)

    if (oldIndex === -1 || newIndex === -1) {
      return
    }

    const reordered = arrayMove(items, oldIndex, newIndex).map((photo, index) => ({...photo, order: index}))

    // Actualizamos inmediatamente la interfaz
    setItems(reordered)

    setLoading(true)
    setError("")
    setMessage("")

    const result = await reorderEventPhotos({eventId,photoIds: reordered.map((photo) => photo.id)})

    if (!result.success) {
      // Si falla, volvemos al orden original
      setItems(items)
      setError(result.error)
      setLoading(false)
      return
    }

    setMessage("Orden actualizado correctamente")
    setLoading(false)
  }

  async function handleSetCover(photoId: string) {
    setLoading(true)
    setError("")
    setMessage("")

    const result = await setEventPhotoCover({eventId,photoId})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setItems((current) =>
      current.map((photo) => ({
        ...photo,
        isCover: photo.id === photoId,
      }))
    )

    setMessage("Fotografía de portada actualizada")
    setLoading(false)
  }

  return (
    <div className="mt-6 space-y-6">
      {/* Galería */}
      {items.length > 0 && (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={items.map((photo) => photo.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((photo) => (
                <SortablePhoto  key={photo.id} photo={photo} onDelete={handleDelete} onSetCover={handleSetCover} loading={loading}/>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {/* INFORMACIÓN DE FOTOGRAFÍAS */}
      <div className="rounded-2xl border border-[#E5E9E5] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Galería</p>
            <h3 className="mt-1 text-lg font-bold text-[#263832]">Fotografías de tu invitación</h3>
            <p className="mt-1 text-sm text-[#687A72]">Agrega fotografías y arrástralas para cambiar su orden.</p>
          </div>
          {/* PLAN */}
          <div className={`rounded-xl border px-4 py-3 ${plan === "PRO" ? "border-[#C9A86A]/30 bg-[#C9A86A]/10": "border-[#E5E9E5] bg-[#F7F8F6]"}`}>
            <p className="text-xs font-medium text-[#687A72]">Plan {plan}</p>
            <p className="mt-1 text-sm font-bold text-[#263832]">{items.length} / {maxPhotos} fotografías</p>
          </div>
        </div>

        {/* PROGRESO */}
        <div className="mt-5">
          <div className="h-2 overflow-hidden rounded-full bg-[#E5E9E5]">
            <div className="h-full rounded-full bg-[#2F5D50] transition-all duration-300" style={{width: `${Math.min((items.length / maxPhotos) * 100,100)}%`,}}/>
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <span className="text-[#8A9A8F]">{items.length} utilizadas</span>
            <span className="font-medium text-[#687A72]">{remainingPhotos} disponibles</span>
          </div>
        </div>

        {/* UPLOAD */}
        {!limitReached ? (
          <div className="mt-5 rounded-xl border border-dashed border-[#8FA89D]/60 bg-[#FAF8F3] p-6 text-center">
            <CldUploadWidget uploadPreset="invitaciones" onSuccess={handleUpload} options={{multiple: true, maxFiles: remainingPhotos}}>
              {({ open }) => (
                <button type="button" onClick={() => open()} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#244A40] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? "Procesando..." : "＋ Agregar fotografía"}
                </button>
              )}
            </CldUploadWidget>
            <p className="mt-3 text-xs text-[#8A9A8F]">Puedes agregar {remainingPhotos}{" "} {remainingPhotos === 1 ? "fotografía más." : "fotografías más."}</p>
          </div>
        ) : (

          /* LÍMITE */
          <div className="mt-5 rounded-xl border border-[#C9A86A]/30 bg-[#FAF8F3] p-5">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A86A]/15">
                <span className="text-lg">✨</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#263832]">Has alcanzado el límite de fotografías</h4>
                <p className="mt-1 text-sm leading-6 text-[#687A72]">Tu plan {plan} permite hasta {maxPhotos}{" "}{maxPhotos === 5 ? "fotografías." : "fotografías."}</p>
                {plan === "BASIC" && (<p className="mt-2 text-sm font-semibold text-[#2F5D50]">Actualiza a PRO para agregar hasta 8 fotografías.</p>)}
              </div>
            </div>
          </div>
        )}

        {/* MENSAJES */}
        {error && (
          <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}
        {message && (
          <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-600">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}