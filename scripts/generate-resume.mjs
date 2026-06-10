import { access, mkdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright-core";

import { renderResumeHtml } from "../src/resume/resume-template.mjs";

const rootDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = join(
  rootDirectory,
  "public/resume/Son-Nguy-Senior-Frontend-Engineer-2026.pdf",
);

const readJson = async (fileName) =>
  JSON.parse(await readFile(join(rootDirectory, "content", fileName), "utf8"));

const browserCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  join(
    homedir(),
    "AppData/Local/Google/Chrome/Application/chrome.exe",
  ),
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
].filter(Boolean);

async function findBrowserExecutable() {
  for (const candidate of browserCandidates) {
    try {
      await access(candidate, constants.F_OK);
      return candidate;
    } catch {
      // Continue until an installed Chrome or Chromium executable is found.
    }
  }

  throw new Error(
    "Chrome or Chromium was not found. Install Chrome or set CHROME_PATH to its executable.",
  );
}

async function generateResume() {
  const [profile, experience, projects, skills] = await Promise.all([
    readJson("profile.json"),
    readJson("experience.json"),
    readJson("projects.json"),
    readJson("skills.json"),
  ]);

  const executablePath = await findBrowserExecutable();
  const html = renderResumeHtml({ profile, experience, projects, skills });

  await mkdir(dirname(outputPath), { recursive: true });

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    await page.emulateMedia({ media: "print" });
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });
  } finally {
    await browser.close();
  }

  console.log(`Resume generated: ${outputPath}`);
}

await generateResume();
