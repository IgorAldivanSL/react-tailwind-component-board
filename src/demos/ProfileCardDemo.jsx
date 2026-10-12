
import ProfileCard from '../components/ProfileCard'

const profiles = [
  {
    name: 'Ana Oliveira',
    role: 'Desenvolvedora Front-end',
    initials: 'AO',
    category: 'Tecnologia',
    description:
      'Especialista em interfaces acessíveis, componentes reutilizáveis e experiências digitais.',
    layout: 'horizontal',
  },
  {
    name: 'Carlos Mendes',
    role: 'Designer de Produto',
    initials: 'CM',
    category: 'Design',
    description:
      'Focado em transformar necessidades de usuários em soluções digitais simples e intuitivas.',
    layout: 'vertical',
  },
]

function ProfileCardDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          03. Profile Card
        </h2>
        <p className="mt-2 text-slate-500">
          Cartões de perfil compostos por Avatar, Badge e Button.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </section>
  )
}

export default ProfileCardDemo
