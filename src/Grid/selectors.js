// Selectors

// currently there are 3 nested levels, grid -> tiles -> tile

// From grid to anything
export const tiles = (grid) => grid.tiles
export const height = (grid) => grid.height
export const width = (grid) => grid.width
export const numInPattern = (grid) => grid.numInPattern
export const showFillHelp = (grid) => grid.showFillHelp
export const showColorHelp = (grid) => grid.showColorHelp
export const reveal = (grid) => grid.reveal
export const time = (grid) => grid.time
export const numTiles = (grid) => height(grid) * width(grid)

export const gridTile = (grid, id) => tile(tiles(grid), id)

export const gridTileid = (grid, id) => gridTile(grid, id).id // KINDA USELESS but for completeness... who knows maybe someone will get bored
export const gridTileColor = (grid, id) => gridTile(grid, id).color
export const gridTilePatternColor = (grid, id) => gridTile(grid, id).patternColor
export const gridTileFilled = (grid, id) => gridTile(grid, id).filled
export const gridTilePatternFilled = (grid, id) => gridTile(grid, id).patternFilled
export const gridTileFilledStatus = (grid, id) => gridTile(grid, id).filledStatus


// From tiles to anything
export const tile = (tiles, id) => tiles[id]

export const tileId = (tiles) => tile(tiles, id).id // USELESS
export const tileColor = (tiles) => tile(tiles, id).color
export const tilePatternColor = (tiles) => tile(tiles, id).patternColor
export const tileFilled = (tiles) => tile(tiles, id).filled
export const tilePatternFilled = (tiles) => tile(tiles, id).patternFilled
export const tileFilledStatus = (tiles) => tile(tiles, id).filledStatus


// From tile to anything
export const id = (tile) => tile.id
export const color = (tile) => tile.color
export const patternColor = (tile) => tile.patternColor
export const filled = (tile) => tile.filled
export const patternFilled = (tile) => tile.patternFilled
export const filledStatus = (tile) => tile.filledStatus















