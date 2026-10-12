
import PricingCard from './components/PricingCard'

const plans = [
  {
    name: 'Free',
    price: 'R$ 0',
    period: '/mês',
    features: [
      'Acesso aos recursos básicos',
      'Até 3 projetos',
      'Suporte da comunidade',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 49',
    period: '/mês',
    features: [
      'Todos os recursos básicos',
      'Projetos ilimitados',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
    highlighted: true,
    badge: 'Mais popular',
  },
  {
    name: 'Enterprise',
    price: 'R$ 199',
    period: '/mês',
    features: [
      'Todos os recursos Pro',
      'Gestão de equipes',
      'Suporte especializado',
      'Configurações personalizadas',
    ],
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            React + Tailwind
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Planos e preços
          </h1>

          <p className="mt-2 text-slate-500">
            Exercício 07 — Pricing Cards reutilizáveis
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
