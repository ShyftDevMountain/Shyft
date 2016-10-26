import React from 'react';
// import Slider from 'react-slick';
import './MainJumbotron.css';

class MainJumbotron extends React.Component {
  render () {

    return (
        <div>
            <div className="MainJumbotron-container">
                <div className="MainJumbotron-title">Rides in Minutes</div>
                <div className="btn btn-primary MainJumbotron-btn">
                    Sign Up Now
                </div>
            </div>
            <div className="MainJumbotron-btm-banner">
                <p className="MainJumbotron-btm-banner-text">Take the wheel.</p>
                <span className="ride-with-lyft-btn">Ride With Lyft</span>
            </div>
        </div>

    );
  }
};


export default MainJumbotron;
