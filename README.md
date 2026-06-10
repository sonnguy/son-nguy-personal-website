# Son Nguy Personal Website

This repository powers [sonnguy.dev](https://sonnguy.dev), Son Nguy's personal
website and professional resume system.

It is the unified source for:

- The personal website
- The HTML resume page
- The resume PDF export workflow

The project currently contains the Next.js foundation and placeholder routes.
The final website content and visual design have not been implemented yet.

Product requirements, frozen content, build guidance, and the existing resume
source are maintained in [`docs/`](docs/).

The current standalone HTML resume is preserved in [`legacy/`](legacy/), and the
generated PDF is available under [`public/resume/`](public/resume/).

## Local Development

Requirements:

- Node.js 20.9 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The website is available at `http://localhost:3000`, with the resume foundation
at `http://localhost:3000/resume`.

## Validation

```bash
npm run lint
npm run build
```

## Resume PDF

The resume PDF is generated from the structured JSON files in [`content/`](content/)
using the print template in
[`src/resume/resume-template.mjs`](src/resume/resume-template.mjs).

Regenerate it after changing approved resume content:

```bash
npm run generate:resume
```

The command uses Playwright with an installed Chrome or Chromium browser and
writes the two-page A4 PDF to:

```text
public/resume/Son-Nguy-Senior-Frontend-Engineer-2026.pdf
```

Set `CHROME_PATH` when Chrome is installed in a non-standard location.
