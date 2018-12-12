var xhttp = new XMLHttpRequest();
var schoolBuildingArray = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        // console.log(response.buildings)
        var buildings = response.buildings;
        for (var i = 0; i < buildings.length; i++) {
            schoolBuildingArray.push(buildings[i]);
        }
        //console.log(schoolBuildingArray);
    }
};
xhttp.open("GET", "json_fhsuDataTypes-updated.json", true);
xhttp.send();

function checkBuilding(myLatlng) {

    var schoolBuilding = new google.maps.Polygon({});
    var inbuilding = false;
    var building = -1;
    for (var i = 0; i < schoolBuildingArray.length; i++) {
        var schoolBuilding = new google.maps.Polygon({
            paths: schoolBuildingArray[i].buildingOutline
        });
        if (google.maps.geometry.poly.containsLocation(myLatlng, schoolBuilding)) {

            if (showBuildingInfo == 1 && modalShown == false) {
                $('#exampleModal').modal('show');
                modalShown = true;
            }
            console.log(schoolBuildingArray[i].buildingName);

            /* Current Location show in Sidebar */
            $('#current_building_name').text(schoolBuildingArray[i].buildingName);
            $('#current_building_info').text(schoolBuildingArray[i].infoBoxString);


            if (whetherLocationChanged != schoolBuildingArray[i].buildingName) {
                whetherLocationChanged = schoolBuildingArray[i].buildingName;
                /* Current location popup */
                $('.currentLocationTitle').text(whetherLocationChanged);
                $('.currentLocationContent').text(schoolBuildingArray[i].infoBoxString);
            }
            $('#check-click').on("click", function() {
                showBuildingInfo = 0;
                $('#exampleModal').modal('hide');
            });
            /* Current location popup */
            //$('.currentLocationTitle').text(schoolBuildingArray[i].buildingName);
            // $('.currentLocationContent').text(schoolBuildingArray[i].infoBoxString);
            console.log(schoolBuildingArray[i].infoBoxString);
            building = i;
            inbuilding = true;
        }
        //console.log(schoolBuildingArray[i]);
    }

} // End of FUNCTION checkBuilding
$('#exampleModal').on('hidden.bs.modal', function() {
        modalShown = false;
    })
    // show info in index page------------------------------------------------------

$("#currentLocation").click(function() {
    $(".currentLocationInfo").toggle();
});

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.8720,
            lng: -99.34238
        },
        zoom: 18
    });

    var schoolBuilding = new google.maps.Polygon({});



    // Ella's code about Dynamic Current Location ===================================================
    var marker = null;
    var showPosition = function(position) {
        console.log(position.coords);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, lng);
        //alert(myLatlng);

        if (marker == null) {
            var iconImage = new google.maps.MarkerImage('img/icon49.png',
                //This marker is 28 pixels wide by 25 pixels high.
                new google.maps.Size(25, 25),
                //The origin for this image is (0, 0).
                //new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (7, 7).
                //new google.maps.Point(7, 7)
            );
            marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: iconImage
            });
            marker.setMap(map);
        } else {
            marker.setPosition(myLatlng);
            marker.setMap(map);
        }
        checkBuilding(myLatlng);

        //console.log(myLatlng);
    };

    //var watchID = navigator.geolocation.watchPosition(showPosition, errorHandler, options);

    function errorHandler(err) {
        if (err.code == 1) {
            alert("Error: Access is denied!");
            //navigator.geolocation.clearWatch(watchID);
        } else if (err.code == 2) {
            alert("Error: Position is unavailable!");
        } else {
            //alert("Error: Timeout, Error Code: " + err.code);
        }
    }

    function getLocationUpdate() {

        if (navigator.geolocation) {
            // timeout at 1000 milliseconds (1 second)
            var options = { enableHighAcuracy: true, timeout: 5000, maximumAge: 0 };
            watchID = navigator.geolocation.watchPosition(showPosition, errorHandler, options);
        } else {
            alert("Sorry, browser does not support geolocation!");
        }
    }
    //setTimeout(getLocationUpdate(), 1000);
    getLocationUpdate();

} // end of FUNCTION initMap;
initMap();