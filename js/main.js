/* jQuery */
$(document).ready(() => {

    let jsonDataContainer = document.getElementById("js-sidebar");

    $('.js-img').on("click",()=>{
        // XMLHttpRequest
        let request = new XMLHttpRequest();
        request.open('get', 'http://localhost:8080/navbar/json/layers.json', true);
        request.onload = function() {
            var data = JSON.parse(request.responseText);
            // console.log(data[0]);
            renderHTML(data);
        };
        request.send();
    });

    function renderHTML(data) {
        let jsonData = "", i;
        for(i = 0; i < data.length; i++ ) {
            jsonData += "<p>" + data[i].city + " is great.</p>"
        }
        jsonDataContainer.insertAdjacentHTML('beforeend', jsonData);
    }



}); /* End: jQuery */

/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.8714, lng: -99.3445 },
        zoom: 17
    });
}
