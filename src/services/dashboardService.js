import axios from 'axios';

export function getCustomerInfo() {
  return axios.get('/customerinfo')
  .then(res => res.data);
}
