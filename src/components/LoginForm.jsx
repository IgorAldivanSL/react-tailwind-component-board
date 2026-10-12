
import Button from './Button'

function LoginForm() {
  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Bem-vindo de volta
        </span>

        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          Entrar na sua conta
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Informe seus dados para acessar sua conta.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            E-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Senha
          </label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-100"
          />
        </div>

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              name="remember"
              className="size-4 rounded border-slate-300 accent-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            />
            Lembrar de mim
          </label>

          <a
            href="#recuperar-senha"
            className="font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Esqueci a senha
          </a>
        </div>

        <Button type="submit" fullWidth>
          Entrar
        </Button>

        <p className="text-center text-sm text-slate-500">
          Ainda não tem conta?{' '}
          <a
            href="#criar-conta"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Criar conta
          </a>
        </p>
      </form>
    </section>
  )
}

export default LoginForm
