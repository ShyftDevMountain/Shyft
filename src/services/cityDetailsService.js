import axios from 'axios';

export function getOneCity(cityId) {
  return axios.get('/cityDetails/' + cityId.toString())
  .then(res => res.data);
}
