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

  componentWillMount() {

    getCustomerRides().then(rides => {

      var theRides = rides.map(function(val, i, arr){
        console.log(val);

        return (
          <div key={i} className='rideswrap'>
            <div  className='rideslist'>
              <div>Departure: {val.origindate}</div>
              <div>Arrival: {val.destdate}</div>
              <div>Rating: {val.rating}</div>
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

      this.setState({
        rides: theRides
      })
    })
  }

  render() {
    return (
      <div className='customerrides'>
          {this.state.rides}
      </div>
    )
  }

};

export default CustomerRides;
