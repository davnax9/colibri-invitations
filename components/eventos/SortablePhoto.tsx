"use client"

import Image from "next/image"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type Photo = {
  id: string
  url: string
  title: string | null
  order: number
  isCover: boolean
}

type Props = {
  photo: Photo
  onDelete: (photoId: string) => void
  onSetCover: (photoId: string) => void
  loading: boolean
}

export default function SortablePhoto({photo, onDelete, onSetCover, loading}: Props) {
  const {attributes,listeners,setNodeRef,transform,transition,isDragging} = useSortable({id: photo.id})

  const style = {transform: CSS.Transform.toString(transform),transition}

  return (
    <div ref={setNodeRef} style={style} className={`overflow-hidden rounded-xl border bg-white ${isDragging ? "z-10 border-slate-400 shadow-xl" : "border-slate-200"}`}>
      <div className="relative aspect-square">
        <Image src={photo.url} alt={photo.title ?? "Fotografía"} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover"/>
        {photo.isCover && (
          <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow">
            Portada
          </div>
        )}
        {/* Área para arrastrar */}
        <button type="button" {...attributes} {...listeners} className="absolute left-2 top-2 rounded-lg bg-black/60 px-3 py-2 text-sm text-white backdrop-blur-sm hover:bg-black/80"
          title="Arrastrar fotografía"
        >
          ⋮⋮
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 p-3">
        <p className="text-xs text-slate-400">Orden: {photo.order + 1}</p>
        <div className="flex gap-3">
          {!photo.isCover && (
            <button type="button" onClick={() => onSetCover(photo.id)} disabled={loading} className="text-xs font-medium text-slate-600 hover:text-slate-900 disabled:opacity-50">
              Usar portada
            </button>
          )}

          <button type="button" onClick={() => onDelete(photo.id)} disabled={loading} className="text-xs font-medium text-red-600 hover:text-red-700 disabled:opacity-50">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}