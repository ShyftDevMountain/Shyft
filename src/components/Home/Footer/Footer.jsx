import React from 'react';

import './Footer.css';


class Footer extends React.Component {
  render () {
    return (
      <div className='container-fluid footer'>
        <div className='row justify-center'>
          <div className='col-xs-12 xs-col'>
            <div className='row justify-center justify-between-md'>
              <div className='sitemap col-lg-4 lg-col col-md-6 med-6-col col-xs-12 xs-col'>
                <div className='footer-links text-xs-center text-sm-left flex-sm justify-between'>
                  <div>
                    <ul>
                      <li className='footer-title'>Company</li>
                      <li><a href='#'>Press</a></li>
                      <li><a href='#'>Blog</a></li>
                      <li><a href='#'>Careers</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='footer-title'>Ride</li>
                      <li><a href='#'>Drive</a></li>
                      <li><a href='#'>Cities</a></li>
                      <li><a href='#'>Help</a></li>
                      <li><a href='#'>Safety</a></li>
                      <li><a href='#'>Log In</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='footer-title'>Explore</li>
                      <li><a href='#'>Enterprise</a></li>
                      <li><a href='#'>Partnerships</a></li>
                      <li><a href='#'>Shyft For Good</a></li>
                      <li><a href='#'>Ambassadors</a></li>
                      <li><a href='#'>Developers</a></li>
                      <li><a href='#'>Shyft Promo Code</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-2 medium-col col-xs-12 xs-col text-xs-center text-md-right x footer-buttons'>
                <ul>
                  <li>
                    <button className='btn footer-sign-up-button'>Sign Up Now</button>
                  </li>
                  <li>
                      <a className='footer-store' href='apple.com'><img src="../../img/home/apple-store.svg"/></a>
                  </li>
                  <li>
                      <a className='footer-store' href='apple.com'><img src="../../img/home/google-play.png"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='social-links justify-center text-xs-center'>
          <ul className='text-xs-center col-xs-12 xs-col list-inline x'>
            <li>
              <a href='#'><img className='logo-circle list-inline-item' src='https://www.cvshealth.com/sites/default/themes/cvs/img/social/twitter.png' /></a>
            </li>
            <li>
              <a href='#'><img className='logo-circle list-inline-item' src='https://www.cvshealth.com/sites/default/themes/cvs/img/social/facebook.png' /></a>
            </li>
            <li>
              <a href='#'><img className='logo-circle list-inline item' src='http://s32.postimg.org/8tlz8ffd1/9ab28b48b857e9b13a3e9555015e0508005eae9a_origina.png' /></a>
            </li>
          </ul>
          <ul className='border-t list-inline'>
            <li className='list-inline-item'>&copy; 2016 Shyft, Inc.</li>
            <li className='list-inline-item'><a href='#'>Terms</a></li>
            <li className='list-inline-item'><a href='#'>Privacy</a></li>
          </ul>
        </div>
        {this.props.children}
    </div>
    )
  }
}



export default Footer;
