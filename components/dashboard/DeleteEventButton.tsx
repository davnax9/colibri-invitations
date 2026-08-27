"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { deleteEvent } from "@/actions/event-actions"

type Props = {
  eventId: string
  eventName: string
}

export default function DeleteEventButton({eventId,eventName}: Props) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [confirming, setConfirming] = useState(false)

  async function handleDelete() {
    if (loading) return

    setLoading(true)

    const result = await deleteEvent(eventId)

    if (!result.success) {
      setLoading(false)
      toast.error(result.error)
      return
    }

    toast.success("Evento eliminado correctamente")

    setConfirming(false)
    setLoading(false)

    router.refresh()
  }

  return (
    <>
      {/* BOTÓN ELIMINAR */}
      <button type="button" onClick={(e) => { e.preventDefault(), e.stopPropagation(), setConfirming(true)}} title="Eliminar evento"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-slate-500 shadow-sm backdrop-blur transition hover:bg-red-50 hover:text-red-500"
      >
        🗑️
      </button>

      {/* MODAL */}
      {confirming && typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm" onClick={() => {
              if (!loading) {
                setConfirming(false)
              }
            }}
          >
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* ICONO */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                🗑️
              </div>
              {/* TITULO */}
              <h3 className="mt-5 text-xl font-bold text-slate-800">¿Eliminar este evento?</h3>
              {/* MENSAJE */}
              <p className="mt-2 text-sm leading-6 text-slate-500">Estás a punto de eliminar{" "}<span className="font-semibold text-slate-700">{eventName}</span>.</p>
              <p className="mt-2 text-sm leading-6 text-red-500">Esta acción eliminará la invitación y toda la información asociada. No se puede deshacer.</p>
              {/* BOTONES */}
              <div className="mt-7 flex gap-3">
                <button type="button" disabled={loading} onClick={() => setConfirming(false)} className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50">
                  Cancelar
                </button>
                <button type="button" disabled={loading} onClick={handleDelete} className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? "Eliminando..." : "Sí, eliminar"}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}