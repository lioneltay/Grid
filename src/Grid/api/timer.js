import * as actions from '../actions'
import * as s from '../selectors'


export default function(getState, dispatch) {
	const timer = {}
	
	let timerID = null
	let onZero = []
	
	
	timer.set = function(seconds) {
		dispatch(actions.setTime(seconds))
	}
	
	timer.deduct = function(seconds) {
		const time = s.time(getState())
		
		if (time <= 0) {
			clearInterval(timerID)
			timerID = null
			onZero.forEach(func => func())
			onZero = []
			return
		}
		
		if (seconds > time) {
			return dispatch(actions.setTime(0))
		}
		
		dispatch(actions.setTime(time - seconds))
	}
	
	timer.start = function(ticksPerSecond = 10, onZero) {
		if (timerID) return
		
		if (onZero) {
			timer.addOnZeroCallback(onZero)
		}
		
		console.log('hi')
		timerID = setInterval(() => timer.deduct(1/ticksPerSecond), 1000/ticksPerSecond)
	}
	
	timer.pause = function() {
		clearInterval(timerID)
		timerID = null
	}
	
	// Adds a callback and returns function to remove callback
	timer.addOnZeroCallback = function(f) {
		if (typeof f !== 'function') throw new Error(`Cannot add ${typeof f} as callback`)
		onZero.push(f)
		return function() {
			const index = onZero.indexOf(f)
			onZero = [ ...onZero.slice(0, index), ...onZero.slice(index + 1)]
		}
	}
	
	
	return timer
}