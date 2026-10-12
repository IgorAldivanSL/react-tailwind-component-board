
import Button from './Button'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Preços', href: '#precos' },
  { label: 'Sobre', href: '#sobre' },
]

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 rounded-lg text-lg font-bold text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white">
            N
          </span>
          <span>NexoUI</span>
        </a>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-3 sm:order-2 sm:w-auto">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="order-2 sm:order-3">
          <Button size="sm">
            Começar agora
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
