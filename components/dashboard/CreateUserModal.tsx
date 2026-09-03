"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { createUser } from "@/actions/user-actions"

type Props = {
  onClose: () => void
}

export default function CreateUserModal({ onClose }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"ADMIN" | "CLIENT">("CLIENT")
  const [plan, setPlan] = useState<"BASIC" | "PRO">("BASIC")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setError("")
    setLoading(true)

    const result = await createUser({name,email,password,role,plan})

    setLoading(false)

    if (!result.success) {
      setError(result.error)
      return
    }

    toast.success("Usuario creado correctamente.")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {/* HEADER */}
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Nuevo usuario</h2>
            <p className="mt-1 text-sm text-slate-500">Crea una cuenta para un nuevo cliente.</p>
          </div>
          <button type="button" onClick={onClose} disabled={loading} className="text-2xl text-slate-400 transition hover:text-slate-600">×</button>
        </div>
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          {/* NOMBRE */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Nombre</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Juan Pérez" required className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>
          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Correo electrónico</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="juan@email.com" required className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
          </div>
          {/* PASSWORD */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Contraseña inicial</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Mínimo 8 caracteres" minLength={8} required className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"/>
            <p className="mt-2 text-xs text-slate-400">El usuario podrá cambiarla posteriormente.</p>
          </div>
          {/* ROL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Rol</label>
            <select value={role} onChange={(event) => setRole(event.target.value as "ADMIN" | "CLIENT")} className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
              <option value="CLIENT">Cliente</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          {/* PLAN */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Plan</label>
            <select value={plan} onChange={(event) => setPlan(event.target.value as "BASIC" | "PRO")} className="w-full bg-white text-slate-800 rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200">
              <option value="BASIC">BASIC</option>
              <option value="PRO">PRO</option>
            </select>
          </div>
          {/* ERROR */}
          {error && (<div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>)}
          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} disabled={loading} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50">Cancelar</button>
            <button type="submit" disabled={loading} className="rounded-lg bg-[#2F5D50] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#244b40] disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Creando..." : "Crear usuario"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}