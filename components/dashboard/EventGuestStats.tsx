type Props = {
  stats: {
    totalGuests: number
    confirmedGuests: number
    pendingGuests: number
    declinedGuests: number
    totalPasses: number
    confirmedPasses: number
    responseRate: number
  }
}

export default function EventGuestStats({ stats }: Props) {
  const passesRate = stats.totalPasses > 0 ? Math.round((stats.confirmedPasses / stats.totalPasses) * 100) : 0
  const respondedGuests = stats.confirmedGuests + stats.declinedGuests

  return (
    <div className="space-y-6">
      {/* GRÁFICAS */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* RESPUESTAS */}
        <ProgressCard title="Confirmación de asistencia" description="Invitados que ya respondieron" percentage={stats.responseRate} current={respondedGuests} total={stats.totalGuests}
          currentLabel="respondieron" pendingLabel={`${stats.pendingGuests} pendientes`}
        />

        {/* PASES */}
        <ProgressCard title="Pases confirmados" description="Personas que han confirmado su asistencia" percentage={passesRate} current={stats.confirmedPasses} total={stats.totalPasses}
          currentLabel="confirmados" pendingLabel={`${Math.max(stats.totalPasses - stats.confirmedPasses, 0)} disponibles`}
        />
      </div>
    </div>
  )
}

function ProgressCard({title,description,percentage,current,total,currentLabel,pendingLabel}: {title: string,description: string,percentage: number,current: number,total: number, currentLabel: string,pendingLabel: string}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        <p className="text-2xl font-bold text-slate-800">{percentage}%</p>
      </div>
      {/* BARRA */}
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-slate-800 transition-all duration-700" style={{width: `${percentage}%`}}/>
      </div>
      {/* INFORMACIÓN */}
      <div className="mt-3 flex justify-between text-xs text-slate-400">
        <span>{current} {currentLabel}</span>
        <span>{total} total</span>
      </div>
      <p className="mt-2 text-xs text-slate-400">{pendingLabel}</p>
    </div>
  )
}