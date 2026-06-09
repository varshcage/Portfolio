export default function Footer() {

  // get year
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-white/10 px-6 py-8 dark:bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-cream/40 text-sm">
          Designed &amp; Built by <span className="text-gold">Srishanker Heshavarshaan</span>
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:heshavarshan@gmail.com" className="text-cream/30 hover:text-gold transition-colors">
            <i className="pi pi-envelope text-sm" />
          </a>
          <a href="https://linkedin.com" className="text-cream/30 hover:text-gold transition-colors">
            <i className="pi pi-linkedin text-sm" />
          </a>
        </div>
        <p className="text-cream/30 text-xs font-mono">© {year} All rights reserved.</p>
      </div>
    </footer>
  )
}
