import React from 'react';
import {render} from 'react-dom';

import './CustomerRides.css';
import '../UserDashboardComp/UserDashboardComp.css';


import {getCustomerRides} from '../../../services/dashboardService.js';
import {getAddress} from '../../../services/dashboardService.js';

class CustomerRides extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    var self = this;
    var testing = getCustomerRides().then(function(rides){
      var theRides = rides.map(function(val, i, arr){
        return (
          <div key={i} className='rideswrap'>
              <div>{val.destAddress}</div>
              
              <div >{val.origindate}</div>
              <div>{val.originAddress}</div>
              <div>{val.destdate}</div>
              <div>{val.driver_id}</div>
              <div>{val.rating}</div>
              <div>
                <span className="userdash-user-comments">
                    <div className="userdash-icon-box">
                        <i className="material-icons userdash-icons">subject</i>
                    </div>
                    <textarea className="userdash-textarea" placeholder="Comments"></textarea>
                </span>
              </div>
          </div>
        )
      })
      self.setState({
        rides: theRides
      })
    })
  }

  render() {
    return (
      <div className='customerrides'>
        <div className='customerrides-tablehead'>
          <div>Start:</div>
          <div></div>
          <div>Finish:</div>
          <div></div>
          <div>Driver:</div>
          <div>Rating:</div>
          <div>Comments:</div>
        </div>
        <div className='customerrides-tablebody'>
          {this.state.rides}
        </div>
      </div>
    )
  }
};

export default CustomerRides;
