import React from 'react';
import {Link} from 'react-router';

import './Cancel.css';
import {getRideId} from './cancelFunctions.js';
import {cancelRide} from './cancelFunctions.js';

class Cancel extends React.Component {

  componentDidMount() {
    this.props.changeToStart();
  }

  onCancel() {
    getRideId().then(function(res){
      cancelRide(res.data[0].rideid);
    })
  }

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
        </div>
            <div className='cancel-shyft-btn btn' onClick={this.onCancel}><Link to='/'>Cancel Ride</Link></div>

        </div>
    )
  }
}

export default Cancel;
