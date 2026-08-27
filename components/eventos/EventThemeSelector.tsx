"use client"

import { useState } from "react"
import { toast } from "react-toastify"
import { invitationThemePresets } from "@/utils/invitation-themes"
import { updateEventTheme, updateEventThemeColors} from "@/actions/event-actions"
import { useRouter } from "next/navigation"
import { EventTheme } from "@/utils/types/invitation"

type Props = {
  eventId: string
  currentPreset: EventTheme | null
  plan: "BASIC" | "PRO"
}

export default function EventThemeSelector({eventId, currentPreset, plan}: Props) {
  const router = useRouter()
  const [selectedPreset, setSelectedPreset] = useState(currentPreset?.preset ?? "ELEGANT")
  const [loading, setLoading] = useState(false)
  const [customColors, setCustomColors] = useState({
    primaryColor: currentPreset?.primaryColor ?? "#292524",
    secondaryColor: currentPreset?.secondaryColor ?? "#78716c",
    accentColor: currentPreset?.accentColor ?? "#a8a29e",
    backgroundColor: currentPreset?.backgroundColor ?? "#fafaf9",
    surfaceColor: currentPreset?.surfaceColor ?? "#ffffff",
    textColor: currentPreset?.textColor ?? "#292524",
  })

  const canCustomizeColors = plan === "PRO"

  async function handleSelect(preset: string) {
    if (loading) return

    setSelectedPreset(preset)
    setLoading(true)

    const result = await updateEventTheme({eventId, preset})

    setLoading(false)

    if (!result.success) {
      setSelectedPreset(currentPreset?.preset ?? "ELEGANT")
      toast.error(result.error)
      return
    }

    toast.success("Tema actualizado correctamente")
    router.refresh()
  }

  async function handleSaveCustomColors() {
    if (loading) return

    // Protección adicional en frontend
    if (plan !== "PRO") {
      toast.info("La personalización de colores está disponible en el plan PRO.")
      return
    }

    setLoading(true)

    const result = await updateEventThemeColors({
      eventId,
      ...customColors,
    })

    setLoading(false)

    if (!result.success) {
      toast.error(result.error)
      return
    }

    setSelectedPreset("CUSTOM")

    toast.success("Personalización guardada correctamente")
    router.refresh()
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800">Apariencia de la invitación</h2>
        <p className="mt-1 text-sm text-slate-500">Selecciona el estilo visual que tendrá tu invitación.</p>
      </div>
      {/* TEMAS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(invitationThemePresets).map(([preset, theme]) => {
            const selected = selectedPreset === preset
            return (
              <button key={preset} type="button" onClick={() => handleSelect(preset)} disabled={loading} className={`group overflow-hidden rounded-2xl border text-left transition ${
                  selected ? "border-slate-800 ring-2 ring-slate-200" : "border-slate-200 hover:border-slate-400"}`}
              >
                {/* PREVIEW */}
                <div className="relative h-36 p-5" style={{backgroundColor: theme.backgroundColor}}>
                  <div className="mx-auto flex h-full max-w-45 flex-col items-center justify-center rounded-xl p-4 shadow-sm" style={{backgroundColor: theme.surfaceColor}}>
                    <div className="h-2 w-16 rounded-full" style={{backgroundColor: theme.primaryColor}}/>
                    <div className="mt-3 h-1.5 w-24 rounded-full" style={{backgroundColor: theme.secondaryColor}}/>
                    <div className="mt-4 h-2 w-8 rounded-full" style={{backgroundColor: theme.accentColor}}/>
                  </div>
                </div>
                {/* INFORMACIÓN */}
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-slate-800">{theme.name}</h3>{selected && (<span className="text-sm font-medium text-green-600">✓ Seleccionado</span>)}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{theme.description}</p>
                </div>
              </button>
            )
          }
        )}

        {/* PERSONALIZADO */}
        {plan === "PRO" && (
          <button type="button" onClick={() => { if (!canCustomizeColors) return setSelectedPreset("CUSTOM")}} disabled={loading || !canCustomizeColors} className={`group relative overflow-hidden rounded-2xl border text-left transition ${
            selectedPreset === "CUSTOM" ? "border-slate-800 ring-2 ring-slate-200" : "border-slate-200" } ${!canCustomizeColors? "cursor-not-allowed opacity-60": "hover:border-slate-400"}`}
          >
            <div className="relative h-36 p-5" style={{background: customColors.backgroundColor}}>
              {!canCustomizeColors && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                  🔒 PRO
                </div>
              )}
              <div className="mx-auto flex h-full max-w-45 flex-col items-center justify-center rounded-xl p-4 shadow-sm" style={{backgroundColor: customColors.surfaceColor}}>
                <div className="h-2 w-16 rounded-full" style={{backgroundColor: customColors.primaryColor}}/>
                <div className="mt-3 h-1.5 w-24 rounded-full" style={{backgroundColor: customColors.secondaryColor}}/>
                <div className="mt-4 h-2 w-8 rounded-full" style={{backgroundColor: customColors.accentColor}}/>
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-800">Personalizado</h3>
                {selectedPreset === "CUSTOM" && (<span className="text-sm font-medium text-green-600">✓ Seleccionado</span>)}
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500">Elige los colores de tu invitación.</p>
              <span className="mt-2 inline-block text-xs font-semibold text-amber-600">Plan PRO</span>
            </div>
          </button>
        )}

        {/* BLOQUEO BASIC */}
        {plan === "BASIC" && (
          <div className="overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50">
            <div className="flex h-36 items-center justify-center">
              <div className="text-center">
                <div className="text-3xl">🎨</div>
                <p className="mt-2 text-sm font-semibold text-slate-700">Colores personalizados</p>
                <p className="mt-1 text-xs text-slate-500">Disponible en PRO</p>
              </div>
            </div>
            <div className="bg-white p-4">
              <p className="text-xs leading-5 text-slate-500">Personaliza los colores de tu invitación con el plan PRO.</p>
            </div>
          </div>
        )}
      </div>
      {/* CONFIGURACIÓN DE COLORES */}
      {selectedPreset === "CUSTOM" && plan === "PRO" && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Personaliza los colores</h3>
            <p className="mt-1 text-sm text-slate-500">Elige los colores que quieres utilizar en tu invitación.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* COLOR PRINCIPAL */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Color principal</label>
              <div className="flex items-center gap-3">
                <input type="color" value={customColors.primaryColor} onChange={(e) => setCustomColors((current) => ({...current, primaryColor: e.target.value}))}className="h-10 w-14 cursor-pointer rounded border border-slate-300"/>
                <span className="text-sm text-slate-600">{customColors.primaryColor}</span>
              </div>
            </div>
            {/* COLOR SECUNDARIO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Color secundario</label>
              <div className="flex items-center gap-3">
                <input type="color" value={customColors.secondaryColor} onChange={(e) => setCustomColors((current) => ({...current, secondaryColor: e.target.value}))} className="h-10 w-14 cursor-pointer rounded border border-slate-300"/>
                <span className="text-sm text-slate-600">{customColors.secondaryColor}</span>
              </div>
            </div>
            {/* COLOR ACENTO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Color de acento</label>
              <div className="flex items-center gap-3">
                <input type="color" value={customColors.accentColor} onChange={(e) => setCustomColors((current) => ({...current, accentColor: e.target.value}))}className="h-10 w-14 cursor-pointer rounded border border-slate-300"/>
                <span className="text-sm text-slate-600">{customColors.accentColor}</span>
              </div>
            </div>
            {/* FONDO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Fondo
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customColors.backgroundColor}
                  onChange={(e) =>
                    setCustomColors((current) => ({
                      ...current,
                      backgroundColor: e.target.value,
                    }))
                  }
                  className="h-10 w-14 cursor-pointer rounded border border-slate-300"
                />

                <span className="text-sm text-slate-600">
                  {customColors.backgroundColor}
                </span>
              </div>
            </div>

            {/* SUPERFICIE */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Superficie
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customColors.surfaceColor}
                  onChange={(e) =>
                    setCustomColors((current) => ({
                      ...current,
                      surfaceColor: e.target.value,
                    }))
                  }
                  className="h-10 w-14 cursor-pointer rounded border border-slate-300"
                />

                <span className="text-sm text-slate-600">
                  {customColors.surfaceColor}
                </span>
              </div>
            </div>

            {/* TEXTO */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Texto
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customColors.textColor}
                  onChange={(e) =>
                    setCustomColors((current) => ({
                      ...current,
                      textColor: e.target.value,
                    }))
                  }
                  className="h-10 w-14 cursor-pointer rounded border border-slate-300"
                />

                <span className="text-sm text-slate-600">
                  {customColors.textColor}
                </span>
              </div>
            </div>

          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSaveCustomColors}
              disabled={loading}
              className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Guardando..." : "Guardar colores"}
            </button>
          </div>

        </div>
      )}

    </div>
  )
}