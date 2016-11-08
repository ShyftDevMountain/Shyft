import axios from 'axios';

export function createRide(obj) {
  axios.post('/request', obj);
}
