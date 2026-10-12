
import Button from './components/Button'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          React + Tailwind
        </span>

        <h1 className="mt-3 text-3xl font-bold">
          Button System
        </h1>

        <p className="mt-2 text-slate-400">
          Exercício 01 — Componentes reutilizáveis
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Variantes</h2>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Tamanhos</h2>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Largura total</h2>

          <div className="mt-5">
            <Button fullWidth>Full Width</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
