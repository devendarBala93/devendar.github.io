import type { CSSProperties } from 'react'
import { cx } from '../lib/cx'
import { iconInk, type TechVisual } from '../lib/tech'

type TechMarkProps = {
  tech: TechVisual
  index?: number
  compact?: boolean
}

export function TechMark({ tech, index = 0, compact = false }: TechMarkProps) {
  const ink = iconInk(tech.hex)

  return (
    <span
      className={cx('tech-mark', compact && 'tech-mark-compact')}
      style={{ '--delay': `${index * 0.04}s`, '--brand': `#${tech.hex}` } as CSSProperties}
      role="img"
      aria-label={tech.name}
    >
      <span className="tech-glyph" style={{ color: ink }} aria-hidden="true">
        {tech.path ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={tech.path} fill="currentColor" />
          </svg>
        ) : (
          <span className="tech-letters">{tech.mark}</span>
        )}
      </span>
      <span className="tech-tip" role="tooltip" aria-hidden="true">
        {tech.name}
      </span>
    </span>
  )
}
