import * as actions from '../actions'
import * as s from '../selectors'

import { validateColors } from '../validation.js'
import { randomInt, randomDistinctInts } from 'utils/random'

export default function(getState, dispatch) {
	// Color constants
	const UNIFORM_ROWS = 'UNIFORM_ROWS'
	const UNIFORM_COLS = 'UNIFORM_COLS'
	const DIAG_NEG = 'DIAG_NEG' // as in maths gradients
	const DIAG_POS = 'DIAG_POS'
	const RANDOM_COLORS = 'RANDOM_COLORS'
	const LIST = 'LIST'
	
//	Grid Initialisation
//	* valid tilees (needs to fit with customisation options...)
//	* reset (initialises with the last initialisation method, must have both color and pattern initialised)
//
//	Color Initialisation
//	* uniform rows,
//	* uniform columns
//	* diagonals bl tr
//	* diagonal tl br
//	* random colors
//	* color list (must be correct length)
//
//	Pattern Initialisation ( requires numInPattern )
//	* random
//	* list of positions (must not contain duplicates and be valid length)
//	* initialise grid
//	* default arrangements
//	* randomised
//	* copy from existing grid

	// Standard init function
	const init = function({ height, width, numInPattern }) {
		
	}
	
	// Specific init methods, functions are objects!
	/*
		{
			type: INIT_TYPE,
		}
	*/
	
	init.params = function({ width, height, tilesInPattern }) {
		dispatch(actions.setWidth(width))
		dispatch(actions.setWidth(height))
		dispatch(actions.setNumInPattern(tilesInPattern))
		dispatch(actions.resetTiles())
	}
	
	
	
	init.color = function() {} //??
	
	// Set rows to be a uniform color
	init.color.uniformRows = function(rowColors) {
		const { height, width } = getState()
		
		if (!validateColors(rowColors)) {
			throw new Error('Invalid Color Set')
		}
		
		if (rowColors.length < height) {
			throw new Error('Not Enough Colors for Uniform Rows')
		}
		
		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				dispatch(actions.setPatternColor(row * width + col, rowColors[row]))
			}
		}
	}
	
	// Set columns to be a uniform color
	init.color.uniformColumns = function(rowColors) {
		const { height, width } = getState()
		
		if (!validateColors(rowColors)) {
			throw new Error('Invalid Color Set')
		}
		
		if (rowColors.length < width) {
			throw new Error('Not Enough Colors for Uniform Columns')
		}
		
		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				dispatch(actions.setPatternColor(row * width + col, rowColors[col]))
			}
		}
	}
	
	// Set randomised colors
	init.color.random = function(rowColors) {
		if (!validateColors(rowColors)) {
			throw new Error('Invalid Color Set')
		}
		
		const numTiles = s.numTiles(getState())
		
		for (let id = 0; id < numTiles; id++) {
			dispatch(actions.setPatternColor(id, rowColors[randomInt(0, rowColors.length)]))
		}
	}
	
	// Patterns
	init.pattern = function() {}
	
	init.pattern.random = function() {
		const grid = getState()
		const length = s.numTiles(grid)
		const numInPattern = s.numInPattern(grid)

		const randomIds = randomDistinctInts(0, length, numInPattern)
		for (let i = 0; i < length; i++) {
			if (randomIds.indexOf(i) === -1) {
				dispatch(actions.setPatternFilled(i, false))
			} else {
				dispatch(actions.setPatternFilled(i, true))
			}
		}
	}
	
	
	
	
	
	
	
	// fix thissss =========

	// Set randomised patternFilled tiles
	 

	


	// Set randomised colors
	 const randomiseColors = function() {
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
	 const setUniformColor = function(color) {
		if (c.COLORS.indexOf(color) === -1) {
			throw new Error('Invalid color')
		}

		return function(dispatch, getState) {
			const tiles = s.tiles(getState())
			tiles.forEach(tile => dispatch(setColor(tile.id, color)))
		}

	}

	// Set all tiles to have the same pattern color
	 const setUniformPatternColor = function(color) {
		if (c.COLORS.indexOf(color) === -1) {
			throw new Error('Invalid color')
		}

		return function(dispatch, getState) {
			const tiles = s.tiles(getState())
			tiles.forEach(tile => dispatch(setPatternColor(tile.id, color)))
		}

	}

	// ==========




	
	return init
}







