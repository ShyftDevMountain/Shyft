import React from 'react';
import SideMenu from '../SideMenu/SideMenu.jsx'
import SideMenuBackDrop from '../SideMenuBackDrop/SideMenuBackDrop.jsx'
import './NavBar.css';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: 'sidemenu',
      showBackDrop: 'SideMenuBackDrop'
    }
    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu() {
    this.setState({
      showMenu: 'sidemenu active',
      showBackDrop: 'SideMenuBackDrop active'
    })
  }

  hideMenu() {
    console.log('testing');
    this.setState({
      showMenu: 'sidemenu',
      showBackDrop: 'SideMenuBackDrop'
    })
  }

  render() {
    return (
        <div>
            <SideMenu showMenu={this.state.showMenu}/>
            <SideMenuBackDrop showMenu={this.state.showBackDrop} hideMenu={this.hideMenu}/>
            <div className="navbar-mobile">
                <span className="glyphicon glyphicon-menu-hamburger" onClick={this.showMenu}></span>
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
