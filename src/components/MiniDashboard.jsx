
import KPICard from './KPICard'
import Badge from './Badge'

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
]

const activities = [
  {
    title: 'Novo usuário cadastrado',
    description: 'Mariana Costa criou uma conta.',
    time: 'Há 12 minutos',
    status: 'Concluído',
    variant: 'success',
  },
  {
    title: 'Pagamento recebido',
    description: 'Pagamento de R$ 890,00 confirmado.',
    time: 'Há 35 minutos',
    status: 'Concluído',
    variant: 'success',
  },
  {
    title: 'Relatório mensal',
    description: 'O relatório de outubro está sendo preparado.',
    time: 'Há 1 hora',
    status: 'Pendente',
    variant: 'warning',
  },
]

function MiniDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              NexoUI
            </p>
            <h1 className="mt-1 text-2xl font-bold">
              Visão geral
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:inline">
              Painel administrativo
            </span>
            <div className="grid size-10 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              AD
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        <section>
          <div className="mb-5">
            <h2 className="text-lg font-bold">Indicadores principais</h2>
            <p className="mt-1 text-sm text-slate-500">
              Resumo demonstrativo do desempenho.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {indicators.map((indicator) => (
              <KPICard
                key={indicator.label}
                {...indicator}
              />
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-bold">Atividades recentes</h2>
            <p className="mt-1 text-sm text-slate-500">
              Acompanhe os últimos acontecimentos.
            </p>
          </div>

          <ul className="divide-y divide-slate-100">
            {activities.map((activity) => (
              <li
                key={activity.title}
                className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {activity.description}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    {activity.time}
                  </p>
                </div>

                <div className="shrink-0">
                  <Badge variant={activity.variant}>
                    {activity.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="text-center text-xs text-slate-400">
          Mini Dashboard · Dados fictícios para demonstração
        </footer>
      </main>
    </div>
  )
}

export default MiniDashboard
