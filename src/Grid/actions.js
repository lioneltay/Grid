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
export const setReveal = cAC(t.SET_REVEAL, 'reveal')
export const setTime = cAC(t.SET_TIME, 'time')

export const setFilled = cAC(t.SET_FILLED, 'id', 'filled')
export const setPatternFilled = cAC(t.SET_PATTERN_FILLED, 'id', 'patternFilled')
export const setFilledStatus = cAC(t.SET_STATUS, 'id', 'filledStatus')
export const toggleFilled = cAC(t.TOGGLE_FILLED, 'id')

export const setColor = cAC(t.SET_COLOR, 'id', 'color')
export const setPatternColor = cAC(t.SET_PATTERN_COLOR, 'id', 'patternColor')


// ==========
// THUNKS
// ==========

// Reset grid //TODO
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

// Creates a function to run when a tile is toggled
export function createTileTogglerGenerator(toggleOptions = {}, dispatch) {
	const { toggleFill = true, toggleColor = null} = toggleOptions
	
	return function(id) {
		
		return function() {
			function toggleTile(dispatch, getState) {			
				const grid = getState()
				const color = s.gridTileColor(grid, id)
				const patternColor = s.gridTilePatternColor(grid, id)
				
				
				if (!toggleColor) {
					dispatch(setColor(id, patternColor))
					if (toggleFill) {
						dispatch(toggleFilled(id))
					}
					return
				}
				
				if (color !== toggleColor) {
					dispatch(setColor(id, toggleColor))
				} 
				
				if (color === toggleColor && toggleFill || color === 'none') {
					dispatch(toggleFilled(id))
				}
			}
			
			dispatch(toggleTile)
		}
		
	}
}












