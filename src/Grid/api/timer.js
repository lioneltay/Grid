

export default function(getState) {
	const timer = {}
	
	timer.getTime = function() {}
	timer.setTime = function() {}
	timer.pause = function() {}
	timer.start = function(ticksPerSecond = 10) {}
	timer.deduct = function() {}
	
	
	return timer
}