
import LoginForm from './components/LoginForm'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            React + Tailwind
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Login Form
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Exercício 05 — Formulário acessível
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  )
}

export default App
