"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { updateUserStatus } from "@/actions/user-actions"

type Props = {
  userId: string
  currentStatus: boolean
}

export default function UserStatusSelector({userId,currentStatus}: Props) {
  const [active, setActive] = useState(currentStatus)
  const [loading, setLoading] = useState(false)

  async function handleChange(value: boolean) {
    if (loading || value === active) return

    const previousValue = active

    setActive(value)
    setLoading(true)

    const result = await updateUserStatus({
      userId,
      active: value,
    })

    setLoading(false)

    if (!result.success) {
      setActive(previousValue)
      toast.error(result.error)
      return
    }

    toast.success(value ? "Usuario activado correctamente" : "Usuario desactivado correctamente")
  }

  return (
    <select value={active ? "ACTIVE" : "INACTIVE"} disabled={loading} onChange={(event) => handleChange(event.target.value === "ACTIVE")}
      className={`rounded-lg border px-3 py-2 text-xs font-semibold outline-none ${active ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      <option value="ACTIVE">Activo</option>
      <option value="INACTIVE">Inactivo</option>
    </select>
  )
}