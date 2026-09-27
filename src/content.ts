export const site = {
  name: 'Bala Devendar',
  role: 'Frontend & Full-Stack Engineer',
  title: 'Technical Lead at Kore.ai',
  location: 'Hyderabad, India',
  email: 'devendar.bala93@gmail.com',
  phone: '+91 8639528220',
  url: 'https://devendarbala93.github.io/devendar.github.io/',
  github: 'https://github.com/devendarBala93',
  linkedin: 'https://www.linkedin.com/in/bala-devendar-220557a4/',
  description:
    'Frontend & Full-Stack Engineer specializing in Angular, TypeScript and scalable enterprise applications, with full-stack development experience using Node.js, NestJS and MongoDB.',
} as const

export const heroWords = ['Scalable', 'Performant', 'Accessible', 'Full-stack'] as const

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
] as const

export const areas = [
  {
    index: '01',
    title: 'Frontend Engineering',
    skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Tailwind'],
    text: 'The deepest part of the practice: enterprise interfaces, component architecture, and the details that make large Angular applications hold together.',
  },
  {
    index: '02',
    title: 'Backend Development',
    skills: ['Node.js', 'NestJS', 'REST APIs', 'MongoDB', 'Mongoose'],
    text: 'APIs and data for products built end to end. Real backend work, shown in the projects, alongside a longer frontend career.',
  },
  {
    index: '03',
    title: 'Architecture & UX',
    skills: ['Microfrontends', 'Design Systems', 'Enterprise UI', 'Performance', 'Accessibility'],
    text: 'How the interface is structured: microfrontends, shared systems, speed, and access across the product.',
  },
] as const

export const skillGroups = [
  {
    title: 'Frontend',
    note: 'Primary craft.',
    wide: false,
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'RxJS',
      'AG Grid',
      'Angular Material',
      'jQuery',
      'Less',
    ],
  },
  {
    title: 'Backend',
    note: 'Shown through shipped full-stack projects.',
    wide: false,
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Architecture',
    note: 'How large interfaces stay coherent.',
    wide: false,
    items: [
      'Microfrontends',
      'Single-SPA',
      'Component Architecture',
      'Design Systems',
      'API Integration',
      'Responsive Architecture',
    ],
  },
  {
    title: 'Tools',
    note: 'Daily workflow.',
    wide: false,
    items: ['Git', 'GitHub', 'Figma', 'Storybook', 'Postman', 'VS Code'],
  },
  {
    title: 'AI & Vibe Coding',
    note: 'Faster delivery. Architecture and UI quality stay mine.',
    wide: true,
    items: ['Cursor', 'GitHub Copilot', 'Codeium', 'ChatGPT', 'Vibe coding'],
  },
] as const

export type ProjectId =
  | 'smartassist'
  | 'tataaig'
  | 'arc'
  | 'redcross'
  | 'kaiser'
  | 'physio'
  | 'retail'
  | 'system'
  | 'storybook'

