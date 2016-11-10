import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYI6xdH98dZGYCE5DFif3Am6VI8h1KIMHmhWRoxA1NenpOUF1v1Hea9oyudvzrYi8SKn7JuE657M5qWikbPpqYumH8_i1qldXEOo2Y6C04cASNVZkFFN-P_Gih3v1yaOsstsEIazsGsaRCmm28Ion9JLww_l70xejfSBzn9WcBKdJU49DgLk7_6u_TIaLF8DN9MEhXXSmceSrJM4tM2ufp5iH2JA=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
