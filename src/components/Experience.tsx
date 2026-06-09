import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

type StackItem = {
  name: string
  slug: string
  invertInDark?: boolean
}

type ExperienceItem = {
  role: string
  organisation: string
  period: string
  employmentType: string
  summary: string
  highlights: string[]
  tools: StackItem[]
  current?: boolean
}

type EducationItem = {
  degree: string
  institution: string
  period: string
  status: string
  focus: string
  tools: StackItem[]
}

const experienceItems: ExperienceItem[] = [
  {
    role: 'Frontend Developer, Graphic Designer & Social Media Content Creator',
    organisation: 'INFODATA System',
    period: 'March 2025 - Present',
    employmentType: 'Full-time',
    summary:
      'Delivering frontend interfaces, design assets, and digital campaign content across web and marketing workflows.',
    highlights: [
      'Builds modern UI flows with React and Tailwind CSS.',
      'Produces branded visuals and campaign-ready social content.',
      'Bridges engineering execution with design consistency.',
    ],
    tools: [
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Tailwind CSS', slug: 'tailwind-css' },
      { name: 'Figma', slug: 'figma' },
      { name: 'Photoshop', slug: 'photoshop' },
    ],
    current: true,
  },
  {
    role: 'Founder, School Media Club',
    organisation: 'Leadership & Community',
    period: 'School Years',
    employmentType: 'Leadership',
    summary:
      'Established and led student media initiatives, coordinating visual communication, event coverage, and creative collaboration.',
    highlights: [
      'Founded the school media club and shaped its identity.',
      'Directed visual content for school events and communications.',
      'Supported peer coordination across creative and technical tasks.',
    ],
    tools: [
      {name:'Capcut',slug:'capcut'},
      {name:'Picsart',slug:'picsart'},
      { name: 'Canva', slug: 'canva' },
      { name: 'Illustrator', slug: 'illustrator' },

    ],
  },
]

const educationItems: EducationItem[] = [
  {
    degree: 'BSc (Hons) Software Engineering',
    institution: 'Cardiff Metropolitan University',
    period: '2025 - 2026',
    status: 'Completed',
    focus: 'Advanced software engineering, application delivery, and academic project development.',
    tools: [
      { name: 'Java', slug: 'java' },
      { name: 'Python', slug: 'python' },
      { name: 'MySQL', slug: 'mysql' },
    ],
  },
  {
    degree: 'Higher Diploma in Computing & Software Engineering',
    institution: 'ICBT Campus',
    period: '2023 - 2024',
    status: 'Completed',
    focus: 'Built the foundation in programming, software design, systems thinking, and practical web development.',
    tools: [
      { name: 'Java', slug: 'java' },
      { name: 'Git', slug: 'git' },
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css' },
    ],
  },
]

const leadershipItems = [
  {
    title: 'School Media Club',
    subtitle: 'Founder',
    note: 'Built a student-led visual media initiative focused on storytelling, event coverage, and creative coordination.',
    icon: { name: 'Canva', slug: 'canva' },
  },
  {
    title: 'School IT Club',
    subtitle: 'Leader',
    note: 'Supported technology-focused activities and helped guide peers through programming and digital skill development.',
    icon: { name: 'GitHub', slug: 'github', invertInDark: true },
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

function TechLogo({ item }: { item: StackItem }) {
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

export default function Experience() {
  const workRef = useReveal()
  const educationRef = useReveal()

  return (
    <section id="experience" className="bg-cream px-6 py-28 dark:bg-[#111112]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <div ref={workRef}>
            <div className="reveal mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-gold">04 - Experience</span>
              <h2 className="mt-3 font-display text-4xl font-bold text-charcoal dark:text-cream md:text-5xl">
                Work <span className="italic">History</span>
              </h2>
              <div className="mt-5 h-0.5 w-12 bg-gold" />
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm dark:text-cream/65">
                Professional work shaped by frontend delivery, creative production, and leadership across technical and visual communication roles.
              </p>
            </div>

            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <article
                  key={item.role}
                  className="reveal rounded-2xl border border-border-warm bg-white p-7 dark:border-white/10 dark:bg-charcoal-light"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted dark:text-cream/45">{item.period}</p>
                        <span className="rounded-full border border-border-warm px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-warm dark:border-white/10 dark:text-cream/55">
                          {item.employmentType}
                        </span>
                        {item.current && (
                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-700">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal dark:text-cream">{item.role}</h3>
                      <p className="mt-2 text-sm font-medium text-gold">{item.organisation}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-warm dark:text-cream/68">{item.summary}</p>

                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted dark:text-cream/55">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 rounded-xl border border-border-warm bg-cream px-3 py-2 dark:border-white/10 dark:bg-white/5"
                      >
                        <TechLogo item={tool} />
                        <span className="text-xs text-warm dark:text-cream/78">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div ref={educationRef}>
            <div className="reveal mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-gold">05 - Education</span>
              <h2 className="mt-3 font-display text-4xl font-bold text-charcoal dark:text-cream">
                Academic <span className="italic">Background</span>
              </h2>
              <div className="mt-5 h-0.5 w-12 bg-gold" />
            </div>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <article
                  key={item.degree}
                  className="reveal rounded-2xl border border-border-warm bg-white p-6 dark:border-white/10 dark:bg-charcoal-light"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted dark:text-cream/45">{item.period}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal dark:text-cream">{item.degree}</h3>
                      <p className="mt-2 text-sm font-medium text-gold">{item.institution}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${
                        item.status === 'Awaiting Results'
                          ? 'border-amber-100 bg-amber-50 text-amber-700'
                          : 'border-emerald-100 bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-warm dark:text-cream/68">{item.focus}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 rounded-xl border border-border-warm bg-cream px-3 py-2 dark:border-white/10 dark:bg-white/5"
                      >
                        <TechLogo item={tool} />
                        <span className="text-xs text-warm dark:text-cream/78">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              <div className="reveal rounded-2xl border border-white/10 bg-charcoal p-6 text-cream dark:bg-black" style={{ transitionDelay: '0.18s' }}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">Leadership</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold">Clubs & Responsibility</h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream/50">
                    Student roles
                  </span>
                </div>

                <div className="space-y-5">
                  {leadershipItems.map((item) => (
                    <div key={item.title} className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                        <TechLogo item={item.icon} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-cream">{item.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{item.subtitle}</p>
                        <p className="mt-3 text-sm leading-relaxed text-cream/62">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
