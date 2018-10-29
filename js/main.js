// Wrap everything in an immediately invoked function expression,
// so no global variables are introduced.
(function() {
    // Stores the cached partial HTML pages.
    // Keys correspond to fragment identifiers.
    // Values are the text content of each loaded partial HTML file.
    var partialsCache = {}
        // Fetches the file at the given path, then
        // calls the callback with the text content of the file.
    function fetchFile(path, callback) {
        // Create a new AJAX request for fetching the partial HTML file.
        var request = new XMLHttpRequest();

        // Call the callback with the content loaded from the file.
        request.onload = function() {
            callback(request.responseText);
        };
        // Fetch the partial HTML file for the given fragment id.
        request.open("GET", path);
        request.send(null);
    }

    // Gets the appropriate content for the given fragment identifier.
    function getContent(fragmentId, callback) {
        // If the page has been fetched before,
        if (partialsCache[fragmentId]) {
            callback(partialsCache[fragmentId]);
        } else {
            fetchFile("json/" + fragmentId + ".json", function(content) {
                // Store the fetched content in the cache.
                partialsCache[fragmentId] = content;
                // Pass the newly fetched content to the callback.
                callback(content);
            });

        }
    }
    // Sets the "active" class on the active navigation link.
    function setActiveLink(fragmentId) {
        var navbarDiv = document.getElementById("d-navbar"),
            links = navbarDiv.children,
            i, link, pageName;
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
    if (!location.hash) {

        // default to #home
        location.hash = "#tiger";
    }
    // Navigate once to the initial hash value.
    navigate();
    // Navigate whenever the fragment identifier value changes.
    $(window).on("hashchange", navigate);
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
