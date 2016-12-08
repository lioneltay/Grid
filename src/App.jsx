// NOT PART OF THE MODULE JUST TESTING IT
// IMPORTS THE GRID MODULE AND RENDERS A GRID
// TESTS SOME OF THE METHODS THAT COME WITH THE GRID

import React, { PropTypes } from 'react'

import GridModule from 'Grid'


const toggleOptions = {
	toggleFill: true
}

const validityOptions = {
	checkFill: true,
	checkColor: false
}

const options = { toggleOptions, validityOptions }


const newGrid = GridModule(options)
const Grid = newGrid.Grid

function App({ children }) {
	return (
		<div>
			{children}
			<Grid />
			<button onClick={logStatus}>check</button>
		</div>
	)
}

function logStatus() {
	console.log(newGrid.query.isCorrect())
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

newGrid.z.setColor(0, 'red')
//newGrid.z.setColor(3, 'red')

	

export default App

