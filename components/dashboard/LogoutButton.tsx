"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton() {
  async function handleLogout() {
    await signOut({
      callbackUrl: "/login",
    })
  }

  return (
    <button type="button" onClick={handleLogout} className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#687A72] transition hover:bg-red-50 hover:text-red-600">
      <span className="text-base transition group-hover:translate-x-0.5">↪</span>
      <span>Cerrar sesión</span>
    </button>
  )
}