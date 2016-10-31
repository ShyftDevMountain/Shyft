import axios from 'axios';

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYFnw4eMlKCDPaBWTC1EiJvcWMTDRLtrceBEjtL4YNk543OaX-3h5uz0RwaTnJVdJ92YQETRbZcycKl0owl3SRD14CRAuE1okG06p6chAXksNmdHxgkOIIt4k1KLsN-Tn3R5LNGTBZIkQiPvDblg7HsLhwTDkpdFckFjBM1gMkgB1s6wq-gmtKNXOI0xBoxElKElclSoHmy1x-m94cZK2mCGXb_g=="'
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
