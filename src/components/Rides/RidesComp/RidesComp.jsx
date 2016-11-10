import React from 'react';
import './RidesComp.css';


import {getLocation} from '../../../services/GetGoogleMap.js';
import {getNearbyDrivers} from '../../../services/GetGoogleMap.js';
import MapComp from '../RidesMap/MapComp.jsx'
import {getPickup} from '../SetPickup/pickupFunctions.js';




class RidesComp extends React.Component{
constructor(props){
  super(props);
  this.state = {
    nearbyDrivers: []
  }
}
componentDidMount() {
  var self = this;
getLocation().then(function(res){
  getPickup(res.data.location).then(function(resp){
    var address = resp.data.results[0].formatted_address;

  getNearbyDrivers(res.data.location).then(function(response){
    if(response.data.nearby_drivers.length >= 1) {
    self.setState({
      initialCenter: {
        lat: res.data.location.lat,
        lng: res.data.location.lng
      },
      address: address.substring(0, address.length - 15),

      nearbyDrivers: response.data.nearby_drivers[0].drivers.map(function(value){
        return value.locations[0]
      })
      })


    }

else {
  self.setState({
    initialCenter: {
      lat: res.data.location.lat,
      lng: res.data.location.lng
    },
    address: address.substring(0, address.length - 15)
})
}
})

})


})
}


    render(){
        return (
            <div>
                <MapComp initialCenter={this.state} nearbyDrivers={this.state.nearbyDrivers} />


            </div>
        );
    }
};

export default RidesComp;
