/*  */

(function() {
    /* 
        // Gets the appropriate content for the given fragment identifier.
        function getContent(callback) {

            // Create a new AJAX request for fetching the partial HTML file.
            var request = new XMLHttpRequest();

            // Call the callback with the content loaded from the file.
            request.onload = function() {
                callback(request.responseText);
            };

            // Fetch the partial HTML file for the given fragment id.
            request.open("GET", "nav-content/hamburger.html");
            request.send(null);
        }

        // Updates dynamic content based on the fragment identifier.
        function navigate() {

            // Get a reference to the "content" div.
            var contentSidebar = document.getElementById("js-sidebar");



            // Set the "content" div innerHTML based on the fragment identifier.
            getContent(function(js - sidebar) {
                contentSidebar.innerHTML = js - sidebar;
            });


        }

        // Navigate once to the initial fragment identifier.
        navigate(); */
    let sidebarContainer = document.getElementById('js-sidebar');
    $('#d-hamburger').on('click', () => {

        let request = new XMLHttpRequest();
        request.open('GET', 'nav-content/hamburger.html', true);
        request.onload = function() {
            //console.log(request.responseText);
            $('#js-sidebar').innerHTML = request.responseText;
            //sidebarContainer.innerHTML = request.responseText;
        };
        request.send();
    });

    $('#d-layers').on('click', () => {

        let request = new XMLHttpRequest();
        request.open('GET', 'json/real.json', true);
        request.onload = function() {
            //console.log(request.responseText);
            $('#js-sidebar').innerHTML = JSON.parse(request.responseText);

            //sidebarContainer.innerHTML = request.responseText;
        };
        request.send();
    });



}());

















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