import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

type TechItem = {
  name: string
  slug: string
  note: string
  invertInDark?: boolean
}

type TechGroup = {
  title: string
  summary: string
  items: TechItem[]
}

const techGroups: TechGroup[] = [
  {
    title: 'Frontend Engineering',
    summary: 'Core UI stack for responsive, production-facing web applications.',
    items: [
      { name: 'React', slug: 'react', note: 'Component architecture' },
      { name: 'TypeScript', slug: 'typescript', note: 'Typed application code' },
      { name: 'JavaScript', slug: 'javascript', note: 'Browser runtime' },
      { name: 'HTML5', slug: 'html5', note: 'Semantic structure' },
      { name: 'CSS3', slug: 'css', note: 'Visual systems' },
      { name: 'Tailwind CSS', slug: 'tailwind-css', note: 'Utility-first styling' },
    ],
  },
  {
    title: 'Backend & Application Logic',
    summary: 'Languages and frameworks used for APIs, services, and core logic.',
    items: [
      { name: 'Java', slug: 'java', note: 'Application development' },
      { name: 'Python', slug: 'python', note: 'Automation and APIs' },
      { name: 'PHP', slug: 'php', note: 'Server-side delivery' },
      { name: 'Flask', slug: 'flask', note: 'Lightweight API services', invertInDark: true },
      { name: 'C++', slug: 'cplusplus', note: 'Systems fundamentals' },
    ],
  },
  {
    title: 'Data & Platform Tools',
    summary: 'Storage and workflow tools for shipping and maintaining projects.',
    items: [
      { name: 'MongoDB', slug: 'mongodb', note: 'Document database' },
      { name: 'MySQL', slug: 'mysql', note: 'Relational database' },
      { name: 'Git', slug: 'git', note: 'Version control' },
      { name: 'GitHub', slug: 'github', note: 'Source collaboration', invertInDark: true },
      { name: 'Postman', slug: 'postman', note: 'API testing' },
    ],
  },
  {
    title: 'Design & Creative Toolbox',
    summary: 'Brand, interface, and visual design tools used across product work.',
    items: [
      { name: 'Figma', slug: 'figma', note: 'Interface design' },
      { name: 'Photoshop', slug: 'photoshop', note: 'Image editing' },
      { name: 'Illustrator', slug: 'illustrator', note: 'Vector graphics' },
      { name: 'Canva', slug: 'canva', note: 'Fast visual content' },
      { name: 'Affinity Designer', slug: 'affinity-designer', note: 'Precision vector work' },
    ],
  },
]

function getTechIcon(slug: string) {
  return `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`
}

function getFallbackLabel(name: string) {
  return name
    .split(/[\s+/.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function TechLogo({ item }: { item: TechItem }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[10px] font-semibold tracking-wide text-charcoal dark:bg-charcoal dark:text-cream">
        {getFallbackLabel(item.name)}
      </div>
    )
  }

  return (
    <img
      src={getTechIcon(item.slug)}
      alt={`${item.name} logo`}
      className={`h-7 w-7 object-contain ${item.invertInDark ? 'dark:invert dark:brightness-0 dark:contrast-200' : ''}`}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="bg-cream px-6 py-28 dark:bg-[#111112]">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <div className="reveal mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">02 - Skills</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal dark:text-cream md:text-5xl">
              Tech Stack &amp; <span className="italic">Toolbox</span>
            </h2>
            <div className="mt-5 h-0.5 w-12 bg-gold" />
            <p className="mt-6 max-w-xl font-body leading-relaxed text-warm dark:text-cream/70">
              A focused mix of engineering, data, and design tools presented with official SVG brand marks from theSVG.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center md:min-w-[320px]">
            <div className="rounded-2xl border border-border-warm bg-white px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">21</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Technologies</div>
            </div>
            <div className="rounded-2xl border border-border-warm bg-white px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">4</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Domains</div>
            </div>
            <div className="rounded-2xl border border-border-warm bg-white px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">SVG</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Brand Icons</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {techGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className="reveal rounded-2xl border border-border-warm bg-white p-6 dark:border-white/10 dark:bg-charcoal-light"
              style={{ transitionDelay: `${groupIndex * 0.08}s` }}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-charcoal dark:text-cream">{group.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted dark:text-cream/55">{group.summary}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border-warm px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-warm dark:border-white/10 dark:text-cream/55">
                  {group.items.length} items
                </span>
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex min-h-[72px] items-center gap-4 border-b border-border-warm/70 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream-dark dark:bg-white/5">
                      <TechLogo item={item} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-charcoal dark:text-cream">{item.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted dark:text-cream/50">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
