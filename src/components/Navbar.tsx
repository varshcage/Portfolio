import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border-warm dark:bg-charcoal/95 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="#"
          className="max-w-[180px] font-display text-lg font-semibold leading-tight tracking-wide text-charcoal dark:text-cream sm:max-w-none sm:text-xl"
        >
          Srishanker<span className="text-gold">.</span>Heshavarshaan
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-warm text-sm font-body font-medium tracking-wide hover:text-gold transition-colors duration-200 dark:text-cream/70 dark:hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-warm bg-white/80 text-charcoal hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/10 dark:text-cream dark:hover:border-gold dark:hover:text-gold"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={`pi ${theme === 'dark' ? 'pi-sun' : 'pi-moon'} text-sm`} />
          </button>
          <a
            href="mailto:heshavarshan@gmail.com"
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold hover:text-charcoal transition-all duration-200 dark:bg-cream dark:text-charcoal dark:hover:bg-gold"
          >
            <i className="pi pi-send text-xs" />
            Hire Me
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-warm bg-white/80 text-charcoal dark:border-white/10 dark:bg-white/10 dark:text-cream"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={`pi ${theme === 'dark' ? 'pi-sun' : 'pi-moon'} text-sm`} />
          </button>
          <button
            className="text-charcoal dark:text-cream"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`pi ${menuOpen ? 'pi-times' : 'pi-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-warm bg-cream px-4 py-4 dark:border-white/10 dark:bg-charcoal sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-sm font-medium text-warm dark:text-cream/70"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:heshavarshan@gmail.com"
              className="mt-2 rounded-full bg-charcoal py-2.5 text-center text-sm font-medium text-cream dark:bg-cream dark:text-charcoal"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
