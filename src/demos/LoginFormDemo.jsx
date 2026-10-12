
import LoginForm from '../components/LoginForm'

function LoginFormDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          05. Login Form
        </h2>
        <p className="mt-2 text-slate-500">
          Formulário com campos acessíveis, validação nativa e estados de foco.
        </p>
      </div>

      <div className="flex justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 py-10 sm:p-10">
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginFormDemo
