import axios from 'axios';

export function getLocation() {
  return axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDrzX2pFc5mTwnwwA2cqXKo2nLVV2Zkq5I')

}



var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYG6e0ofqwWbOOjz6z1wAsnm809QjRZKziHvLlilzJ5U82hSGRdeBhZirSgc9prOkXID3IV_2cVbZ0OxUPy_wdFYoEwRroPYG6gKBEPCeJGOsErokJ3dFZhfsnHyZuDkvVNKSlkJUTwVKUZBQ9UwZAmGv2O8Uh1yT2qHLuK5z5-ZRrNvhbnk1t25SfuQHS85aoIpOGxMN4OjfbM5A1IaWsTBTN6Q=="'
  }
}

export function getNearbyDrivers(cord) {
  return axios.get('https://api.lyft.com/v1/drivers?lat='+ cord.lat.toString() +'&lng='+ cord.lng.toString(), lyftToken)

}
