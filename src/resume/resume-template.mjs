const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderListItems = (items) =>
  items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n");

const renderProjects = (projects) =>
  projects
    .map(
      (project) => `
        <article class="project">
          <h3>${escapeHtml(project.resumeName)} <span class="project-label">| ${escapeHtml(project.category)}</span></h3>
          <ul>
            ${renderListItems(project.resumeContributions)}
          </ul>
        </article>`,
    )
    .join("\n");

const renderPrimaryExperience = (entries) =>
  entries
    .map(
      (entry) => `
        <article class="role">
          <div class="role-heading">
            <h3><span class="company">${escapeHtml(entry.company)}</span> | <span class="job-title">${escapeHtml(entry.role)}</span></h3>
            <span class="dates">${escapeHtml(entry.startDate)} – ${escapeHtml(entry.endDate)}</span>
          </div>
          <ul>
            ${renderListItems(entry.bullets)}
          </ul>
        </article>`,
    )
    .join("\n");

const renderEarlierExperience = (entries) =>
  entries
    .map(
      (entry) => `
          <li><strong>${escapeHtml(entry.company)} | ${escapeHtml(entry.role)}</strong> <span class="meta">— ${escapeHtml(entry.startDate)} – ${escapeHtml(entry.endDate)}</span><br>${escapeHtml(entry.bullets[0])}</li>`,
    )
    .join("\n");

const renderExpertise = (groups) =>
  groups
    .map(
      (group) => `
          <div><dt>${escapeHtml(group.label)}:</dt> <dd>${escapeHtml(group.items.join(", "))}</dd></div>`,
    )
    .join("\n");

const renderEducation = (education) =>
  education
    .map(
      (entry) =>
        `<p><strong>${escapeHtml(entry.institution)}</strong><br>${escapeHtml(entry.program)}, ${escapeHtml(entry.startDate)} – ${escapeHtml(entry.endDate)}</p>`,
    )
    .join("\n");

const renderCertifications = (certifications) =>
  certifications
    .map(
      (entry) =>
        `<p><strong>${escapeHtml(entry.name)}</strong><br><span class="meta">${escapeHtml(entry.year)}</span></p>`,
    )
    .join("\n");

const renderLanguages = (languages) =>
  languages
    .map(
      (entry) =>
        `<p><strong>${escapeHtml(entry.name)}</strong><br><span class="meta">${escapeHtml(entry.proficiency)}</span></p>`,
    )
    .join("\n");

