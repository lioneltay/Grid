import * as t from './actionTypes'
import * as s from './selectors'
import * as c from './constants'
import { randomDistinctInts, randomInt } from 'utils/random'
import { createActionCreator as cAC } from 'utils/redux'


// Simple Setter Actions
export const setHeight = cAC(t.SET_HEIGHT, 'height')
export const setWidth = cAC(t.SET_WIDTH, 'width')
export const setNumInPattern = cAC(t.SET_NUM_IN_PATTERN, 'numInPattern')
export const setTiles = cAC(t.SET_TILES, 'tiles')
export const setShowFillHelp = cAC(t.SET_SHOW_FILL_HELP, 'showFillHelp')
export const setShowColorHelp = cAC(t.SET_SHOW_COLOR_HELP, 'showColorHelp')

export const setFilled = cAC(t.SET_FILLED, 'id', 'filled')
export const setPatternFilled = cAC(t.SET_PATTERN_FILLED, 'id', 'patternFilled')
export const setFilledStatus = cAC(t.SET_STATUS, 'id', 'filledStatus')
export const toggleFilled = cAC(t.TOGGLE_FILLED, 'id')

export const setColor = cAC(t.SET_COLOR, 'id', 'color')
export const setPatternColor = cAC(t.SET_PATTERN_COLOR, 'id', 'patternColor')


// ==========
// THUNKS
// ==========

// Set randomised patternFilled tiles
export const randomisePatternFilled = function() {
	return function(dispatch, getState) {
		const grid = getState()
		const length = s.numTiles(grid)
		const numInPattern = s.numInPattern(grid)
		
		const randomIds = randomDistinctInts(0, length, numInPattern)
		randomIds.forEach(id => dispatch(setPatternFilled(id, true)))
	}
}

// Set randomised colors
export const randomisePatternColors = function() {
	return function(dispatch, getState) {
		const numTiles = s.numTiles(getState())
		
		let randomColor
		for (let id = 0; id < numTiles; id++) {
			randomColor = c.COLORS[randomInt(0, c.COLORS.length)]
			dispatch(setPatternColor(id, randomColor))
		}		
	}
}


// Set randomised colors
export const randomiseColors = function() {
	return function(dispatch, getState) {
		const numTiles = s.numTiles(getState())
		
		let randomColor
		for (let id = 0; id < numTiles; id++) {
			randomColor = c.COLORS[randomInt(0, c.COLORS.length)]
			dispatch(setColor(id, randomColor))
		}		
	}
}

// Set all tiles to have the same color
export const setUniformColor = function(color) {
	if (c.COLORS.indexOf(color) === -1) {
		throw new Error('Invalid color')
	}
	
	return function(dispatch, getState) {
		const tiles = s.tiles(getState())
		tiles.forEach(tile => dispatch(setColor(tile.id, color)))
	}
	
}

// Set all tiles to have the same pattern color
export const setUniformPatternColor = function(color) {
	if (c.COLORS.indexOf(color) === -1) {
		throw new Error('Invalid color')
	}
	
	return function(dispatch, getState) {
		const tiles = s.tiles(getState())
		tiles.forEach(tile => dispatch(setPatternColor(tile.id, color)))
	}
	
}












// Reset grid
export const resetTiles = function() {
	return function(dispatch, getState) {
		const numTiles = s.numTiles(getState())
		dispatch({
			type: t.RESET_TILES,
			numTiles
		})
	}
}





// HIGHER ORDER ACTION CREATORS
export function createTileToggler(options = {}, dispatch) {
	const { toggleFill = true, toggleColor = null} = options
	
	return function(id) {
		
		function toggleTile(dispatch, getState) {			
			
			const tiles = s.tiles(getState())
			const tile = s.tile(tiles, id)
			console.log('XXXXXXX', tile, id)
			const color = s.color(tile)
			const patternColor = s.patternColor(tile)
			
			
			if (!toggleColor) {
				dispatch(setColor(id, patternColor))
				dispatch(toggleFilled(id))
				return
			}

			if (color !== toggleColor) {
				dispatch(setColor(id, color))
			} 
			
			if (color === toggleColor && toggleFill || color === 'none') {
				dispatch(toggleFilled(id))
			}
		}
		
		dispatch(toggleTile)
		
	}
}

// TODO REDO
// toggles a tile base on tileToggleOptions and validityOptions
export const toggleTile = function(
	id, 
	{ color = null, fill = true } = {}, 
	validityOptions
) {
	return function(dispatch, getState) {
		const tiles = s.tiles(getState())
		const tile = s.tile(tiles, id)
		const tileColor = s.color(tile)
		const tilePatternColor = s.patternColor(tile)
		
		if (!color) {
			console.log(tilePatternColor)
			dispatch(setColor(id, tilePatternColor))
			dispatch(toggleFilled(id))
			return
		}
		
		if (tileColor !== color) {
			dispatch(setColor(id, color))
		} 
		
		if (tileColor === color && fill || tileColor === 'none') {
			dispatch(toggleFilled(id))
		}
		
	}
}



// TODO
export function initialiseGrid() {
	return function(dispatch, getState) {
		dispatch(setHeight(height))
		dispatch(setWidth(width))
		
		dispatch(resetTiles())
		
		
	}
}



// TRANSFORMATIONS








