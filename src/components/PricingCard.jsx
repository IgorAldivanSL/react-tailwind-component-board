
import Badge from './Badge'
import Button from './Button'

function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  badge,
}) {
  return (
    <article
      className={[
        'relative flex w-full max-w-[400px] flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl',
        highlighted
          ? 'border-blue-600 bg-slate-900 text-white shadow-lg shadow-blue-950/15'
          : 'border-slate-200 bg-white text-slate-900 shadow-sm',
      ].join(' ')}
    >
      {badge && (
        <div className="mb-5">
          <Badge variant={highlighted ? 'info' : 'success'}>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-xl font-bold">{name}</h2>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight">
          {price}
        </span>

        <span className={highlighted ? 'text-slate-400' : 'text-slate-500'}>
          {period}
        </span>
      </div>

      <ul className="mt-7 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span
              aria-hidden="true"
              className={highlighted ? 'font-bold text-blue-400' : 'font-bold text-emerald-600'}
            >
              ✓
            </span>

            <span className={highlighted ? 'text-slate-200' : 'text-slate-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          variant={highlighted ? 'primary' : 'secondary'}
          fullWidth
        >
          Escolher plano
        </Button>
      </div>
    </article>
  )
}

export default PricingCard
