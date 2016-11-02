import React from 'react';
import Geosuggest from 'react-geosuggest-plus';
import {getLyftEstimate} from '../../../services/estimateFormService.js';

import './CitiesEstimateForm.css';

var pickupLatLng,
    destLatLng,
    lyftEstimate,
    lyftPlusEstimate;


class CitiesEstimateForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        lyftEstimate: 0,
        lyftPlusEstimate: 0,
        showEstimate: 'estimate',
        estimateButton: 'button-getEstimate'
    }
    this.getEstimate = this.getEstimate.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onSuggestSelectPickup (pickup) {
    pickupLatLng = [pickup.location.lat, pickup.location.lng];
  }

  onSuggestSelectDest (dest) {
    destLatLng = [dest.location.lat, dest.location.lng];
  }

  getEstimate () {
    var estimates = getLyftEstimate(pickupLatLng[0],pickupLatLng[1],destLatLng[0],destLatLng[1]);
    console.log(pickupLatLng, destLatLng);
    estimates.then(res => {
      this.setState({
        lyftEstimate: res[1],
        lyftPlusEstimate: res[0],
        showEstimate: 'estimate active',
        estimateButton: 'button-getEstimate hide'
      })
    })
  }

  resetForm () {
    this.setState({
        lyftEstimate: 0,
        lyftPlusEstimate: 0,
        showEstimate: 'estimate',
        estimateButton: 'button-getEstimate'
    })
  }

  render () {
    return (
        <div>
          <form className='estimateForm'>
            <fieldset>
              <div className='pickup-input-container'>
                <div className='pickup-icon'></div>
                <Geosuggest
                  className='pickup-input'
                  placeholder='Add pickup location'
                  onSuggestSelect={this.onSuggestSelectPickup}
                  onChange={this.resetForm}
                  />
              </div>
              <div className='pickup-destination-container'>
                <div className='dest-icon'></div>
                <Geosuggest
                  className='dest-input'
                  placeholder='Add destination'
                  onSuggestSelect={this.onSuggestSelectDest}
                  onChange={this.resetForm}
                  />
              </div>
              <button onClick={this.getEstimate} type = "button" className={this.state.estimateButton}>Get Estimate</button>
              <div className={this.state.showEstimate}>
                <div className='estimate-lyft'>
                  <span>${this.state.lyftEstimate}</span>
                  <div>Shyft</div>
                </div>
                <div className='divider'></div>
                <div className='estimate-plus'>
                  <span>${this.state.lyftPlusEstimate}</span>
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
