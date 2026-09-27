import { areas, joinList } from '../content'

export function Engineering() {
  return (
    <article className="panel h-full p-5" aria-labelledby="engineering-title">
      <h3 id="engineering-title" className="panel-label">
        <span className="text-fg/40">// </span>
        Engineering
      </h3>
      <ul className="mt-4 divide-y divide-fg/10">
        {areas.map((area) => (
          <li key={area.index} className="py-3">
            <p className="font-mono text-[10px] tracking-[0.14em] text-accent-text">{area.index}</p>
            <p className="mt-1 font-display text-lg font-bold tracking-tight">{area.title}</p>
            <p className="mt-1 text-sm text-fg/75">{joinList(area.skills)}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{area.text}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
