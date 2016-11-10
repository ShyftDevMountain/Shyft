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
          console.log(i);

        return (
          <div key={i} className='rideswrap'>
              <div className="rides-desc-full"><span className="rides-desc">Start: </span> {val.destAddress}</div>

              <div className="rides-desc-full"><span className="rides-desc">Time: </span>{val.origindate}</div>
              <div className="rides-desc-full"><span className="rides-desc">Finish: </span>{val.originAddress}</div>
              <div className="rides-desc-full"><span className="rides-desc">Time: </span>{val.destdate}</div>
              <div className="rides-desc-full"><span className="rides-desc">Driver: </span>{val.driver_id}</div>
              <div className="rides-desc-full"><span className="rides-desc">Rating: </span>{val.rating}</div>
              <div>

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

        <div className='customerrides-tablebody'>
          {this.state.rides}
        </div>
      </div>
    )
  }
};

export default CustomerRides;
