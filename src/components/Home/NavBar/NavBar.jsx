import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
        <div>
            <div className="navbar-mobile">
                <span className="glyphicon glyphicon-menu-hamburger"></span>
                <img src="./src/img/LYFT_LOGO/SVG/white_logo.svg"/>
            </div>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-logo">
                        <img src="./src/img/LYFT_LOGO/SVG/white_logo.svg"/>
                    </div>
                    <ul className="navbar-list">
                        <li>Cities</li>
                        <li>Help</li>
                        <li>Expolore<span className="carrot glyphicon glyphicon-menu-down"></span></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="navbar-ride-lyft">Ride with Lyft</div>
                    <div className="navbar-login">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default NavBar;
