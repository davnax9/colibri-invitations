"use client"

import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { createEventGift, deleteEventGift, updateEventGift} from "@/actions/event-actions"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Gift, GiftType } from "@/utils/types"

type Props = {
  eventId: string
  gifts: Gift[]
}

const giftTypes = [
  {
    value: "ENVELOPE",
    label: "Lluvia de sobres",
    icon: "💌",
  },
  {
    value: "PHYSICAL_GIFT",
    label: "Regalo físico",
    icon: "🎁",
  },
  {
    value: "GIFT_TABLE",
    label: "Mesa de regalos",
    icon: "🛍️",
  },
  {
    value: "BANK_TRANSFER",
    label: "Transferencia bancaria",
    icon: "💳",
  },
  {
    value: "CUSTOM",
    label: "Otra opción",
    icon: "✨",
  },
] as const

export default function EventGiftsForm({eventId,gifts}: Props) {
  const [items, setItems] = useState(gifts)

  const [type, setType] = useState<GiftType>("ENVELOPE")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [accountName, setAccountName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")

  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isGiftTable = type === "GIFT_TABLE"
  const isBankTransfer = type === "BANK_TRANSFER"

  function resetForm() {
    setType("ENVELOPE")
    setTitle("")
    setDescription("")
    setUrl("")
    setAccountName("")
    setAccountNumber("")
    setEditingId(null)
  }

  function handleEdit(gift: Gift) {
    setEditingId(gift.id)
    setType(gift.type)
    setTitle(gift.title)
    setDescription(gift.description ?? "")
    setUrl(gift.url ?? "")
    setAccountName(gift.accountName ?? "")
    setAccountNumber(gift.accountNumber ?? "")

    window.setTimeout(() => {
      document.getElementById("event-gifts-form")?.scrollIntoView({behavior: "smooth", block: "center"})
    }, 50)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    const data = {
      eventId,
      type,
      title,
      description,
      url,
      accountName,
      accountNumber,
    }

    const result = editingId ? await updateEventGift({id: editingId,...data}) : await createEventGift(data)

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    if (editingId) {
      setItems((current) => current.map((gift) => gift.id === editingId ? result.gift : gift))
      toast.success("Opción de regalo actualizada")
    } else {
      setItems((current) => [...current,result.gift])
      toast.success("Opción de regalo agregada")
    }

    resetForm()
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (loading) return

    const confirmed = window.confirm("¿Seguro que deseas eliminar esta opción de regalo?")

    if (!confirmed) return

    setLoading(true)

    const result = await deleteEventGift({id, eventId})

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    setItems((current) => current.filter((gift) => gift.id !== id))

    if (editingId === id) {
      resetForm()
    }

    toast.success("Opción de regalo eliminada")
    setLoading(false)
  }

  return (
    <div className="relative mt-5 w-full max-w-full min-w-0 space-y-4">
      {/* ===================================================== */}
      {/* OPCIONES EXISTENTES */}
      {/* ===================================================== */}
      {items.length > 0 && (
        <div className="w-full max-w-full min-w-0 space-y-2">
          {items.map((gift) => {
            const giftType = giftTypes.find((item) => item.value === gift.type)

            return (
              <div key={gift.id} className="flex w-full max-w-full min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-[#E5E9E5] bg-[#FAFBF9] px-3 py-3">
                {/* ICONO */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F5D50]/10 text-base">
                  {giftType?.icon ?? "🎁"}
                </div>
                {/* INFORMACIÓN */}
                <div className="w-0 min-w-0 flex-1 overflow-hidden">
                  <div className="flex w-full min-w-0 max-w-full flex-wrap items-center gap-x-2 gap-y-0.5">
                    <p className="min-w-0 max-w-full truncate text-sm font-semibold text-[#263832]">{gift.title}</p>
                    <span className="max-w-full shrink-0 truncate text-[11px] text-[#8A9A8F]">{giftType?.label}</span>
                  </div>
                  {gift.description && (<p className="mt-0.5 max-w-full truncate text-xs text-[#687A72]">{gift.description}</p>)}
                  {gift.url && (<p className="mt-0.5 max-w-full truncate text-[11px] text-blue-600">{gift.url}</p>)}
                </div>
                {/* ACCIONES */}
                <div className="flex shrink-0 items-center gap-1">
                  <button type="button" onClick={() => handleEdit(gift)} disabled={loading} title="Editar" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white hover:text-slate-800 disabled:opacity-50">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={() => handleDelete(gift.id)} disabled={loading} title="Eliminar" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-700 disabled:opacity-50">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {/* ===================================================== */}
      {/* FORMULARIO */}
      {/* ===================================================== */}
      <form id="event-gifts-form" onSubmit={handleSubmit} className="w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-dashed border-[#CBD6D0] bg-[#FAFBF9] p-4">
        {/* HEADER */}
        <div className="flex w-full max-w-full min-w-0 items-center justify-between gap-3">
          <div className="w-0 min-w-0 flex-1 overflow-hidden">
            <h3 className="truncate text-sm font-semibold text-[#263832]">{editingId ? "Editar opción de regalo" : "Agregar opción de regalo"}</h3>
            {!editingId && (<p className="mt-0.5 truncate text-xs text-[#8A9A8F]">Elige cómo podrán obsequiarte tus invitados.</p>)}
          </div>
          {editingId && (<button type="button" onClick={resetForm} className="shrink-0 text-xs font-medium text-slate-500 hover:text-slate-800">Cancelar</button>)}
        </div>
        {/* CAMPOS */}
        <div className="mt-4 w-full max-w-full min-w-0 space-y-3">
          {/* TIPO + TITULO */}
          <div className="grid w-full max-w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            {/* TIPO */}
            <div className="w-full max-w-full min-w-0">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">Tipo</label>
              <select value={type} onChange={(e) => setType(e.target.value as GiftType)}
                className="block h-10 w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
              >
                {giftTypes.map((item) => (<option key={item.value} value={item.value}>{item.icon} {item.label}</option>))}
              </select>
            </div>
            {/* TITULO */}
            <div className="w-full max-w-full min-w-0">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">Título</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ej. Mesa de regalos Liverpool" required 
                className="block h-10 w-full max-w-full min-w-0 rounded-lg border border-slate-300  bg-white px-3 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
              />
            </div>
          </div>
          {/* DESCRIPCIÓN */}
          <div className="w-full max-w-full min-w-0">
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">Descripción</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} placeholder="Tu presencia es nuestro mejor regalo..."
              className="block w-full max-w-full  min-w-0 resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
            />
          </div>
          {/* URL */}
          {(isGiftTable || type === "CUSTOM") && (
            <div className="w-full max-w-full min-w-0">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">Enlace</label>
              <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..."
                className="block w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
              />
            </div>
          )}
          {/* DATOS BANCARIOS */}
          {isBankTransfer && (
            <div className="grid w-full max-w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="w-full max-w-full min-w-0">
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">Titular</label>
                <input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="Nombre completo"
                  className="block h-10 w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
                />
              </div>
              <div className="w-full max-w-full min-w-0">
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">Cuenta / CLABE</label>
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="000000000000000000"
                  className="block h-10 w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none focus:border-[#2F5D50] focus:ring-2 focus:ring-[#2F5D50]/10"
                />
              </div>
            </div>
          )}
          {/* BOTONES */}
          <div className="flex w-full max-w-full min-w-0 flex-wrap justify-end gap-2 pt-1">
            {editingId && (
              <button type="button" onClick={resetForm} className="shrink-0 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600hover:bg-slate-50">
                Cancelar
              </button>
            )}
            <button type="submit" disabled={loading} className=" shrink-0 rounded-lg bg-[#2F5D50] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Guardando..." : editingId ? "Guardar cambios" : "Agregar opción"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}