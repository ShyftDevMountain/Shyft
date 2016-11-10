import axios from 'axios';

export function getRideId(){
  return axios.get('/rideid');
}

export function cancelRide(rideid) {
  return axios.put('/cancel/' + rideid.toString());

}
