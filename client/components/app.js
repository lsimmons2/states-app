
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../actions'
import StatesList from './states-list'
import SelectedState from './selected-state'
import '../style/main.scss'


class App extends React.Component {

  render(){

    return (
      <div className="container">
        <div id="header-container">
          <h1>
            USA DEMOGRAPHICS
          </h1>
        </div>
        < StatesList
          actions={this.props.actions}
          statesList={this.props.statesList}
        />
        < SelectedState
          actions={this.props.actions}
          selectedState={this.props.selectedState}
        />
      </div>
    )

  }

}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
