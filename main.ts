import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review: five stars for enthusiasm, one star for reading
// the instructions, and a promise to work together again after a nap.
const LINE =
  "Five stars for enthusiasm, one star for reading the instructions. Would work with them again — right after a nap.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back self-check: the written file must be exactly the line, a
// single line of 1-200 characters, valid UTF-8, not only whitespace.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) throw new Error("read-back mismatch: entry.txt differs from the line");
const chars = [...back].length;
if (chars < 1 || chars > 200) throw new Error(`gate failed: ${chars} characters`);
if (!/\S/.test(back)) throw new Error("gate failed: entry is only whitespace");
console.log(`Wrote ${chars} characters to ${outPath} (self-check passed)`);
