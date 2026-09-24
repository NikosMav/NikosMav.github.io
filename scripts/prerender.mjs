// Injects the server-rendered app into dist/index.html so the page has real
// content before JavaScript loads (search engines, link previews, first paint).
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const templatePath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href);
const template = await readFile(templatePath, "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-html--> placeholder");
}

await writeFile(templatePath, template.replace("<!--app-html-->", render()));
await rm(ssrDir, { recursive: true, force: true });
console.log("Prerendered dist/index.html");
