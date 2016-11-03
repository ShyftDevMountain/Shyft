import React from 'react';
import './RidesComp.css';


import {getLocation} from '../../../services/GetGoogleMap.js';
import {getNearbyDrivers} from '../../../services/GetGoogleMap.js';
import MapComp from '../RidesMap/MapComp.jsx'




class RidesComp extends React.Component{
constructor(props){
  super(props);
  this.state = {

  }
}
componentDidMount() {
  var self = this;
getLocation().then(function(res){
  getNearbyDrivers(res.data.location).then(function(response){
    self.setState({
      initialCenter: {
        lat: res.data.location.lat,
        lng: res.data.location.lng
      },

      nearbyDrivers: response.data.nearby_drivers[0].drivers.map(function(value){
        return value.locations[0]
      })
      })


    })
  })


}


    render(){
        return (
            <div>
                <MapComp initialCenter={this.state.initialCenter} nearbyDrivers={this.state.nearbyDrivers} />


            </div>
        );
    }
};

export default RidesComp;
