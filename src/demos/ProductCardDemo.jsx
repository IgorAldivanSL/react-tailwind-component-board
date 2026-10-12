
import ProductCard from '../components/ProductCard'

const products = [
  {
    name: 'Headphone Studio',
    category: 'Áudio',
    description:
      'Som imersivo, conforto prolongado e design moderno para o dia a dia.',
    price: 'R$ 299,90',
    badge: 'Mais vendido',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Relógio Minimal',
    category: 'Acessórios',
    description:
      'Um visual elegante e minimalista para acompanhar sua rotina.',
    price: 'R$ 459,90',
    badge: 'Destaque',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mochila Urbana',
    category: 'Lifestyle',
    description:
      'Espaço, praticidade e estilo para estudar, trabalhar ou viajar.',
    price: 'R$ 189,90',
    badge: '',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
  },
]

function ProductCardDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          04. Product Card
        </h2>
        <p className="mt-2 text-slate-500">
          Cards de produtos com imagens, preço, badges e efeitos de hover.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductCardDemo
