import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from '../lib/gsap'
import { cx } from '../lib/cx'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type MaskedRevealProps = {
  children: ReactNode
  className?: string
  immediate?: boolean
  delay?: number
}

export function MaskedReveal({
  children,
  className,
  immediate = false,
  delay = 0,
}: MaskedRevealProps) {
  const outerRef = useRef<HTMLSpanElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner || reduced) return

    const ctx = gsap.context(() => {
      const tween: gsap.TweenVars = {
        yPercent: 0,
        duration: 1.12,
        delay,
        ease: 'power4.out',
      }
      if (!immediate) {
        tween.scrollTrigger = { trigger: outer, start: 'top 90%' }
      }
      gsap.fromTo(inner, { yPercent: 112 }, tween)
    })

    return () => ctx.revert()
  }, [reduced, immediate, delay])

  return (
    <span ref={outerRef} className={cx('block overflow-hidden', className)}>
      <span ref={innerRef} className="block">
        {children}
      </span>
    </span>
  )
}
