import React from 'react';

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
    console.log(getCities());
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
            <p>test</p>
        </div>
      </div>
      </div>
    )
  }
}

export default CitiesList;
