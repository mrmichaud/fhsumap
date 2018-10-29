/* jQuery */
$(document).ready(() => {
    // Gets the appropriate content for the given fragment identifier.
    function getContent(fragmentId, callback) {
        // Content for each navigation link.
        var partials = {
            layers: "This is the Home page. Welcome to my site.",
            building: "This is the About page.",
            parking: "This is the Contact page."
        };

        // Look up the partial for the given fragment id.
        callback(partials[fragmentId]);
    }
    // Sets the "active" class on the active navigation link.
    function setActiveLink(fragmentId) {
        var navbarDiv = document.getElementById("d-navbar"),
            links = navbarDiv.children,
            i, link, pageName;
        console.log(links);
        for (i = 0; i < links.length; i++) {
            link = links[i];

            pageName = link.getAttribute("href").substr(1);
            if (pageName === fragmentId) {
                link.setAttribute("class", "filter");
            } else {
                link.removeAttribute("class");
            }
        }
    }

    function navigate() {
        // Get a reference to the "content" div.
        var contentSidebar = document.getElementById("js-sidebar");

        // Isolate the fragment identifier using substr.
        // This gets rid of the "#" character.
        fragmentId = location.hash.substr(1);
        getContent(fragmentId, function(content) {
                contentSidebar.innerHTML = content;
            })
            // Toggle the "active" class on the link currently navigated to.
        setActiveLink(fragmentId);
    }
    /*    if (!location.hash) {

            // default to #home
            location.hash = "#tiger";
        }*/
    // Navigate once to the initial hash value.
    navigate();
    // Navigate whenever the fragment identifier value changes.
    $(window).on("hashchange", navigate);
    /*    let jsonDataContainer = document.getElementById("js-sidebar");

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
    */


}); /* End: jQuery */

/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.8714,
            lng: -99.3445
        },
        zoom: 17
    });
}
