import axios from 'axios';

export function isloggedin() {
  return axios.get('/isloggedin')

}

export function getCustomerInfo() {
  return axios.get('/customerinfo')
  .then(res => res.data);
}

export function getCustomerRides() {
  return axios.get('/customerrides')
  .then(rides => {
    let promises = [];
    rides.data.forEach(function(val, i , arr){
      promises.push(getAddress(val.originlat, val.originlong), getAddress(val.destlat, val.destlong))
    })
    function getAddress(lat, lng) {
      if (!lat || !lng) {return ''} else {
      return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat.toString() + ',' + lng.toString())
      .then(res => res.data.results[0].formatted_address)
    }
    }
    return Promise.all(promises).then(function(test){
      rides.data.forEach(function(val, i, arr){
        val.originAddress = test[i]
        val.destAddress = test[i + 1]
        if (!val.origindate) {
          val.origindate = 'No date available'
        } else {
          val.origindate = new Date(parseInt(val.origindate)).toString();
        }
        if (!val.destdate) {
          val.destdate = 'No date available'
        } else {
          val.destdate = new Date(parseInt(val.destdate)).toString();
        }
      })
      return rides.data;
    })
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
