"use client"

import { useMemo, useState } from "react"
import {createEventGuest,deleteEventGuest,updateEventGuest} from "@/actions/event-actions"
import { toast } from "react-toastify"
import GuestInvitationActions from "./GuestInvitationActions"
import { GuestStatus } from "@/app/generated/prisma/enums"
import BulkInvitationPanel from "./BulkInvitationPanel"
import GuestMobileCard from "./GuestMobileCard"

type Guest = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  eventId: string;
  phone: string | null;
  email: string | null;
  passes: number;
  confirmed: number | null;
  status: GuestStatus;
  token: string;
}

type Props = {
  eventId: string
  guests: Guest[]
  eventSlug: string
  messageTemplate?: string
  canCustomizeMessage: boolean
}

export default function GuestTable({ eventId, guests, eventSlug, messageTemplate, canCustomizeMessage}: Props) {
  const [open, setOpen] = useState(false)

  const [editingGuest, setEditingGuest] = useState<Guest | null>(null)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [passes, setPasses] = useState(1)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PENDING" | "CONFIRMED" | "DECLINED">("ALL")
  const [selectedGuests, setSelectedGuests] = useState<string[]>([])

  function openCreate() {
    setEditingGuest(null)

    setName("")
    setPhone("")
    setEmail("")
    setPasses(1)

    setError("")
    setOpen(true)
  }

  function openEdit(guest: Guest) {
    setEditingGuest(guest)

    setName(guest.name)
    setPhone(guest.phone ?? "")
    setEmail(guest.email ?? "")
    setPasses(guest.passes)

    setError("")
    setOpen(true)
  }

  function closeModal() {
    if (loading) return

    setOpen(false)
    setEditingGuest(null)
    setError("")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setError("")

    const result = editingGuest ? await updateEventGuest({ id: editingGuest.id, eventId, name, phone, email, passes})
      : await createEventGuest({eventId, name, phone, email, passes})

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setLoading(false)
    setOpen(false)
    setEditingGuest(null)
  }

  async function handleDelete(guest: Guest) {
    const confirmed = window.confirm(`¿Deseas eliminar a ${guest.name}?`)

    if (!confirmed) return

    const result = await deleteEventGuest({id: guest.id, eventId})

    if (!result.success) {
      window.alert(result.error)
    }
  }

  function getStatusLabel(status: Guest["status"]) {
    switch (status) {
      case "CONFIRMED":
        return "Confirmado"
      case "DECLINED":
        return "Rechazado"
      default:
        return "Pendiente"
    }
  }

  function getStatusClass(status: Guest["status"]) {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-50 text-green-700"
      case "DECLINED":
        return "bg-red-50 text-red-700"
      default:
        return "bg-amber-50 text-amber-700"
    }
  }

  const totalGuests = guests.length

  const totalPasses = guests.reduce((total, guest) => total + guest.passes, 0)
  const confirmedGuests = guests.filter((guest) => guest.status === "CONFIRMED").length
  const pendingGuests = guests.filter((guest) => guest.status === "PENDING").length
  const declinedGuests = guests.filter((guest) => guest.status === "DECLINED").length
  const confirmedPasses = guests.reduce((total, guest) => total + (guest.confirmed ?? 0), 0)
  
  const [bulkOpen, setBulkOpen] = useState(false)

  const filteredGuests = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return guests.filter((guest) => {
        const matchesSearch = normalizedSearch === "" || guest.name.toLowerCase().includes(normalizedSearch) || guest.phone?.toLowerCase().includes(normalizedSearch)
        const matchesStatus = statusFilter === "ALL" || guest.status === statusFilter
        return matchesSearch && matchesStatus
    })
  }, [guests, search, statusFilter])

  const selectedGuestRecords = guests.filter((guest) => selectedGuests.includes(guest.id))

  function toggleGuestSelection(guestId: string) {
    setSelectedGuests((current) => current.includes(guestId) ? current.filter((id) => id !== guestId): [...current, guestId])
  }

  function toggleAllGuests() {
    if (selectedGuests.length === filteredGuests.length) {
      setSelectedGuests([])
      return
    }

    setSelectedGuests(filteredGuests.map((guest) => guest.id))
  }

  return (
    <>
      {/* ESTADÍSTICAS */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-slate-500 sm:text-sm">Invitados</p>
              <p className="mt-1 text-2xl font-bold text-slate-800 sm:mt-2 sm:text-3xl">{totalGuests}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-slate-500 sm:text-sm">Pases asignados</p>
              <p className="mt-1 text-2xl font-bold text-slate-800 sm:mt-2 sm:text-3xl">{totalPasses}</p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-green-700 sm:text-sm">Confirmados</p>
              <p className="mt-1 text-2xl font-bold text-green-800 sm:mt-2 sm:text-3xl">{confirmedGuests}</p>
          </div>
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-green-700 sm:text-sm">Pases confirmados</p>
              <p className="mt-1 text-2xl font-bold text-green-800 sm:mt-2 sm:text-3xl">{confirmedPasses}</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-amber-700 sm:text-sm">Pendientes</p>
              <p className="mt-1 text-2xl font-bold text-amber-800 sm:mt-2 sm:text-3xl">{pendingGuests}</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm sm:p-5">
              <p className="text-sm font-medium text-red-700 sm:text-sm">Rechazados</p>
              <p className="mt-1 text-2xl font-bold text-red-800 sm:mt-2 sm:text-3xl">{declinedGuests}</p>
          </div>
      </div>

      {/* ENCABEZADO */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Invitados</h2>
          <p className="mt-1 text-sm text-slate-500">{guests.length} invitado {guests.length !== 1 ? "s" : ""}</p>
        </div>
        <button type="button" onClick={openCreate} className="w-full rounded-lg bg-slate-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 sm:w-auto sm:py-2.5">
          + Agregar invitado
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row">
            <p className="text-sm font-medium text-slate-700">Buscar y filtrar</p>
            {/* BUSCADOR */}
            <div className="flex-1">
                <label className="sr-only">Buscar invitado</label>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre o teléfono..."
                    className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                />
            </div>
            {/* FILTRO */}
            <div className="w-full md:w-52">
                <label className="sr-only">Filtrar por estado</label>
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as | "ALL" | "PENDING" | "CONFIRMED" | "DECLINED")}
                    className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                    <option value="ALL">Todos los invitados</option>
                    <option value="PENDING">Pendientes</option>
                    <option value="CONFIRMED">Confirmados</option>
                    <option value="DECLINED">Rechazados</option>
                </select>
            </div>

            {selectedGuests.length > 0 && (
              <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {selectedGuests.length} invitado {selectedGuests.length !== 1 ? "s" : ""} seleccionado {selectedGuests.length !== 1 ? "s" : ""}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Selecciona una acción para los invitados seleccionados.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => setSelectedGuests([])} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Cancelar selección
                  </button>
                  <button type="button" onClick={() => setBulkOpen(true)} className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                    Preparar invitaciones
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>

      {/* INVITADOS */}
      <div>
        {guests.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-medium text-slate-700">Aún no tienes invitados</p>
            <p className="mt-2 text-sm text-slate-500">Agrega el primer invitado para comenzar.</p>
          </div>
        ) : (
          <>
            {/* ============================= */}
            {/* DESKTOP / TABLET */}
            {/* ============================= */}
            <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-4">
                        <input type="checkbox" checked={filteredGuests.length > 0 && selectedGuests.length === filteredGuests.length} onChange={toggleAllGuests} className="h-4 w-4 rounded border-slate-300"/>
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Invitado</th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Contacto</th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Pases</th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Estado</th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Invitación</th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGuests.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-5 py-10 text-center text-sm text-slate-500">No se encontraron invitados.</td>
                      </tr>
                    ) : (
                      filteredGuests.map((guest) => (
                        <tr key={guest.id} className="border-t border-slate-100">
                          <td className="px-4 py-4">
                            <input type="checkbox" checked={selectedGuests.includes(guest.id)} onChange={() =>toggleGuestSelection(guest.id)}className="h-4 w-4 rounded border-slate-300"/>
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-medium text-slate-800">{guest.name}</p>
                          </td>
                          <td className="px-5 py-4">
                            <div className="text-sm text-slate-500">
                              {guest.phone && <p>{guest.phone}</p>}
                              {guest.email && <p>{guest.email}</p>}
                              {!guest.phone && !guest.email && (<span className="text-slate-400">Sin contacto</span>)}
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-medium text-slate-700">{guest.passes}</p>
                            {guest.confirmed !== null && (<p className="text-xs text-slate-400">{guest.confirmed} confirmados</p>)}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(guest.status)}`}>{getStatusLabel(guest.status)}</span>
                          </td>
                          <td className="px-4 py-3">
                            <GuestInvitationActions
                              guestId={guest.id}
                              slug={eventSlug}
                              token={guest.token}
                              guestName={guest.name}
                              passes={guest.passes}
                              messageTemplate={messageTemplate}
                              currentMessage={guest.message}
                              canCustomizeMessage={canCustomizeMessage}
                            />
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex gap-2">
                              <button type="button" onClick={() => openEdit(guest)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50">
                                Editar
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDelete(guest)}
                                className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ============================= */}
            {/* MOBILE */}
            {/* ============================= */}
            <div className="space-y-3 p-4 md:hidden">
              {filteredGuests.length === 0 ? (
                <div className="rounded-xl border border-slate-200 bg-white px-5 py-10 text-center shadow-sm">
                  <p className="text-sm text-slate-500">
                    No se encontraron invitados.
                  </p>
                </div>
              ) : (
                filteredGuests.map((guest) => (
                  <GuestMobileCard
                    key={guest.id}
                    guest={guest}
                    selected={selectedGuests.includes(guest.id)}
                    onSelect={() => toggleGuestSelection(guest.id)}
                    onEdit={() => openEdit(guest)}
                    onDelete={() => handleDelete(guest)}
                    eventSlug={eventSlug}
                    messageTemplate={messageTemplate}
                    canCustomizeMessage={canCustomizeMessage}
                    getStatusLabel={getStatusLabel}
                    getStatusClass={getStatusClass}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-800">{editingGuest ? "Editar invitado" : "Nuevo invitado"}</h2>
                <p className="mt-1 text-sm text-slate-500">{editingGuest ? "Actualiza la información del invitado.": "Agrega una persona a la lista de invitados."}</p>
              </div>
              <button type="button" onClick={closeModal} className="text-2xl text-slate-400 hover:text-slate-600">
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NOMBRE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Nombre completo</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan Pérez" required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 bg-white text-slate-800"
                />
              </div>

              {/* TELEFONO */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Teléfono</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="5551234567"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-slate-800 bg-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Correo electrónico</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="luis@email.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-slate-800 bg-white"
                />
              </div>

              {/* PASES */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Pases asignados</label>
                <input type="number" min={1} value={passes} onChange={(e) => setPasses(Number(e.target.value))} required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200 text-slate-800 bg-white"
                />
                <p className="mt-2 text-xs text-slate-400">Cantidad máxima de personas que podrán confirmar en esta invitación.</p>
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* BOTONES */}
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={closeModal} disabled={loading} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Cancelar
                </button>

                <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">
                  {loading ? "Guardando..." : editingGuest ? "Guardar cambios" : "Agregar invitado"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL INVITACIONES */}
      {bulkOpen && (<BulkInvitationPanel guests={selectedGuestRecords} slug={eventSlug} messageTemplate={messageTemplate} onClose={() => setBulkOpen(false)}/>)}
    </>
  )
}