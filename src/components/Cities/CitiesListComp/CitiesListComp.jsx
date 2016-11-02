import React from 'react';
import {hashHistory} from 'react-router';

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
        return val2;
      })
      return (
        <h4 className='state-name' key={i}>{val.state}
          <div className='cities-div'>{test.map((val3, i) => {
              let url = '/#/citydetails/'
              return (
                <p key={val3.id}><a href={url + val3.id}>{val3.city}</a></p>
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
