"use client"

import { useState } from "react"
import Link from "next/link"
import ContactButton from "./ContactButton"

const celebrations = [
  {
    icon: "✝",
    title: "Bautizos",
    description: "Diseños delicados y elegantes para celebrar este momento tan especial.",
    designs: [
      {
        name: "Angelical",
        image: "/templates/bautizo-angelical.png",
        href: "/invitacion/angel-zavala-chang",
      },
      {
        name: "Floral",
        image: "/templates/bautizo-floral.png",
        href: "/invitacion//angel-david-1",
      },
      {
        name: "Luxury",
        image: "/templates/bautizo-luxury.png",
        href: "/invitacion/abraham",
      },
      {
        name: "Elegante",
        image: "/templates/bautizo-elegante.png",
        href: "/invitacion/marlu",
      },
    ],
  },
  // {
  //   icon: "🕊",
  //   title: "Primeras comuniones",
  //   description: "Invitaciones creadas para acompañar una celebración llena de fe y alegría.",
  //   designs: [
  //     {
  //       name: "Elegant",
  //       image: "/templates/comunion-elegant.png",
  //       href: "/invitacion/mateo",
  //     },
  //     {
  //       name: "Classic",
  //       image: "/templates/comunion-classic.png",
  //       href: "/invitacion/demo-comunion-classic",
  //     },
  //     {
  //       name: "Floral",
  //       image: "/templates/comunion-floral.png",
  //       href: "/invitacion/demo-comunion-floral",
  //     },
  //   ],
  // },
]

export default function OtherCelebrationsModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BOTÓN */}
      <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-xl border border-[#DCE4DF] bg-white px-6 py-3 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F5F2EB] hover:shadow-md">
        Explorar otras celebraciones<span className="ml-2">→</span>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#263832]/60 px-4 py-6 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#FAF8F3] p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
            {/* CERRAR */}
            <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#687A72] shadow-sm transition hover:bg-[#F5F2EB] hover:text-[#263832]" aria-label="Cerrar">
              ×
            </button>
            {/* ENCABEZADO */}
            <div className="mx-auto max-w-2xl pr-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">Más celebraciones</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832]">También celebramos contigo</h2>
              <p className="mt-4 text-sm leading-6 text-[#687A72] sm:text-base">Descubre nuestros diseños para bautizos y primeras comuniones.</p>
            </div>
            {/* CATEGORÍAS */}
            <div className="mt-5 grid gap-8 md:grid-cols-1">
              {celebrations.map((celebration) => (
                <div key={celebration.title} className="rounded-3xl border border-[#E5E9E5] bg-white p-5 sm:p-6">
                  {/* TÍTULO */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F5D50]/10 text-xl text-[#2F5D50]">
                      {celebration.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#263832]">{celebration.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#687A72]">{celebration.description}</p>
                    </div>
                  </div>
                  {/* DISEÑOS */}
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    {celebration.designs.map((design) => (
                      <Link key={design.name} href={design.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="group overflow-hidden rounded-2xl border border-[#E5E9E5] bg-[#FAF8F3]">
                        <div className="aspect-[3/4] overflow-hidden">
                          <img src={design.image} alt={`${celebration.title} ${design.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
                        </div>
                        <div className="px-2 py-2 text-center">
                          <p className="text-xs font-semibold text-[#2F5D50]">{design.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* CTA */}
                  <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/login" onClick={() => setOpen(false)} className="flex w-full sm:w-auto items-center justify-center rounded-xl border border-[#2F5D50] bg-white px-5 py-3.5 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-md">
                      Crear mi invitación <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <ContactButton initialPlan="BASIC" className="group flex w-full sm:w-auto items-center justify-center rounded-xl border border-[#2F5D50] bg-white px-5 py-3.5 text-sm font-semibold text-[#2F5D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-md">
                      Algun otro evento, contactanos<span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </ContactButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}