import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "fix: my 3 AM deploy deleted prod, so I reverted it and added 'do not deploy at 3 AM' to my system prompt";

// Self-check against the bounty gate: 1-200 UTF-8 characters, exactly one line.
const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate is 1-200`);
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${[...entry].length} characters to ${join(outDir, "entry.txt")}`);
