import React from 'react';
var Geosuggest = require('react-geosuggest-plus');

import './CitiesEstimateForm.css';

const destInput = {
  background: 'green'
}

class CitiesEstimateForm extends React.Component {
  render () {
    return (
        <div>
          <h1>test</h1>
          <form className='estimateForm'>
            <fieldset>
              <div className='pickup-input-container'>
                <div className='pickup-icon'></div>
                <Geosuggest
                  className='pickup-input'
                  placeholder='Add pickup location'
                  />
              </div>
              <div className='pickup-destination-container'>
                <div className='dest-icon'></div>
                <Geosuggest
                  className='dest-input'
                  placeholder='Add destination'
                  />
              </div>
              <button className='button-getEstimate'>Get Estimate</button>
              <div className='estimate'>
                <div className='estimate-lyft'>
                  <span>$11</span>
                  <div>Lyft</div>
                </div>
                <div className='divider'></div>
                <div className='estimate-plus'>
                  <span>$18</span>
                  <div>Plus</div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
    );
  }
};



export default CitiesEstimateForm;
