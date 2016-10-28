import axios from 'axios';

export function getCities() {
  return axios.get('http://localhost:8000/cities')
  .then(res => res.data);
}
