import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}



var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYIKfH_39mfCGDjXkZDW2cDKW-WfFbqpoy4TRln1TrJbgnEbBUFvMdGj-n0AVYqa-c_fOqqylRvweSMIBQaW2oDrLCdE8vCctjpXkVvhfoM-9l5ozOxMd_cCqCgjLWJqR0kYhWUT5TaLHvYcohTE0jFyGKThqsNOpvYhnGmAhVbo60SHtdWWDChcZDl9bvCKvTnXF7g-2JbhI3fJIOBlmIfC5znA=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
