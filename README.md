# Christopher Law — Portfolio

Static portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages at [christophler.github.io](https://christophler.github.io).

Requires **Node.js ≥ 22.12.0** (Astro 7 engine requirement). Local and CI use Node 22.

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

## Deployment

Pushes to `main` build and deploy via GitHub Actions (`.github/workflows/deploy.yml`) to the user site at [christophler.github.io](https://christophler.github.io) (`base: '/'`).

## License

Private — all rights reserved unless otherwise noted.
