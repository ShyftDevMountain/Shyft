import axios from 'axios';

export function rateRide(obj) {
  return axios.put('/complete/' + obj.rideid, obj);
}
