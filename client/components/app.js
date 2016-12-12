
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import StatesList from './states-list';


class App extends React.Component {

  render(){
    return (
      <div className="container">
        < StatesList
          actions={this.props.actions}
          states={this.props.states}
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
