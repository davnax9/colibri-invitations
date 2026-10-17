"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { updateEventShowChilds } from "@/actions/event-actions"

type Props = {
  eventId: string
  enabled: boolean
}

export default function EventChildsForm({ eventId, enabled }: Props) {
  const [value, setValue] = useState(enabled)
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)

    const result = await updateEventShowChilds({ eventId, enabled: value })

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    toast.success("Sección de niños actualizada")
    setLoading(false)
  }

  return (
    <div className="min-w-0 space-y-6">
      {/* ===================================================== */}
      {/* ENCABEZADO */}
      {/* ===================================================== */}
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-semibold text-[#263832]">Sección de niños</h3>
            <p className="mt-1 text-sm leading-5 text-[#687A72]">Muestra un mensaje recordando a tus invitados que la celebración está diseñada solo para adultos.</p>
          </div>
          {/* SWITCH */}
          <button type="button" onClick={() => setValue(!value)} disabled={loading} aria-pressed={value} className={`relative flex h-6 w-11 shrink-0 items-center rounded-full transition ${
              value ? "bg-[#2F5D50]" : "bg-slate-300"} disabled:opacity-50`}
          >
            <span className={`h-5 w-5 rounded-full bg-white shadow-sm transition ${value ? "translate-x-5" : "translate-x-0.5"}`}/>
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-400">{value ? "La sección se mostrará en la invitación." : "La sección no aparecerá en la invitación."}</p>
      </div>
      {/* ===================================================== */}
      {/* GUARDAR */}
      {/* ===================================================== */}
      <div className="flex justify-end border-t border-[#E5E9E5] pt-5">
        <button type="button" onClick={handleSave} disabled={loading} className="rounded-xl bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-50">
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </div>
  )
}
