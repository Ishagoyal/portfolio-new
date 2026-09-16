import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const { render } = await import(
  path.join(root, "dist-server/entry-server.js")
);

const appHtml = render();

const indexPath = path.join(root, "dist/index.html");
const html = readFileSync(indexPath, "utf-8").replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);
writeFileSync(indexPath, html);

rmSync(path.join(root, "dist-server"), { recursive: true, force: true });

console.log("Prerendered dist/index.html");
