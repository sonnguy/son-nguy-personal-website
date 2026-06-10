# docs/README_FOR_CODEX.md

## Project

Build `sonnguy.dev`, the personal brand website and resume system for Son Nguy.

This repository should support two related outputs:

1. Personal website: `sonnguy.dev`
2. Resume system: HTML resume page with PDF export support

The website and resume should share a common content source where practical, so future updates remain consistent.

## Existing Repository

GitHub repo:

https://github.com/sonnguy/son-nguy-personal-website

## Product Positioning

Son Nguy should be positioned as:

**Product Engineer specializing in Payments, Martech, and Customer Experience Platforms**

This website is not a traditional developer portfolio.

It is a professional personal brand website designed for:

1. Engineering Managers
2. CTOs
3. Startup Founders
4. Recruiters

## V1 Website Scope

Build a single-page website.

Required sections:

1. Hero
2. Career Snapshot
3. Core Domains
4. Featured Platforms
5. Experience
6. Engineering Philosophy
7. Contact

## V1 Resume Scope

Add a resume area that can render Son's resume as HTML and support PDF export later.

Preferred route:

```text
/resume
```

The resume should eventually be printable/exportable as PDF.

For V1, prioritize clean semantic HTML and print-friendly CSS.

## Recommended Stack

* Next.js
* TypeScript
* Tailwind CSS
* Static rendering
* Vercel deployment

## Recommended Structure

```text
src/
  app/
    page.tsx
    resume/
      page.tsx

  components/
    layout/
    sections/
    resume/

  content/
    profile.ts
    homepage.ts
    resume.ts
    experience.ts
    platforms.ts
    domains.ts

  lib/

public/
  images/
  files/

docs/
  README_FOR_CODEX.md
  MASTER_BUILD_BRIEF.md
  CONTENT_FREEZE.md
```

## Important Principle

Content should be treated as the source of truth.

Do not scatter text across many components.

Store reusable website and resume content under `src/content`.

## Explicitly Avoid

Do not build:

* Blog
* Project gallery
* Case study pages
* Testimonials
* CMS
* Dark mode
* Complex animations
* Fancy scroll effects
* Portfolio template layout
* Technology-first messaging

This is a content-first professional website.
