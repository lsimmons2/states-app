
import fetch from 'isomorphic-fetch'


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

    return fetch(`/states/${state}`)
      .then( response => response.json())
      .then( json => {
        dispatch(requestMunisSuccess(json.rows));
      })
      .catch( error => {
        dispatch(requestMunisError(error))
      })

  }

}


export default { fetchMunis }
