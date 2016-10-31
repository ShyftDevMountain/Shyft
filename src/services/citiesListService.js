import axios from 'axios';

export function getCities() {
  return axios.get('/cities')
  .then(res => res.data);
}

export function getCityZip(lat, lng) {

  var results =  axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat.toString() + ',' + lng.toString())
  .then(function(res){
    var address = res.data.results[0].formatted_address;
    var zip = address.slice(address.length-10, address.length-5)
    return parseInt(zip)
  })

  return results;
}

export function postZip(zip) {
  return axios.post('/checkZip', { zip_code: zip })
  .then(res => res.data)
}
