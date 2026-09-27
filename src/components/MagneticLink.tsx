import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '../lib/gsap'
import { cx } from '../lib/cx'

type MagneticLinkProps = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  quiet?: boolean
  variant?: 'primary' | 'secondary'
}

const variants = {
  primary: 'border-accent bg-accent text-on-accent hover:bg-[#3d74f6]',
  secondary: 'border-fg/15 bg-transparent text-fg/80 hover:border-accent hover:text-fg',
} as const

export function MagneticLink({
  href,
  children,
  className,
  external = false,
  quiet = false,
  variant = 'primary',
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return

    const onMove = (event: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const rect = el.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      gsap.to(el, { x: x * 0.28, y: y * 0.32, duration: 0.35, ease: 'power3.out' })
    }

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      gsap.killTweensOf(el)
      gsap.set(el, { clearProps: 'transform' })
    }
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      className={cx(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 font-mono text-[11px] font-medium tracking-[0.14em] uppercase transition-colors',
        variants[variant],
        className,
      )}
      {...(external
        ? { target: '_blank', rel: 'noreferrer noopener me' }
        : {})}
    >
      {children}
      {external && !quiet ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}
