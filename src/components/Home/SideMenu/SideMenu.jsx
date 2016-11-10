import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router'

import {isloggedin} from '../../../services/dashboardService.js';

import './SideMenu.css';

class SideMenu extends React.Component {

  constructor(props){
    super(props)
    this.loginClick = this.loginClick.bind(this);
    this.ridesClick = this.ridesClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick() {
    this.props.hideMenu()
  }

  loginClick() {
    isloggedin().then(function(res){
      if(res.data){
        return hashHistory.push('/userdashboard')
      }
      else {
        return hashHistory.push('/login')
      }
    })
    this.handleClick()
  }

  ridesClick() {
    isloggedin().then(function(res){
      if(res.data){
        return hashHistory.push('/rides')
      }
      else {
        return hashHistory.push('/login')
      }
    })
    this.handleClick()
  }

  logout() {
    logoutFb();
    this.handleClick();
  }

  render(){

    return (
      <div className={this.props.showMenu}>
        <ul>
          <div id="logo" className="navbar-logo">
              <Link onClick={this.handleClick.bind(this)} to="/"><img src="./img/LYFT_LOGO/SVG/white_logo.svg"/></Link>
          </div>
          <li>
            <div onClick={this.loginClick}>Sign Up</div>
          </li>
          <li>
            <div onClick={this.loginClick}>Login</div>
          </li>
          <li>
            <div onClick={this.loginClick}>Dashboard</div>
          </li>
          <li>
            <div onClick={this.ridesClick}>Rides</div>
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
