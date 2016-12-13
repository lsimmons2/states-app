
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import states from './states';


let finalCreateStore = compose(
  applyMiddleware(
    thunk,
    logger()
  )
)(createStore)

let defInitialState = {
  states: states,
  munis: {
    selectedState: null,
    isFetching: false,
    error: false,
    loaded: null
  }}

export default function configureStore(initialState = defInitialState){
  return finalCreateStore(rootReducer, initialState)
}
