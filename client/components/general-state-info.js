
import React from 'react'

class GeneralStateInfo extends React.Component {

  render(){

    // let imgSrc = `http://www.50states.com/maps/${this.props..selectedState}.gif`
    return (
      <div id="general-state-info-container">
        <h2>{this.props.selectedStateName}</h2>
        {/* <img className="state-map" src={imgSrc}/> */}
      </div>
    )
  }

}

export default GeneralStateInfo
