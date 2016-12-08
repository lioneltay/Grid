
========================================
API
========================================
Grid function that takes configuration options and returns and object


The object will contain
{
	Grid: (component),
	
	getStatus: (returns bool indicating if the grid is valid given the config options),
	
	transformation: {
		shift: (move grid in a direction with wrapping),
		rotate: (rotate grid),
		
	}
	
	allowInteraction: (function, toggles interation with grid)
	
	initialiseGrid: (takes an entire grid description, OR some simpler descriptions, ie randomPattern, randomColor, numInPattern)
}


state = {
	allowInteraction: bool,
	
	height,
	width,
	numInPattern,
	
	
	showColorHelp: bool
	showFillHelp: bool
	
	
	tiles: [[tiles]],
}


tile {
	filled:
	patternFilled:
	filledStatus:
	
	color:
	patternColor:
	colorStatus:
	
	
}










========================================
MOVES/MANIPULATIONS
========================================

@@@ Colors


@@@ Transformations



@@@ Filled

