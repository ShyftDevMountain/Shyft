import axios from 'axios';

export function startRide(rideid, obj) {
  return axios({
  method: 'put',
  url: '/arrive/' + rideid.toString(),
  data: obj
});
}
