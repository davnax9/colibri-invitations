"use client"

import GuestInvitationActions from "./GuestInvitationActions"
import { Guest } from "@/utils/types"

type Props = {
  guest: Guest
  selected: boolean
  onSelect: () => void
  onEdit: () => void
  onDelete: () => void
  eventSlug: string
  messageTemplate?: string
  canCustomizeMessage: boolean
  getStatusLabel: (status: Guest["status"]) => string
  getStatusClass: (status: Guest["status"]) => string
}

export default function GuestMobileCard({
  guest,
  selected,
  onSelect,
  onEdit,
  onDelete,
  eventSlug,
  messageTemplate,
  canCustomizeMessage,
  getStatusLabel,
  getStatusClass,
}: Props) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm transition ${selected ? "border-green-300 ring-1 ring-green-200" : "border-slate-200"} p-4 sm:p-5`}>
      {/* ===================================================== */}
      {/* ENCABEZADO */}
      {/* ===================================================== */}
      <div className="flex items-start gap-3">
        <input type="checkbox" checked={selected} onChange={onSelect} className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300"/>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="truncate text-base font-semibold text-slate-800">{guest.name}</p>
            <span  className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClass(guest.status)}`}>{getStatusLabel(guest.status)}</span>
          </div>
          {/* CONTACTO */}
          {(guest.phone || guest.email) ? (
            <div className="mt-2 grid gap-1 text-sm text-slate-500 sm:grid-cols-2">
              {guest.phone && (<span className="truncate">📱 {guest.phone}</span>)}
              {guest.email && (<span className="truncate">✉️ {guest.email}</span>)}
            </div>
          ) : (<p className="mt-2 text-sm text-slate-400">Sin información de contacto</p>)}
        </div>
      </div>
      {/* ===================================================== */}
      {/* INFORMACIÓN */}
      {/* ===================================================== */}
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
        {/* PASES */}
        <div className="rounded-lg bg-slate-50 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Pases</p>
          <p className="mt-1 text-lg font-semibold text-slate-700">{guest.passes}</p>
        </div>
        {/* CONFIRMADOS */}
        <div className="rounded-lg bg-slate-50 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Confirmados</p>
          <p className="mt-1 text-lg font-semibold text-slate-700">{guest.confirmed ?? 0}</p>
        </div>
      </div>
      {/* ===================================================== */}
      {/* INVITACIÓN */}
      {/* ===================================================== */}
      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Invitación</p>
        <GuestInvitationActions guestId={guest.id} slug={eventSlug} token={guest.token} guestName={guest.name} passes={guest.passes} messageTemplate={messageTemplate} currentMessage={guest.message} canCustomizeMessage={canCustomizeMessage}/>
      </div>
      {/* ===================================================== */}
      {/* ACCIONES */}
      {/* ===================================================== */}
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
        <button type="button" onClick={onEdit} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
          Editar
        </button>
        <button type="button" onClick={onDelete} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100">
          Eliminar
        </button>
      </div>
    </div>
  )
}