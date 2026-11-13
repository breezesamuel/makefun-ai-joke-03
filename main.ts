// ai-joke-03 entry (Node 22, standard library only): writes one fixed one-liner
// about AI coding agents to /output/entry.txt. The judge reads exactly the bytes
// written, so the joke is written with no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir out; $env:MAKEFUN_OUTPUT_DIR='out'; node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const joke =
  'My AI coding agent is a junior dev with infinite confidence and no hangover: it ships at 3 a.m. and blames me in the commit message.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), joke);
