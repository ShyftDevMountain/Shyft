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
          showPickup: true,
          showRequest: false,
          showCancel: false,
          showStart: false,
          showRate: false,
          showPayment: false
          }
          this.changeToRequest = this.changeToRequest.bind(this);
          this.changeToCancel = this.changeToCancel.bind(this);
          this.changeToStart = this.changeToStart.bind(this);
          this.changeToRate = this.changeToRate.bind(this);
          this.changeToPayment = this.changeToPayment.bind(this);
        }

      changeToRequest(){
        this.setState({
          showPickup:false,
          showRequest:true
        })
      }

      changeToCancel() {
        this.setState({
          showRequest:false,
          showCancel: true
        })
      }

      changeToStart() {
        var self = this;
        setTimeout(function(){
        self.setState({
          showCancel:false,
          showStart: true
        })
      },
         8000)

      }

      changeToRate() {
        this.setState({
          showStart:false,
          showRate: true
        })
      }

      changeToPayment() {
        this.setState({
          showRate: false,
          showPayment: true
        })
      }

    render() {
     return (
       <div className="map">
           <div className='map-page' ref="mapCanvas">
            </div>


            {this.state.showPickup ? <SetPickup address={this.props.initialCenter.address} changeToRequest={this.changeToRequest} /> : null}
            {this.state.showRequest ? <Request address={this.props.initialCenter} changeToCancel={this.changeToCancel} /> : null}

            {this.state.showCancel ? <Cancel changeToStart={this.changeToStart} /> : null}
            {this.state.showStart ? <StartRide changeToRate={this.changeToRate} /> : null}
            {this.state.showRate ? <RateRide changeToPayment={this.changeToPayment} /> : null}
            {this.state.showPayment ? <Payment /> : null}




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

       this.props.initialCenter.initialCenter.lat,
       this.props.initialCenter.initialCenter.lng
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
