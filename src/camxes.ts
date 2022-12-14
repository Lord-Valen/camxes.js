import { readFileSync } from "node:fs";
import { resolve } from "node:path";
// TODO: Redesign for peggy
// import { generate } from "peggy";
//
// export const camxes = generate(readFileSync(resolve("./src/camxes.js.peg")).toString());
// @ts-ignore
import PEG from "pegjs";

export const camxes = PEG.buildParser(readFileSync(resolve("./src/camxes.js.peg")).toString());
