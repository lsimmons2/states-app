
//don't know yet how to have part of state without assigned reducer
import initialStates from '../states-list'

let statesReducer = function(states = initialStates, action){

  switch(action.type){

    case 'BLAH':
      return states;

    default:
      return states;

  }

}

export default statesReducer
