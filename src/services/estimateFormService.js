import axios from 'axios';

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYJQro2Oe6BvgtYPSR33jzh4zChU3rTZOzXohv_Db5KuN4y4CK5AN1uYloS2tpmNf_kJ52Nm41XbkOm46Ac-nlThtOH2L9JBCN2ztK939P8qIX36VoR9M_EQPrU9bVZ5GtiiCCdBRyNIZlalnUFugeHD5nwIJ2bOuD5EmmQ64gPoJPmc5DLI0Jk3ikWKUwREPo2PQMN6Nym4R3F6soP4lPes_rUQ=="'
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
