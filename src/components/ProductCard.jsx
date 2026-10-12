
import Badge from './Badge'
import Button from './Button'

function ProductCard({
  name,
  category,
  description,
  price,
  badge,
  image,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            Imagem do produto
          </div>
        )}

        {badge && (
          <div className="absolute left-4 top-4">
            <Badge variant="success">{badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {category}
        </p>

        <h2 className="mt-2 text-lg font-bold text-slate-900">
          {name}
        </h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-xl font-bold text-slate-900">
            {price}
          </span>

          <Button size="sm">
            Ver produto
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
