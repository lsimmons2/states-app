import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './configure-store'
import App from './components/app'
import statesList from './states-list'


let initialState = {
  statesList: statesList,
  selectedState: {
    name: null,
    isFetching: false,
    error: false,
    munis: null
  }
};

let store = configureStore(initialState);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
