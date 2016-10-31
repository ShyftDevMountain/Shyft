import axios from 'axios';

export function Fb() {
  return axios.get('/auth/facebook')
  .then(res => res.data);
}
