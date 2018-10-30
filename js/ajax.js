let sidebarContainer = document.getElementById("js-sidebar");

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8080/navbar/json/real.json', true);
request.onload = function() {

    let data = JSON.parse(request.responseText);
    console.log(data[0]);
};
request.send();




















/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.8714,
            lng: -99.3445
        },
        zoom: 18
    });
}