import axios from 'axios';


export function getPickup(test) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + test.lat.toString() + ',' + test.lng.toString() + '&key=AIzaSyD1-p2LRZozs7Y-5-pYvh8AMlVSHgeFa9E');
}
