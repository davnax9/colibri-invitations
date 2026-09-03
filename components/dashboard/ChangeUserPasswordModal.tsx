"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { updateUserPassword } from "@/actions/user-actions"

type Props = {
  userId: string
  userName: string
  onClose: () => void
}

export default function ChangeUserPasswordModal({userId,userName,onClose}: Props) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError("")

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.")
      return
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    setLoading(true)

    const result = await updateUserPassword({userId, password})

    setLoading(false)

    if (!result.success) {
      setError(result.error)
      return
    }

    toast.success("Contraseña actualizada correctamente.")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Cambiar contraseña</h2>
            <p className="mt-1 text-sm text-slate-500">Usuario:{" "}<span className="font-medium text-slate-700">{userName}</span></p>
          </div>
          <button type="button" onClick={onClose} disabled={loading} className="text-2xl text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nueva contraseña</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} required placeholder="Mínimo 8 caracteres"
              className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Confirmar contraseña</label>
            <input type="password" value={confirmPassword} onChange={(event) =>setConfirmPassword(event.target.value)} minLength={8} required placeholder="Repite la contraseña"
              className="w-full text-slate-800 bg-white rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          {error && (
            <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} disabled={loading} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Cancelar
            </button>
            <button type="submit" disabled={loading} className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-60">
              {loading ? "Guardando..." : "Cambiar contraseña"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}