"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LogoutButton from "./LogoutButton"

type Props = {
  user: {
    name?: string | null
    email?: string | null
    role: "ADMIN" | "CLIENT"
  }
}

export default function DashboardNavbar({ user }: Props) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return pathname === "/dashboard"
    }

    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E9E5] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}

          <Link
            href="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F5D50] shadow-sm">
              <span className="text-xl">
                🐦
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-tight text-[#263832]">
                Colibrí
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A9A8F]">
                Invitaciones digitales
              </p>
            </div>
          </Link>

          {/* NAVEGACIÓN */}

          <nav className="hidden items-center gap-1 md:flex">

            <Link
              href="/dashboard"
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                isActive("/dashboard")
                  ? "bg-[#2F5D50]/10 text-[#2F5D50]"
                  : "text-[#687A72] hover:bg-[#FAF8F3] hover:text-[#2F5D50]"
              }`}
            >
              <span className="mr-2">📅</span>
              Mis eventos
            </Link>

            {/* SOLO ADMIN */}

            {user.role === "ADMIN" && (
              <Link
                href="/dashboard/usuarios"
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  isActive("/dashboard/usuarios")
                    ? "bg-[#2F5D50]/10 text-[#2F5D50]"
                    : "text-[#687A72] hover:bg-[#FAF8F3] hover:text-[#2F5D50]"
                }`}
              >
                <span className="mr-2">👥</span>
                Usuarios
              </Link>
            )}

          </nav>

          {/* USUARIO + LOGOUT */}

          <div className="hidden items-center gap-3 md:flex">

            <div className="hidden text-right lg:block">
              <p className="text-sm font-semibold text-[#263832]">
                {user.name}
              </p>

              <p className="text-xs text-[#8A9A8F]">
                {user.role === "ADMIN"
                  ? "Administrador"
                  : "Cliente"}
              </p>
            </div>

            <div className="h-8 w-px bg-[#E5E9E5]" />

            <LogoutButton />

          </div>

          {/* MOBILE */}

          <div className="md:hidden">
            <MobileMenu user={user} pathname={pathname} />
          </div>

        </div>

      </div>
    </header>
  )
}


/* =========================================================
   MENÚ MOBILE
========================================================= */

function MobileMenu({
  user,
  pathname,
}: {
  user: Props["user"]
  pathname: string
}) {
  const [open, setOpen] = useState(false)

  const active = (path: string) => {
    if (path === "/dashboard") {
      return pathname === "/dashboard"
    }

    return pathname.startsWith(path)
  }

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen((value: boolean) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE4DF] text-[#2F5D50] transition hover:bg-[#FAF8F3]"
        aria-label="Abrir menú"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-[#E5E9E5] bg-white p-2 shadow-xl">

          {/* USUARIO */}

          <div className="border-b border-[#E5E9E5] px-4 py-3">
            <p className="text-sm font-semibold text-[#263832]">
              {user.name}
            </p>

            <p className="text-xs text-[#8A9A8F]">
              {user.role === "ADMIN"
                ? "Administrador"
                : "Cliente"}
            </p>
          </div>

          {/* EVENTOS */}

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#687A72] hover:bg-[#FAF8F3]"
          >
            📅
            Mis eventos
          </Link>

          {/* USUARIOS */}

          {user.role === "ADMIN" && (
            <Link
              href="/dashboard/usuarios"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                active("/dashboard/usuarios")
                  ? "bg-[#2F5D50]/10 text-[#2F5D50]"
                  : "text-[#687A72] hover:bg-[#FAF8F3]"
              }`}
            >
              👥
              Usuarios
            </Link>
          )}

          <div className="my-2 border-t border-[#E5E9E5]" />

          <div className="px-2 py-1">
            <LogoutButton />
          </div>

        </div>
      )}

    </div>
  )
}