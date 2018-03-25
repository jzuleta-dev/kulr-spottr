import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  levelUp: [],
  finishGame: [],
  startGame: []
}, {prefix: 'BOARD_'})

export const BoardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentLevel: 0,
  gameStatus: 'waiting'
})
/* ------------- Reducers ------------- */

function inc (x) { return x + 1 }

export const startGame = (state) => {
  return state.set('currentLevel', 1).set('gameStatus', 'playing')
}

export const levelUp = (state) => {
  return state.update('currentLevel', inc)
}

export const finishGame = (state) => {
  return state.set('gameStatus', 'finished')
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LEVEL_UP]: levelUp,
  [Types.START_GAME]: startGame,
  [Types.FINISH_GAME]: finishGame
})
