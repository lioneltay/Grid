// Creates the Grid Module API

import * as components from './components'
import * as actions from './actions'
import * as helpers from './validation'
import reducer from './reducers'




import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { middleware } from 'utils/redux'

// API
import query from './api/query'
import transform from './api/transform'
import timer from './api/timer'
import help from './api/help'
import init from './api/init'

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
		transform: transform(store.getState, store.dispatch),
		query: query(store.getState, validityOptions),
		timer: timer(store.getState),
		help: help(store.getState, store.dispatch),
		init: init(store.getState, store.dispatch),
		z
	}
}


export default Grid





