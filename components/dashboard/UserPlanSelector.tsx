"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { updateUserPlan } from "@/actions/user-actions"

type Props = {
  userId: string
  currentPlan: "BASIC" | "PRO"
}

export default function UserPlanSelector({
  userId,
  currentPlan,
}: Props) {
  const [plan, setPlan] = useState(currentPlan)
  const [loading, setLoading] = useState(false)

  async function handleChange(newPlan: "BASIC" | "PRO") {
    if (loading || newPlan === plan) return

    const previousPlan = plan

    setPlan(newPlan)
    setLoading(true)

    const result = await updateUserPlan({
      userId,
      plan: newPlan,
    })

    setLoading(false)

    if (!result.success) {
      setPlan(previousPlan)
      toast.error(result.error)
      return
    }

    toast.success(
      `Plan actualizado a ${newPlan === "PRO" ? "PRO" : "BASIC"}`
    )
  }

  return (
    <select
      value={plan}
      disabled={loading}
      onChange={(event) =>
        handleChange(event.target.value as "BASIC" | "PRO")
      }
      className={`rounded-lg border px-3 py-2 text-xs font-semibold outline-none transition ${
        plan === "PRO"
          ? "border-amber-200 bg-amber-50 text-amber-700"
          : "border-slate-200 bg-slate-50 text-slate-600"
      } disabled:cursor-not-allowed disabled:opacity-60`}
    >
      <option value="BASIC">BASIC</option>
      <option value="PRO">PRO</option>
    </select>
  )
}