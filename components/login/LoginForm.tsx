
"use client"

import { FormEvent, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import PasswordRecoveryModal from "./PasswordRecoveryModal"

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [recoveryOpen, setRecoveryOpen] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError("")
    setLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (!result || result.error) {
      setError("Correo o contraseña incorrectos")
      setLoading(false)
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAF8F3] px-4 py-8 sm:px-6 lg:px-8">

        {/* =====================================================
            DECORACIONES
        ===================================================== */}

        <div className="absolute -left-40 -top-40 h-120 w-120 rounded-full bg-[#8FA89D]/15 blur-3xl" />

        <div className="absolute -bottom-48 -right-40 h-128 w-lg rounded-full bg-[#C9A86A]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F5D50]/5 blur-3xl" />

        {/* =====================================================
            CONTENEDOR PRINCIPAL
        ===================================================== */}

        <div className="relative w-full max-w-5xl">

          <div className="overflow-hidden rounded-4xl border border-[#E5E9E5] bg-white shadow-2xl shadow-[#263832]/10">

            <div className="grid lg:grid-cols-2">

              {/* =================================================
                  LADO IZQUIERDO
              ================================================= */}

              <div className="relative flex min-h-130 flex-col justify-between overflow-hidden bg-[#2F5D50] p-8 sm:p-12 lg:p-14">

                {/* DECORACIONES */}

                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8FA89D]/20" />

                <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#C9A86A]/10" />

                <div className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/5" />

                {/* CONTENIDO */}

                <div className="relative">

                  {/* LOGO */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl shadow-lg ring-1 ring-white/10 backdrop-blur">
                    🪶
                  </div>

                  <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Colibrí
                  </h1>

                  <p className="mt-4 max-w-sm text-base leading-7 text-[#D7E3DE]">
                    Invitaciones digitales diseñadas para
                    celebrar los momentos que realmente
                    importan.
                  </p>

                </div>

                {/* FRASE */}

                <div className="relative mt-12">

                  <div className="mb-5 flex gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                      💍
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                      👑
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
                      ✨
                    </div>

                  </div>

                  <p className="max-w-sm text-sm leading-6 text-[#D7E3DE]">
                    Crea, personaliza y comparte una invitación
                    que tus invitados recordarán.
                  </p>

                </div>

                {/* FOOTER */}

                <p className="relative mt-10 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  Invitaciones digitales
                </p>

              </div>

              {/* =================================================
                  LADO DERECHO
              ================================================= */}

              <div className="flex min-h-130 items-center bg-white p-8 sm:p-12 lg:p-14">

                <div className="w-full">

                  {/* HEADER */}

                  <div className="mb-9">

                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8A9A8F]">
                      Acceso
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#263832] sm:text-4xl">
                      Bienvenido de nuevo
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-[#687A72]">
                      Ingresa a tu cuenta para administrar
                      tus eventos, invitados e invitaciones.
                    </p>

                  </div>

                  {/* FORMULARIO */}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    {/* EMAIL */}

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2.5 block text-sm font-semibold text-[#3D5149]"
                      >
                        Correo electrónico
                      </label>

                      <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#8A9A8F]">
                          ✉
                        </span>

                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          required
                          autoComplete="email"
                          placeholder="correo@ejemplo.com"
                          className="h-14 w-full rounded-xl border border-[#DCE4DF] bg-[#FCFDFC] pl-12 pr-4 text-base text-[#263832] outline-none transition placeholder:text-[#A0ACA6] focus:border-[#2F5D50] focus:bg-white focus:ring-4 focus:ring-[#2F5D50]/10"
                        />

                      </div>

                    </div>

                    {/* PASSWORD */}

                    <div>

                      <label
                        htmlFor="password"
                        className="mb-2.5 block text-sm font-semibold text-[#3D5149]"
                      >
                        Contraseña
                      </label>

                      <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base">
                          🔒
                        </span>

                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(event) =>
                            setPassword(event.target.value)
                          }
                          required
                          autoComplete="current-password"
                          placeholder="••••••••"
                          className="h-14 w-full rounded-xl border border-[#DCE4DF] bg-[#FCFDFC] pl-12 pr-4 text-base text-[#263832] outline-none transition placeholder:text-[#A0ACA6] focus:border-[#2F5D50] focus:bg-white focus:ring-4 focus:ring-[#2F5D50]/10"
                        />

                      </div>

                    </div>

                    {/* ERROR */}

                    {error && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-4">

                        <span className="mt-0.5">
                          ⚠️
                        </span>

                        <p className="text-sm font-medium text-red-600">
                          {error}
                        </p>

                      </div>
                    )}

                    {/* BOTÓN */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full rounded-xl bg-[#2F5D50] px-5 py-4 text-base font-semibold text-white shadow-lg shadow-[#2F5D50]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#244A40] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >

                      <span className="flex items-center justify-center gap-3">

                        {loading ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Ingresando...
                          </>
                        ) : (
                          <>
                            Iniciar sesión

                            <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}

                      </span>

                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setRecoveryOpen(true)}
                        className="text-sm font-medium text-[#2F5D50] transition hover:text-[#244A40] hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>

                  </form>

                  {/* SEPARADOR */}

                  <div className="mt-9 flex items-center gap-4">

                    <div className="h-px flex-1 bg-[#E5E9E5]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A0ACA6]">
                      Colibrí
                    </span>

                    <div className="h-px flex-1 bg-[#E5E9E5]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* FOOTER */}

          <p className="mt-6 text-center text-xs text-[#8A9A8F]">
            Crea momentos que perduren para siempre ✨
          </p>

        </div>

      </main>

      {recoveryOpen && (<PasswordRecoveryModal onClose={() => setRecoveryOpen(false)}/>)}
    </>
  )
}