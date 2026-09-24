// Renders public/assets/cv/Nikos-Mavrapidis-CV.pdf from src/data/portfolio.js,
// so the downloadable CV always matches the site.
//
// Usage: npm run cv
// Needs a Chromium build for playwright-core: `npx playwright install chromium`,
// or point CHROMIUM_PATH at an installed Chrome/Chromium binary.
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import {
  capabilities,
  certifications,
  community,
  education,
  experience,
  languages,
  profile,
  projects,
} from "../src/data/portfolio.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = `${root}public/${profile.cv.replace(/^\//, "")}`;

const escape = (value) =>
  String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
const plainUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const link = (href, label = plainUrl(href)) => `<a href="${escape(href)}">${escape(label)}</a>`;

async function font(family, file, weight, style = "normal") {
  const data = await readFile(`${root}node_modules/@fontsource/${family}/files/${file}`);
  const name = family === "fraunces" ? "Fraunces" : "DM Sans";
  return `@font-face{font-family:"${name}";font-weight:${weight};font-style:${style};src:url(data:font/woff2;base64,${data.toString("base64")}) format("woff2")}`;
}

const fonts = (
  await Promise.all([
    font("fraunces", "fraunces-latin-500-normal.woff2", 500),
    font("fraunces", "fraunces-latin-ext-500-normal.woff2", 500),
    font("dm-sans", "dm-sans-latin-400-normal.woff2", 400),
    font("dm-sans", "dm-sans-latin-ext-400-normal.woff2", 400),
    font("dm-sans", "dm-sans-latin-600-normal.woff2", 600),
    font("dm-sans", "dm-sans-latin-ext-600-normal.woff2", 600),
  ])
).join("\n");

const section = (title, body) => `<section><h2>${title}</h2>${body}</section>`;

const experienceHtml = experience
  .map(
    (item) => `
    <article class="entry">
      <div class="when">${escape(item.period)}</div>
      <div>
        <h3>${escape(item.role)} <span>· ${escape(item.context)}</span></h3>
        <ul>${item.points.map((point) => `<li>${escape(point)}</li>`).join("")}</ul>
      </div>
    </article>`,
  )
  .join("");

// Lope is already covered under Experience, so the CV lists the other projects.
const projectsHtml = projects
  .filter((item) => !experience.some((role) => role.context.startsWith(item.title)))
  .map(
    (item) => `
    <article class="project">
      <h3>${link(item.href, item.title)} <span>· ${escape(item.eyebrow)}</span></h3>
      <p>${escape(item.description)}</p>
    </article>`,
  )
  .join("");

const skillsHtml = `<dl class="grid">${capabilities
  .map((group) => `<div><dt>${escape(group.title)}</dt><dd>${group.items.map(escape).join(", ")}</dd></div>`)
  .join("")}</dl>`;

const educationHtml = education
  .map(
    (item) => `
    <article class="entry">
      <div class="when">${escape(item.period)}</div>
      <div>
        <h3>${escape(item.degree)} <span>· ${escape(item.school)}</span></h3>
        <p>${escape(item.detail)} · ${link(item.href, item.linkLabel)}</p>
      </div>
    </article>`,
  )
  .join("");

const certificationsHtml = `<ul class="compact">${certifications
  .map(
    (item) =>
      `<li>${item.href ? link(item.href, item.title) : escape(item.title)} <span>· ${escape(
        [item.issuer, item.date].filter(Boolean).join(" · "),
      )}</span></li>`,
  )
  .join("")}</ul>`;

const communityHtml = `<ul class="compact">${community
  .map((item) => `<li><strong>${escape(item.title)}</strong> <span>· ${escape(item.org)} · ${escape(item.date)}</span></li>`)
  .join("")}</ul>`;

const languagesHtml = languages.map(([language, level]) => `${escape(language)} ${escape(level)}`).join(" · ");

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${escape(profile.name)} — CV</title><style>
${fonts}
@page { size: A4; margin: 11mm 13mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #171713; font: 400 8.5pt/1.36 "DM Sans", Arial, sans-serif; }
a { color: inherit; text-decoration: none; }
header { display: flex; justify-content: space-between; align-items: flex-end; gap: 22px; padding-bottom: 10px; border-bottom: 2px solid #171713; }
h1 { margin: 0; font: 500 24pt/0.95 Fraunces, Georgia, serif; letter-spacing: -0.04em; white-space: nowrap; }
h1 span { color: #eb5e2a; }
.title { margin: 5px 0 0; white-space: nowrap; color: #b33d14; font-size: 8pt; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
.contact { margin: 0; color: #615e56; font-size: 7.8pt; line-height: 1.55; text-align: right; }
.contact a { color: #244ed8; }
.summary { margin: 8px 0 0; font-size: 9pt; line-height: 1.4; }
section { margin-top: 9px; }
h2 { break-after: avoid; margin: 0 0 6px; padding-bottom: 3px; border-bottom: 1px solid rgba(23,23,19,.2); color: #b33d14; font-size: 7.6pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; }
h3 { margin: 0; font: 500 10.6pt/1.25 Fraunces, Georgia, serif; }
h3 span { color: #615e56; font: 400 8.3pt "DM Sans", Arial, sans-serif; }
h3 a { color: #171713; border-bottom: 1px solid rgba(36,78,216,.45); }
.entry { display: grid; grid-template-columns: 29mm 1fr; gap: 10px; padding: 3px 0; break-inside: avoid; }
.when { padding-top: 2px; white-space: nowrap; color: #615e56; font-size: 8pt; }
ul { margin: 3px 0 0; padding-left: 13px; }
li { margin-top: 0.5px; }
.project { padding: 2px 0; break-inside: avoid; }
.project p, .entry p { margin: 2px 0 0; color: #3d3b36; }
.entry p a { color: #244ed8; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 18px; margin: 0; }
.grid dt { font-weight: 600; }
.grid dd { margin: 0; color: #3d3b36; }
.compact { margin: 0; padding: 0; list-style: none; }
.compact li { margin: 0; padding: 1px 0; }
.compact span { color: #615e56; }
.compact a { border-bottom: 1px solid rgba(36,78,216,.45); }
.cols { display: grid; grid-template-columns: 1.5fr 1fr; gap: 0 20px; }
</style></head><body>
<header>
  <div>
    <h1>${escape(profile.name)}<span>.</span></h1>
    <p class="title">${escape(profile.title)}</p>
  </div>
  <p class="contact">
    ${escape(profile.location)} · ${escape(profile.availability)}<br>
    ${languagesHtml}<br>
    ${link(`mailto:${profile.email}`, profile.email)}<br>
    ${link(profile.website)} · ${link(profile.github)}<br>
    ${link(profile.linkedin)}
  </p>
</header>
<p class="summary">${escape(profile.summary)}</p>
${section("Experience", experienceHtml)}
${section("Selected projects", projectsHtml)}
${section("Skills", skillsHtml)}
${section("Education", educationHtml)}
<div class="cols">
  ${section("Certifications &amp; training", certificationsHtml)}
  ${section("Competitions", communityHtml)}
</div>
</body></html>`;

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await writeFile(output, await page.pdf({ format: "A4", printBackground: true, preferCSSPageSize: true }));
if (process.env.CV_PREVIEW) await page.screenshot({ path: process.env.CV_PREVIEW, fullPage: true });
await browser.close();
console.log(`Wrote ${output}`);
