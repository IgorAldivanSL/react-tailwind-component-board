
import PricingCard from '../components/PricingCard'

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
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 'R$ 49',
    period: '/mês',
    features: [
      'Todos os recursos básicos',
      'Projetos ilimitados',
      'Suporte prioritário',
    ],
    highlighted: true,
    badge: 'Mais popular',
  },
  {
    name: 'Enterprise',
    price: 'R$ 149',
    period: '/mês',
    features: [
      'Todos os recursos Pro',
      'Gestão avançada de equipe',
      'Suporte especializado',
    ],
    highlighted: false,
  },
]

function PricingCardDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          07. Pricing Card
        </h2>
        <p className="mt-2 text-slate-500">
          Comparação de planos com benefícios e destaque para a opção recomendada.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch justify-items-center gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default PricingCardDemo
