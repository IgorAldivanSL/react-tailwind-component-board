
import Button from './Button'

const variants = {
  success: {
    container: 'border-emerald-200 bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-700',
    title: 'text-emerald-900',
    message: 'text-emerald-800',
    symbol: '✓',
  },
  warning: {
    container: 'border-amber-200 bg-amber-50',
    icon: 'bg-amber-100 text-amber-700',
    title: 'text-amber-900',
    message: 'text-amber-800',
    symbol: '!',
  },
  error: {
    container: 'border-red-200 bg-red-50',
    icon: 'bg-red-100 text-red-700',
    title: 'text-red-900',
    message: 'text-red-800',
    symbol: '×',
  },
  info: {
    container: 'border-blue-200 bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    title: 'text-blue-900',
    message: 'text-blue-800',
    symbol: 'i',
  },
}

function Alert({
  variant = 'info',
  title,
  children,
  actionLabel,
}) {
  const style = variants[variant] ?? variants.info

  return (
    <section
      role="status"
      className={[
        'flex items-start gap-4 rounded-2xl border p-4 sm:p-5',
        style.container,
      ].join(' ')}
    >
      <div
        aria-hidden="true"
        className={[
          'grid size-10 shrink-0 place-items-center rounded-full text-lg font-bold',
          style.icon,
        ].join(' ')}
      >
        {style.symbol}
      </div>

      <div className="min-w-0 flex-1">
        <h2 className={['font-bold', style.title].join(' ')}>
          {title}
        </h2>

        <p className={['mt-1 text-sm leading-6', style.message].join(' ')}>
          {children}
        </p>

        {actionLabel && (
          <div className="mt-4">
            <Button variant="secondary" size="sm">
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Alert
