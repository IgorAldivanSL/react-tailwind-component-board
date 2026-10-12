
const variants = {
  info: 'bg-blue-100 text-blue-700',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-800',
}

function Badge({ children, variant = 'info' }) {
  const variantClasses = variants[variant] ?? variants.info

  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-3 py-1',
        'text-xs font-semibold uppercase tracking-wider',
        variantClasses,
      ].join(' ')}
    >
      {children}
    </span>
  )
}

export default Badge
