import type { ReactNode } from 'react'
import type { ProjectId } from '../content'

function Frame({ children }: { label?: string; children: ReactNode }) {
  return <div className="bg-canvas p-4">{children}</div>
}

function ClinicPreview() {
  const rows = [
    { time: '09:30', title: 'Patient session', meta: 'Confirmed slot', state: 'Booked' },
    { time: '10:15', title: 'Therapist schedule', meta: 'In clinic', state: 'Active' },
    { time: '11:00', title: 'Reception desk', meta: 'Open slot', state: 'Available' },
  ]
  const roles = ['Patient', 'Physio', 'Reception', 'Admin']

  return (
    <Frame label="Physio desk">
      <div className="grid grid-cols-3 gap-2">
        {['Patients', 'Therapists', 'Slots'].map((label) => (
          <div key={label} className="rounded-2xl border border-fg/10 bg-fg/[0.04] px-3 py-3">
            <p className="text-[0.65rem] tracking-[0.14em] text-fg/60 uppercase">{label}</p>
            <p className="mt-2 h-2 w-10 rounded-full bg-accent" />
          </div>
        ))}
      </div>
      <ul className="mt-3 divide-y divide-fg/10 rounded-2xl border border-fg/10">
        {rows.map((row) => (
          <li key={row.time} className="flex items-center gap-3 px-3 py-3">
            <span className="w-12 font-display text-sm font-bold text-accent-text">{row.time}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm">{row.title}</span>
              <span className="block text-xs text-muted">{row.meta}</span>
            </span>
            <span className="rounded-full border border-fg/10 px-2 py-1 text-[0.65rem] text-fg/70">
              {row.state}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {roles.map((role, index) => (
          <span
            key={role}
            className={
              index === roles.length - 1
                ? 'rounded-full bg-accent px-2.5 py-1 text-[0.68rem] font-semibold text-on-accent'
                : 'rounded-full border border-fg/10 px-2.5 py-1 text-[0.68rem] text-fg/70'
            }
          >
            {role}
          </span>
        ))}
      </div>
    </Frame>
  )
}

function CommercePreview() {
  const steps = ['Discover', 'Cart', 'Pay', 'Notify']
  return (
    <Frame label="Commerce flow">
      <div className="grid grid-cols-3 gap-2">
        {['Apparel', 'Home', 'Care'].map((item) => (
          <div key={item} className="rounded-2xl border border-fg/10 bg-fg/[0.04] p-2">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-accent/50 to-fg/10" />
            <p className="mt-2 text-xs text-fg/80">{item}</p>
          </div>
        ))}
      </div>
      <ol className="mt-4 grid grid-cols-4 gap-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className={
              index === 2
                ? 'rounded-xl bg-accent px-2 py-2 text-center text-[0.65rem] font-semibold text-on-accent'
                : 'rounded-xl border border-fg/10 px-2 py-2 text-center text-[0.65rem] text-fg/65'
            }
          >
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-3 flex items-center justify-between rounded-2xl border border-fg/10 px-3 py-3">
        <span>
          <span className="block text-sm">Location captured</span>
          <span className="block text-xs text-muted">Maps · OTP · WhatsApp update</span>
        </span>
        <span className="rounded-full bg-fg px-3 py-1.5 text-xs font-semibold text-page">Pay</span>
      </div>
    </Frame>
  )
}

function SystemPreview() {
  return (
    <Frame label="Component library">
      <div className="flex gap-2">
        {['#155EEF', '#F4F6FB', '#9DBBFF', '#1C2230'].map((token) => (
          <span key={token} className="flex-1">
            <span className="block h-10 rounded-xl border border-fg/10" style={{ background: token }} />
            <span className="mt-1 block text-[0.62rem] text-fg/60">{token}</span>
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-on-accent">Primary</span>
        <span className="rounded-full border border-fg/15 px-3 py-1.5 text-xs">Secondary</span>
        <span className="rounded-full px-3 py-1.5 text-xs text-accent-text">Ghost</span>
      </div>
      <div className="mt-4 rounded-2xl border border-fg/10 px-3 py-3 text-sm text-fg/70">
        Input specimen
      </div>
      <p className="mt-4 font-display text-4xl font-bold tracking-tight">
        Aa <span className="text-accent">Token</span>
      </p>
    </Frame>
  )
}

function AssistPreview() {
  return (
    <Frame label="Contact center">
      <div className="grid grid-cols-[0.9fr_1.2fr] gap-2">
        <div className="space-y-2">
          {['Queue', 'Agent assist', 'Skills'].map((item) => (
            <div key={item} className="rounded-xl border border-fg/10 px-3 py-2 text-xs text-fg/70">
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-fg/10 p-3">
          <p className="text-[10px] tracking-[0.16em] text-accent-text uppercase">Live conversation</p>
          <div className="mt-3 space-y-2">
            <p className="max-w-[80%] rounded-xl bg-fg/10 px-3 py-2 text-xs">Customer message</p>
            <p className="ml-auto max-w-[80%] rounded-xl bg-accent/80 px-3 py-2 text-xs text-on-accent">Agent reply</p>
          </div>
          <p className="mt-3 rounded-xl border border-fg/10 px-3 py-2 text-[11px] text-fg/75">
            AI summary ready
          </p>
        </div>
      </div>
    </Frame>
  )
}

function PagePreview({ label, title }: { label: string; title: string }) {
  return (
    <Frame label={label}>
      <div className="rounded-2xl border border-fg/10 p-4">
        <div className="h-2 w-16 rounded-full bg-accent" />
        <p className="mt-4 font-display text-2xl font-bold">{title}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {['Desktop', 'Tablet', 'Mobile'].map((size) => (
            <div key={size} className="rounded-xl border border-fg/10 px-2 py-6 text-center text-[10px] text-fg/75">
              {size}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function StorybookPreview() {
  const stories = ['Button', 'Input', 'Card', 'Badge']
  return (
    <Frame label="Storybook">
      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-2">
        <ul className="space-y-1">
          {stories.map((story, index) => (
            <li
              key={story}
              className={
                index === 0
                  ? 'rounded-lg bg-accent px-2 py-1.5 text-[0.65rem] font-semibold text-on-accent'
                  : 'rounded-lg border border-fg/10 px-2 py-1.5 text-[0.65rem] text-fg/70'
              }
            >
              {story}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-fg/10 p-3">
          <p className="text-[10px] tracking-[0.16em] text-accent-text uppercase">Button / Primary</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-on-accent">Primary</span>
            <span className="rounded-full border border-fg/15 px-3 py-1.5 text-xs">Rest</span>
            <span className="rounded-full border border-fg/10 px-3 py-1.5 text-xs text-fg/45">Disabled</span>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-muted">States, variants, and usage notes for the component.</p>
        </div>
      </div>
    </Frame>
  )
}

function ArcadePreview() {
  return (
    <Frame label="HTML5 game">
      <div className="relative overflow-hidden rounded-2xl border border-fg/10 bg-canvas px-4 py-8">
        <div className="mx-auto h-24 w-40 rounded-[50%] border border-accent/50 bg-accent/20" />
        <p className="mt-4 text-center font-display text-xl font-bold">Pool lane</p>
        <p className="mt-1 text-center text-[11px] text-fg/75">Flash → HTML5 · JavaScript · CSS</p>
      </div>
    </Frame>
  )
}

export function ProjectPreview({ id }: { id: ProjectId }) {
  if (id === 'smartassist') return <AssistPreview />
  if (id === 'tataaig') return <PagePreview label="Responsive pages" title="TATAAIG" />
  if (id === 'arc') return <ArcadePreview />
  if (id === 'redcross') return <PagePreview label="Web project" title="Red Cross WSI" />
  if (id === 'kaiser') return <PagePreview label="Web project" title="Kaiser Permanente" />
  if (id === 'physio') return <ClinicPreview />
  if (id === 'retail') return <CommercePreview />
  if (id === 'storybook') return <StorybookPreview />
  return <SystemPreview />
}
