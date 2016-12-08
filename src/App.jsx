import React, { PropTypes } from 'react'

import Grid from 'Grid'


const newGrid = Grid()
const GridComponent = newGrid.GridComponent

function App({ children }) {
	return (
		<div>
			{children}
			<GridComponent />
		</div>
	)
}




	
	

const testTiles = [
	{
		"color": "blue",
		"patternColor": "red",
		"filled": true,
		"patternFilled": true,
		"filledStatus": "FILLED_CORRECTLY",
		"colorStatus": "COLORED_INCORRECTLY",
		"id": 0
	},
	{
		"color": "blue",
		"patternColor": "red",
		"filled": true,
		"patternFilled": false,
		"filledStatus": "FILLED_INCORRECTLY",
		"colorStatus": "COLORED_INCORRECTLY",
		"id": 1
	},
	{
		"color": "blue",
		"patternColor": "red",
		"filled": true,
		"patternFilled": false,
		"filledStatus": "FILLED_INCORRECTLY",
		"colorStatus": "COLORED_INCORRECTLY",
		"id": 2
	},
	{
		"color": "blue",
		"patternColor": "red",
		"filled": true,
		"patternFilled": true,
		"filledStatus": "FILLED_CORRECTLY",
		"colorStatus": "COLORED_INCORRECTLY",
		"id": 3
	}
]
newGrid.z.setHeight(2)
newGrid.z.setWidth(2)
newGrid.z.setNumInPattern(2)
newGrid.z.resetTiles()
newGrid.z.randomisePatternFilled()
newGrid.z.randomisePatternColors()
newGrid.z.setFilled(0, true)
newGrid.z.setFilled(1, true)
newGrid.z.setFilled(2, true)
newGrid.z.setFilled(3, true)
newGrid.z.randomiseColors()
newGrid.z.setUniformColor('red')
newGrid.z.setUniformPatternColor('green')

newGrid.z.setTiles(testTiles)
	
	

export default App

