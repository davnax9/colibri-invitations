"use client"

import { useState } from "react"
import ContactModal from "./ContactModal"

type Props = {
  initialPlan?: "BASIC" | "PRO"
  children?: React.ReactNode
  className?: string
}

export default function ContactButton({initialPlan = "PRO",children = "¿Tienes dudas? Contáctanos",className}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className ?? "mt-10 inline-flex items-center justify-center rounded-xl border border-[#DCE4DF] bg-white px-7 py-3.5 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FAF8F3] hover:shadow-md"}>
        {children}
      </button>

      {open && (
        <ContactModal initialPlan={initialPlan} onClose={() => setOpen(false)} />
      )}
    </>
  )
}