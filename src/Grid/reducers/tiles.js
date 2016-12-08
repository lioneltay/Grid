import * as t from '../actionTypes'
import * as c from '../constants'
import * as s from '../selectors'
import { validateTiles } from '../gridHelpers'

import { 
	createReducer,
	delegateToArrayItemReducer
} from 'utils/redux'

import { deepCopy } from 'utils/immutable'


const tileInitialState = {
	color: 'none',
	patternColor: 'blue',
	filled: false,
	patternFilled: false,
	filledStatus: c.UNFILLED_CORRECTLY,
	colorStatus: c.UNCOLORED
}

const tileHandler = {
	[t.SET_COLOR](state, action) {
		const newColor = action.color
		return {
			...state,
			color: newColor,
			colorStatus: tileColorStatus(newColor, state.patternColor)
		}
	},
	
	[t.SET_PATTERN_COLOR](state, action){
		const newPatternColor = action.patternColor
		return {
			...state,
			patternColor: newPatternColor,
			colorStatus: tileColorStatus(state.color, newPatternColor)
		}
	},
	
	[t.SET_FILLED](state, action) {
		const newFilled = action.filled
		return {
			...state,
			filled: newFilled,
			color: newFilled ? state.color : 'none',
			filledStatus: tileFilledStatus(newFilled, state.patternFilled)
		}
	},
	
	[t.SET_PATTERN_FILLED](state, action) {
		const newPatternFilled = action.patternFilled
		return {
			...state,
			patternFilled: newPatternFilled,
			filledStatus: tileFilledStatus(state.filled, newPatternFilled)
		}
	},
	
	[t.TOGGLE_FILLED](state, action) {
		const newFilled = !state.filled
		return {
			...state,
			filled: newFilled,
			color: newFilled ? state.color : 'none',
			filledStatus: tileFilledStatus(newFilled, state.patternFilled)
		}
	}
}

const tileReducer = createReducer(tileInitialState, tileHandler)

const tilesReducer = createReducer([], {
	[t.SET_TILES](state, action) {
		if (!validateTiles(action.tiles)) {
			throw Error('Cannot set invalid tiles')
		}
		return deepCopy(action.tiles)
	},
	[t.SET_COLOR](state, action) {
		return delegateToArrayItemReducer(state, action, tileReducer)
	},
	[t.SET_PATTERN_COLOR](state, action) {
		return delegateToArrayItemReducer(state, action, tileReducer)
	},
	[t.SET_FILLED](state, action) {
		return delegateToArrayItemReducer(state, action, tileReducer)
	},
	[t.TOGGLE_FILLED](state, action) {
		return delegateToArrayItemReducer(state, action, tileReducer)
	},
	[t.SET_PATTERN_FILLED](state, action) {
		return delegateToArrayItemReducer(state, action, tileReducer)
	},
	[t.RESET_TILES](state, action) {
		const numTiles = action.numTiles
		const newTiles = []
		for(let i = 0; i < numTiles; i++) {
			let newTile = tileReducer(undefined, {})
			newTile.id = i
			newTiles.push(newTile)
		}
		console.log('XXXXXXX', newTiles[0] === newTiles[1])
		return newTiles
	}
})

export default tilesReducer

// Returns a tiles status give its filled and patternFilled state
export function tileFilledStatus(filled, patternFilled) {
	if (filled && patternFilled) return c.FILLED_CORRECTLY
	if (filled && !patternFilled) return c.FILLED_INCORRECTLY
	if (!filled && !patternFilled) return c.UNFILLED_CORRECTLY
	if (!filled && patternFilled) return c.UNFILLED_INCORRECTLY
}

export function tileColorStatus(color, patternColor) {
	if (color === 'none') return c.UNCOLORED
	if (color === patternColor) {
		return c.COLORED_CORRECTLY
	} else {
		return c.COLORED_INCORRECTLY
	}
}