import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

type StackItem = {
  name: string
  slug: string
  invertInDark?: boolean
}

type Project = {
  title: string
  category: string
  summary: string
  impact: string
  timeline: string
  featured?: boolean
  stack: StackItem[]
}

const projects: Project[] = [
  {
    title: 'AgroTech',
    category: 'AI-Powered Full-Stack Platform',
    summary:
      'An agriculture learning platform built for students, combining crop guidance, educational content, and data-backed recommendations in a modern web experience.',
    impact: 'Guided product direction across UI, frontend architecture, and API integration.',
    timeline: 'Featured build',
    featured: true,
    stack: [
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Python', slug: 'python' },
      { name: 'Flask', slug: 'flask', invertInDark: true },
    ],
  },
  {
    title: 'Hotel Management System',
    category: 'Operations Dashboard',
    summary:
      'A polished hotel administration interface handling reservations, guest records, room availability, and daily operational workflows through a structured dashboard.',
    impact: 'Focused on responsive frontend delivery and clear admin-side usability.',
    timeline: 'Featured build',
    featured: true,
    stack: [
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Tailwind CSS', slug: 'tailwind-css' },
      { name: 'GitHub', slug: 'github', invertInDark: true },
    ],
  },
  {
    title: 'Gallery Cafe',
    category: 'Full-Stack Business Website',
    summary:
      'A cafe website with interactive menus, visual gallery sections, and a PHP/MySQL backend supporting dynamic content and service updates.',
    impact: 'Brought together presentation design and full-stack implementation for a small business workflow.',
    timeline: 'Web application',
    stack: [
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'PHP', slug: 'php' },
      { name: 'MySQL', slug: 'mysql' },
    ],
  },
  {
    title: 'PahanaEdu',
    category: 'Education Management Platform',
    summary:
      'A student-focused web application with a responsive interface, structured academic workflows, and a MySQL-backed system for education management.',
    impact: 'Balanced frontend clarity with dependable server-side structure.',
    timeline: 'Academic system',
    stack: [
      { name: 'Java', slug: 'java' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'Tailwind CSS', slug: 'tailwind-css' },
      { name: 'Git', slug: 'git' },
    ],
  },
  {
    title: 'Employee Management System',
    category: 'Desktop Administration Tool',
    summary:
      'A Java Swing desktop application for employee records, payroll handling, and internal reporting inside a single management workflow.',
    impact: 'Delivered a structured desktop experience around reliability, forms, and reporting flow.',
    timeline: 'Desktop application',
    stack: [
      { name: 'Java', slug: 'java' },
      { name: 'GitHub', slug: 'github', invertInDark: true },
    ],
  },
  {
    title: 'Polek E-Market',
    category: 'Marketplace UI/UX Design',
    summary:
      'A commerce-focused interface concept shaped around product browsing, conversion flow, and a clearer shopping experience for end users.',
    impact: 'Led interface hierarchy, visual direction, and purchase-flow clarity.',
    timeline: 'Design project',
    stack: [
      { name: 'Figma', slug: 'figma' },
      { name: 'Illustrator', slug: 'illustrator' },
      { name: 'Photoshop', slug: 'photoshop' },
      { name: 'Canva', slug: 'canva' },
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

function StackLogo({ item }: { item: StackItem }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-semibold tracking-wide text-charcoal dark:bg-charcoal dark:text-cream">
        {getFallbackLabel(item.name)}
      </div>
    )
  }

  return (
    <img
      src={getTechIcon(item.slug)}
      alt={`${item.name} logo`}
      className={`h-8 w-8 object-contain ${item.invertInDark ? 'dark:invert dark:brightness-0 dark:contrast-200' : ''}`}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  )
}

export default function Projects() {
  const ref = useReveal()
  const featuredProjects = projects.filter((project) => project.featured)
  const projectCount = projects.length

  return (
    <section id="projects" className="bg-white px-4 py-28 dark:bg-charcoal sm:px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <div className="reveal mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">03 - Projects</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-charcoal dark:text-cream md:text-5xl">
              Selected <span className="italic">Work</span>
            </h2>
            <div className="mt-5 h-0.5 w-12 bg-gold" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm dark:text-cream/65">
              A more structured view of product, system, and interface work across frontend engineering, full-stack delivery, and visual design.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center md:min-w-[340px]">
            <div className="rounded-2xl border border-border-warm bg-cream px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">{projectCount}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Projects</div>
            </div>
            <div className="rounded-2xl border border-border-warm bg-cream px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">{featuredProjects.length}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Featured</div>
            </div>
            <div className="rounded-2xl border border-border-warm bg-cream px-4 py-4 dark:border-white/10 dark:bg-charcoal-light">
              <div className="font-display text-2xl font-semibold text-charcoal dark:text-cream">SVG</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted dark:text-cream/50">Stack Marks</div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="reveal overflow-hidden rounded-2xl border border-border-warm bg-charcoal text-cream dark:border-white/10 dark:bg-[#111112]"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="border-b border-white/10 px-7 py-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                    Featured
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-cream/45">{project.timeline}</span>
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-gold">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/72">{project.summary}</p>
              </div>

              <div className="grid gap-6 px-7 py-6 md:grid-cols-[1.4fr_0.8fr]">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cream/45">Project Focus</p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/72">{project.impact}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cream/45">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                      >
                        <StackLogo item={item} />
                        <span className="text-xs text-cream/78">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <article
                key={project.title}
                className="reveal rounded-2xl border border-border-warm bg-cream p-6 dark:border-white/10 dark:bg-charcoal-light"
                style={{ transitionDelay: `${(index + featuredProjects.length) * 0.07}s` }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted dark:text-cream/45">{project.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal dark:text-cream">{project.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-border-warm px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-warm dark:border-white/10 dark:text-cream/50">
                    {project.timeline}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-warm dark:text-cream/68">{project.summary}</p>
                <p className="mt-4 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted dark:text-cream/55">{project.impact}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 rounded-xl border border-border-warm bg-white px-3 py-2 dark:border-white/10 dark:bg-white/5"
                    >
                      <StackLogo item={item} />
                      <span className="text-xs text-warm dark:text-cream/78">{item.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
}
