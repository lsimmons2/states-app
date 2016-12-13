
import { combineReducers } from 'redux'
import munisReducer from './munis-reducer'
import statesReducer from './states-reducer'


const rootReducer = combineReducers({
  munis: munisReducer,
  states: statesReducer
})

export default rootReducer
