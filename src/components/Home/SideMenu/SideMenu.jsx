import React from 'react';
import {Link} from 'react-router';

import './SideMenu.css';

class SideMenu extends React.Component {
  handleClick() {
    this.props.hideMenu()
  }

  render(){

    return (
      <div className={this.props.showMenu}>
        <ul>
          <div id="logo" className="navbar-logo">
              <Link onClick={this.handleClick.bind(this)} to="/"><img src="./img/LYFT_LOGO/SVG/white_logo.svg"/></Link>
          </div>
          <li>
            <Link onClick={this.handleClick.bind(this)} to="/login">Sign Up</Link>
          </li>
          <li>
            <Link onClick={this.handleClick.bind(this)} to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={this.handleClick.bind(this)} to="/rides">Rides</Link>
          </li>
          <li>
            <Link onClick={this.handleClick.bind(this)} to="/cities">Cities</Link>
          </li>
          <li>
            <Link onClick={this.handleClick.bind(this)} to="/">Help</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SideMenu;
