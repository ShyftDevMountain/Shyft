import axios from 'axios';

var lyftToken = {
  headers: { 'Authorization' : 'Bearer "gAAAAABYJejk2U-ifm6ONE3MZuQwk_Czom-pmRe3X9Dn3yRf-9o_KBspVAVdrHPDnWFnTy0pTcK3ZKw4UlD8ubfmQevKWopOXnNX-VB8UWQr4G2IF8mSeXIrNds92DWuGIHanUSAogz_W44lRv0XyYDuby9P2AFoaBfd4Yy-0ggGthBTg0-iDdyyuyK56jNO_lVODk_0KQMUr-jALOgZZJoUVPi8KUEQEQ=="'
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
