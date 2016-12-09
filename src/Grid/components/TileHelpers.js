import * as c from '../constants'

function boolToString(bool, trueStr, falseStr) {
	if (bool) {
		return trueStr
	} else {
		return falseStr
	}
}


/*

	color: PropTypes.string.isRequired,
	patternColor: PropTypes.string.isRequired,
	colorStatus: PropTypes.string.isRequired,
	
	filled: PropTypes.bool.isRequired,
	patternFilled: PropTypes.bool.isRequired,	
	filledStatus: PropTypes.string.isRequired,	
	
	showFillHelp: PropTypes.bool.isRequired,
	showColorHelp: PropTypes.bool.isRequired,
	
*/
export function colorClass({
	color,
	patternColor,
	colorStatus,
	
	filled,
	patternFilled,
	filledStatus,
	
	showFillHelp,
	showColorHelp,
	
	reveal
}) {
	if (reveal && patternFilled) {
		return patternColor
	} else if (reveal && !patternFilled) {
		return ''
	}
	
	if (patternFilled && showColorHelp && colorStatus === c.COLORED_INCORRECTLY) {
		return patternColor
	}
	
	if (showFillHelp && filledStatus === c.UNFILLED_INCORRECTLY) {
		return patternColor
	}
	
	if (filled) {
		return color
	}
	
	return ''
}

export function errorClass({
	color,
	patternColor,
	colorStatus,
	
	filled,
	patternFilled,
	filledStatus,
	
	showFillHelp,
	showColorHelp,
	
	reveal
}) {
	if (reveal) return ''
	// Should not be filled
	if (showFillHelp && filledStatus === c.FILLED_INCORRECTLY) {
		return 'redError'
	}
	
	// Should be filled
	if (showFillHelp && filledStatus === c.UNFILLED_INCORRECTLY) {
		return 'greenError'
	}
	
	// Should be filled but wrong color
	if (showColorHelp && colorStatus === c.COLORED_INCORRECTLY && filledStatus === c.FILLED_CORRECTLY) {
		return 'greenError'
	}
	
	return ''
}

// Makes the tiles fit in the grid according to width
export function getStyle(size) {
	const marginPercent = 0.035
	const margin = size * marginPercent
	const width = size - 2 * margin
	return {
		margin: `${margin}%`,
		width: `${width}%`,
		paddingTop: `${width}%`
	}
}

// Calls onToggle when 
export function onMouseEnter(onToggle) {
	return function (event) {
		const buttons = event.buttons
		if (buttons === 1 || buttons === 2) {
			onToggle()
		}
	}
}

// Calls onToggle when 
export function onMouseDown(onToggle) {
	return function (event) {
		event.preventDefault()
		onToggle()
	}
}


export function preventDefault(event) {
	event.preventDefault()
}



