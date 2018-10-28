// XMLHttpRequest
let request = new XMLHttpRequest();
request.open('get', '../json/layers.json', true);
request.onload = function() {
    console.log(request.responseText);
}
request.send();
/* jQuery */
$(document).ready(() => {



}); /* End: jQuery */

/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.8714, lng: -99.3445 },
        zoom: 17
    });
}
