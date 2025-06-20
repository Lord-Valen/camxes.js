import { readFileSync } from "node:fs";
import path from "node:path";
// @ts-expect-error TS2307: Cannot find module 'pegjs' or its corresponding type declarations.
import PEG from "pegjs";

// TODO: Redesign for peggy
export const camxes = PEG.buildParser(
  readFileSync(path.join(__dirname, "/camxes.peg")).toString(),
  { cache: true },
);
