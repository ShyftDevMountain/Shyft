import React from 'react';

import './StartRide.css';

class StartRide extends React.Component {
  render() {
    return(
      <div className='StartRide'>
        <div className='reqest'>
          <div className='the-estimate-box'>
            <div className='car-type-div'>
              <div>
              <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
              </div>
              <div className='ride-type-section'>
              <p className='ride-type-title'>Lyft</p>
              </div>
            </div>
            <div className='Your-lyft-is_ready_box'>
              <div className='Your_ride_is_ready_inner'>
                  Your Ride is Ready!
              </div>

            </div>

          </div>
          <div className='confirm-Your-ride_button' onClick={this.props.changeToRate}>Confirm Your Ride</div>
          <div className='request-shyft-btn btn'>Cancel</div>
        </div>
      </div>
    )
  }
}

export default StartRide;
