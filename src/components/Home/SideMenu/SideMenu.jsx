import React from 'react';

import './SideMenu.css';

class SideMenu extends React.Component {

  render(){

    return (
      <div className={this.props.showMenu}>
        <ul>
          <li>Sign Up</li>
          <li>Log In</li>
          <li>Ride</li>
          <li>Cities</li>
          <li>Help</li>
        </ul>
      </div>
    )
  }
}

export default SideMenu;
