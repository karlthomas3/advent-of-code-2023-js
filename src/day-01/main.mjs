import fs from "fs/promises";

import { processPart1 } from "./part-1.mjs";
import { processPart2 } from "./part-2.mjs";

const input = await fs.readFile("./src/day-01/input.txt", "utf8").catch((err) => {
  console.error("Error reading file:", err);
});

const part1Result = await processPart1(input);
console.log(`Part 1: ${part1Result}`);

const part2Result = await processPart2(input);
console.log(`Part 2: ${part2Result}`);
