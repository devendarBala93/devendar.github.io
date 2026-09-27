import type { SimpleIcon } from 'simple-icons'
import {
  siAngular,
  siBootstrap,
  siCss,
  siCursor,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siGithubcopilot,
  siGooglemaps,
  siHtml5,
  siJavascript,
  siJquery,
  siLess,
  siMaterialdesign,
  siMongodb,
  siMongoose,
  siNestjs,
  siNodedotjs,
  siPostman,
  siRazorpay,
  siReactivex,
  siSass,
  siStorybook,
  siTailwindcss,
  siTypescript,
  siWhatsapp,
} from 'simple-icons'

export type TechVisual = {
  name: string
  path?: string
  hex: string
  mark?: string
}

function fromIcon(name: string, icon: SimpleIcon): TechVisual {
  return { name, path: icon.path, hex: icon.hex }
}

const visuals: Record<string, TechVisual> = {
  Angular: fromIcon('Angular', siAngular),
  TypeScript: fromIcon('TypeScript', siTypescript),
  JavaScript: fromIcon('JavaScript', siJavascript),
  HTML5: fromIcon('HTML5', siHtml5),
  CSS3: fromIcon('CSS3', siCss),
  SCSS: fromIcon('SCSS', siSass),
  'Tailwind CSS': fromIcon('Tailwind CSS', siTailwindcss),
  Bootstrap: fromIcon('Bootstrap', siBootstrap),
  RxJS: fromIcon('RxJS', siReactivex),
  'Angular Material': fromIcon('Angular Material', siMaterialdesign),
  jQuery: fromIcon('jQuery', siJquery),
  Less: fromIcon('Less', siLess),
  'Node.js': fromIcon('Node.js', siNodedotjs),
  NestJS: fromIcon('NestJS', siNestjs),
  Express: fromIcon('Express', siExpress),
  MongoDB: fromIcon('MongoDB', siMongodb),
  Mongoose: fromIcon('Mongoose', siMongoose),
  Git: fromIcon('Git', siGit),
  GitHub: fromIcon('GitHub', siGithub),
  Figma: fromIcon('Figma', siFigma),
  Storybook: fromIcon('Storybook', siStorybook),
  Postman: fromIcon('Postman', siPostman),
  Cursor: fromIcon('Cursor', siCursor),
  'GitHub Copilot': fromIcon('GitHub Copilot', siGithubcopilot),
  Razorpay: fromIcon('Razorpay', siRazorpay),
  'Google Maps': fromIcon('Google Maps', siGooglemaps),
  WhatsApp: fromIcon('WhatsApp', siWhatsapp),
  'AG Grid': { name: 'AG Grid', hex: 'F05A28', mark: 'AG' },
  'REST APIs': { name: 'REST APIs', hex: '155EEF', mark: 'API' },
  Microfrontends: { name: 'Microfrontends', hex: '155EEF', mark: 'MF' },
  'Single-SPA': { name: 'Single-SPA', hex: '155EEF', mark: 'SPA' },
  'Component Architecture': { name: 'Component Architecture', hex: '155EEF', mark: 'CA' },
  'Design Systems': { name: 'Design Systems', hex: '155EEF', mark: 'DS' },
  'API Integration': { name: 'API Integration', hex: '155EEF', mark: 'API' },
  'Responsive Architecture': { name: 'Responsive Architecture', hex: '155EEF', mark: 'RWD' },
  'VS Code': { name: 'VS Code', hex: '007ACC', mark: 'VS' },
  Codeium: { name: 'Codeium', hex: '09B6A2', mark: 'Co' },
  ChatGPT: { name: 'ChatGPT', hex: '74AA9C', mark: 'AI' },
  'Vibe coding': { name: 'Vibe coding', hex: '155EEF', mark: 'VC' },
  OTP: { name: 'OTP', hex: '155EEF', mark: 'OTP' },
}

const aliases: Record<string, string> = {
  HTML: 'HTML5',
  CSS: 'CSS3',
  Sass: 'SCSS',
  'WhatsApp notifications': 'WhatsApp',
}

export function iconFor(name: string): TechVisual | undefined {
  const key = aliases[name] ?? name
  const visual = visuals[key]
  return visual?.path ? visual : undefined
}

export function techsIn(value: string): TechVisual[] {
  const parts = value
    .split(/[·+]/)
    .map((part) => part.trim())
    .filter(Boolean)

  const seen = new Set<string>()
  const found: TechVisual[] = []

  for (const part of parts) {
    const key = aliases[part] ?? part
    const visual = visuals[key]
    if (!visual?.path || seen.has(visual.name)) continue
    seen.add(visual.name)
    found.push(visual)
  }

  return found
}

export function iconInk(hex: string) {
  const value = Number.parseInt(hex, 16)
  const red = (value >> 16) & 255
  const green = (value >> 8) & 255
  const blue = value & 255
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255
  return luminance < 0.4 ? 'var(--color-fg)' : `#${hex}`
}
