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
latest exported PDF is available under [`public/files/`](public/files/).

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
