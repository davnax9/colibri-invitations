"use client"

import { useState } from "react"
import ContactModal from "./ContactModal"

export default function ContactButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="mt-10 inline-flex items-center justify-center rounded-xl border border-[#DCE4DF] bg-white px-7 py-3.5 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FAF8F3] hover:shadow-md">
        ¿Tienes dudas? Contáctanos
      </button>

      {open && (<ContactModal onClose={() => setOpen(false)} />)}
    </>
  )
}