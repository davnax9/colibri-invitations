import { requireAuth } from "@/utils/auth"
import { prisma } from "@/utils/prisma"
import { redirect } from "next/navigation"

import UserPlanSelector from "@/components/dashboard/UserPlanSelector"
import UserStatusSelector from "@/components/dashboard/UserStatusSelector"
import UserActions from "@/components/dashboard/UserActions"
import CreateUserButton from "@/components/dashboard/CreateUserButton"

export default async function UsersPage() {
  const session = await requireAuth()

  if (session.user.role !== "ADMIN") {
    redirect("/dashboard")
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      events: {
        select: {
          id: true,
          name: true,
          eventDate: true,
          expiresAt: true,
        },
      },
    },
  })

  const totalUsers = users.length
  const activeUsers = users.filter((user) => user.active).length
  const proUsers = users.filter((user) => user.plan === "PRO").length
  const basicUsers = users.filter((user) => user.plan === "BASIC").length

  return (
    <main className="min-h-screen bg-[#F7F8F6]">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
      <section className="relative overflow-hidden bg-[#2F5D50]">
        {/* Decoraciones */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#A8C3A0]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#D6B98C]/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Información */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  Administración
                </span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="text-xs text-white/60">
                  Panel de control
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Usuarios
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                Administra las cuentas, planes, estados y acceso de los clientes
                de Colibrí.
              </p>
            </div>
            {/* Acción */}
            <CreateUserButton />
          </div>
          {/* Resumen */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Total */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                Usuarios
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                {totalUsers}
              </p>
            </div>
            {/* Activos */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#A8C3A0]" />
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Activos
                </p>
              </div>
              <p className="mt-2 text-2xl font-bold text-white">
                {activeUsers}
              </p>
            </div>
            {/* PRO */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                Plan PRO
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                {proUsers}
              </p>
            </div>
            {/* BASIC */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                Plan BASIC
              </p>
              <p className="mt-2 text-2xl font-bold text-white">
                {basicUsers}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===================================================== */}
      {/* CONTENIDO */}
      {/* ===================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Encabezado */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A9A8F]">
              Gestión
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Cuentas registradas
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Administra el acceso y las características disponibles para cada
              usuario.
            </p>
          </div>
          <div className="text-sm text-slate-400">
            {totalUsers} {totalUsers === 1 ? "cuenta" : "cuentas"}
          </div>
        </div>
        {/* ===================================================== */}
        {/* TABLA */}
        {/* ===================================================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-[#F8F9F7]">
                <tr>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Usuario
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Rol
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Plan
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Estado
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Eventos
                  </th>
                  <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="group transition-colors hover:bg-[#F8FAF8]"
                  >
                    {/* USUARIO */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7EFE9] text-sm font-bold text-[#2F5D50]">
                          {user.name
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-slate-800">
                            {user.name}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* ROL */}
                    <td className="px-5 py-5">
                      {user.role === "ADMIN" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D6B98C]/40 bg-[#FBF7EF] px-3 py-1 text-xs font-semibold text-[#8B6B3F]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D6B98C]" />
                          Administrador
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          Cliente
                        </span>
                      )}
                    </td>
                    {/* PLAN */}
                    <td className="px-5 py-5">
                      <UserPlanSelector
                        userId={user.id}
                        currentPlan={user.plan}
                      />
                    </td>
                    {/* ESTADO */}
                    <td className="px-5 py-5">
                      <UserStatusSelector
                        userId={user.id}
                        currentStatus={user.active}
                      />
                    </td>
                    {/* EVENTOS */}
                    <td className="px-5 py-5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F4F1] text-sm">
                          ✦
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700">
                            {user.events.length}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {user.events.length === 1
                              ? "evento"
                              : "eventos"}
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* ACCIONES */}
                    <td className="px-5 py-5 text-right">
                      <UserActions
                        userId={user.id}
                        userName={user.name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* SIN USUARIOS */}
          {users.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7EFE9] text-2xl">
                ✦
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-700">
                No existen usuarios registrados
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Crea el primer usuario para comenzar a administrar Colibrí.
              </p>
              <div className="mt-5">
                <CreateUserButton />
              </div>
            </div>
          )}
        </div>
        {/* Nota */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#DCE7DF] bg-[#F3F7F4] px-4 py-3">
          <span className="mt-0.5 text-[#2F5D50]">
            ⓘ
          </span>
          <p className="text-xs leading-5 text-[#62756A]">
            Los cambios de plan y estado se aplican inmediatamente. Los
            permisos disponibles para cada usuario dependen de su plan actual.
          </p>
        </div>
      </div>
    </main>
  )
}