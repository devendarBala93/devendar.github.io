import { useEffect, useId, useRef, useState } from 'react'
import { nav, site } from '../content'
import { useTheme, type Theme } from '../hooks/useTheme'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const button = buttonRef.current
    if (!panel || !button) return

    const getFocusable = () =>
      [button, ...panel.querySelectorAll<HTMLElement>('a')].filter(Boolean)

    getFocusable()[1]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        button.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = getFocusable()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header id="site-header" className="sticky top-0 z-40 border-b border-fg/10 bg-header">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent font-sans text-[13px] font-extrabold tracking-tight text-on-accent">
            BD
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight text-fg">{site.name}</span>
            <span className="mt-0.5 hidden font-mono text-[11px] tracking-[0.06em] text-muted uppercase sm:block">
              Frontend & full-stack · Vibe & legacy
            </span>
          </span>
          <span className="sr-only">, home</span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-2 font-mono text-[11px] tracking-[0.12em] text-fg/80 uppercase transition-colors hover:text-fg"
              >
                {String(index + 1).padStart(2, '0')}_{item.label}
              </a>
            ))}
          </nav>
          <ThemeSwitch theme={theme} onChange={setTheme} />
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-fg/15 lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
              <span className={`block h-px w-full bg-fg transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`block h-px w-full bg-fg transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto border-t border-fg/10 bg-header lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex w-full max-w-[1180px] flex-col px-5 py-4 sm:px-8">
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-fg/10 py-4 font-display text-3xl font-semibold tracking-tight"
              onClick={() => setOpen(false)}
            >
              <span className="mr-3 font-mono text-sm text-accent-text">
                {String(index + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function ThemeSwitch({ theme, onChange }: { theme: Theme; onChange: (theme: Theme) => void }) {
  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'light'}
      onClick={() => onChange(next)}
      className="inline-flex size-11 items-center justify-center rounded-md border border-fg/15 text-fg hover:border-accent"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinejoin="round" d="M20 14.5A7.5 7.5 0 1 1 9.5 4 6 6 0 0 0 20 14.5z" />
    </svg>
  )
}
