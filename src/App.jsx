// NOT PART OF THE MODULE JUST TESTING IT
// IMPORTS THE GRID MODULE AND RENDERS A GRID
// TESTS SOME OF THE METHODS THAT COME WITH THE GRID

import React, { Component, PropTypes } from 'react'

import GridModule from 'Grid'


const toggleOptions = {
	toggleFill: true
}

const validityOptions = {
	checkFill: true,
	checkColor: false
}

const options = { toggleOptions, validityOptions }


const g = GridModule(options)
const Grid = g.Grid

class App extends Component {
	constructor(props) {
		super(props)
		
		this.state = g.query.getState()
	}
	
	// Set update cycle to test things
	componentDidMount() {
		setInterval(() => this.setState(g.query.getState()), 1000)
	}
	
	render() {
		return (
			<div className="testApp">
				<h1>Grid Test Interface</h1>
				<h2>Conglomeration of all grid features</h2>
				
				<div className="interfaceContainer">
					<div className="gridContainer">
						<Grid />
					</div>

					<div className="buttonsContainer">
						<div className='container'>
							<h5>Status</h5>
							<table>
								<tbody>
									<tr>
										<td>{`Correct: ${g.query.isCorrect()}`}</td>
										<td>{`FillHelp: ${this.state.showFillHelp}`}</td>
										<td>{`ColorHelp: ${this.state.showColorHelp}`}</td>
									</tr>
									<tr>
										<td>{`Reveal: ${this.state.reveal}`}</td>
										<td>{`numInPattern: ${this.state.numInPattern}`}</td>
										<td>{``}</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='container'>
							<h5>Query</h5>
							<button onClick={() => console.log(g.query.isCorrect())}>isCorrect</button>
							<button onClick={() => console.log(g.query.getState())}>getState</button>
						</div>

						<div className='container'>
							<h5>Help</h5>
							<button onClick={() => g.help.showFillHelp(true)}>showFillHelp</button>
							<button onClick={() => g.help.showFillHelp(false)}>removeFillHelp</button>
							<button onClick={() => g.help.showFillHelp(true, 1000)}>temporaryFillHelp</button>
							<button onClick={() => g.help.showColorHelp(true)}>showColorHelp</button>
							<button onClick={() => g.help.showColorHelp(false)}>removeColorHelp</button>
							<button onClick={() => g.help.showColorHelp(true, 1000)}>temporaryColorHelp</button>
							<button onClick={() => g.help.reveal(!this.state.reveal)}>reveal</button>
						</div>

						<div className='container'>
							<h5>Timer</h5>
							<button>Not implemented</button>
						</div>

						<div className='container'>
							<h5>Init</h5>
							<button onClick={() => g.init.color.uniformRows(['green', 'yellow', 'blue', 'red', 'orange'])} >UniformRows</button>
							<button onClick={() => g.init.color.uniformColumns(['green', 'yellow', 'blue', 'red', 'orange'])} >UniformCols</button>
							<button onClick={() => g.init.color.random(['orange', 'red', 'blue', 'green', 'yellow'])} >RandomColors</button>
							<button onClick={() => g.init.pattern.random()} >RandomPattern</button>
						</div>

						<div className='container'>
							<h5>Transform</h5>
							<button onClick={g.transform.zShift}>zShift</button>
							<button onClick={g.transform.zShiftReverse}>zShiftReverse</button>
							<button onClick={() => g.transform.translate('left', 1)}>translateLEFT</button>
							<button onClick={() => g.transform.translate('right', 1)}>translateRIGHT</button>
							<button onClick={() => g.transform.translate('up', 1)}>translateUP</button>
							<button onClick={() => g.transform.translate('down', 1)}>translateDOWN</button>
							<button onClick={() => g.transform.reflection('vertical')}>VerticalReflection</button>
							<button onClick={() => g.transform.reflection('horizontal')}>HorizontalReflection</button>
							<button onClick={() => g.transform.rotate('clock')}>rotateClock</button>
							<button onClick={() => g.transform.rotate('anti')}>rotateAnti</button>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

function logStatus() {
	console.log(g.query.isCorrect())
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


g.z.setHeight(3)
g.z.setWidth(4)
g.z.setNumInPattern(2)
g.z.resetTiles()



	

export default App

