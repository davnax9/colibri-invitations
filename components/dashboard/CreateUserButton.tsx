"use client"

import { useState } from "react"
import CreateUserModal from "./CreateUserModal"

export default function CreateUserButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#244b40]"
      >
        <span className="text-lg">
          +
        </span>

        Nuevo usuario
      </button>

      {open && (
        <CreateUserModal
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}