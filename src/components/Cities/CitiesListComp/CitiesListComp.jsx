import React from 'react';
import createFragment from 'react-addons-create-fragment';


import {getCities} from '../../../services/citiesListService.js';

import './CitiesListComp.css';

class CitiesList extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
    cities: []
  }
}

  componentDidMount() {
    getCities().then(cities => {
      this.setState({
        cities:cities
      })
    })
  }

  render() {
    const cities = this.state.cities.map(city => {
      return (
        <ul key={city.id}><li><a href='#'>{city.city}</a></li></ul>
      )
    })
    return (
      <div className='container-fluid city-list'>
        <h2>Available Shyft Cities</h2>
        <div className='row'>
        <div className='city-links'>
            {cities}
        </div>
      </div>
      </div>
    )
  }
}

export default CitiesList;
