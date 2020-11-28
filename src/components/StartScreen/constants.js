export const TOGGLE_ALERT = 'TOGGLE_ALERT'
export const startScreenTitle = 'The Maze'
export const menuLinks = [
	{
		id: 'start-new-game-easy',
		label: 'Easy',
		action: {
			type: 'START',
			difficulty: 'EASY'
		}
	},
	{
		id: 'start-new-game-normal',
		label: 'Normal',
		action: {
			type: 'START',
			difficulty: 'NORMAL'
		}
	},
	{
		id: 'start-new-game-medium',
		label: 'Medium',
		action: {
			type: 'START',
			difficulty: 'MEDIUM'
		}
	},
	{
		id: 'start-new-game-hard',
		label: 'Hard',
		action: {
			type: 'START',
			difficulty: 'HARD'
		}
	},
	{
		id: 'start-new-game-insane',
		label: 'Insane',
		action: {
			type: 'START',
			difficulty: 'INSANE'
		}
	},
	{
		id: 'load-game',
		label: 'Load Game',
		action: {
			type: 'LOAD'
		}
	}
]
