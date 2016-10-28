import React from 'react';

import './RidesInMinutes.css';

class RidesInMinutes extends React.Component {
  render () {
    return (
      <div className='container ridesInMinutes'>
        <section className="row intro">
          <div className='col-xs-12 text-center'>
            <h4>Rides In Minutes</h4>
            <p>Wherever you’re headed, count on Shyft for rides in minutes. The Shyft app matches you with local drivers at the tap of a button. Just request and go.</p>
          </div>
        </section>
        <section className="row works">
          <div className="col-xs-12">
            <h2 className="text-center">How Shyft Works</h2>
            <div className="row">
              <div className="text-center col-md-4 col-xs-12 steps">
                <div>
                  <h3>1. Request</h3>
                  <p>You’ve got options. Request Shyft, Shyft Plus, Shyft Premier, or Shyft Line.</p>
                </div>
                <img className="img-responsive align-center" src="/img/home/app-screen-request-ride.36f8573c.png" alt="Request"/>
              </div>
              <div className="text-center col-md-4 col-xs-12 steps">
                <div>
                  <h3>2. Ride</h3>
                  <p>Get picked up by the best. Our reliable drivers will get you where you need to go.</p>
                </div>
                <img className="img-responsive align-center" src="/img/home/app-screen-get-picked-up.c8b2e18d.png" alt="Ride"/>
              </div>
              <div className="text-center col-md-4 col-xs-12 steps">
                <div>
                <h3>3. Pay</h3>
                <p>When the ride ends, just pay and rate your driver through your phone.</p>
                </div>
                <img className="img-responsive align-center" src="/img/home/app-screen-get-there.72b451d1.png" alt="pay" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


export default RidesInMinutes;
