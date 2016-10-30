import axios from 'axios';

export function getCities() {
  return axios.get('/cities')
  .then(res => res.data);
}

export function getZip(lat, lng) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat.toString() + ',' + lng.toString())
  .then(res => res.data);
}
