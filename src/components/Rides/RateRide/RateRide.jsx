import React from 'react';

import './RateRide.css';

class RateRide extends React.Component {
  render() {
    return(
      <div className='RateRide'>
        <div className='request'>
          <div className='the-estimate-box'>
            <div className='car-type-div'>
              <div>
              <img src='https://www.lyft.com/images/cities/classic.6d006a8c.png' />
              </div>
              <div className='ride-type-section'>
              <p className='ride-type-title'>shyft</p>
              <p className='ride-type-desc'></p>
              </div>
            </div>
            <div className='eta-and-cost'>
              <div className='You-have-arrived'>
                You Have Arrived!
              </div>
            </div>

            <div className='Rate-Your-Driver-Box'>
              <div className='rate-your-driver-inner'>
                Rate Your Driver
                <div className='stars-container'>
                  <div class="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='request-shyft-btn btn'>Next</div>
        </div>
      </div>
    )
  }
}

export default RateRide;
