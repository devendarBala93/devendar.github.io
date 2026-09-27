import { skillGroups } from '../content'
import { iconFor } from '../lib/tech'
import { TechMark } from './TechMark'

export function Skills() {
  const craft = skillGroups.filter((group) => group.title !== 'Tools' && group.title !== 'AI & Vibe Coding')
  const tools = skillGroups.find((group) => group.title === 'Tools')
  const ai = skillGroups.find((group) => group.title === 'AI & Vibe Coding')

  return (
    <section id="skills" className="scroll-mt-24" aria-labelledby="skills-title">
      <h2 id="skills-title" className="sr-only">
        Skills, engineering, and tools
      </h2>
      <div className="grid gap-4 lg:grid-cols-2" data-reveal-group>
        <article className="panel p-5">
          <h3 className="panel-label">
            <span className="text-fg/40">// </span>
            Technical skills
          </h3>
          <p className="mt-2 text-sm text-muted">
            Frontend is the deepest list. Backend is what the full-stack projects use. No score bars.
          </p>
          <div className="mt-4 space-y-4">
            {craft.map((group) => (
              <div key={group.title}>
                <p className="font-display text-base font-bold">{group.title}</p>
                <p className="text-xs text-muted">{group.note}</p>
                <ul className="mt-3 flex flex-wrap items-center gap-2">
                  {group.items.map((item, index) => (
                    <li key={item}>
                      <SkillItem name={item} index={index} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-4">
          {ai ? (
            <article className="panel p-5">
              <h3 className="panel-label">
                <span className="text-fg/40">// </span>
                {ai.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{ai.note}</p>
              <ul className="mt-4 flex flex-wrap items-center gap-2">
                {ai.items.map((item, index) => (
                  <li key={item}>
                    <SkillItem name={item} index={index} />
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
          {tools ? (
            <article className="panel p-5">
              <h3 className="panel-label">
                <span className="text-fg/40">// </span>
                Tools I use
              </h3>
              <p className="mt-2 text-sm text-muted">{tools.note}</p>
              <ul className="mt-4 flex flex-wrap items-center gap-2">
                {tools.items.map((item, index) => (
                  <li key={item}>
                    <SkillItem name={item} index={index} />
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function SkillItem({ name, index }: { name: string; index: number }) {
  const icon = iconFor(name)
  if (!icon) {
    return (
      <span className="inline-flex h-11 items-center rounded-xl border border-fg/10 px-3 text-sm text-fg/90">
        {name}
      </span>
    )
  }
  return <TechMark tech={icon} index={index} />
}
