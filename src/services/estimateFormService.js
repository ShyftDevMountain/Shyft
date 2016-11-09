import axios from 'axios';

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYI6xdH98dZGYCE5DFif3Am6VI8h1KIMHmhWRoxA1NenpOUF1v1Hea9oyudvzrYi8SKn7JuE657M5qWikbPpqYumH8_i1qldXEOo2Y6C04cASNVZkFFN-P_Gih3v1yaOsstsEIazsGsaRCmm28Ion9JLww_l70xejfSBzn9WcBKdJU49DgLk7_6u_TIaLF8DN9MEhXXSmceSrJM4tM2ufp5iH2JA=="'
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
