import axios from 'axios';

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYGNhPJJQHxYMYhr029HqohlQ1rKwvu5cUe8E3kKkHIOvP5l9TxSiMaCtKakuw3pKfCiKFEI0gOZbwp43HytMCFi3m7G4yVv7DASmjQLU_V--AnBNK4fSXNYBtL_8yKx4NLBoErsYMP7sCB1n7eVSamU5VBswoBIAglZ9wei5V38cf55KUaP0YMGCnyrKy4J0x8jHMhCaAQt8kDdfI9GY7bzffxg=="'
  }
}

export function getLyftEstimate(pickupLat, pickupLng, destLat, destLng) {
  return axios.get('https://api.lyft.com/v1/cost?start_lat='+ pickupLat.toString() +'&start_lng='+ pickupLng.toString() +'&end_lat='+ destLat.toString() +'&end_lng='+ destLng.toString(), lyftToken)
  .then(function (res){
    var lyftPlusPrice = Math.floor((res.data.cost_estimates[0].estimated_cost_cents_min + 400)/100);
    var lyftPrice = Math.floor((res.data.cost_estimates[1].estimated_cost_cents_min + 400)/100);
    return [lyftPlusPrice, lyftPrice];
  })

}
