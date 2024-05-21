import { readFileSync } from "node:fs";
import path from "node:path";
// @ts-ignore
import PEG from "pegjs";

// TODO: Redesign for peggy
export const camxes = PEG.buildParser(
  readFileSync(path.join(__dirname, "/camxes.peg")).toString(),
  { cache: true },
);
