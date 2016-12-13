
import React from 'react'

class Munis extends React.Component {

  render(){

    let munisList;
    if (this.props.munis.loaded){
      munisList = this.props.munis.loaded.map( muni => {
        return (
          <li key={muni.name}>
            <h4>{muni.name}</h4>
            <div className="muni-field">
              <span>Type of municipality: </span><span>{muni.type}</span>
            </div>
            <div className="muni-field">
              <span>County: </span><span>{muni.county}</span>
            </div>
            <div className="muni-field">
              <span>Population: </span><span>{muni.population}</span>
            </div>
          </li>
        )
      })
    } else {
      munisList = <div></div>
    }


    let imgSrc = `http://www.50states.com/maps/${this.props.munis.selectedState}.gif`

    return (
      <div id="state-container">
        <h2>{this.props.munis.selectedState}</h2>
        {/* <img className="state-map" src={imgSrc}/> */}
        <ul>
          {munisList}
        </ul>
      </div>
    )
  }

}

export default Munis
