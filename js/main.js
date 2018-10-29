// Wrap everything in an immediately invoked function expression,
// so no global variables are introduced.
(function() {
    // Stores the cached partial HTML pages.
    // Keys correspond to fragment identifiers.
    // Values are the text content of each loaded partial HTML file.
    var partialsCache = {}

    // Gets the appropriate content for the given fragment identifier.
    // This function implements a simple cache.
    function getContent(fragmentId, callback) {
        // If the page has been fetched before,
        if (partialsCache[fragmentId]) {
            callback(partialsCache[fragmentId]);
        } else {
            $.get("json/" + fragmentId + ".json", function(content) {
                // Store the fetched content in the cache.
                partialsCache[fragmentId] = content;
                // Pass the newly fetched content to the callback.
                callback(content);
            });
        }
    }

    // Sets the "filter" class on the active navigation link.
    function setActiveLink(fragmentId) {
        $("#d-navbar a").each(function(i, linkElement) {
            let link = $(linkElement),
                pageName = link.attr("href").substr(1);
            if (pageName === fragmentId) {
                link.attr("class", "filter");
            } else {
                link.removeAttr("class");
            }
        });
    }

    function setActiveLink(fragmentId) {
        $("#m-b-navbar a").each(function(i, linkElement) {
            let link = $(linkElement),
                pageName = link.attr("href").substr(1);
            if (pageName === fragmentId) {
                link.attr("class", "filter");
                $('#js-sidebar').addClass("sidebar-open");
            } else {
                link.removeAttr("class");
                $('#js-sidebar').removeClass("sidebar-open");
            }
        });
    }

    function navigate() {

        // Isolate the fragment identifier using substr.
        // This gets rid of the "#" character.
        let fragmentId = location.hash.substr(1);
        getContent(fragmentId, function(content) {
            $('#js-sidebar').html(content);
        })

        // Toggle the "active" class on the link currently navigated to.
        setActiveLink(fragmentId);
    }

    // If no fragment identifier is provided,
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
