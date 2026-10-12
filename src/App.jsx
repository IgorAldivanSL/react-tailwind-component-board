
import { useState } from 'react'

import ButtonDemo from './demos/ButtonDemo'
import BadgeAvatarDemo from './demos/BadgeAvatarDemo'
import ProfileCardDemo from './demos/ProfileCardDemo'
import ProductCardDemo from './demos/ProductCardDemo'
import LoginFormDemo from './demos/LoginFormDemo'
import KPICardDemo from './demos/KPICardDemo'
import PricingCardDemo from './demos/PricingCardDemo'
import AlertDemo from './demos/AlertDemo'
import NavbarDemo from './demos/NavbarDemo'
import MiniDashboardDemo from './demos/MiniDashboardDemo'

const exercises = [
  { id: 1, title: 'Button System', component: ButtonDemo },
  { id: 2, title: 'Badge + Avatar', component: BadgeAvatarDemo },
  { id: 3, title: 'Profile Card', component: ProfileCardDemo },
  { id: 4, title: 'Product Card', component: ProductCardDemo },
  { id: 5, title: 'Login Form', component: LoginFormDemo },
  { id: 6, title: 'KPI Card', component: KPICardDemo },
  { id: 7, title: 'Pricing Card', component: PricingCardDemo },
  { id: 8, title: 'Alert / Notification', component: AlertDemo },
  { id: 9, title: 'Responsive Navbar', component: NavbarDemo },
  { id: 10, title: 'Mini Dashboard', component: MiniDashboardDemo },
]

function App() {
  const [activeExercise, setActiveExercise] = useState(1)

  const selectedExercise = exercises.find(
    (exercise) => exercise.id === activeExercise,
  )

  const ActiveDemo = selectedExercise.component

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            React + Tailwind CSS
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Component Board
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Biblioteca de componentes reutilizáveis com demonstrações de
            variantes, estados e layouts responsivos.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              10 exercícios
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Componentes reutilizáveis
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside>
          <nav
            aria-label="Exercícios do Component Board"
            className="rounded-2xl border border-slate-200 bg-white p-3"
          >
            <p className="px-3 pb-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Exercícios
            </p>

            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {exercises.map((exercise) => {
                const isActive = activeExercise === exercise.id

                return (
                  <button
                    key={exercise.id}
                    type="button"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setActiveExercise(exercise.id)}
                    className={[
                      'flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors',
                      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'grid size-7 shrink-0 place-items-center rounded-lg text-xs font-bold',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500',
                      ].join(' ')}
                    >
                      {String(exercise.id).padStart(2, '0')}
                    </span>

                    <span>{exercise.title}</span>
                  </button>
                )
              })}
            </div>
          </nav>
        </aside>

        <main className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Exercício {String(activeExercise).padStart(2, '0')} de 10
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                disabled={activeExercise === 1}
                onClick={() => setActiveExercise((current) => current - 1)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Anterior
              </button>

              <button
                type="button"
                disabled={activeExercise === exercises.length}
                onClick={() => setActiveExercise((current) => current + 1)}
                className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Próximo
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <ActiveDemo />
          </div>
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-sm text-slate-500">
        React + Tailwind CSS · Component Board
      </footer>
    </div>
  )
}

export default App
