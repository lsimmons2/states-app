
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../actions'
import StatesList from './states-list'
import Munis from './munis'
import '../style/main.scss'


class App extends React.Component {

  render(){
    return (
      <div className="container">
        <div id="header-container">
          <h1>
            Choose State to see Demographic Statistics
          </h1>
        </div>
        < StatesList
          actions={this.props.actions}
          states={this.props.states}
        />
        < Munis
          munis={this.props.munis}
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
