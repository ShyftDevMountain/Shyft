import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}



var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYIkJZFkYcTlg_WTkBIyM6716T52HNY21Nsvno7t9wLPCZuLygnTbJhvCcvjq0wW3vj8nUPlUzwCkIoZH1qte9_xJ8JCOD2uJ0vJeVDQObGWtqgM7uJPjPFkwRKxh1HXw0bUdcHehzWPJ54LP_bMxGITPT7KQQs_7t1vskQTLCb_ITqYp5iV4aMRU7Fc3V0Cx7X7-PkKk_cY7arzZP34ihCcDWTw=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
