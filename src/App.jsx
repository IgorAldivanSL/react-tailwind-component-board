
import Alert from './components/Alert'

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6">
      <section className="mx-auto max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          React + Tailwind
        </span>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Alert / Notification
        </h1>

        <p className="mt-2 text-slate-500">
          Exercício 08 — Alertas reutilizáveis e semânticos
        </p>

        <div className="mt-8 space-y-4">
          <Alert
            variant="success"
            title="Alterações salvas"
          >
            Suas configurações foram atualizadas com sucesso.
          </Alert>

          <Alert
            variant="warning"
            title="Atenção ao prazo"
            actionLabel="Ver detalhes"
          >
            Você tem uma tarefa que precisa ser concluída até amanhã.
          </Alert>

          <Alert
            variant="error"
            title="Falha ao processar"
          >
            Não foi possível concluir a operação. Tente novamente.
          </Alert>

          <Alert
            variant="info"
            title="Nova atualização"
            actionLabel="Conhecer novidades"
          >
            Uma nova versão está disponível com melhorias na interface.
          </Alert>
        </div>
      </section>
    </main>
  )
}

export default App
