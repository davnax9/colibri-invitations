"use client"

import { useState } from "react"
import ChangeUserPasswordModal from "./ChangeUserPasswordModal"

type Props = {
  userId: string
  userName: string
}

export default function UserActions({
  userId,
  userName,
}: Props) {
  const [passwordOpen, setPasswordOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setPasswordOpen(true)}
        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
      >
        🔑 Contraseña
      </button>

      {passwordOpen && (
        <ChangeUserPasswordModal
          userId={userId}
          userName={userName}
          onClose={() => setPasswordOpen(false)}
        />
      )}
    </>
  )
}