import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, three lines.
// Line 1 (5): Red(1) dot(1) on(1) line(1) nine(1)
// Line 2 (7): the(1) log(1) swears(1) it(1) was(1) not(1) me(1)
// Line 3 (5): my(1) own(1) hand-writ-ing(3)
const HAIKU = [
  "Red dot on line nine",
  "the log swears it was not me",
  "my own handwriting",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
console.log(HAIKU);
