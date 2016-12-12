import { combineReducers } from 'redux';
import munisReducer from './munis-reducer';


const rootReducer = combineReducers({
  munis: munisReducer,
  states: munisReducer
})

export default rootReducer
