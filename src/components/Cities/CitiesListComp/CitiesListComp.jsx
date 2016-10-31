import React from 'react';


import {getCities} from '../../../services/citiesListService.js';

import './CitiesListComp.css';

class CitiesList extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    states: [],
  }
}

  componentDidMount() {
    getCities().then(statesList => {
      this.setState({
        states: statesList
      })
    })
  }

  render() {
    let states = this.state.states.map((val, i, arr) => {
      let test = val.cities.map((val2) => {
        return val2.city
      })
      return (
        <h4 key={i}>{val.state}
          <div className='cities-div'>{test.map((val3, i) => {
              return (
                <p className='city-name' key={i}><a>{val3}</a></p>
              )
            })}</div>
        </h4>
      )
    })



    return (
      <div className='cities-list-comp'>
        <h2>Available Shyft Cities</h2>
      <div className='city-list'>
        <div className='city-links'>
            {states}
        </div>
      </div>
      </div>
    )
  }
}

export default CitiesList;
