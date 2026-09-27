import { site } from '../content'
import { MagneticLink } from './MagneticLink'

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="panel grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)]">
        <div>
          <p className="panel-label">
            <span className="text-fg/40">// </span>
            Let’s build
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to build
            <span className="text-accent"> the interface.</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
            Angular and TypeScript are the core. Node.js, NestJS, and MongoDB finish the full-stack
            projects. Cursor, Copilot, Codeium, and ChatGPT are how the vibe-coding work moves.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <MagneticLink href={site.github} external>
              GitHub
            </MagneticLink>
            <MagneticLink href={site.linkedin} variant="secondary" external>
              LinkedIn
            </MagneticLink>
            <MagneticLink href={`mailto:${site.email}`} variant="secondary">
              Email
            </MagneticLink>
            <MagneticLink href={`tel:${site.phone.replace(/\s/g, '')}`} variant="secondary">
              Call
            </MagneticLink>
          </div>
        </div>
        <div className="rounded-xl border border-fg/10 bg-canvas p-4 font-mono text-[11px] leading-6 text-fg/75">
          <p className="text-accent-text">system.log</p>
          <p>[ok] portfolio online</p>
          <p>[ok] frontend: Angular, TypeScript</p>
          <p>[ok] full-stack: NestJS, MongoDB</p>
          <p>[ok] vibe coder: Cursor, Copilot</p>
          <p className="text-fg/80">{site.location}</p>
          <p>{site.email}</p>
          <p>{site.phone}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 py-2 font-mono text-[10px] tracking-[0.12em] text-fg/65 uppercase">
        <p>
          {site.name} · {site.role}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
