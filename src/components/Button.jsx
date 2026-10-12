
const variants = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 active:bg-slate-200',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
  success:
    'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800',
}

const sizes = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
}) {
  const variantClasses = variants[variant] ?? variants.primary
  const sizeClasses = sizes[size] ?? sizes.md

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-colors duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses,
        sizeClasses,
        fullWidth ? 'w-full' : '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button
