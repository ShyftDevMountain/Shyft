import axios from 'axios';

export function getCustomerInfo() {
  return axios.get('/customerinfo')
  .then(res => res.data);
}



export function getCustomerRides() {
  return axios.get('/customerrides')
  .then(rides => {

    function getAddress(lat, lng) {
      return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat.toString() + ',' + lng.toString())
      .then(res => res.data.results[0].formatted_address)
    }

    rides.data.map(function(val, index, arr){
      val.originAddress = getAddress(val.originlat, val.originlong);
      val.destAddress = getAddress(val.destlat, val.destlong);

    })

    return rides.data

  });
}



export function getAddress(lat, long) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat.toString() + ',' + lng.toString())
  .then(res => res.data.results[0].formatted_address)
}

export function updateCustomerInfo(name, email, phone) {
  return axios.put('/customerinfo', {name: name, email: email, phone: phone})
  .then(res => res.data);
}
