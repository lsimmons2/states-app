
require('es6-promise').polyfill();
import 'isomorphic-fetch'


function requestMunis(state) {
  return {
    type: 'REQUEST_MUNIS',
    state: state
  }
}

function requestMunisSuccess(munis) {
  return {
    type: 'REQUEST_MUNIS_SUCCESS',
    munis: munis
  }
}

function requestMunisError(error) {
  return {
    type: 'REQUEST_MUNIS_ERROR',
    error: error
  }
}

function fetchMunis(state){

  return function(dispatch){

    dispatch(requestMunis(state));

    let queryString = `/states/${state}`;
    return fetch(queryString)
      .then( resp => resp.json())
      .then( munis => {
        dispatch(requestMunisSuccess(munis));
      })
      .catch( error => {
        dispatch(requestMunisError(error))
      })

  }

}


export default { fetchMunis }
