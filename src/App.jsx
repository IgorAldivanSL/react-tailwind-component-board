
import Button from './components/Button'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <section className="mx-auto max-w-5xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          React + Tailwind
        </span>

        <h1 className="mt-3 text-3xl font-bold">
          Profile Card
        </h1>

        <p className="mt-2 text-slate-500">
          Exercício 03 — Composição e reutilização de componentes
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProfileCard
            name="Ana Oliveira"
            role="UI/UX Designer"
            initials="AO"
            category="Design"
            description="Especialista em criar experiências digitais intuitivas, acessíveis e centradas nas necessidades dos usuários."
          />

          <ProfileCard
            name="Carlos Mendes"
            role="Desenvolvedor Front-end"
            initials="CM"
            category="Tecnologia"
            description="Desenvolvedor focado em React, interfaces responsivas e criação de componentes reutilizáveis."
            layout="vertical"
          />
        </div>

        <div className="mt-8">
          <Button variant="secondary">
            Demonstração de botão
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
