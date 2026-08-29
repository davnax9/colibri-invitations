"use client"

import { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import {
  createEventGift,
  deleteEventGift,
  updateEventGift,
} from "@/actions/event-actions"
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

export default function EventGiftsForm({ eventId, gifts }: Props) {
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
      document
        .getElementById("event-gifts-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
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

    const result = editingId
      ? await updateEventGift({
          id: editingId,
          ...data,
        })
      : await createEventGift(data)

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    if (editingId) {
      setItems((current) =>
        current.map((gift) =>
          gift.id === editingId ? result.gift : gift
        )
      )

      toast.success("Opción de regalo actualizada")
    } else {
      setItems((current) => [...current, result.gift])
      toast.success("Opción de regalo agregada")
    }

    resetForm()
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (loading) return

    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta opción de regalo?"
    )

    if (!confirmed) return

    setLoading(true)

    const result = await deleteEventGift({
      id,
      eventId,
    })

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    setItems((current) =>
      current.filter((gift) => gift.id !== id)
    )

    if (editingId === id) {
      resetForm()
    }

    toast.success("Opción de regalo eliminada")
    setLoading(false)
  }

  return (
    <div className="mt-6 min-w-0 max-w-full space-y-6">

      {/* ===================================================== */}
      {/* OPCIONES EXISTENTES */}
      {/* ===================================================== */}

      {items.length > 0 && (
        <div className="min-w-0 max-w-full space-y-3">
          {items.map((gift) => {
            const giftType = giftTypes.find(
              (item) => item.value === gift.type
            )

            return (
              <div
                key={gift.id}
                className="min-w-0 max-w-full overflow-hidden rounded-xl border border-slate-200 p-4"
              >
                <div className="flex min-w-0 items-start gap-3">

                  {/* ICONO */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F5D50]/10 text-lg">
                    {giftType?.icon ?? "🎁"}
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="min-w-0 flex-1">
                    <p className="wrap-break-word font-medium text-slate-800">
                      {gift.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {giftType?.label}
                    </p>

                    {gift.description && (
                      <p className="mt-2 wrap-break-word text-sm leading-5 text-slate-500">
                        {gift.description}
                      </p>
                    )}

                    {gift.url && (
                      <p className="mt-1 max-w-full break-all text-xs text-blue-600">
                        {gift.url}
                      </p>
                    )}
                  </div>

                  {/* ACCIONES */}
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleEdit(gift)}
                      disabled={loading}
                      title="Editar"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(gift.id)}
                      disabled={loading}
                      title="Eliminar"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-red-600 transition hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ===================================================== */}
      {/* FORMULARIO */}
      {/* ===================================================== */}

      <form
        id="event-gifts-form"
        onSubmit={handleSubmit}
        className="min-w-0 max-w-full overflow-hidden rounded-xl border border-dashed border-slate-300 p-4 sm:p-5"
      >

        {/* HEADER */}

        <div className="flex min-w-0 items-start justify-between gap-3">
          <h3 className="min-w-0 wrap-break-word font-medium text-slate-800">
            {editingId
              ? "Editar opción de regalo"
              : "Agregar opción de regalo"}
          </h3>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="shrink-0 text-sm text-slate-500 hover:text-slate-800"
            >
              Cancelar
            </button>
          )}
        </div>

        <div className="mt-4 min-w-0 space-y-4">

          {/* ================================================= */}
          {/* TIPO */}
          {/* ================================================= */}

          <div className="min-w-0">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Tipo de regalo
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as GiftType)
              }
              className="block w-full max-w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            >
              {giftTypes.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.icon} {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* ================================================= */}
          {/* TITULO */}
          {/* ================================================= */}

          <div className="min-w-0">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Título
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Lluvia de sobres"
              required
              className="block w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* ================================================= */}
          {/* DESCRIPCIÓN */}
          {/* ================================================= */}

          <div className="min-w-0">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Descripción
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Tu presencia es nuestro mejor regalo..."
              className="block w-full max-w-full min-w-0 resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* ================================================= */}
          {/* URL */}
          {/* ================================================= */}

          {(isGiftTable || type === "CUSTOM") && (
            <div className="min-w-0">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Enlace
              </label>

              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://..."
                className="block w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          )}

          {/* ================================================= */}
          {/* DATOS BANCARIOS */}
          {/* ================================================= */}

          {isBankTransfer && (
            <>
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nombre del titular
                </label>

                <input
                  type="text"
                  value={accountName}
                  onChange={(e) =>
                    setAccountName(e.target.value)
                  }
                  placeholder="Nombre completo"
                  className="block w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Número de cuenta / CLABE
                </label>

                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) =>
                    setAccountNumber(e.target.value)
                  }
                  placeholder="000000000000000000"
                  className="block w-full max-w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </>
          )}

          {/* ================================================= */}
          {/* BOTONES */}
          {/* ================================================= */}

          <div className="flex flex-wrap justify-end gap-3">
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Cancelar
              </button>
            )}

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Guardando..."
                : editingId
                  ? "Guardar cambios"
                  : "Agregar opción"}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}