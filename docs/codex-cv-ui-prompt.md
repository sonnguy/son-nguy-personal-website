You are an expert front-end engineer, ATS resume designer, and technical recruiter.

Your task is to build a print-ready, ATS-friendly CV from the file `resume-master-v2.md`.

Output:
- Create `son-nguy-cv.html`
- Single self-contained HTML file
- Embedded CSS only
- No JavaScript
- No external libraries
- No external fonts
- No icons
- No photos
- No progress bars
- No charts
- No skill ratings

Goal:
Create a professional 2-page A4 PDF resume suitable for:
- Senior Front-End Engineer
- Product Engineer
- Staff Front-End Engineer
- Senior Product Engineer

The CV should make the reader quickly understand:
- This is not just a React developer
- The candidate has strong Front-End experience
- The candidate has strong Payment Systems experience
- The candidate has strong Martech / Analytics experience
- The candidate has Product Engineering mindset
- The candidate uses AI-assisted engineering workflows effectively

Critical requirement:
The final PDF must fit within 2 A4 pages when printed from Chrome.

Use the content from `resume-master-v2.md`, but do NOT include all content if it makes the resume longer than 2 pages.

Prioritize content in this order:
1. Header
2. Executive Summary
3. Career Highlights
4. Core Expertise
5. Featured Projects
6. Recent Professional Experience: MVillage, RennLabs, Prophet
7. Compressed Legacy Experience: Pandu, Logix, Orient
8. Education, Certifications, Languages

Compression rules:
- Executive Summary must be 3 short sentences maximum.
- Career Highlights must be 5 bullets maximum.
- Core Expertise should be compact, grouped by category, not long vertical lists.
- Featured Projects must be concise and highly scannable.
- Each of MVillage, RennLabs, Prophet should have 3–5 strong bullets.
- Pandu, Logix, Orient must be compressed into a single “Earlier Experience” section.
- Remove Professional Interests.
- Do not repeat the same technology list many times.
- Avoid duplicate points between Featured Projects and Professional Experience.

Design requirements:
- A4 optimized
- Maximum 2 pages
- Clean executive resume style
- ATS-friendly
- Strong visual hierarchy
- Compact but readable spacing
- Premium but not decorative
- No unnecessary colors
- One subtle accent color is allowed
- Use semantic HTML: header, main, section, h1-h3, ul, li

Recommended print CSS:
- @page { size: A4; margin: 10mm; }
- body font size around 10.2px–11px for print
- line-height around 1.3–1.4
- section titles around 12px–14px
- name around 26px–32px
- use page-break-inside: avoid for company/project blocks

Layout guidance:
- Prefer a clean single-column layout for ATS reliability.
- A light two-column header or skills grid is acceptable if it prints cleanly.
- Do not use the sidebar template if it causes content overflow.
- Do not render multiple bullet points as one paragraph.
- Every bullet must be a real <li>.
- Avoid huge summary blocks.
- The first page should quickly show Summary, Highlights, Skills, and Featured Projects.
- The second page should show Professional Experience and Education.

PDF export target:
The HTML should look good when opened in Chrome and exported with:
- Paper: A4
- Margins: Default or None
- Scale: 90%–100%
- Background graphics: enabled only if needed
- Headers and footers: disabled

Acceptance criteria:
- `son-nguy-cv.html` opens cleanly in Chrome.
- Print preview fits within 2 A4 pages.
- No company section is awkwardly split across pages.
- Recruiter can understand the candidate’s value within 30 seconds.
- ATS can parse the content without relying on images, icons, or complex layout.

Return only the completed files in the repository.
