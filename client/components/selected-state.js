
import React from 'react'

import GeneralStateInfo from './general-state-info'
import Munis from './munis'

class SelectedState extends React.Component {

  render(){

    let selectedState;
    if (this.props.selectedState.name){
      selectedState = (
        <div id="selected-state-container">
          < GeneralStateInfo
            selectedStateName={this.props.selectedState.name}
          />
          < Munis
            munis={this.props.selectedState.munis}
            selectedStateName={this.props.selectedState.name}
          />
        </div>
      )
    } else {
      selectedState = (
        <div id="selected-state-container">
          <h2 id="no-state-selected-banner">
            Choose State to see Demographic Statistics
          </h2>
        </div>
      )
    }
    return (
      <div>
        {selectedState}
      </div>
    )

  }

}

export default SelectedState
