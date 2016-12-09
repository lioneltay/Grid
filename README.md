Grid
================

TODOS
---------

REVEAL -> transform

query
* 

help
* showColorHelp(bool, num)
* showFillHelp(bool, num) (if num is provided, toggles back that many milliseconds later)

timer
* getTime
* setTime
* reduceTime
* pause

transform
* translate
* rotate
* reflect
* invert
* for a particular color

Grid Initialisation
* valid tilees (needs to fit with customisation options...)
* reset (initialises with the last initialisation method, must have both color and pattern initialised)

Color Initialisation
* uniform rows,
* uniform columns
* diagonals bl tr
* diagonal tl br
* random colors
* color list (must be correct length)

Pattern Initialisation ( requires numInPattern )
* random
* list of positions (must not contain duplicates and be valid length)
* initialise grid
* default arrangements
* randomised
* copy from existing grid


API
---------------
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


Testing github markup
--------
```javascript
const markup = 75

const wow = function() {
	return 'a cow'
}

console.log(() => 'Hello')
```







MOVES/MANIPULATIONS
-------

@@@ Colors


@@@ Transformations



@@@ Filled

