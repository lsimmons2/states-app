
import React from 'react'

class StatesList extends React.Component {

  chooseState(state){
    this.props.actions.fetchMunis(state);
  }

  render(){

    let newEngland = ['Connecticut', 'Maine', 'Massachusetts', 'New Hampshire', 'Rhode Island', 'Vermont'];

    let statesList = this.props.statesList.map( state => {
    if (newEngland.indexOf(state) !== -1){
      return (
        <li key={state} className="state">
          <a onClick={this.chooseState.bind(this, state)}>{state}</a>
        </li>
      )
    }
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
