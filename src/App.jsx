
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <section className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          React + Tailwind
        </span>

        <h1 className="mt-4 text-3xl font-bold text-white">
          Ambiente configurado!
        </h1>

        <p className="mt-3 text-slate-300">
          Nosso board de componentes está começando.
        </p>

        <button
          type="button"
          className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          Testar botão
        </button>
      </section>
    </main>
  )
}

export default App
