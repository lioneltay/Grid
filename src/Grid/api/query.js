import * as s from '../selectors'
/* 
Takes a config object determining what a valid tile is, returns validity of grid
Options: {
	fill: bool (default true),
	color: bool (default false)
}
*/

export default function(getState, { checkFilled = true, checkColor = false } = {}) {
	const query = {}
	
	query.isCorrect = function getGridValid() {
		const gridTiles = s.tiles(getState())
		
		return gridTiles.every(tile => {
			if (checkFilled && s.filled(tile) !== s.patternFilled(tile)) {
				return false
			}
			
			// Don't check the color if the tile isnt filled as unfilled tiles have no color
			if (s.filled(tile) && checkColor && s.color(tile) !== s.patternColor(tile)) {
				return false
			}

			return true
		})

	}
	
	// If you feel like looking into the internals
	// perhaps the user wants to implement more in depth interactivity
	// THE RETURN VALUE SHOULD NOT BE MUTATED unless you really want to
	query.getState = function() {
		return getState()
	}
	
	query.getTime = function() {
		return s.time(getState())
	}
	
	
	return query
}