import React from 'react';
import {Link} from 'react-router';

import './MainJumbotron.css';
import BackgroundComponent from '../BackgroundComponent/BackgroundComponent.jsx'



class MainJumbotron extends React.Component {



  render () {

    return (
        <div>

            <div className={this.state.jumboBg}>
                <div className="MainJumbotron-title">Rides in Minutes</div>
                <div className="btn btn-primary MainJumbotron-btn">
                    <Link to="/login">Sign Up Now</Link>
                </div>
            </div>

            <BackgroundComponent />

            <div className="MainJumbotron-btm-banner">
                <p className="MainJumbotron-btm-banner-text">Take the wheel.</p>
                <span className="ride-with-lyft-btn"><Link to="/rides">Ride With Shyft</Link></span>
            </div>
        </div>

    );
  }
};


export default MainJumbotron;
