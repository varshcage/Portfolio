import { useReveal } from '../hooks/useReveal'

const contactLinks = [
  { icon: 'pi-envelope', label: 'Email', value: 'heshavarshan@gmail.com', href: 'mailto:heshavarshan@gmail.com' },
  { icon: 'pi-linkedin', label: 'LinkedIn', value: 'Srishanker Heshavarshaan', href: 'https://linkedin.com' },
  { icon: 'pi-phone', label: 'Phone', value: '0740 464 926', href: 'tel:0740464926' },
  { icon: 'pi-palette', label: 'Portfolio', value: 'Varshcage', href: '#' },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="bg-charcoal px-4 py-28 dark:bg-black sm:px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs font-mono tracking-widest uppercase">06 — Contact</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mt-3 leading-tight">
            Let's Build<br />
            <span className="italic text-gold">Something Great</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
          <p className="text-cream/50 mt-6 max-w-md mx-auto leading-relaxed font-body">
            Whether you have a project in mind, a role to fill, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="reveal group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-gold hover:border-gold transition-all duration-200"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border-amber-100 border flex items-center justify-center shrink-0">
                <i className={`pi ${c.icon} text-gold group-hover:text-charcoal text-base transition-colors`} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-cream/40 group-hover:text-charcoal/60 uppercase tracking-wider font-mono transition-colors">
                  {c.label}
                </p>
                <p className="text-cream group-hover:text-charcoal font-medium text-sm truncate transition-colors">
                  {c.value}
                </p>
              </div>
              <i className="pi pi-arrow-right text-xs text-cream/30 group-hover:text-charcoal ml-auto transition-colors" />
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <div className="reveal text-center" style={{ transitionDelay: '0.3s' }}>
          <a
            href="mailto:heshavarshan@gmail.com"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-10 py-4 rounded-full font-semibold text-base hover:bg-gold-light transition-colors duration-200"
          >
            <i className="pi pi-send" />
            Send me a Message
          </a>
        </div>
      </div>
    </section>
  )
}
