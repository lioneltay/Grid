import { combineReducers } from 'redux'

import { 
	createReducer, 
	delegateToArrayItemReducer,
	generateSetterReducer
} from 'utils/redux'
import * as t from '../actionTypes'

import tilesReducer from './tiles'

const gridReducer = combineReducers({
	tiles: tilesReducer,
	height: generateSetterReducer(0, t.SET_HEIGHT, 'height'),
	width: generateSetterReducer(0, t.SET_WIDTH, 'width'),
	numInPattern: generateSetterReducer(0, t.SET_NUM_IN_PATTERN, 'numInPattern'),
	showFillHelp: generateSetterReducer(true, t.SET_SHOW_FILL_HELP, 'showFillHelp'),
	showColorHelp: generateSetterReducer(false, t.SET_SHOW_COLOR_HELP, 'showColorHelp'),
	reveal: generateSetterReducer(true, t.SET_REVEAL, 'reveal'),
	time: generateSetterReducer(0, t.SET_TIME, 'time'),
})

export default gridReducer
