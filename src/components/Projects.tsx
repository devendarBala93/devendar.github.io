import { useState } from 'react'
import { caseStudyIds, projects, type Project, type ProjectId } from '../content'
import { cx } from '../lib/cx'
import { ProjectPreview } from './Previews'
import { TechMark } from './TechMark'
import { techsIn } from '../lib/tech'

export function CaseStudies() {
  return (
    <section id="cases" className="panel scroll-mt-24 p-5 sm:p-6" aria-labelledby="cases-title">
      <div className="flex items-center justify-between gap-3">
        <h2 id="cases-title" className="panel-label">
          <span className="text-fg/40">// </span>
          Case studies
        </h2>
        <a href="#work" className="font-mono text-[10px] tracking-[0.14em] text-fg/70 uppercase hover:text-fg">
          View all
        </a>
      </div>
      <ol className="mt-4 flex flex-col gap-3">
        {caseStudyIds
          .map((id) => projects.find((project) => project.id === id))
          .filter((project): project is Project => Boolean(project))
          .map((project) => (
          <li key={project.id}>
            <a
              href={`#project-${project.id}`}
              className="grid gap-3 rounded-xl border border-fg/10 bg-fg/[0.04] p-3 transition-colors hover:border-accent/60 sm:grid-cols-[7.5rem_minmax(0,1fr)]"
            >
              <span className="h-24 overflow-hidden rounded-lg border border-fg/10 bg-canvas" aria-hidden="true">
                <span className="block w-[18rem] origin-top-left scale-[0.4]">
                  <ProjectPreview id={project.id} />
                </span>
              </span>
              <span>
                <span className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[11px] text-accent-text">{project.index}</span>
                  <span
                    className={cx(
                      'rounded-md px-2 py-1 font-mono text-[10px] tracking-[0.12em] uppercase',
                      project.fullStack ? 'bg-accent/15 text-accent-text' : 'border border-fg/15 text-fg/60',
                    )}
                  >
                    {project.kind}
                  </span>
                </span>
                <span className="mt-1 block font-display text-lg font-bold tracking-tight">{project.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{project.summary}</span>
                <StackRow stack={project.stack} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Projects() {
  const [activeId, setActiveId] = useState<ProjectId>(projects[0].id)

  return (
    <section id="work" className="scroll-mt-24" aria-labelledby="work-title">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 id="work-title" className="panel-label">
          <span className="text-fg/40">// </span>
          Selected projects
        </h2>
        <p className="font-mono text-[10px] tracking-[0.14em] text-fg/70 uppercase">
          {String(projects.length).padStart(2, '0')} builds
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3" data-reveal-group>
        {projects.map((project) => {
          const selected = project.id === activeId
          return (
            <article key={project.id} id={`project-${project.id}`} data-reveal-item className="panel flex flex-col p-4">
              <button
                type="button"
                className="text-left"
                aria-expanded={selected}
                onClick={() => setActiveId(project.id)}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] text-accent-text">{project.index}</span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-fg/75 uppercase">
                    {project.kind}
                  </span>
                </span>
                <span className="mt-2 block font-display text-xl font-bold tracking-tight">{project.title}</span>
              </button>
              <div className="mt-3 overflow-hidden rounded-xl border border-fg/10" aria-hidden="true">
                <ProjectPreview id={project.id} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.features.slice(0, selected ? project.features.length : 4).map((feature) => (
                  <li key={feature} className="rounded-md border border-fg/10 px-2 py-1 text-xs text-fg/75">
                    {feature}
                  </li>
                ))}
              </ul>
              <StackRow stack={project.stack} className="mt-3" />
              {selected ? (
                <dl className="mt-4 grid gap-3 border-t border-fg/10 pt-3">
                  {project.stack.map((item) => (
                    <div key={item.label}>
                      <dt className="font-mono text-[10px] tracking-[0.14em] text-accent-text uppercase">{item.label}</dt>
                      <dd className="text-sm text-fg/85">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <button
                  type="button"
                  className="mt-3 text-left font-mono text-[10px] tracking-[0.14em] text-accent-text uppercase"
                  onClick={() => setActiveId(project.id)}
                >
                  Open study
                </button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function StackRow({
  stack,
  className,
}: {
  stack: readonly { label: string; value: string }[]
  className?: string
}) {
  const techs = [...new Map(stack.flatMap((item) => techsIn(item.value)).map((tech) => [tech.name, tech])).values()]
  if (techs.length === 0) return null

  return (
    <span className={cx('flex flex-wrap items-center gap-2', className)}>
      {techs.map((tech, index) => (
        <TechMark key={tech.name} tech={tech} index={index} compact />
      ))}
    </span>
  )
}
