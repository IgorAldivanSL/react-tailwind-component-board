
import KPICard from '../components/KPICard'

const indicators = [
  {
    label: 'Receita total',
    value: 'R$ 48.250',
    change: '+12,8%',
    comparison: 'vs. mês anterior',
    icon: '↗',
    trend: 'positive',
  },
  {
    label: 'Usuários ativos',
    value: '2.840',
    change: '+8,2%',
    comparison: 'vs. mês anterior',
    icon: '◎',
    trend: 'positive',
  },
  {
    label: 'Despesas',
    value: 'R$ 12.430',
    change: '+4,5%',
    comparison: 'vs. mês anterior',
    icon: '↓',
    trend: 'negative',
  },
  {
    label: 'Taxa de conversão',
    value: '3,6%',
    change: '0,0%',
    comparison: 'vs. mês anterior',
    icon: '◈',
    trend: 'neutral',
  },
]

function KPICardDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          06. KPI Card
        </h2>
        <p className="mt-2 text-slate-500">
          Indicadores de desempenho com valores, tendências e comparações.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {indicators.map((indicator) => (
          <KPICard key={indicator.label} {...indicator} />
        ))}
      </div>
    </section>
  )
}

export default KPICardDemo
