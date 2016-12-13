
import React from 'react'
import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

class StatesList extends React.Component {

  constructor(props){
    super(props);
    console.log('states: ', this.props.states);
  }

  chooseState(state){
    this.props.actions.fetchMunis(state);
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
