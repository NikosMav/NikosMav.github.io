# Nikos Mavrapidis — Portfolio

An editorial single-page portfolio covering selected product work, role progression, and an ongoing move into applied AI engineering.

**Live site:** [https://nikosmav.github.io/](https://nikosmav.github.io/)

## Technology

- React 19
- Vite 8
- Local Fraunces and DM Sans webfonts
- Phosphor icons
- GitHub Pages and GitHub Actions

## Local development

Requires Node.js 20.19+ (CI uses Node 22).

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`npm run build` bundles the client, then renders the app on the server and injects the HTML into `dist/index.html` (see [`scripts/prerender.mjs`](scripts/prerender.mjs)), so the page ships real content before JavaScript loads and React hydrates it.

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

Pushes to `main` are linted, built, and deployed automatically to GitHub Pages through [the deployment workflow](.github/workflows/deploy.yml). Pull requests run the same lint and build checks without deploying.
