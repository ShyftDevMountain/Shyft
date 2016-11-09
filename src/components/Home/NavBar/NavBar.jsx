import React from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router'

import SideMenu from '../SideMenu/SideMenu.jsx'
import SideMenuBackDrop from '../SideMenuBackDrop/SideMenuBackDrop.jsx';
import Footer from '../Footer/Footer.jsx';
import LoginComp from '../../Login/LoginComp/LoginComp.jsx';

import {isloggedin} from '../../../services/dashboardService.js';

import './NavBar.css';


class NavBar extends React.Component {

    componentDidMount(){
        window.onscroll = function() {
          var explore = document.getElementById('explore');
          var logo = document.getElementById('mainlogo');
          var logo2 = document.getElementById('logo2');
          var navbarDrop = document.getElementById('navbar-drop');
          var rideLyft = document.getElementById('navbar-ride-lyftbtn')
          var signup = document.getElementById('navbar-signup');
          var signupLink = document.getElementById('signup-link');
          var navbarRight = document.getElementById('navbar-right');
          var carrot = document.getElementById('carrot');
          var cities = document.getElementById('cities');
          var help = document.getElementById('help');
          var ride = document.getElementById('ride');
          var navbarMobile = document.getElementById('navbarMobile');
          var navbarLogo = document.getElementById('navbarLogo');
          var navbarLogo2 = document.getElementById('navbarLogo2');
          var range = 80;
          var scrollTop = document.body.scrollTop;

          if(scrollTop > range){
              explore.classList.add('navbar-scroll-active');
              logo.classList.add('navbar-logo-hide');
              logo2.classList.add('navbar-logo-show');
              cities.classList.add('navbar-link-active');
              rideLyft.classList.add('navbar-ride-lyft-active');
              help.classList.add('navbar-link-active');
              ride.classList.add('navbar-link-active');
              navbarMobile.classList.add('navbar-mobile-active');
              navbarLogo.classList.add('navbar-mobile-logo-hide');
              navbarLogo2.classList.add('navbar-mobile-logo2-active');
          }
          else {
              explore.classList.remove('navbar-scroll-active');
              logo.classList.remove('navbar-logo-hide');
              logo2.classList.remove('navbar-logo-show');
              rideLyft.classList.remove('navbar-ride-lyft-active');
              carrot.classList.remove('carrot-active');
              cities.classList.remove('navbar-link-active');
              help.classList.remove('navbar-link-active');
              ride.classList.remove('navbar-link-active');
              navbarMobile.classList.remove('navbar-mobile-active');
              navbarLogo.classList.remove('navbar-mobile-logo-hide');
              navbarLogo2.classList.remove('navbar-mobile-logo2-active');
          }
        }
    }

    handleHover(){
        var explore = document.getElementById('explore');
        var logo = document.getElementById('mainlogo');
        var logo2 = document.getElementById('logo2');
        var navbarDrop = document.getElementById('navbar-drop');
        var rideLyft = document.getElementById('navbar-ride-lyftbtn')
        var signup = document.getElementById('navbar-signup');
        var signupLink = document.getElementById('signup-link');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');
        var cities = document.getElementById('cities');
        var help = document.getElementById('help');
        var ride = document.getElementById('ride');

        cities.classList.add('navbar-link-active');
        help.classList.add('navbar-link-active');
        ride.classList.add('navbar-link-active');
        carrot.classList.add('carrot-active');
        explore.classList.remove('navbar-container');
        explore.classList.add('navbar-active');
        rideLyft.classList.add('navbar-ride-lyft-active');
        signup.classList.add('navbar-signup-active');
        signupLink.classList.add('navbar-pink-link');
        navbarRight.classList.add('navbar-right-active');
        logo.classList.add('navbar-logo-hide');
        logo2.classList.add('navbar-logo-show');
        setTimeout(function(){
            navbarDrop.classList.add('navbar-hover-container-active');
        }, 10);
    }

    handleHoverLeave(){
        var explore = document.getElementById('explore');
        var logo = document.getElementById('mainlogo');
        var logo2 = document.getElementById('logo2');
        var navbarDrop = document.getElementById('navbar-drop');
        var rideLyft = document.getElementById('navbar-ride-lyftbtn')
        var signup = document.getElementById('navbar-signup');
        var signupLink = document.getElementById('signup-link');
        var navbarRight = document.getElementById('navbar-right');
        var carrot = document.getElementById('carrot');
        var cities = document.getElementById('cities');
        var help = document.getElementById('help');
        var ride = document.getElementById('ride');

        navbarDrop.classList.remove('navbar-hover-container-active');
        setTimeout(function(){
            explore.classList.add('navbar-container');
            explore.classList.remove('navbar-active');
            logo.classList.remove('navbar-logo-hide');
            logo2.classList.remove('navbar-logo-show');
            rideLyft.classList.remove('navbar-ride-lyft-active');
            signup.classList.remove('navbar-signup-active');
            signupLink.classList.remove('navbar-pink-link');
            navbarRight.classList.remove('navbar-right-active');
            carrot.classList.remove('carrot-active');
            cities.classList.remove('navbar-link-active');
            help.classList.remove('navbar-link-active');
            ride.classList.remove('navbar-link-active');
        }, 300);
    }

