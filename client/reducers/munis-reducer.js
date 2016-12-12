let munisReducer = function(munis = [], action){

  switch(action.type){

    case 'SWITCH_STATE':
      return action.munis;

    default:
      return munis;
  }

}

export default munisReducer
