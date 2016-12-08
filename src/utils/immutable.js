export function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj, null, 2))
}