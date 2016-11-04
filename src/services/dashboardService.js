import axios from 'axios';

export function getCustomerInfo() {
  return axios.get('/customerinfo')
  .then(res => res.data);
}

export function getCustomerRides() {
  return axios.get('/customerrides')
  .then(res => res.data);
}

export function updateCustomerInfo(name, email, phone) {
  return axios.put('/customerinfo', {name: name, email: email, phone: phone})
  .then(res => res.data);
}
