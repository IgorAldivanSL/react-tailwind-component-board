
import KPICard from './components/KPICard'

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
    change: '0%',
    comparison: 'sem alteração',
    icon: '%',
    trend: 'neutral',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          React + Tailwind
        </span>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Dashboard — Indicadores
        </h1>

        <p className="mt-2 text-slate-500">
          Exercício 06 — KPI Cards e tendências
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {indicators.map((indicator) => (
            <KPICard
              key={indicator.label}
              {...indicator}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
