// Generate a random int in [min, max)
export function randomInt(min, max) {
	return Math.floor(min + Math.random() * (max - min))
}

// Generates an 
export function randomDistinctInts(min, max, num) {
	if ( num > max - min) {
		throw new Error(`Cannot generate ${num} distinct ints in [${min},${max})`)
	}
	const randomInts = []
	
	let int
	while(randomInts.length < num) {
		int = randomInt(min, max)
		if (randomInts.indexOf(int) === -1) {
			randomInts.push(int)
		}
	}
	return randomInts
}