"use client"

import { useState } from "react"
import { updateGuestRSVP } from "@/actions/event-actions"

type Props = {
  token: string
  guestName: string
  passes: number
  confirmedPasses: number | null
  status: "PENDING" | "CONFIRMED" | "DECLINED"
}

export default function GuestRSVP({token,guestName,passes,confirmedPasses,status}: Props) {
  const [currentStatus, setCurrentStatus] = useState(status)
  const [currentConfirmed, setCurrentConfirmed] = useState(confirmedPasses ?? 0)
  const [selectedPasses, setSelectedPasses] = useState(confirmedPasses ?? passes)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [editing, setEditing] = useState(false)

  async function handleConfirm() {
    setLoading(true)
    setError("")

    const result = await updateGuestRSVP({
      token,
      status: "CONFIRMED",
      confirmed: selectedPasses,
    })

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      return
    }

    setCurrentStatus("CONFIRMED")
    setCurrentConfirmed(selectedPasses)
    setLoading(false)
    setLoading(false)
  }

  async function handleDecline() {
    setLoading(true)
    setError("")

    const result = await updateGuestRSVP({
      token,
      status: "DECLINED",
      confirmed: 0,
    })

    if (!result.success) {
      setError(result.error)
      setLoading(false)
      setEditing(false)
      return
    }

    setCurrentStatus("DECLINED")
    setCurrentConfirmed(0)
    setLoading(false)
  }

  /*
   * ========================================================
   * YA CONFIRMÓ
   * ========================================================
   */

  if (currentStatus === "CONFIRMED" && !editing) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-stone-400">Confirmación recibida</p>
        <h2 className="mt-4 text-3xl font-serif text-stone-800">¡Gracias, {guestName}!</h2>
        <p className="mt-5 leading-7 text-stone-600">Nos alegra mucho saber que podrás acompañarnos en este día tan especial.</p>
        <div className="mt-8 rounded-2xl bg-stone-50 p-6">
          <p className="text-sm text-stone-500">Personas confirmadas</p>
          <p className="mt-2 text-4xl font-bold text-stone-800">{currentConfirmed}</p>
          <p className="mt-2 text-sm text-stone-500">de {passes} pases disponibles</p>
        </div>
        <button type="button" onClick={() => setEditing(true)} className="mt-6 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
          Modificar confirmación
        </button>
      </div>
    </section>
  )
}
  /*
   * ========================================================
   * RECHAZÓ
   * ========================================================
   */
  if (currentStatus === "DECLINED" && !editing) {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-2xl">
            ♡
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-stone-400">Confirmación</p>
          <h2 className="mt-4 text-3xl font-serif text-stone-800">Gracias por avisarnos</h2>
          <p className="mt-5 leading-7 text-stone-600">Lamentamos que no puedas acompañarnos, pero agradecemos mucho que nos hayas hecho saber.</p>
          <button type="button" onClick={() => {setSelectedPasses(passes), setEditing(true)}} className="mt-8 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
            Quiero confirmar mi asistencia
          </button>
        </div>
      </section>
    )
  }
  /*
   * ========================================================
   * PENDIENTE
   * ========================================================
   */
  if (currentStatus === "PENDING" || editing) {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Confirmación de asistencia</p>
          <h2 className="mt-4 text-3xl font-serif text-stone-800">{editing ? "Modifica tu confirmación" : `Hola, ${guestName}`}</h2>
          <p className="mt-5 leading-7 text-stone-600">{editing ? "Actualiza la cantidad de personas que asistirán.": "Nos encantaría contar contigo en este día tan especial."}</p>
          {/* PASES */}
          <div className="mt-8 rounded-2xl bg-stone-50 p-6">
            <p className="text-sm text-stone-500">Tu invitación incluye</p>
            <p className="mt-2 text-4xl font-bold text-stone-800">{passes}</p>
            <p className="mt-1 text-sm text-stone-500">{passes === 1 ? "pase" : "pases"}</p>
          </div>
          {/* SELECCIÓN DE PASES */}
          <div className="mt-8">
            <p className="text-sm font-medium text-stone-700">¿Cuántas personas asistirán?</p>
            <div className="mt-4 flex items-center justify-center gap-5">
              <button type="button" disabled={selectedPasses <= 1 || loading} onClick={() => setSelectedPasses((value) => Math.max(1, value - 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-lg transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40">
                −
              </button>
              <span className="min-w-10 text-center text-3xl font-semibold text-stone-800">{selectedPasses}</span>
              <button type="button" disabled={selectedPasses >= passes || loading} onClick={() => setSelectedPasses((value) => Math.min(passes, value + 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-lg transition hover:bg-stone-50 disabled:cursor-not-allowed">
                +
              </button>
            </div>
          </div>
          {/* ERROR */}
          {error && (
            <div className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}
          {/* BOTONES */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button type="button" disabled={loading} onClick={handleConfirm} className="flex-1 rounded-full bg-stone-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Guardando..." : "✓ Confirmar asistencia"}
            </button>
            <button type="button" disabled={loading} onClick={handleDecline} className="flex-1 rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60">
              No podré asistir
            </button>
          </div>
        </div>
      </section>
    )
  }
}