import { useLayoutEffect, useRef } from 'react'
import portrait from '../assets/portrait.jpg'
import { about, heroWords, site } from '../content'
import { gsap } from '../lib/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { MagneticLink } from './MagneticLink'
import { MaskedReveal } from './MaskedReveal'
import { ParticleGlobe } from './ParticleGlobe'

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = wordRef.current
    if (!root || reduced) return

    const words = Array.from(root.querySelectorAll<HTMLElement>('[data-word]'))
    if (words.length < 2) return

    let timeline: gsap.core.Timeline | null = null
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 120, autoAlpha: 0 })
      gsap.set(words[0], { yPercent: 0, autoAlpha: 1 })

      timeline = gsap.timeline({ repeat: -1, delay: 1.15 })
      words.forEach((word, index) => {
        const next = words[(index + 1) % words.length]
        timeline?.to(word, { yPercent: -120, autoAlpha: 0, duration: 0.42, ease: 'power3.in' }, '+=1.7')
        timeline?.fromTo(
          next,
          { yPercent: 120, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.55, ease: 'power4.out' },
          '<0.1',
        )
        timeline?.set(word, { yPercent: 120 })
      })
    }, root)

    const onVisibility = () => {
      if (!timeline) return
      if (document.hidden) timeline.pause()
      else timeline.resume()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      ctx.revert()
    }
  }, [reduced])

  useLayoutEffect(() => {
    const node = copyRef.current
    if (!node || reduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(node, { y: 18 }, { y: 0, duration: 0.9, delay: 0.45, ease: 'power3.out' })
    })
    return () => ctx.revert()
  }, [reduced])

  useLayoutEffect(() => {
    const node = portraitRef.current
    if (!node || reduced) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        node,
        { y: 28, scale: 0.94 },
        { y: 0, scale: 1, duration: 1.05, delay: 0.15, ease: 'power3.out' },
      )
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="top" className="panel relative flex flex-col overflow-hidden p-5 sm:p-6">
      <p className="panel-label relative z-[1]">
        <span className="text-accent" aria-hidden="true">
          {'> '}
        </span>
        Initializing_portfolio.exe
      </p>
      <p className="relative z-[1] mt-2 font-mono text-[11px] tracking-[0.14em] text-fg/70 uppercase">
        Status: online
      </p>

      <div className="relative z-[1] mt-6 grid flex-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,32rem)]">
        <div className="order-2 lg:order-1">
          <h1 className="hero-title font-display font-extrabold uppercase">
            <span className="sr-only">I build scalable digital experiences.</span>
            <span aria-hidden="true" className="block">
              <MaskedReveal immediate className="hero-line">
                I build
              </MaskedReveal>
              <MaskedReveal immediate delay={0.1} className="hero-line">
                <span ref={wordRef} className="word-mark">
                  {heroWords.map((word, index) => (
                    <span key={word} data-word className={index === 0 ? 'word' : 'word invisible'}>
                      {word}
                    </span>
                  ))}
                </span>
              </MaskedReveal>
              <MaskedReveal immediate delay={0.2} className="hero-phrase">
                Digital experiences.
              </MaskedReveal>
            </span>
          </h1>
          <div ref={copyRef}>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{site.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <MagneticLink href="#work">
                View my work
                <span aria-hidden="true">→</span>
              </MagneticLink>
              <MagneticLink href={site.github} variant="secondary" external quiet>
                GitHub
              </MagneticLink>
              <MagneticLink href={site.linkedin} variant="secondary" external quiet>
                LinkedIn
              </MagneticLink>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {[
              ['Who', site.name],
              ['Role', 'Technical Lead'],
              ['Place', site.location],
              ['Years', `${about.years} frontend`],
              ['Mode', 'Vibe & legacy'],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[10px] tracking-[0.16em] text-accent-text uppercase">{label}</dt>
                <dd className="text-sm text-fg/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={portraitRef} className="portrait-stage relative order-1 mx-auto aspect-square w-full max-w-[32rem] lg:order-2 lg:max-w-none">
          <ParticleGlobe />
          <div className="portrait-float relative z-[1] mx-auto w-[68%]">
            <img
              src={portrait}
              alt={site.name}
              width={1024}
              height={1024}
              className="portrait-shot aspect-square w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>

      <p className="relative z-[1] mt-6 font-mono text-[10px] tracking-[0.16em] text-fg/65 uppercase">
        Scroll to explore the projects
      </p>
    </section>
  )
}
