const defMunis = {
  selectedState: null,
  isLoading: false,
  error: false,
  munis: null
};

let munisReducer = function(munis = defMunis, action){

  switch(action.type){

    case 'REQUEST_MUNIS':
      return Object.assign({}, munis, {
        selectedState: action.state,
        isFetching: true
      })

    case 'REQUEST_MUNIS_SUCCESS':
      return Object.assign({}, munis, {
        isFetching: false,
        loaded: action.munis
      })

    case 'REQUEST_MUNIS_ERROR':
    return Object.assign({}, munis, {
      isFetching: false,
      error: action.error
    })

    default:
      return munis;
  }

}

export default munisReducer
