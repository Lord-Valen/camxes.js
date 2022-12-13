import peggy from "peggy";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const camxes = peggy.generate(readFileSync(resolve("./src/camxes.js.peg")).toString());
