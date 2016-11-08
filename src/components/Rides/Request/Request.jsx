import React from 'react';
import Geosuggest from 'react-geosuggest-plus';


import './Request.css';
import {createRide} from './requestFunctions.js';

class Request extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSuggestSelectAddress = this.onSuggestSelectAddress.bind(this);
  }


  onSuggestSelectAddress(address) {
    this.destinLat = address.location.lat;
    this.destinLng = address.location.lng;
  }

  onClick(obj) {
    let dataToSend = {
      originlat: this.props.address.initialCenter.lat,
      originlong: this.props.address.initialCenter.lng,
      destlat: this.destinLat,
      destlong: this.destinLng,
      driver_id: Math.floor((Math.random() * 6) + 1)
    }
    createRide(dataToSend);
    this.props.changeToCancel();
  }

  render() {
    return(
      <div className='request'>
        <div className='the-eta-box'>
          <div className='car-type-div'>
            <div>
            <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
            </div>
            <div className='ride-type-section'>
            <p className='ride-type-title'>Lyft</p>
            <p className='ride-type-desc'>Fast ride, 4 seats</p>
            </div>
          </div>
          <div className='eta-and-cost'>
            <div className='the-eta-title'>
              Eta
              <div className='real-eta'>
               2 min
              </div>
            </div>
            <div className='eta-title'>
              Cost
              <div className='real-eta'>
               $6 - $7
              </div>
            </div>
          </div>
          <div className='input-section'>
            <div className='color-dest-circles'>
              <div className='blue-circle'></div>
              <div className='pink-circle'></div>
            </div>
            <div className='inputs-stacked'>
          <div className='address-input origin-address'><input type='text' defaultValue={this.props.address.address} /></div>
          <div className='address-input dest-address'><Geosuggest onSuggestSelect={this.onSuggestSelectAddress} type='text' placeholder='Add Destination'/></div>
          </div>
      </div>
      </div>
        <div className='request-shyft-btn btn' onClick={this.onClick}>Request Ride</div>
      </div>
    )
  }
}

export default Request;
