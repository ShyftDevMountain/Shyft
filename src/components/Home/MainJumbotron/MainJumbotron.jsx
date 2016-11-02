import React from 'react';
import {Link} from 'react-router';

import './MainJumbotron.css';



class MainJumbotron extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      jumboBg: 'MainJumbotron-container'
    }
    this.changeBg = this.changeBg.bind(this)
  }

  changeBg() {

    var imgs = [1, 2, 3, 4, 5, 6, 7];
    var x = imgs[0];


    this.setState({
      jumboBg: 'MainJumbotron-container bg' + x
    })
  }

    componentDidMount() {
      this.changeBg()
    }


  render () {

    return (
        <div>
            <div className={this.state.jumboBg}>
                <div className="MainJumbotron-title">Rides in Minutes</div>
                <div className="btn btn-primary MainJumbotron-btn">
                    <Link to="/userdashboard">Sign Up Now</Link>
                </div>
            </div>
            <div className="MainJumbotron-btm-banner">
                <p className="MainJumbotron-btm-banner-text">Take the wheel.</p>
                <span className="ride-with-lyft-btn"><Link to="/rides">Ride With Shyft</Link></span>
            </div>
        </div>

    );
  }
};


export default MainJumbotron;
