// Creates the Grid Module API

import * as components from './components'
import * as actionTypes from './actionTypes'
import * as actions from './actions'
import * as s from './selectors'
import * as c from './constants'
import * as helpers from './gridHelpers'
import reducer from './reducers'




import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { middleware } from 'utils/redux'


import query from './api/query'
import transform from './api/transform'

//===== test imports
import { bindActionCreators } from 'redux'
//========




// GRID MODULE
function Grid(options = {}) {
	
	helpers.validateOptions(options)
	
	const { toggleOptions = {}, validityOptions = {} } = options
	
	// Store! Each grid instance gets its own store
	const store = createStore(reducer, applyMiddleware(thunk, middleware.logger))
	

	
	
	// =========================== TESTS
	// =========================== TESTS
	// =========================== TESTS
	
	const z = bindActionCreators(actions, store.dispatch)
	
	
	
	// ==================================
	// ==================================
	// ==================================



	return {
		Grid: components.createGridComponent(store, toggleOptions),
		transform: transform(),
		query: query(store.getState, validityOptions),
		z
	}
}


export default Grid





