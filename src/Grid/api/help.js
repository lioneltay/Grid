import * as actions from '../actions'

export default function(getState, dispatch) {
	const help = {}
	
	help.showFillHelp = function(showHelp, time) {
		dispatch(actions.setShowFillHelp(showHelp))
		
		if (typeof time === 'number') {
			setTimeout(() => dispatch(actions.setShowFillHelp(!showHelp)), time)
		}
	}
	
	help.showColorHelp = function(showHelp, time) {
		dispatch(actions.setShowColorHelp(showHelp))
		
		if (typeof time === 'number') {
			setTimeout(() => dispatch(actions.setShowColorHelp(!showHelp)), time)
		}
	}
	
	help.reveal = function(reveal) {
		dispatch(actions.setReveal(reveal))
	}
	
	
	return help
}