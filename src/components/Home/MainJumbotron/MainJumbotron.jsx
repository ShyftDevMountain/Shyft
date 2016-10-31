import React from 'react';
import {Link} from 'react-router';

import './MainJumbotron.css';

class MainJumbotron extends React.Component {
  render () {

    return (
        <div>
            <div className="MainJumbotron-container">
                <div className="MainJumbotron-title">Rides in Minutes</div>
                <div className="btn btn-primary MainJumbotron-btn">
                    <Link to="/userdashboard">Sign Up Now</Link>
                </div>
            </div>
            <div className="MainJumbotron-btm-banner">
                <p className="MainJumbotron-btm-banner-text">Take the wheel.</p>
                <span className="ride-with-lyft-btn"><Link to="/rideWithShyft">Ride With Lyft</Link></span>
            </div>
        </div>

    );
  }
};


export default MainJumbotron;
