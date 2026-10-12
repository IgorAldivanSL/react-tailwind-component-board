
import ProductCard from './components/ProductCard'

const products = [
  {
    name: 'Headphone Wireless',
    category: 'Áudio',
    description: 'Som imersivo, conexão sem fio e bateria para acompanhar sua rotina.',
    price: 'R$ 299,90',
    badge: 'Mais vendido',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Relógio Minimalista',
    category: 'Acessórios',
    description: 'Design elegante e minimalista para combinar com qualquer ocasião.',
    price: 'R$ 459,90',
    badge: 'Destaque',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tênis Casual',
    category: 'Moda',
    description: 'Conforto e versatilidade para acompanhar seus compromissos diários.',
    price: 'R$ 249,90',
    badge: 'Novo',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
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
          Product Card
        </h1>

        <p className="mt-2 text-slate-500">
          Exercício 04 — Cards reutilizáveis com efeitos de interação
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
