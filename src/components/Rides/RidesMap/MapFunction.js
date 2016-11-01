




  export function initMap() {
     var map;
     map = new google.maps.Map(document.getElementById('map'), {
       zoom: 16,
       center: new google.maps.LatLng(-33.91722, 151.23064),
       mapTypeId: 'roadmap'
     });
   }
