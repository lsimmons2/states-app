
import React from 'react'


class Typeahead extends React.Component {

  handleChange(event){

    event.preventDefault();

    const munis = this.props.munis.loaded;
    const typeaheadValue = this.refs.typeaheadInput.value;

    let results = [];
    munis.forEach( muni => {
      if (muni.name.indexOf(typeaheadValue) !== -1){
        results.push(muni.name);
      }
    })
    console.log(results);

  }

  render(){
    return (
      <div id="typeahead-container">
        <input
          type="text"
          id="muni-typeahead"
          placeholder="Enter municipality"
          ref="typeaheadInput"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default Typeahead
