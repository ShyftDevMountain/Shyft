import React from 'react';
import {Link} from 'react-router';

import './CityBottomBanner.css';


class CityBottomBanner extends React.Component {
  render () {
    return (
            <div style={{'backgroundImage': 'url("./img/cities/car-lyft.svg")', 'backgroundSize':'cover', 'backgroundRepeat':'no-repeat'}} className='banner main'>
              <div className="container border-t border-moonstone">
                  <div className='row '>
                    <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                        <div className='mb justify-center align-group-center text-xs-center'>
                          <h2 className='h2ForContent'>Make up to $35/hr driving with Shyft.</h2>
                          <a className="btn btn-primary btn-lg shrink-0"> Apply to Drive </a>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
    );
  }
};



export default CityBottomBanner;
