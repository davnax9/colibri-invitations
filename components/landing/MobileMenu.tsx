"use client"

import { useState } from "react"
import Link from "next/link"
import { Bars3Icon,XMarkIcon} from "@heroicons/react/24/outline"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    function closeMenu() {
        setOpen(false)
    }

    return ( 
        <div className="md:hidden">
            {/* BOTÓN HAMBURGUESA */}
            <button type="button" onClick={() => setOpen((current) => !current)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-xl text-[#2F5D50] transition hover:bg-[#2F5D50]/5">
                {open ? ( <XMarkIcon className="h-6 w-6" />) : ( <Bars3Icon className="h-6 w-6" />)} 
            </button>
            {/* MENÚ MOBILE */}
            {open && (
                <div className="absolute left-0 right-0 top-full z-50 border-t border-[#E5E9E5] bg-[#FAF8F3] shadow-2xl">
                    <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
                        <a href="#diseños" onClick={closeMenu} className="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/10">
                            Diseños
                        </a>
                        <a href="#planes" onClick={closeMenu} className="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/10">
                            Planes
                        </a>
                        <Link href="/login" onClick={closeMenu} className="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#2F5D50] transition hover:bg-[#2F5D50]/10">
                            Iniciar sesión
                        </Link>
                        <div className="my-3 h-px bg-[#E5E9E5]" />
                        <Link href="/login" onClick={closeMenu} className="inline-flex items-center justify-center rounded-xl bg-[#2F5D50] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#244A40]">
                            Crear mi invitación
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    )
}
