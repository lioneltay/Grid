// name of the module, this is also where the slice of redux state should also go, ie state[NAME]
export const NAME = 'grid'





// Tile constants
export const FILLED_CORRECTLY = 'FILLED_CORRECTLY'
export const UNFILLED_CORRECTLY = 'UNFILLED_CORRECTLY'
export const FILLED_INCORRECTLY = 'FILLED_INCORRECTLY'
export const UNFILLED_INCORRECTLY = 'UNFILLED_INCORRECTLY'
export const FILLED_STATUSES = [
	FILLED_CORRECTLY, 
	UNFILLED_CORRECTLY, 
	FILLED_INCORRECTLY, 
	UNFILLED_INCORRECTLY
]

export const COLORS = ['red', 'green', 'blue', 'yellow', 'orange']
export const COLORED_CORRECTLY = 'COLORED_CORRECTLY'
export const COLORED_INCORRECTLY = 'COLORED_INCORRECTLY'
export const UNCOLORED = 'UNCOLORED'
export const COLOR_STATUSES = [
	COLORED_CORRECTLY, 
	COLORED_INCORRECTLY, 
	UNCOLORED
]


