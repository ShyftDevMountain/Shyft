import axios from 'axios';

export function startRide(rideid, obj) {
  axios({
  method: 'post',
  url: '/arrive/' + rideid.toString(),
  data: {
    origindate: obj.origindate
  }
});
}
