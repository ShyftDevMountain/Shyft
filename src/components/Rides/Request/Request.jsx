import React from 'react';

import './Request.css';

class Request extends React.Component {
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
          <div className='address-input origin-address'><input type='text' placeholder='Pickup Location' /></div>
          <div className='address-input dest-address'><input type='text' placeholder='Add Destination'/></div>
          </div>
      </div>
      </div>
        <div className='request-shyft-btn btn'>Request Ride</div>
      </div>
    )
  }
}

export default Request;
