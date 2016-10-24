import React from 'react';

import './Footer.css';


class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-links'>
          <ul>
            <li className='footer-title'>Company</li>
            <li><a href='#'>Press</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Careers</a></li>
          </ul>
          <ul>
            <li className='footer-title'>Ride</li>
            <li><a href='#'>Drive</a></li>
            <li><a href='#'>Cities</a></li>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>Safety</a></li>
            <li><a href='#'>Log In</a></li>
          </ul>
          <ul>
            <li className='footer-title'>Explore</li>
            <li><a href='#'>Enterprise</a></li>
            <li><a href='#'>Partnerships</a></li>
            <li><a href='#'>Lyft For Good</a></li>
            <li><a href='#'>Ambassadors</a></li>
            <li><a href='#'>Developers</a></li>
            <li><a href='#'>Lyft Promo Code</a></li>
          </ul>
        </div>
        <div className='footer-buttons'>
          <button className='btn footer-sign-up-button'>Sign Up Now</button>
          <a className='footer-store' href='apple.com'><img src="./src/img/home/apple-store.svg"/></a>
          <a className='footer-store' href='apple.com'><img src="./src/img/home/google-play.png"/></a>
        </div>
        </div>
        <div className='footer-icons'>
          <ul>
            <li>
              <a href='#'><img className='logo-circle' src='https://www.cvshealth.com/sites/default/themes/cvs/img/social/twitter.png' /></a>
            </li>
            <li>
              <a href='#'><img className='logo-circle' src='https://www.cvshealth.com/sites/default/themes/cvs/img/social/facebook.png' /></a>
            </li>
            <li>
              <a href='#'><img className='logo-circle' src='http://s32.postimg.org/8tlz8ffd1/9ab28b48b857e9b13a3e9555015e0508005eae9a_origina.png' /></a>
            </li>
          </ul>
        </div>
        <div className='footer-creds'>
          <p>&copy; 2016 Shyft, Inc.</p>
          <p><a href='#'>Terms</a></p>
          <p><a href='#'>Privacy</a></p>
        </div>
      </div>
    )
  }
}









export default Footer;
