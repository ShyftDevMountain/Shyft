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
          <a className='app-store' href='#'></a>
        </div>
        </div>
      </div>
    )
  }
}









export default Footer;
