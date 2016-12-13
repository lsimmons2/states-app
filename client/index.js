import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configure-store';
import App from './components/app';
import states from './states';


let initialState = {
  states: states,
  munis: {
    selectedState: null,
    isFetching: false,
    error: false,
    loaded: null
  }
};

let store = configureStore(initialState);


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
