
import Alert from '../components/Alert'

function AlertDemo() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          08. Alert / Notification
        </h2>
        <p className="mt-2 text-slate-500">
          Mensagens com variantes semânticas para diferentes situações.
        </p>
      </div>

      <div className="space-y-4">
        <Alert
          variant="success"
          title="Operação concluída"
          actionLabel="Ver detalhes"
        >
          Seus dados foram salvos com sucesso.
        </Alert>

        <Alert
          variant="warning"
          title="Atenção necessária"
          actionLabel="Revisar"
        >
          Existem informações que precisam ser verificadas.
        </Alert>

        <Alert
          variant="error"
          title="Não foi possível concluir"
        >
          Ocorreu um erro ao processar sua solicitação. Tente novamente.
        </Alert>

        <Alert
          variant="info"
          title="Nova atualização disponível"
        >
          Há novidades disponíveis para você consultar.
        </Alert>
      </div>
    </section>
  )
}

export default AlertDemo
