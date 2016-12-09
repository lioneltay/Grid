// Properties of a grid

import * as c from './constants'
import { compareObjectTypes } from 'utils/objects'


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
	return tiles.every(validateTile)
}

// Checks if a color is valid
export function validateColor(color) {
	return c.COLORS.indexOf(color) !== -1
}

// Checks if an array of colors is valid
export function validateColors(colors) {
	return colors.every(validateColor)
}

// validates options (GRID OPTIONS)
export function validateOptions(options) {
	const validOptionTypes = {
		toggleOptions: {
			toggleFill: 'boolean',
			toggleColor: 'string'
		},
		validityOptions: {
			checkFill: 'boolean',
			checkColor: 'boolean'
		}
	}
	
	if (!compareObjectTypes(options, validOptionTypes)) {
		throw new Error('Invalid Grid Options')
	}
	return true
	
}








