# Christopher Law — Portfolio

Static portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages at [christophler.github.io](https://christophler.github.io).

Requires **Node.js ≥ 22.12.0** (Astro 7 engine requirement). Use Node 22 locally and in CI (see `.nvmrc`).

## Site structure

- `/` — landing
- `/projects`, `/projects/[slug]` — case studies
- `/writeups`, `/writeups/[slug]` — articles
- `/experience` — timeline, certs, availability

Content: `src/content/` · Config: `src/data/*.yaml` · UI: `src/components/`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

`npm run build` runs `astro check` and `astro build`, producing static output in `dist/`.

## CI and deployment

| Workflow | Trigger | What it does |
| --- | --- | --- |
| [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | Pull requests and pushes to `main` | `npm ci`, `npm run build`, lychee link check on `./dist` |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | Push to `main` | Same build + link check, then deploy to GitHub Pages |

To run the link check locally after a build:

```bash
npm run build
npx lychee --config lychee.toml ./dist
```

## Content

Projects and writeups live in `src/content/` (Astro collections). Site-wide config (contact, job-search status, certs) lives in `src/data/*.yaml`.
