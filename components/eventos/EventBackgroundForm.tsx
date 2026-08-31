"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { updateEventBackground } from "@/actions/event-actions"
import { backgroundTextures } from "@/utils/background-textures"

type Props = {
  eventId: string
  plan: string
  backgroundEnabled: boolean
  backgroundTexture: string | null
  backgroundOpacity: number
  isAdmin?: boolean
}

const opacityOptions = [10, 20, 30, 40]

export default function EventBackgroundForm({
  eventId,
  plan,
  backgroundEnabled,
  backgroundTexture,
  backgroundOpacity,
  isAdmin = false,
}: Props) {
  const isPro = plan === "PRO" || isAdmin

  const [enabled, setEnabled] = useState(
    backgroundEnabled
  )

  const [selectedTexture, setSelectedTexture] = useState(
    backgroundTexture
  )

  const [opacity, setOpacity] = useState(
    backgroundOpacity || 100
  )

  const [loading, setLoading] = useState(false)

  async function handleSave() {
    if (!isPro) {
      toast.error(
        "El fondo personalizado está disponible únicamente en el plan PRO."
      )
      return
    }

    setLoading(true)

    const result = await updateEventBackground({
      eventId,
      enabled,
      texture: enabled ? selectedTexture : null,
      opacity,
    })

    if (!result.success) {
      toast.error(result.error)
      setLoading(false)
      return
    }

    toast.success("Fondo de invitación actualizado")
    setLoading(false)
  }

  function handleEnabledChange(value: boolean) {
    setEnabled(value)

    if (value && !selectedTexture) {
      setSelectedTexture(backgroundTextures[0].image)
    }
  }

  if (!isPro) {
    return (
      <div className="rounded-2xl border border-[#E5E9E5] bg-[#FAF8F3] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A86A]/15 text-lg">
            🔒
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-[#263832]">
              Fondo personalizado
            </h3>

            <p className="mt-1 text-sm leading-5 text-[#687A72]">
              Personaliza el fondo de tu invitación utilizando
              texturas elegantes y diferentes niveles de opacidad.
            </p>

            <span className="mt-3 inline-flex rounded-full bg-[#C9A86A]/15 px-3 py-1 text-xs font-semibold text-[#8A6A32]">
              Disponible en PRO
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-w-0 space-y-6">

      {/* ===================================================== */}
      {/* ENCABEZADO */}
      {/* ===================================================== */}

      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-semibold text-[#263832]">
              Fondo de invitación
            </h3>

            <p className="mt-1 text-sm leading-5 text-[#687A72]">
              Agrega una textura sutil al fondo de toda tu
              invitación.
            </p>
          </div>

          {/* SWITCH */}

          <button
            type="button"
            onClick={() =>
              handleEnabledChange(!enabled)
            }
            disabled={loading}
            aria-pressed={enabled}
            className={`relative flex h-6 w-11 shrink-0 items-center rounded-full transition ${
              enabled
                ? "bg-[#2F5D50]"
                : "bg-slate-300"
            } disabled:opacity-50`}
          >
            <span
              className={`h-5 w-5 rounded-full bg-white shadow-sm transition ${
                enabled
                  ? "translate-x-5"
                  : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-400">
          {enabled
            ? "El fondo personalizado está activado."
            : "La invitación utilizará el color del diseño seleccionado."}
        </p>
      </div>

      {/* ===================================================== */}
      {/* CONFIGURACIÓN */}
      {/* ===================================================== */}

      {enabled && (
        <div className="space-y-6">

          {/* ================================================= */}
          {/* TEXTURAS */}
          {/* ================================================= */}

          <div>
            <label className="mb-3 block text-sm font-medium text-slate-700">
              Selecciona una textura
            </label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {backgroundTextures.map((texture) => {
                const selected =
                  selectedTexture === texture.image

                return (
                  <button
                    key={texture.id}
                    type="button"
                    onClick={() =>
                      setSelectedTexture(texture.image)
                    }
                    disabled={loading}
                    className={`group overflow-hidden rounded-xl border-2 text-left transition ${
                      selected
                        ? "border-[#2F5D50] ring-2 ring-[#2F5D50]/10"
                        : "border-slate-200 hover:border-slate-300"
                    } disabled:opacity-50`}
                  >
                    {/* PREVIEW */}

                    <div
                      className="aspect-square w-full bg-[#F5F2EB]"
                      style={{
                        backgroundImage: `url(${texture.image})`,
                      }}
                    />

                    {/* NOMBRE */}

                    <div className="bg-white px-2 py-2">
                      <p className="truncate text-xs font-medium text-slate-700">
                        {texture.name}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ================================================= */}
          {/* OPACIDAD */}
          {/* ================================================= */}

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="background-opacity"
                className="text-sm font-medium text-slate-700"
              >
                Opacidad
              </label>

              <span className="text-sm font-semibold text-[#2F5D50]">
                {opacity}%
              </span>
            </div>

            <input
              id="background-opacity"
              type="range"
              min={10}
              max={40}
              step={5}
              value={opacity}
              onChange={(e) =>
                setOpacity(Number(e.target.value))
              }
              disabled={loading}
              className="mt-3 w-full accent-[#2F5D50]"
            />

            <div className="mt-1 flex justify-between text-[11px] text-slate-400">
              <span>Sutil</span>
              <span>Intenso</span>
            </div>
          </div>

          {/* ================================================= */}
          {/* PREVISUALIZACIÓN */}
          {/* ================================================= */}

          {selectedTexture && (
            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">
                Previsualización
              </p>

              <div className="relative h-32 overflow-hidden rounded-xl border border-slate-200 bg-[#F5F2EB]">

                {/* TEXTURA */}

                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${selectedTexture})`,
                    opacity: opacity / 100,
                  }}
                />

                {/* CONTENIDO DE EJEMPLO */}

                <div className="relative flex h-full flex-col items-center justify-center">
                  <p className="font-serif text-xl text-[#2F5D50]">
                    Nuestra celebración
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Así se verá aplicada la textura
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ================================================= */}
          {/* GUARDAR */}
          {/* ================================================= */}

          <div className="flex justify-end border-t border-[#E5E9E5] pt-5">
            <button
              type="button"
              onClick={handleSave}
              disabled={
                loading ||
                (enabled && !selectedTexture)
              }
              className="rounded-xl bg-[#2F5D50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244A40] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Guardando..."
                : "Guardar fondo"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}