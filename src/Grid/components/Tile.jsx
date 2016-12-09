import React, { PropTypes } from 'react'

import { 
	colorClass,
	errorClass,
	getStyle, 
	onMouseEnter,
	onMouseDown,
	preventDefault
} from './TileHelpers'


const Tile = (props) => {	
	const { onToggle } = props
	return (
		<div 
			className={`Tile ${colorClass(props)} ${errorClass(props)}`}
			style={getStyle(props.size)} 
			onMouseDown={onMouseDown(onToggle)}
			onMouseEnter={onMouseEnter(onToggle)}
			onContextMenu={preventDefault} >
			<div className='TileInner'></div>
		</div>
	)
}

Tile.propTypes = {
	size: PropTypes.number.isRequired,

	color: PropTypes.string.isRequired,
	patternColor: PropTypes.string.isRequired,
	colorStatus: PropTypes.string.isRequired,
	
	filled: PropTypes.bool.isRequired,
	patternFilled: PropTypes.bool.isRequired,	
	filledStatus: PropTypes.string.isRequired,	
	
	showFillHelp: PropTypes.bool.isRequired,
	showColorHelp: PropTypes.bool.isRequired,
	
	reveal: PropTypes.bool.isRequired,
	
	onToggle: PropTypes.func.isRequired
}


export default Tile