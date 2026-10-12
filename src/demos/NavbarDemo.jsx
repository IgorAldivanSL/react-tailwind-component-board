
import Navbar from '../components/Navbar'

function NavbarDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          09. Responsive Navbar
        </h2>
        <p className="mt-2 text-slate-500">
          Navegação responsiva com links por âncora e ação principal.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Navbar />

        <div
          id="inicio"
          className="px-6 py-16 text-center sm:py-24"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Componentes reutilizáveis
          </span>

          <h3 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Interfaces consistentes, simples e responsivas.
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
            Uma demonstração de navegação adaptável a diferentes tamanhos de tela.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-slate-200 bg-white p-6 sm:grid-cols-3">
          <div id="produtos" className="rounded-xl bg-slate-50 p-4">
            <h4 className="font-semibold">Produtos</h4>
            <p className="mt-1 text-sm text-slate-500">
              Componentes para sua interface.
            </p>
          </div>

          <div id="precos" className="rounded-xl bg-slate-50 p-4">
            <h4 className="font-semibold">Preços</h4>
            <p className="mt-1 text-sm text-slate-500">
              Planos para diferentes necessidades.
            </p>
          </div>

          <div id="sobre" className="rounded-xl bg-slate-50 p-4">
            <h4 className="font-semibold">Sobre</h4>
            <p className="mt-1 text-sm text-slate-500">
              Conheça a proposta da NexoUI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavbarDemo
