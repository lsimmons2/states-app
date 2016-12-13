let selectedStateReduer = function(selectState = '', action){

  switch(action.type){

    case 'SELECT_STATE':
      return action.state;

    default:
      return selectState;
  }

}

export default selectedStateReduer