export type Project = {
  id: ProjectId
  index: string
  title: string
  kind: string
  fullStack: boolean
  summary: string
  stack: { label: string; value: string }[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: 'smartassist',
    index: '01',
    title: 'SmartAssist & XO Platform',
    kind: 'Kore.ai · Frontend',
    fullStack: false,
    summary:
      'Enterprise contact-center and AI platform UI. Customer and admin portals in Angular, TypeScript, HTML, SCSS, and RxJS, including live conversation and agent-assist screens.',
    stack: [
      { label: 'Product', value: 'SmartAssist · XO Platform' },
      { label: 'Frontend', value: 'Angular · TypeScript · HTML · SCSS · RxJS' },
      { label: 'Integration', value: 'REST APIs · Real-time sockets' },
    ],
    features: [
      'Customer and admin portals',
      'Agent-assist features',
      'Conversation management',
      'AI-generated summaries',
      'Skill management',
      'Configuration modules',
      'Responsive UI',
      'Accessibility',
      'Cross-browser support',
      'Performance optimization',
    ],
  },
  {
    id: 'tataaig',
    index: '02',
    title: 'TATAAIG',
    kind: 'Parinati Solutions · Frontend',
    fullStack: false,
    summary:
      'Web delivery for TATAAIG at Parinati Solutions: PSD to HTML, responsive pages, development, and ongoing support.',
    stack: [
      { label: 'Client work', value: 'TATAAIG' },
      { label: 'Frontend', value: 'HTML · CSS · Responsive web' },
      { label: 'Delivery', value: 'PSD to HTML · Support' },
    ],
    features: ['PSD to HTML', 'Responsive layouts', 'Web development', 'Project support'],
  },
  {
    id: 'arc',
    index: '03',
    title: 'ARC Swimming Pool',
    kind: 'Frontend · HTML5',
    fullStack: false,
    summary:
      'A swimming-pool game rebuilt from Flash. The interface and interaction were converted to HTML5 with JavaScript and CSS.',
    stack: [
      { label: 'Frontend', value: 'HTML5 · JavaScript · CSS' },
      { label: 'Work', value: 'Flash to HTML5 conversion' },
    ],
    features: ['Flash to HTML5', 'JavaScript interaction', 'CSS interface'],
  },
  {
    id: 'redcross',
    index: '04',
    title: 'Red Cross WSI',
    kind: 'Project member',
    fullStack: false,
    summary: 'Project member on the Red Cross WSI web project, working on the interface side of the delivery.',
    stack: [{ label: 'Role', value: 'Project member' }, { label: 'Focus', value: 'Web interface' }],
    features: ['Web interface delivery', 'Project collaboration'],
  },
  {
    id: 'kaiser',
    index: '05',
    title: 'Kaiser Permanente',
    kind: 'Project member',
    fullStack: false,
    summary: 'Project member on the Kaiser Permanente web project, contributing to the UI work on the engagement.',
    stack: [{ label: 'Role', value: 'Project member' }, { label: 'Focus', value: 'Web interface' }],
    features: ['Web interface delivery', 'Project collaboration'],
  },
  {
    id: 'physio',
    index: '06',
    title: 'Physiotherapy Platform',
    kind: 'Full-Stack Application',
    fullStack: true,
    summary:
      'A clinic product across the stack. Angular on the client, NestJS and Node.js for the API, and MongoDB with Mongoose for patients, physiotherapists, appointments, and role-based desks.',
    stack: [
      { label: 'Frontend', value: 'Angular' },
      { label: 'Backend', value: 'NestJS · Node.js' },
      { label: 'Database', value: 'MongoDB + Mongoose' },
    ],
    features: [
      'OTP authentication',
      'Patient management',
      'Physiotherapist management',
      'Appointment booking',
      'Slot availability',
      'Receptionist dashboard',
      'Admin dashboard',
      'REST APIs',
      'Role-based access',
    ],
  },
  {
    id: 'retail',
    index: '07',
    title: 'Retail Commerce Platform',
    kind: 'Full-Stack Application',
    fullStack: true,
    summary:
      'Commerce from discovery through payment and order updates. Angular on the client, Node.js and NestJS for the API, MongoDB for catalog and orders, with payments, maps, OTP, and customer notifications.',
    stack: [
      { label: 'Frontend', value: 'Angular' },
      { label: 'Backend', value: 'Node.js / NestJS' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Integrations', value: 'Razorpay · Google Maps · OTP · WhatsApp notifications' },
    ],
    features: [
      'Product discovery',
      'Cart',
      'Checkout',
      'Orders',
      'Payments',
      'Location capture',
      'Order management',
      'Customer notifications',
    ],
  },
  {
    id: 'system',
    index: '08',
    title: 'Angular Design System',
    kind: 'Frontend Engineering',
    fullStack: false,
    summary:
      'A token-based component library for consistent enterprise UI. Color, type, and spacing tokens, reusable Angular components, and responsive patterns built to stay accessible.',
    stack: [{ label: 'Frontend', value: 'Angular · TypeScript · SCSS' }],
    features: ['Reusable components', 'Design tokens', 'Responsive components', 'Accessibility'],
  },
  {
    id: 'storybook',
    index: '09',
    title: 'Storybook Components',
    kind: 'Frontend Engineering',
    fullStack: false,
    summary:
      'Angular components documented in Storybook so each piece can be reviewed on its own, with states, variants, and notes on how it is meant to be used.',
    stack: [{ label: 'Frontend', value: 'Angular · TypeScript · Storybook' }],
    features: ['Component stories', 'States and variants', 'Usage notes', 'Isolated review'],
  },
]

export const caseStudyIds: ProjectId[] = ['physio', 'retail', 'system']

export const education = [
  { degree: 'M.Tech', school: 'Jawaharlal Nehru Technological University (JNTU)', note: '2016' },
  { degree: 'B.Tech / B.E.', school: 'Jawaharlal Nehru Technological University (JNTU)', note: '2014' },
  { degree: 'Class XII', school: 'Telugu', note: '2010' },
  { degree: 'Class X', school: 'Telugu', note: '2008' },
] as const

export const experience = [
  { role: 'Technical Lead', org: 'Kore.ai', note: 'Jan 2026 – Present' },
  { role: 'Associate Technical Lead', org: 'Kore.ai', note: 'Jan 2020 – Jan 2026' },
  { role: 'Senior Software Engineer', org: 'Parinati Solutions', note: 'Sep 2019 – Jan 2020' },
  { role: 'Software Engineer', org: 'iPower Four Technologies', note: 'Jun 2016 – Sep 2019' },
] as const

export const about = {
  years: '9+',
  lead: "I'm a frontend-focused full-stack engineer with deep experience building scalable web interfaces and enterprise applications. My strongest expertise is Angular, TypeScript and frontend architecture, while I also build end-to-end applications using Node.js, NestJS and MongoDB.",
  vibe: 'I work as a vibe coder and on legacy code. Cursor, GitHub Copilot, Codeium and ChatGPT speed up implementation, reviews and prototyping. Older interfaces still get the same care. The architecture, accessibility and quality stay with me.',
  highlights: [
    '9+ years in IT and frontend',
    'SmartAssist and XO Platform',
    'Technical Lead at Kore.ai',
    'Angular application architecture',
    'Enterprise applications',
    'Microfrontends',
    'Design systems',
    'Performance optimization',
    'Full-stack application development',
    'REST API development',
    'MongoDB integration',
    'Vibe coding',
    'AI-assisted UI delivery',
  ],
} as const

export function joinList(items: readonly string[]) {
  return items.join(' • ')
}
