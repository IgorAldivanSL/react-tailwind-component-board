
import MiniDashboard from '../components/MiniDashboard'

function MiniDashboardDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          10. Mini Dashboard
        </h2>
        <p className="mt-2 text-slate-500">
          Painel com indicadores, atividades recentes e status.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <MiniDashboard />
      </div>
    </section>
  )
}

export default MiniDashboardDemo
