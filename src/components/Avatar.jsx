
const variants = {
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  emerald: 'bg-emerald-100 text-emerald-700',
}

const sizes = {
  sm: 'size-10 text-xs',
  md: 'size-14 text-base',
  lg: 'size-16 text-lg',
}

function Avatar({
  initials,
  variant = 'blue',
  size = 'md',
}) {
  const variantClasses = variants[variant] ?? variants.blue
  const sizeClasses = sizes[size] ?? sizes.md

  return (
    <div
      aria-label={`Avatar ${initials}`}
      className={[
        'inline-grid shrink-0 place-items-center rounded-full font-bold',
        variantClasses,
        sizeClasses,
      ].join(' ')}
    >
      {initials}
    </div>
  )
}

export default Avatar
