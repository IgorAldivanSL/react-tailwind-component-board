
import Badge from './Badge'

const trends = {
  positive: {
    badge: 'success',
    icon: '↑',
    label: 'Alta',
  },
  negative: {
    badge: 'warning',
    icon: '↓',
    label: 'Queda',
  },
  neutral: {
    badge: 'info',
    icon: '→',
    label: 'Estável',
  },
}

function KPICard({
  label,
  value,
  change,
  comparison = 'em relação ao mês anterior',
  icon = '◈',
  trend = 'positive',
}) {
  const currentTrend = trends[trend] ?? trends.neutral

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-xl text-blue-700">
          <span aria-hidden="true">{icon}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge variant={currentTrend.badge}>
          {currentTrend.icon} {change}
        </Badge>

        <span className="text-xs text-slate-500">
          {comparison}
        </span>
      </div>
    </article>
  )
}

export default KPICard