    constructor(props) {
      super(props);
      this.state = {
        showMenu: 'sidemenu',
        showBackDrop: 'SideMenuBackDrop',
        showLogin: false
      }
      this.hideMenu = this.hideMenu.bind(this);
      this.showMenu = this.showMenu.bind(this);
      this.loginClick = this.loginClick.bind(this);
      this.rideWithShyftClick = this.rideWithShyftClick.bind(this);
      this.handleLoginClose = this.handleLoginClose.bind(this);
      this.handleWindowClose = this.handleWindowClose.bind(this);
    }

    showMenu() {
      this.setState({
        showMenu: 'sidemenu active',
        showBackDrop: 'SideMenuBackDrop active'
      })
    }

    hideMenu() {
      this.setState({
        showMenu: 'sidemenu',
        showBackDrop: 'SideMenuBackDrop'
      })
    }

    loginClick() {
      var self = this
      isloggedin().then(function(res){
        if(res.data){
          return hashHistory.push('/userdashboard')
        }
        else {
          self.setState({
              showLogin: true
          })
        }
      })
    }

    rideWithShyftClick() {
      var self = this
      isloggedin().then(function(res){
        if(res.data){
          return hashHistory.push('/rides')
        }
        else {
          self.setState({
              showLogin: true
          })
        }
      })
    }

    handleLoginClose() {
        this.setState({
            showLogin: false
        })
    }

    handleWindowClose() {
        this.setState({
            showLogin: false
        })
    }


  render() {
    return (
    <div>


        <SideMenu showMenu={this.state.showMenu} hideMenu={this.hideMenu}/>
            <SideMenuBackDrop showMenu={this.state.showBackDrop} hideMenu={this.hideMenu}/>
            <div id="navbarMobile" className="navbar-mobile">
                <span className="glyphicon glyphicon-menu-hamburger" onClick={this.showMenu}></span>
                <Link to="/"><img id="navbarLogo" className="navbar-mobile-logo" src="img/LYFT_LOGO/SVG/white_logo.svg"/></Link>
                <Link to="/"><img id="navbarLogo2" className="navbar-mobile-logo2" src="img/LYFT_LOGO/SVG/lyft_pixel.svg"/></Link>
            </div>


        <div onMouseLeave={this.handleHoverLeave}>
            <div id="explore" className="navbar-container">
                <div className="navbar-left">
                    <div id="mainlogo" className="navbar-logo">
                        <Link to="/"><img src="./img/LYFT_LOGO/SVG/white_logo.svg"/></Link>
                    </div>
                    <div id="logo2" className="navbar-logo2">
                        <Link to="/"><img src="./img/LYFT_LOGO/SVG/lyft_pixel.svg"/></Link>
                    </div>

                    <ul className="navbar-list">
                        <li>
                            <Link to="/cities" id="cities">Cities</Link>
                        </li>
                        <li><Link to="/" id="help">Help</Link></li>
                        <li onMouseEnter={this.handleHover}>Explore<span id="carrot" className="carrot glyphicon glyphicon-menu-down"></span></li>
                    </ul>
                </div>
                <div id="navbar-right" className="navbar-right">
                    <div id="navbar-ride-lyftbtn" className="navbar-ride-lyft"><div id="ride" className="hover-link-none" onClick={this.rideWithShyftClick}>Ride with Shyft</div></div>

                    {this.state.showLogin ? <LoginComp handleLoginClose={this.handleLoginClose}/> : null}

                    <div className="navbar-login">
                        <div id="login" onClick={this.loginClick}>Login</div>
                    </div>
                </div>
                <div  id='navbar-signup' className="navbar-signup">
                    <Link to="/userdashboard" id="signup-link">Sign up</Link>
                </div>
            </div>

            <div id="navbar-drop" className="navbar-hover-container">
                <div className="navbar-hover-options">Enterprise</div>
                <div className="navbar-hover-options">Partnerships</div>
                <div className="navbar-hover-options">Ambassadors</div>
                <div className="navbar-hover-options border-hide">Blog</div>
            </div>
        </div>


        {this.props.children}
        <Footer/>

    </div>
    )
  }
}
export default NavBar;
