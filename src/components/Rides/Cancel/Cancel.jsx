import React from 'react';

import './Cancel.css';

class Cancel extends React.Component {
  render() {
    return (
      <div className='cancel-section'>
        <div className='the-white-box'>
            <div className='car-img-cancel'>
            <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
          </div>
          <div className='confirmation-eta'>
          <p>Awesome! Your Shyft ride will be here in approximately 2 minutes!</p>
          </div>
          <div className='test-flex'>
          <div className='input-section'>
            <div className='color-dest-circles'>
              <div className='blue-circle'></div>
              <div className='pink-circle'></div>
            </div>
          </div>
            <div className='inputs-stacked'>
          <div className='address-input origin-address'><input type='text' placeholder='Pickup Location' /></div>
          <div className='address-input dest-address'><input type='text' placeholder='Add Destination'/></div>
          </div>
          </div>
        </div>
                <div className='request-shyft-btn btn'>Cancel Ride</div>

        </div>
    )
  }
}

export default Cancel;
