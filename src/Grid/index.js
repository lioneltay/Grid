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



//===== test imports
import { bindActionCreators } from 'redux'
//========

function Grid(options) {
	// Store!
	const store = createStore(reducer, applyMiddleware(thunk, middleware.logger))
	
	
	
	
	
	// =========================== TESTS
	
	const z = bindActionCreators(actions, store.dispatch)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// ==================================




	return {
		GridComponent: components.createGridComponent(store, options),
		z
	}
}


export default Grid





