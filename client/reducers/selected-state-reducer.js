
const defSelectedState = {
  name: null,
  isFetching: false,
  error: false,
  munis: null
};

let selectedStateReduer = function(selectedState = defSelectedState, action){

  switch(action.type){

    case 'REQUEST_MUNIS':
      return Object.assign({}, selectedState, {
        name: action.state,
        isFetching: true
      })

    case 'REQUEST_MUNIS_SUCCESS':
      return Object.assign({}, selectedState, {
        isFetching: false,
        munis: action.munis
      })

    case 'REQUEST_MUNIS_ERROR':
      return Object.assign({}, selectedState, {
        isFetching: false,
        error: action.error,
        munis: null
      })

    default:
      return selectedState;
  }

}

export default selectedStateReduer
