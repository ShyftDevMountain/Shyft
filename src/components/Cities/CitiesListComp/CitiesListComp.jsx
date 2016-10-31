import React from 'react';
import createFragment from 'react-addons-create-fragment';


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
        <h2 key={i}>{val.state}
          <ul>{test.map((val3, i) => {
              return (
                <li key={i}><a href='#'>{val3}</a></li>
              )
            })}</ul>
        </h2>
      )
    })



    return (
      <div className='container-fluid city-list'>
        <h2>Available Shyft Cities</h2>
        <div className='row'>
        <div className='city-links'>
            {states}
        </div>
      </div>
      </div>
    )
  }
}

export default CitiesList;
