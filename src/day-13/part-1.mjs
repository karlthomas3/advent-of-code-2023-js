/** @format */

export async function processPart1(input) {
	const sets = input
		.trim()
		.split('\n\n')
		.map((set) => set.split('\n').map((line) => line.split('')));

	checkRows(sets[0]);

	// showSets(sets);
}
// show sets for debugging
function showSets(sets) {
	sets.forEach((set) => {
		set.forEach((line) => {
			console.log(line.join(''));
		});
		console.log('\n');
	});
}

function checkRows(set) {
	// logging for debugging
	// set.forEach((line) => console.log(line.join('')));
	// console.log(set);
	let hit = null;

	for (let row = 0; row < set.length; row++) {
		if (mirrorCheck(set?.at(row), set.at(row + 1))) {
			console.log(`hit on row ${row}`);
		}
	}
}

function mirrorCheck(arr1, arr2) {
	// console.log(arr1, '\n', '\n', arr2);
	return arr1?.join('') == arr2?.join('');
}
