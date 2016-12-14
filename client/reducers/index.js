
import { combineReducers } from 'redux'
import statesListReducer from './states-list-reducer'
import selectedStateReducer from './selected-state-reducer'


const rootReducer = combineReducers({
  statesList: statesListReducer,
  selectedState: selectedStateReducer
})

export default rootReducer
