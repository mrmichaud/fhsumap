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
/* Toggle sidebar */
$('.nav-item').on('click', function() {
    $('.nav-item').css('color', 'black');
    $(".nav-item[data-label='" + $(this).data('label') + "']").css('color', 'white');
    if (window.innerWidth < 1250) $('.sidebar').animate({ width: "toggle" });
});


/* Get data from json file */

let sidebarContainer = document.getElementById("js-sidebar");
$("#d-hamburger").on('click', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8080/navbar/json/real.json');
    request.onload = function() {
        let jsonData = JSON.parse(request.responseText);
        renderHTML(jsonData);
    }
    request.send();
});

function renderHTML(data) {
    var htmlString = "",
        i;
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].building + "</p>";
    }
    sidebarContainer.insertAdjacentHTML('beforeend', htmlString);
}