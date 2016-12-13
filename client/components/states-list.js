
import React from 'react'

class StatesList extends React.Component {

  chooseState(state){
    this.props.actions.fetchMunis(state);
  }

  render(){

    let statesList = this.props.states.map( state => {
      return (
        <li key={state} className="state">
          <a onClick={this.chooseState.bind(this, state)}>{state}</a>
        </li>
      )
    })

    return (
      <div id="states-list-container">
        <div id="states-list">
          <ul>
            {statesList}
          </ul>
        </div>
      </div>
    )
  }
}

export default StatesList
