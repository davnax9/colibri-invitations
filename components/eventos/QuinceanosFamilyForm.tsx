"use client"

type Props = {
  fatherName: string
  motherName: string
  godfatherName: string
  godmotherName: string
  familyMessage: string

  onFatherNameChange: (value: string) => void
  onMotherNameChange: (value: string) => void
  onGodfatherNameChange: (value: string) => void
  onGodmotherNameChange: (value: string) => void
  onFamilyMessageChange: (value: string) => void
}

export default function QuinceanosFamilyForm({
  fatherName,
  motherName,
  godfatherName,
  godmotherName,
  familyMessage,
  onFatherNameChange,
  onMotherNameChange,
  onGodfatherNameChange,
  onGodmotherNameChange,
  onFamilyMessageChange,
}: Props) {
  return (
    <section className="mt-8 rounded-2xl border border-[#E5E9E5]  p-5 sm:p-6">
      {/* =================================================== */}
      {/* HEADER                                              */}
      {/* =================================================== */}

      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F5D50]/10 text-lg text-[#C9A86A]">
            ❦
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#263832]">
              Padres y padrinos
            </h3>

            <p className="mt-0.5 text-sm text-[#687A72]">
              Agrega las personas a quienes deseas agradecer
              en la invitación.
            </p>
          </div>
        </div>
      </div>

      {/* =================================================== */}
      {/* PADRES                                              */}
      {/* =================================================== */}

      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A86A]">
            Padres
          </span>

          <div className="h-px flex-1 bg-[#E5E9E5]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nombre del padre
            </label>

            <input
              type="text"
              value={fatherName}
              onChange={(e) =>
                onFatherNameChange(e.target.value)
              }
              placeholder="Juan Pérez"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#B89455] focus:ring-2 focus:ring-[#B89455]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nombre de la madre
            </label>

            <input
              type="text"
              value={motherName}
              onChange={(e) =>
                onMotherNameChange(e.target.value)
              }
              placeholder="María López"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#B89455] focus:ring-2 focus:ring-[#B89455]/20"
            />
          </div>
        </div>
      </div>

      {/* =================================================== */}
      {/* PADRINOS                                            */}
      {/* =================================================== */}

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A86A]">
            Padrinos
          </span>

          <div className="h-px flex-1 bg-[#E5E9E5]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nombre del padrino
            </label>

            <input
              type="text"
              value={godfatherName}
              onChange={(e) =>
                onGodfatherNameChange(e.target.value)
              }
              placeholder="Carlos Ramírez"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#B89455] focus:ring-2 focus:ring-[#B89455]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nombre de la madrina
            </label>

            <input
              type="text"
              value={godmotherName}
              onChange={(e) =>
                onGodmotherNameChange(e.target.value)
              }
              placeholder="Ana Ramírez"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#B89455] focus:ring-2 focus:ring-[#B89455]/20"
            />
          </div>
        </div>
      </div>

      {/* =================================================== */}
      {/* MENSAJE FAMILIAR                                    */}
      {/* =================================================== */}

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A86A]">
            Mensaje familiar
          </span>

          <div className="h-px flex-1 bg-[#E5E9E5]" />
        </div>

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Mensaje de agradecimiento
        </label>

        <textarea
          value={familyMessage}
          onChange={(e) =>
            onFamilyMessageChange(e.target.value)
          }
          rows={4}
          placeholder="Con mucho cariño agradezco a mis padres y padrinos por acompañarme y ser parte de este momento tan especial..."
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#B89455] focus:ring-2 focus:ring-[#B89455]/20"
        />

        <p className="mt-2 text-xs text-[#687A72]">
          Este mensaje aparecerá junto con los nombres
          en la invitación.
        </p>
      </div>
    </section>
  )
}