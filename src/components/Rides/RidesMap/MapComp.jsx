import React from 'react';
import ReactDOM from 'react-dom';
import SetPickup from '../SetPickup/SetPickup.jsx';
import Request from '../Request/Request.jsx';
import Cancel from '../Cancel/Cancel.jsx';
import StartRide from '../StartRide/StartRide.jsx';
import RateRide from '../RateRide/RateRide.jsx';
import Payment from '../Payment/Payment.jsx';


import './MapComp.css';
import {getNearbyDrivers} from '../../../services/GetGoogleMap.js';
import {getLocation} from '../../../services/GetGoogleMap.js';



class MapComp extends React.Component {
    constructor(props) {
      super(props);
        this.state = {

          }

        }



    render() {
     return (
       <div className="map">
           <div className='map-page' ref="mapCanvas">
            </div>

            <RateRide />


        </div>)

   }



   componentDidUpdate() {
      this.map = this.createMap();
      this.createArray(this.props.nearbyDrivers);
      this.createCurrentLocationMarker();
   }

  createArray(arr) {
    var drivers = arr.map(function(val, i){

          return {
           position: new google.maps.LatLng(val.lat, val.lng),
           type:'car'
          }
    })
    for (var i = 0; i <drivers.length; i++) {
          this.createMarker(drivers[i])
    }

  }



   createMap() {
     let mapOptions = {
       zoom: 12,
       center: this.mapCenter(),
       scrollwheel:false
          }
     return new google.maps.Map(this.refs.mapCanvas, mapOptions)
   }


   mapCenter() {
     return new google.maps.LatLng(

       this.props.initialCenter.lat,
       this.props.initialCenter.lng
     )
   }

   createMarker(feature) {
     var image = {
  url: '../../../img/cities/car-marker.png',
  size: new google.maps.Size(150, 170),
  scaledSize: new google.maps.Size(25, 25)
}
     var icons = {
       car: {
         icon: image
       }
     }
     return new google.maps.Marker({
     position: feature.position,
     icon: icons[feature.type].icon,
     map: this.map
   })

    }
    createCurrentLocationMarker() {
      return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })

     }

}



export default MapComp;
