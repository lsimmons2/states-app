
import React from 'react'
import Typeahead from './typeahead'


class Munis extends React.Component {

  render(){

    let munisList;
    if (this.props.munis){
      munisList = this.props.munis.map( muni => {
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
      munisList = <h2>No municipality data could be fetched for {this.props.selectedStateName}</h2>
    }

    return (
      <div>
        <div id="munis-container">
          <ul>
            {munisList}
          </ul>
        </div>
      </div>
    )
  }

}

export default Munis
