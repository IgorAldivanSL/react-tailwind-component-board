
import Avatar from '../components/Avatar'
import Badge from '../components/Badge'

function BadgeAvatarDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          02. Badge + Avatar
        </h2>
        <p className="mt-2 text-slate-500">
          Avatares circulares e etiquetas com variantes semânticas.
        </p>
      </div>

      <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <h3 className="mb-4 font-semibold text-slate-800">Avatares</h3>

          <div className="flex flex-wrap items-center gap-4">
            <Avatar initials="IA" variant="blue" size="sm" />
            <Avatar initials="AO" variant="violet" size="md" />
            <Avatar initials="CM" variant="emerald" size="lg" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-slate-800">Badges</h3>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="info">Informação</Badge>
            <Badge variant="success">Sucesso</Badge>
            <Badge variant="warning">Atenção</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BadgeAvatarDemo
