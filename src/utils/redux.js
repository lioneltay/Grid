/*
Creates an action creator
@param type {String} - type of action creator
@param argNames {[String]} - arguments of action creator
*/
export function createActionCreator(type, ...argNames) {
	return function(...args) {
		const action = { type }
		argNames.forEach((argName, index) => {
			action[argName] = args[index]
		})
		return action
	}
}

/*
Creates a reducer from an object mapping, alternative to switch statements
@param initialState - initial state of reducer
@param handlers - object mapping of action types to handlers
*/
export function createReducer(initialState, handlers) {
  return function(state = JSON.parse(JSON.stringify(initialState)), action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

/*
Creates setter handler for handling actions which only set a state property
Creates a deep copy of previous state
Does not handle date properties
*/
export function makeSetterHandler(...fieldNames) {
	return function(state, action) {
		const newState = JSON.parse(JSON.stringify(state))
		fieldNames.forEach(fieldName => {
			newState[fieldName] = action[fieldName]
		})
		return newState
	}
}

/*
Delegates the response to an action to an item reducer
*/
export function delegateToArrayItemReducer(array, action, itemReducer) {
	const updatedItems = array.map(item => {
		if(item.id !== action.id) {
				return item;
		}
		
		const updatedItem = itemReducer(item, action);
		return updatedItem;
	});

	return updatedItems;
}

/*
Generates a reducer which simply sets a value
*/
export function generateSetterReducer(initialState, actionType, fieldName) {
	return function(state = initialState, action) {
		if (action.type === actionType) {
			return action[fieldName]
		}
		return state
	}
}


export const middleware = {
	logger: ({ dispatch, getState }) => next => action => {
		console.group(action.type)
		console.log(action)
		const ret = next(action)
		const state = getState()
		const gogo = JSON.stringify(state, null, 2)
//		const gogo = state
		console.log(gogo)
		console.groupEnd()
		return ret
	}
}




