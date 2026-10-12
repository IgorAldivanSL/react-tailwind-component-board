
import Avatar from './Avatar'
import Badge from './Badge'
import Button from './Button'

function ProfileCard({
  name,
  role,
  initials,
  category,
  description,
  layout = 'horizontal',
}) {
  const isHorizontal = layout === 'horizontal'

  return (
    <article className="w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition-shadow duration-200 hover:shadow-lg">
      <div
        className={[
          'flex gap-4',
          isHorizontal ? 'flex-row items-start' : 'flex-col items-center text-center',
        ].join(' ')}
      >
        <Avatar
          initials={initials}
          variant="violet"
          size="lg"
        />

        <div className={isHorizontal ? 'min-w-0 flex-1' : 'w-full'}>
          <h2 className="text-lg font-bold">{name}</h2>

          <p className="mt-1 text-sm text-slate-500">
            {role}
          </p>

          <div className="mt-3">
            <Badge variant="info">{category}</Badge>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex gap-3">
        <Button variant="primary" fullWidth>
          Ver perfil
        </Button>

        <Button variant="secondary" fullWidth>
          Mensagem
        </Button>
      </div>
    </article>
  )
}

export default ProfileCard
