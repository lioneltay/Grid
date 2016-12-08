import { NAME } from './constants'

// Selectors
export const grid = (state) => state[NAME]

export const tiles = (grid) => grid.tiles
export const height = (grid) => grid.height
export const width = (grid) => grid.width
export const numInPattern = (grid) => grid.numInPattern
export const showFillHelp = (grid) => grid.showFillHelp
export const showColorHelp = (grid) => grid.showColorHelp
export const numTiles = (grid) => height(grid) * width(grid)

export const tile = (tiles, id) => tiles[id]

export const id = (tile) => tile.id
export const color = (tile) => tile.color
export const patternColor = (tile) => tile.patternColor
export const filled = (tile) => tile.filled
export const patternFilled = (tile) => tile.patternFilled
export const filledStatus = (tile) => tile.filledStatus



/* 
Takes a config object determining what a valid tile is, returns validity of grid
Options: {
	fill: bool (default true),
	color: bool (default false)
}
*/
export function getGridValid(grid, { checkFilled = true, checkColor = false } = {}) {
	const gridTiles = tiles(grid)
	
	return gridTiles.every(tile => {
		if (checkFilled && filled(tile) !== patternFilled(tile)) {
			return false
		}
		
		if (checkColor && color(tile) !== patternColor(tile)) {
			return false
		}
		
		return true
	})
}









