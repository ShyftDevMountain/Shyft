import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYJQro2Oe6BvgtYPSR33jzh4zChU3rTZOzXohv_Db5KuN4y4CK5AN1uYloS2tpmNf_kJ52Nm41XbkOm46Ac-nlThtOH2L9JBCN2ztK939P8qIX36VoR9M_EQPrU9bVZ5GtiiCCdBRyNIZlalnUFugeHD5nwIJ2bOuD5EmmQ64gPoJPmc5DLI0Jk3ikWKUwREPo2PQMN6Nym4R3F6soP4lPes_rUQ=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
