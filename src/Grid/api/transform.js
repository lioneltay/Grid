import * as actions from '../actions'
import * as s from '../selectors'

// creates a shallow copy and reindexes tiles after transformations
function fixId(tiles) {
	return tiles.map((tile, index) => {
		return {
			...tile,
			id: index
		}
	})
}

export default function(getState, dispatch) {
	const transform = {}
	
	// ZSHIFTREVERSE
	transform.zShiftReverse = function() {
		// new shallow copy of array
		let tiles = s.tiles(getState()).slice()
		
		// bring last tile to front, mutation is ok since its only a shallow mutation and we assume immutable states with redux
		tiles.push(tiles.shift())
		tiles = fixId(tiles)
		dispatch(actions.setTiles(tiles))
	}
	
	// ZSHIFT
	transform.zShift = function() {
		// new shallow copy of array
		let tiles = s.tiles(getState()).slice()
		
		// bring last tile to front, mutation is ok since its only a shallow mutation and we assume immutable states with redux
		tiles.unshift(tiles.pop())
		tiles = fixId(tiles)
		dispatch(actions.setTiles(tiles))
	}
	
	// TRANSLATE
	transform.translate = function(direction, distance) {
		const directions = ['up', 'down', 'left', 'right']
		
		if (directions.indexOf(direction) === -1) {
			throw new Error('Invalid Direction')
		}
		
		const grid = getState()
		const tiles = s.tiles(grid)
		const height = s.height(grid)
		const width = s.width(grid)
		
		let newTiles = []
		
		distance = Math.round(distance)
		// So we can think in down and right translations only
		// ie with a width of 5, a translation right by 1 is a translation left by 4
		if (direction === 'left') {
			distance = width - distance
		}
		
		if (direction === 'up') {
			distance = height - distance
		}
		
		if (direction === 'right' || direction === 'left') {
			for (let row = 0; row < height; row++) {
				for (let col = 0; col < width; col++) {
					let oldPos = row * width + col
					let pos = row * width + (col + distance) % width
					newTiles[pos] = tiles[oldPos]
				}
			}
		}
		
		if (direction === 'up' || direction === 'down') {
			for (let col = 0; col < width; col++) {
				for (let row = 0; row < height; row++) {
					let oldPos = row * width + col
					let pos = ( (row + distance) % height ) * width + col
					newTiles[pos] = tiles[oldPos]
				}
			}
		}
		
		newTiles = fixId(newTiles)
		dispatch(actions.setTiles(newTiles))		
	}
	
	// REFLECTIONS
	transform.reflection = function(axis) {
		const axises = ['horizontal', 'vertical']
		
		if (axises.indexOf(axis) === -1) {
			throw new Error('Invalid Axis')
		}
		
		const grid = getState()
		const tiles = s.tiles(grid)
		const height = s.height(grid)
		const width = s.width(grid)
		
		let newTiles = []
		
		if (axis === 'vertical') {
			for (let row = 0; row < height; row++) {
				for (let col = 0; col < width; col++) {
					let oldPos = row * width + col
					let pos = row * width + (width - 1) - col
					newTiles[pos] = tiles[oldPos]
				}
			}
		}
		
		if (axis === 'horizontal') {
			for (let col = 0; col < width; col++) {
				for (let row = 0; row < height; row++) {
					let oldPos = row * width + col
					let pos = (height - 1 - row) * width + col
					newTiles[pos] = tiles[oldPos]
				}
			}
		}
		
		newTiles = fixId(newTiles)
		dispatch(actions.setTiles(newTiles))
	}
	
	transform.rotate = function(direction) {
		const directions = ['clock', 'anti']
		
		if (directions.indexOf(direction) === -1) {
			throw new Error('Invalid Direction')
		}
		
		const grid = getState()
		const tiles = s.tiles(grid)
		const height = s.height(grid)
		const width = s.width(grid)
		
		let newTiles = []
		
		if (direction === 'clock') {
			for (let col = 0; col < width; col++) {
				for (let row = 0; row < height; row++) {
					let pos = (height - 1 - row) * width + col
					newTiles.push(tiles[pos])
				}
			}
		}
		
		if (direction === 'anti') {
			for (let col = 0; col < width; col++) {
				for (let row = 0; row < height; row++) {
					let pos = row * width + (width - 1 - col)
					newTiles.push(tiles[pos])
				}
			}
		}
		
		newTiles = fixId(newTiles)
		dispatch(actions.setHeight(width))
		dispatch(actions.setWidth(height))
		dispatch(actions.setTiles(newTiles))
	}
	
	
	return transform
}




