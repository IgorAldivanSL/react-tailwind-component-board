
import Button from '../components/Button'

function ButtonDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          01. Button System
        </h2>
        <p className="mt-2 text-slate-500">
          Botões reutilizáveis com variantes, tamanhos e estados.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-800">Variantes</h3>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-800">Tamanhos</h3>

        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-800">Largura total</h3>

        <Button fullWidth>Botão de largura total</Button>
      </div>
    </section>
  )
}

export default ButtonDemo
