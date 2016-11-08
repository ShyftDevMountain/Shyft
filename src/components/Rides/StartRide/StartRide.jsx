import React from 'react';
import {Link} from 'react-router';

import './StartRide.css';

import {getRideId} from '../Cancel/cancelFunctions.js';
import {cancelRide} from '../Cancel/cancelFunctions.js';
import {startRide} from './startFunctions.js';

class StartRide extends React.Component {
  constructor(props) {
    super(props);

    this.onClickConfirm = this.onClickConfirm.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onClickCancel(){
    getRideId().then(function(res){
      cancelRide(res.data[0].rideid);
    });
  }

  onClickConfirm(){
    var self = this;
    getRideId().then(function(res){
      var rideid = res.data[0].rideid;
      let startObj = {
        origindate: new Date().getTime()
      }
  
      startRide(rideid, startObj);
      self.props.changeToRate();

    });


  }


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
              <p className='ride-type-title'>Shyft</p>
              </div>
            </div>
            <div className='Your-lyft-is_ready_box'>
              <div className='Your_ride_is_ready_inner'>
                  Your ride has arrived!
              </div>

            </div>

          </div>
          <div className='confirm-Your-ride_button' onClick={this.onClickConfirm}>Confirm and Start Ride</div>
          <div className='request-shyft-btn btn' onClick={this.onClickCancel}><Link to='/'>Cancel</Link></div>
        </div>
      </div>
    )
  }
}

export default StartRide;
