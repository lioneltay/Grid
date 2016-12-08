// Properties of a grid

import * as c from './constants'

// Checks if the given tile is valid
export function validateTile(tile) {
	const { filled, patternFilled, filledStatus } = tile
	
	if (typeof filled !== 'boolean') return false
	if (typeof patternFilled !== 'boolean') return false
	if (c.FILLED_STATUSES.indexOf(filledStatus) === -1) return false
	
	
	const { color, patternColor, colorStatus } = tile
	
	if (c.COLORS.indexOf(color) === -1) return false
	if (c.COLORS.indexOf(patternColor) === -1) return false
	if (c.COLOR_STATUSES.indexOf(colorStatus) === -1) return false
	
	
	return true
}

// Checks if the given tiles are valid
export function validateTiles(tiles) {
	return tiles.every(tile => validateTile(tile))
}