export function renderResumeHtml({ profile, experience, projects, skills }) {
  const primaryExperience = experience.slice(0, 3);
  const earlierExperience = experience.slice(3);
  const phoneHref = profile.phone.replace(/[^\d+]/g, "");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(profile.name)} | Senior Front-End Engineer</title>
  <style>
    :root {
      --ink: #172033;
      --muted: #4f5d73;
      --accent: #165c72;
      --line: #cfd8df;
      --paper: #ffffff;
      --canvas: #e8edf1;
    }

    * {
      box-sizing: border-box;
    }

    html {
      background: var(--canvas);
    }

    body {
      margin: 0;
      color: var(--ink);
      background: var(--canvas);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10.5px;
      line-height: 1.42;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      margin: 12mm auto;
      padding: 10mm;
      background: var(--paper);
      box-shadow: 0 2mm 8mm rgba(23, 32, 51, 0.12);
    }

    header {
      padding-bottom: 4.8mm;
      border-bottom: 1.5px solid var(--accent);
    }

    h1,
    h2,
    h3,
    p {
      margin-top: 0;
    }

    h1 {
      margin-bottom: 1.8mm;
      color: var(--ink);
      font-size: 30px;
      line-height: 1;
      letter-spacing: 0.02em;
    }

    .headline {
      margin-bottom: 3.2mm;
      color: var(--accent);
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .contact {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1mm 2.5mm;
      margin: 0;
      color: var(--muted);
      font-size: 10px;
    }

    .contact-separator {
      color: var(--line);
    }

    .contact a {
      color: inherit;
      text-decoration: none;
    }

    main {
      display: block;
    }

    section {
      margin-top: 5.5mm;
    }

    h2 {
      margin-bottom: 3.2mm;
      padding-bottom: 1mm;
      border-bottom: 1px solid var(--line);
      color: var(--accent);
      font-size: 13.5px;
      line-height: 1.15;
      letter-spacing: 0.075em;
      text-transform: uppercase;
    }

    h3 {
      margin-bottom: 1mm;
      font-size: 11.2px;
      line-height: 1.2;
    }

    p {
      margin-bottom: 2mm;
    }

    ul {
      margin: 0;
      padding-left: 4.5mm;
    }

    li {
      margin-bottom: 1mm;
      padding-left: 0.5mm;
    }

    li:last-child {
      margin-bottom: 0;
    }

    .summary {
      margin-bottom: 0;
    }

    .highlights {
      columns: 2;
      column-gap: 8mm;
    }

    .highlights li {
      break-inside: avoid;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.8mm 7mm;
      margin: 0;
    }

    .expertise-grid div {
      break-inside: avoid;
    }

    .expertise-grid dt {
      display: inline;
      color: var(--ink);
      font-weight: 700;
    }

    .expertise-grid dd {
      display: inline;
      margin: 0;
      color: var(--muted);
    }

    .expertise-grid dd::after {
      display: block;
      content: "";
    }

    .project,
    .role,
    .credentials {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .project {
      margin-top: 4mm;
      padding-top: 3.5mm;
      border-top: 1px solid var(--line);
    }

    .project:first-of-type {
      margin-top: 0;
      padding-top: 0;
      border-top: 0;
    }

    .project-label {
      color: var(--muted);
      font-weight: 400;
    }

    .project li {
      break-inside: avoid;
    }

    .role {
      margin-top: 6mm;
    }

    .role:first-of-type {
      margin-top: 0;
    }

    .role-heading {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 5mm;
      margin-bottom: 2.2mm;
      padding-bottom: 1.4mm;
      border-bottom: 1px solid var(--line);
    }

    .role-heading h3 {
      margin: 0;
    }

    .company {
      color: var(--accent);
      letter-spacing: 0.025em;
      text-transform: uppercase;
    }

    .job-title {
      font-weight: 700;
    }

    .dates {
      flex: 0 0 auto;
      color: var(--muted);
      font-size: 9.8px;
      font-weight: 700;
      white-space: nowrap;
    }

    .earlier-list {
      list-style: none;
      padding: 0;
    }

    .earlier-list li {
      margin-bottom: 2mm;
      padding: 0;
    }

    .page:nth-of-type(2) section[aria-labelledby="earlier-title"] {
      margin-top: 7.5mm;
    }

    .credentials {
      display: grid;
      grid-template-columns: 1.25fr 1fr 1fr;
      gap: 7mm;
      margin-top: 7.5mm;
      padding-top: 4mm;
      border-top: 1.5px solid var(--accent);
    }

    .credentials section {
      margin: 0;
    }

    .credentials h2 {
      margin-bottom: 1.3mm;
      padding: 0;
      border: 0;
      font-size: 11.5px;
    }

    .credentials p {
      margin-bottom: 0;
    }

    .meta {
      color: var(--muted);
    }

    @page {
      size: A4;
      margin: 10mm;
    }

    @media print {
      html,
      body {
        background: #ffffff;
      }

      body {
        font-size: 10.5px;
        line-height: 1.42;
      }

      .page {
        width: auto;
        min-height: auto;
        margin: 0;
        padding: 0;
        box-shadow: none;
      }

      .page + .page {
        break-before: page;
        page-break-before: always;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  </style>
</head>
<body>
  <article class="page" aria-label="Resume page 1">
    <header>
      <h1>${escapeHtml(profile.name.toUpperCase())}</h1>
      <p class="headline">${escapeHtml(profile.resumeTitle)}</p>
      <p class="contact">
        <span>${escapeHtml(profile.location)}</span>
        <span class="contact-separator" aria-hidden="true">|</span>
        <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
        <span class="contact-separator" aria-hidden="true">|</span>
        <a href="tel:${escapeHtml(phoneHref)}">${escapeHtml(profile.phone)}</a>
        <span class="contact-separator" aria-hidden="true">|</span>
        <a href="${escapeHtml(profile.links.website)}">Website: ${escapeHtml(profile.links.website)}</a>
      </p>
    </header>

    <main>
      <section aria-labelledby="summary-title">
        <h2 id="summary-title">Executive Summary</h2>
        <p class="summary">${escapeHtml(profile.resumeSummary)}</p>
      </section>

      <section aria-labelledby="highlights-title">
        <h2 id="highlights-title">Career Highlights</h2>
        <ul class="highlights">
          ${renderListItems(profile.highlights.career)}
        </ul>
      </section>

      <section aria-labelledby="expertise-title">
        <h2 id="expertise-title">Core Expertise</h2>
        <dl class="expertise-grid">
          ${renderExpertise(skills.groups)}
        </dl>
      </section>

      <section aria-labelledby="projects-title">
        <h2 id="projects-title">Featured Projects</h2>
        ${renderProjects(projects)}
      </section>
    </main>
  </article>

  <article class="page" aria-label="Resume page 2">
    <main>
      <section aria-labelledby="experience-title">
        <h2 id="experience-title">Professional Experience</h2>
        ${renderPrimaryExperience(primaryExperience)}
      </section>

      <section aria-labelledby="earlier-title">
        <h2 id="earlier-title">Earlier Experience</h2>
        <ul class="earlier-list">
          ${renderEarlierExperience(earlierExperience)}
        </ul>
      </section>

      <div class="credentials">
        <section aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          ${renderEducation(profile.education)}
        </section>
        <section aria-labelledby="certifications-title">
          <h2 id="certifications-title">Certification</h2>
          ${renderCertifications(profile.certifications)}
        </section>
        <section aria-labelledby="languages-title">
          <h2 id="languages-title">Languages</h2>
          ${renderLanguages(profile.languages)}
        </section>
      </div>
    </main>
  </article>
</body>
</html>`;
}
