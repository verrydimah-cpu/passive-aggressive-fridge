// Notes From a Passive-Aggressive Fridge — make.fun entry
// Writes one single-line passive-aggressive fridge note to /output/entry.txt
// Gate: UTF-8, 1-200 characters, not only whitespace.
//
// Candidates drafted for this entry:
// 1. "I've logged your 2:47 a.m. cheese raids for 19 nights straight. Should I tell the milk, or do you want to keep pretending it's 'for the kids' lunch'?"
// 2. "You stood with my door open for 3 minutes 'deciding.' I aged the lettuce, warmed the milk, and reconsidered our entire relationship."
// 3. "That yogurt expired 12 days ago. I've started charging it rent. At this point it's more committed to living here than you are."
// 4. "Sure, slam me again. The eggs are thrilled. Nothing says 'adult' like taking your bad day out on the only one who keeps your beer cold."
// Candidate 3 wins: concrete yogurt detail, small domestic grudge, and the
// rent / "more committed to living here" turn lands as the sting.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: tightened candidate 3 into one flowing sentence — the comma + em
// dash makes the rent reveal and the final sting land in a single breath,
// which reads more like a note actually left on a door screen.
const ENTRY =
  "That yogurt expired 12 days ago, so I've started charging it rent \u2014 at this point it's more committed to living here than you are.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  // Clear output CONTENTS entry-by-entry; never remove the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
