"use client"

import { Guest } from "@/utils/types"
import GuestInvitationActions from "./GuestInvitationActions"

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
    <div className={`rounded-xl border bg-white px-3.5 py-3 shadow-sm transition ${selected ? "border-green-300 ring-1 ring-green-200" : "border-slate-200"}`}>
      {/* ENCABEZADO */}
      <div className="flex items-start gap-2.5">
        <input type="checkbox" checked={selected} onChange={onSelect} className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300"/>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="min-w-0 truncate text-sm font-semibold text-slate-800">{guest.name}</p>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${getStatusClass(guest.status)}`}>{getStatusLabel(guest.status)}</span>
          </div>
          {/* CONTACTO */}
          {(guest.phone || guest.email) && (
            <div className="mt-1 flex min-w-0 flex-col gap-0.5 text-xs text-slate-500">
              {guest.phone && (<span className="truncate">📱 {guest.phone}</span>)}
              {guest.email && (<span className="truncate">✉️ {guest.email}</span>)}
            </div>
          )}
          {!guest.phone && !guest.email && (<p className="mt-1 text-xs text-slate-400">Sin información de contacto</p>)}
        </div>
      </div>
      {/* RESUMEN */}
      <div className="mt-2 flex items-center gap-4 border-t border-slate-100 pt-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-500">Pases</span>
          <span className="text-sm font-semibold text-slate-700">{guest.passes}</span>
        </div>
        {guest.confirmed !== null && (
          <>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-500">Confirmados</span>
              <span className="text-sm font-semibold text-slate-700">{guest.confirmed}</span>
            </div>
          </>
        )}
      </div>
      {/* INVITACIÓN */}
      <div className="mt-2">
        <GuestInvitationActions guestId={guest.id} slug={eventSlug} token={guest.token} guestName={guest.name} passes={guest.passes} messageTemplate={messageTemplate} currentMessage={guest.message} canCustomizeMessage={canCustomizeMessage}/>
      </div>
      {/* ACCIONES */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button type="button" onClick={onEdit} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50">
          Editar
        </button>
        <button type="button" onClick={onDelete} className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50">
          Eliminar
        </button>
      </div>
    </div>
  )
}