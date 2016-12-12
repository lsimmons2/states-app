
import React from 'react';

class StatesList extends React.Component {

  chooseState(state){
    console.log(state);
  }

  render(){

    let statesList = this.props.states.map( state => {
      return (
        <li key={state}>
          <a onClick={this.chooseState.bind(this, state)}>{state}</a>
        </li>
      )
    })
    return (
      <div>
        <ul>
          {statesList}
        </ul>
      </div>
    )
  }
}

export default StatesList
