
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main>
        <section
          id="inicio"
          className="mx-auto max-w-7xl px-6 py-20 sm:py-28"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            React + Tailwind
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Uma interface simples, organizada e responsiva.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Este exemplo demonstra como uma barra de navegação se adapta
            a diferentes tamanhos de tela utilizando utilitários do Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#produtos"
              className="inline-flex h-11 items-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Explorar produtos
            </a>

            <a
              href="#sobre"
              className="inline-flex h-11 items-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Saiba mais
            </a>
          </div>
        </section>

        <section id="produtos" className="bg-white px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Produtos
            </h2>
            <p className="mt-2 text-slate-600">
              Espaço demonstrativo para a seção de produtos.
            </p>
          </div>
        </section>

        <section id="precos" className="px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Preços
            </h2>
            <p className="mt-2 text-slate-600">
              Espaço demonstrativo para a seção de preços.
            </p>
          </div>
        </section>

        <section id="sobre" className="bg-white px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900">
              Sobre
            </h2>
            <p className="mt-2 text-slate-600">
              Uma demonstração de navegação por âncoras na mesma página.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
