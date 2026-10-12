
import Button from './components/Button'
import Avatar from './components/Avatar'
import Badge from './components/Badge'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          React + Tailwind
        </span>

        <h1 className="mt-3 text-3xl font-bold">
          Badge + Avatar
        </h1>

        <p className="mt-2 text-slate-400">
          Exercício 02 — Componentes reutilizáveis
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Avatar</h2>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Avatar initials="EI" />
            <Avatar initials="UX" variant="violet" />
            <Avatar initials="JS" variant="emerald" />
          </div>

          <h3 className="mt-8 text-sm font-semibold text-slate-300">
            Tamanhos
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Avatar initials="SM" size="sm" />
            <Avatar initials="MD" size="md" />
            <Avatar initials="LG" size="lg" />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Badge</h2>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge variant="info">Front-end</Badge>
            <Badge variant="success">New</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold">Componentes combinados</h2>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Avatar initials="IA" variant="violet" size="lg" />

            <div>
              <p className="font-semibold">Igor Aldivan</p>
              <p className="mt-1 text-sm text-slate-400">
                Desenvolvedor em formação
              </p>
              <div className="mt-2">
                <Badge variant="success">Estudante</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="secondary">Voltar aos botões</Button>
        </div>
      </section>
    </main>
  )
}

export default App
