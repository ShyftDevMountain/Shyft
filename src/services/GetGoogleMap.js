import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}



var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYHPmP66A0sHFCGCiRoxlijFg22aKgFAGwm4baFo1v7zOiF_PiYaa1JDrJHyDf50UlSmDAG1XbqhiUQCgqhH73ndpgP8azh-jz9Nlge4Rds3PcVFOm5h9DlbhFNNOREurrU21CykEdSKEtRhO5Ure2tLZA4V9ODgqZzUVFrkykO0EV7Lfrewh54Yo7HAInITBDfV6WFbkW42gm6FfWqSToWz-djA=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
