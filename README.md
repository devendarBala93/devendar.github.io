# Bala Devendar

Portfolio for a **frontend-focused full-stack engineer**.

Frontend engineering is the strongest part of the profile: Angular, TypeScript, enterprise UI, microfrontends, and design systems. Full-stack work is shown through real applications built with Node.js, NestJS, and MongoDB. Public profile details add a Technical Lead role at Kore.ai, 9+ years of experience, and vibe coding with Cursor, GitHub Copilot, Codeium, and ChatGPT. Backend experience is not presented as equal to the frontend career.

Live target: [https://devendarbala93.github.io](https://devendarbala93.github.io/)

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- GSAP for masked text, the hero word cycle, scroll motion, and magnetic buttons

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

The user site `https://<username>.github.io` only publishes from a repository named `<username>.github.io`.

1. Create a public repository named `devendarBala93.github.io`.
2. Push this project to the `main` branch.
3. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
4. Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys `dist`.

`vite.config.ts` uses `base: '/'` for that user-site URL. A project site such as `https://devendarbala93.github.io/some-repo/` needs `base` set to `/some-repo/`.

## Motion and access

- Headings use masked reveals. Scroll sections move into place without hiding them from the keyboard.
- The hero cycles Scalable, Performant, Accessible, and Full-stack. The accessible name stays “I build scalable digital experiences.”
- Buttons follow the pointer on fine devices. `prefers-reduced-motion` turns the motion off.
- Skills are grouped. There are no percentage meters.
