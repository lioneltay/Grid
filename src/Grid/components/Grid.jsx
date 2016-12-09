import React, { PropTypes } from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Tile from './Tile'
import * as s from '../selectors'
import * as c from '../constants'
import * as actions from '../actions'







function createGridComponent(store, toggleOptions) {
	
	
	
	
	// =============================================
	// Helper Functions
	// =============================================
	function generateTiles({ grid, showFillHelp, showColorHelp, reveal, dispatch }) {
		const tiles = s.tiles(grid)
		const width = s.width(grid)
		
		const tileTogglerGenerator = actions.createTileTogglerGenerator(toggleOptions, dispatch)
		
		return tiles.map((tile, index) => {
			const id = s.id(tile)
			return (
				<Tile 
					key={id}
					{...tile}
					showFillHelp={showFillHelp}
					showColorHelp={showColorHelp}
					reveal={reveal}
					size={100/width}
					onToggle={tileTogglerGenerator(id)}
				/>
			)
		})
	}
	
	// ==================================
	// Grid Component
	// ==================================
	let Grid = (props) => {
		return (
			<div className='Grid'>
				{generateTiles(props)}
			</div>
		)
	}

	Grid.propTypes = {
		grid: PropTypes.object.isRequired,
		
		showFillHelp: PropTypes.bool.isRequired,
		showColorHelp: PropTypes.bool.isRequired,
		
		dispatch: PropTypes.func.isRequired
	}
	
	const mapStateToProps = (state, props) => ({
		grid: state,
		showFillHelp: s.showFillHelp(state),
		showColorHelp: s.showColorHelp(state),
		reveal: s.reveal(state),
	})

	Grid = connect(mapStateToProps)(Grid)
	
	
	// Wrapper component
	// Grid does not receive props from caller
	return () => (
		<Provider store={store}>
			<Grid />
		</Provider>
	)
	
}

export default createGridComponent



