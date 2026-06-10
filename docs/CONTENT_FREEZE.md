# docs/CONTENT_FREEZE.md

## Hero

### Headline

Product Engineer specializing in Payments, Martech, and Customer Experience Platforms

### Subheadline

Building customer-facing products across fintech, AI SaaS, hospitality, and membership businesses with 10+ years of experience in frontend engineering, payment systems, analytics, and product delivery.

### Supporting Copy

From payment gateways and loyalty programs to analytics foundations and marketing technology integrations, I help teams build products that improve customer experiences and support business growth.

### Primary CTA

Get In Touch

### Secondary CTA

Download Resume

---

## Career Snapshot

### Metric 1

10+

Years Building Products

### Metric 2

8+

Payment Providers Integrated

### Metric 3

8+

Martech & Analytics Platforms

### Metric 4

3+

Core Product Domains

---

## Core Domains

### Payments

Built and supported customer-facing payment experiences across hospitality, fintech, and SaaS platforms. Experience includes payment gateway integrations, deposit and withdrawal flows, subscriptions, memberships, and booking payments.

### Martech & Analytics

Implemented analytics, attribution, customer engagement, and lifecycle marketing foundations using platforms such as Amplitude, GA4, GTM, Segment, Braze, AppsFlyer, Mixpanel, Customer.io, and PostHog.

### Product Engineering

Collaborated closely with Product, Design, Marketing, QA, Backend, and Engineering teams to transform business requirements into scalable customer-facing experiences.

### AI-Assisted Development

Leveraging Claude Code, OpenAI Codex, GitHub Copilot, Cursor, and Windsurf to accelerate development, improve engineering productivity, and support modern software delivery workflows.

---

## Featured Platforms

### MVillage

Hospitality • Membership • Payments

Helped establish and scale a new engineering team responsible for rebuilding core digital platforms.

Delivered customer-facing booking, membership, loyalty, and payment experiences while supporting analytics foundations and acquisition initiatives that contribute to customer growth and retention.

### Prophet Exchange

Payments • Martech • Customer Lifecycle

Owned business-critical frontend domains including payment processing, deposit and withdrawal flows, customer engagement experiences, analytics integrations, and lifecycle marketing systems across web and mobile platforms.

Worked closely with cross-functional teams to support customer acquisition, engagement, and retention initiatives.

### CQ & Capitalis

AI SaaS • Investment Platforms • Product Delivery

Built scalable product experiences, prototypes, and MVPs for AI-enabled investment platforms.

Collaborated across Product, Design, and Backend teams while contributing to Stripe payment workflows and adopting AI-assisted engineering practices to accelerate delivery.

---

## Experience

### Section Title

10+ Years Building Customer-Facing Products

### Entries

MVillage

Senior Front-End Engineer

2025 — Present

Rennlabs

Software Engineer

2023 — 2024

Prophet Exchange

Senior Front-End Engineer

2021 — 2022

Pandu

Full Stack Developer

2018 — 2020

Logix Technology

Front-End Developer

2017 — 2019

Orient

Front-End Developer

2016 — 2017

---

## Engineering Philosophy

### Title

Building Products Where Technology Meets Business

### Copy

The most valuable engineering work rarely exists in isolation.

It often sits at the intersection of customer needs, business objectives, product strategy, payments, analytics, and operational constraints.

I enjoy working across disciplines to help teams transform complex requirements into reliable customer-facing experiences that create measurable value for both users and businesses.

---

## Contact

### Title

Let's Build Better Product Experiences

### Copy

I'm always interested in conversations about product engineering, payment systems, Martech, customer experience platforms, and AI-assisted development workflows.

### Contact Options

Email

LinkedIn

Resume

### Primary CTA

Get In Touch

---

# Resume + Website Content Strategy

The repository should support both the website and the resume.

Use shared content where reasonable.

Recommended shared content files:

```text
src/content/profile.ts
src/content/experience.ts
src/content/platforms.ts
src/content/domains.ts
src/content/resume.ts
src/content/homepage.ts
```

The website should use concise marketing-oriented content.

The resume page should use fuller resume-oriented content.

Do not force the website and resume to have identical copy.

They should share facts, dates, companies, roles, domains, and technologies.

They may use different wording because they serve different user journeys.

Recommended routes:

```text
/
```

For personal website.

```text
/resume
```

For HTML resume.

Recommended public files:

```text
public/files/son-nguy-resume.pdf
public/images/avatar.jpg
```

Future PDF export options:

* Browser print stylesheet
* Playwright PDF export script
* Existing HTML-to-PDF workflow migrated into this repo

V1 requirement:

Create a clean `/resume` page with print-friendly CSS.

PDF automation can be added after website V1 is stable.
