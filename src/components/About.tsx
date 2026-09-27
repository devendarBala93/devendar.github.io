import { about, education, experience, site } from '../content'

export function About() {
  return (
    <section id="about" className="scroll-mt-24" aria-labelledby="about-title">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
        <article className="panel p-5 sm:p-6">
          <p className="panel-label">
            <span className="text-fg/40">// </span>
            About
          </p>
          <h2 id="about-title" className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frontend-focused, full-stack in practice.
          </h2>
          <p className="mt-3 font-display text-5xl font-extrabold text-accent">{about.years}</p>
          <p className="text-sm text-muted">years of frontend and UI experience</p>
          <p className="mt-4 text-sm text-fg">
            {site.title}
            <span className="text-muted"> · {site.location}</span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg/90">{about.lead}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{about.vibe}</p>
          <a
            href={site.linkedin}
            className="mt-4 inline-flex font-mono text-[11px] tracking-[0.14em] text-accent-text uppercase"
            target="_blank"
            rel="noreferrer noopener me"
          >
            LinkedIn profile
            <span className="sr-only"> (opens in a new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        </article>

        <div className="grid gap-4">
          <article className="panel p-5">
            <h3 className="panel-label">Experience</h3>
            <ol className="mt-3 divide-y divide-fg/10">
              {experience.map((item) => (
                <li key={`${item.role}-${item.org}`} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <span>
                    <span className="block text-sm font-semibold">{item.role}</span>
                    <span className="block text-sm text-muted">{item.org}</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-accent-text uppercase sm:text-right">{item.note}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="panel p-5">
            <h3 className="panel-label">Education</h3>
            <ol className="mt-3 divide-y divide-fg/10">
              {education.map((item) => (
                <li key={item.degree} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                  <span>
                    <span className="block text-sm font-semibold">{item.degree}</span>
                    <span className="block text-sm text-muted">{item.school}</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-accent-text uppercase sm:text-right">{item.note}</span>
                </li>
              ))}
            </ol>
          </article>
          <ul className="grid gap-2 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <li key={item} className="rounded-xl border border-fg/10 bg-fg/[0.04] px-3 py-2 text-sm text-fg/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
