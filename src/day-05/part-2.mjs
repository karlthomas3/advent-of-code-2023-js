export async function processPart2(input) {
  const sections = input.split("\n\n");

  const seedData = sections[0].split(": ")[1].split(" ").map(Number);
  const maps = sections.slice(1).map((section) =>
    section
      .split("\n")
      .slice(1)
      .map((line) => line.split(" ").map(Number))
  );
  // console.log(seeds, "\n", maps);

  function mapNum(num, map) {
    const mappedNum = map.find(
      ([destStart, srcStart, range]) => num >= srcStart && num < srcStart + range
    );
    return mappedNum ? mappedNum[0] + (num - mappedNum[1]) : num;
  }

  function findLocation(seed, maps) {
    return maps.reduce((currNum, map) => mapNum(currNum, map), seed);
  }

  function lowestLocation(seeds) {
    return seeds.reduce((lowest, seed) => {
      const location = findLocation(seed, maps);
      return Math.min(lowest, location);
    }, Infinity);
  }

  function runSeedList(seed, range) {
    console.log("seed", seed, "range", range);
    let current = seed;
    for (let i = 0; i < range; i++) {
      const location = findLocation(seed + i, maps);
      current = Math.min(current, location);
      console.log("current lowest: ", current);
    }
    return current;
  }

  let lowestArr = [];
  for (let i = 0; i < seedData.length; i += 2) {
    const lowest = runSeedList(seedData[i], seedData[i + 1]);
    lowestArr.push(lowest);
  }

  return lowestLocation(lowestArr);
}
