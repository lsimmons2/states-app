
require('es6-promise').polyfill();
import 'isomorphic-fetch'


function requestMunis(state) {
  return {
    type: 'REQUEST_MUNIS',
    state
  }
}

function requestMunisSuccess(munis) {
  return {
    type: 'REQUEST_MUNIS_SUCCESS',
    munis
  }
}

function requestMunisError(error) {
  return {
    type: 'REQUEST_MUNIS_ERROR',
    error
  }
}

function fetchMunis(state){

  return function(dispatch){

    dispatch(requestMunis(state));

    let url = `/states/${state}`;
    if(process.env.NODE_ENV === 'test'){
      url = 'http://localhost:8080' + url;
    }
    return fetch(url)
      .then( resp => {
          if(!resp.ok){
            throw new Error(resp.statusText)
          }
          return resp.json();
      })
      .then( munis => {
        dispatch(requestMunisSuccess(munis));
      })
      .catch( error => {
        dispatch(requestMunisError(error))
      })

  }

}


export {
  requestMunis,
  requestMunisSuccess,
  requestMunisError,
  fetchMunis
}
