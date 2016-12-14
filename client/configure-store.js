
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import statesList from './states-list'


let finalCreateStore = compose(
  applyMiddleware(
    thunk,
    logger()
  )
)(createStore)

let defInitialState = {
  statesList: statesList,
  selectedState: {
    name: null,
    isFetching: false,
    error: false,
    munis: null
  }}

export default function configureStore(initialState = defInitialState){
  return finalCreateStore(rootReducer, initialState)
}
