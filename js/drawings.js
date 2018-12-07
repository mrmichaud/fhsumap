//-----------------------------------------------------------------------------------------------
// buildingData.js contains the functions and variables that create the map, and all of the 
// arrays that contain the information for each building's title, abbreviation, history, link, 
// image, outline GPS coordinates, center GPS coordinates, and the entrance coordinates. This 
// file also includes the for loop that assembles each building's information and places it on 
// the map, and the tour path coordinates and the code that places the tour on the map. 
//
// This includes: initMap, buildingNames, latLngCenter, latLngMainEntrance, buildingOutline, 
// infoBoxString, picture, infoLinkString, and campusTourCoordinates.
//
// ************************NEED TO UPDATE COMMENTS ABOVE**********************
// Author: Monica Michaud
// Date: 12-5-2018
//-----------------------------------------------------------------------------------------------


function initMap() {
	
	//create map object and set default map settings
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: MAP_ZOOM,
		center: MAP_CENTER_COORDINATES,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		styles: [
			{
				"featureType": "poi.attraction",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			},
			{
				"featureType": "poi.government",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			},
			{
				"featureType": "poi.park",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			},
			{
				"featureType": "poi.school",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			},
			{
				"featureType": "poi.sports_complex",
				"elementType": "labels",
				"stylers": [ { "visibility": "off" } ]
			}
		]
	});

//using watchPosition() to tract locations
	var watchID;
    var marker = null;
    var showPosition = function(position) {

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, lng);

        currentPosition = myLatlng;  
        //alert(currentPosition);
        //$("#start").prepend('<option selected value='+lat+','+lng+'> My Current Location</option>');
        //alert(myLatlng);
        if(marker == null){
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
        }else{
            
            
            marker.setPosition(myLatlng);
            marker.setMap(map);
        }
    };

             function errorHandler(err) {
                if(err.code == 1) {
                   alert("Error: Access is denied!");
                   //navigator.geolocation.clearWatch(watchID);
                } else if( err.code == 2) {
                   alert("Error: Position is unavailable!");
                } else{
                  //alert("Error: Timeout, Error Code: " + err.code);
                }
             }
           
             function getLocationUpdate(){
                
                if(navigator.geolocation){ 
                   // timeout at 1000 milliseconds (1 second)
                   var options = {enableHighAcuracy: true,timeout: 5000,maximumAge: 0};              
                   watchID = navigator.geolocation.watchPosition(showPosition, errorHandler, options);
                } else {
                   alert("Sorry, browser does not support geolocation!");
                }

             }
           //setTimeout(getLocationUpdate(), 1000);
           getLocationUpdate();
  
    
     
       // generating routain

	
	
	// Instantiate a directions service.
	directionsService = new google.maps.DirectionsService;
	// Create a renderer for directions and bind it to the map.
	directionsDisplay = new google.maps.DirectionsRenderer({
			map: map,
			polylineOptions: {strokeColor: 'black'},
			suppressMarkers: true,
			//markerOptions: {strokeColor: "blue"}
			
		});
    
    directionsDisplay.setMap(map);
	// Instantiate an info window to hold step text.
	stepDisplay = new google.maps.InfoWindow;
	markerArray = [];
	
	//Define dummy infoWindow for use in drawing data type objects
	infoWindow = new google.maps.InfoWindow({
		position: {lat: 38.8726, lng: -99.34339},
		content: "Dummy Text",
		maxWidth: 500
	});
	
	// Closes infoWindow if user clicks outside of the box
	google.maps.event.addListener(map, "click", function(event) {
		infoWindow.close();	
	});
}//end of initMap

//********************DRAW EACH DATA TYPE TO THE MAP*******************
//Draws a single marker on the map
function drawPOI ( POIObject, map ) {
	//create marker using passed values
	var markersCenter = new google.maps.Marker({
		position: POIObject.latLng ,
		title: POIObject.title,
		map: map
	});
	markersCenter.setVisible(true);
	
	// This is the content of the info window for a single marker
	var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		//Insert Title
		POIObject.title +
		
		'</h1><div id="infoWindowBodyContent">' +
		//Insert photo or video here with appropriate links included
		((POIObject.picture != "") ? ('<img class="infoWindowImages" src=' + POIObject.picture + '>') : ('<iframe title=' + POIObject.infoURLTitle + 
		' width="480" height="270" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src=' + POIObject.infoURLLink + 
		'></iframe>') ) +
		
		//Insert info string of text
		POIObject.infoBoxString + 	
		
		'</div></div>';

	//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
	google.maps.event.addListener(markersCenter, 'click', (function(marker) {
		return function() {
			infoWindow.setContent(contentString);
			infoWindow.setPosition(markersCenter.position);
			infoWindow.open(map, markersCenter);
		}
	})(markersCenter));
	
}

//Draws a single building on the map
function drawBuilding ( buildingObject, map ) {
	
	console.log(buildingObject.buildingName);
	//create building polygon using passed value and global variables from index.html
	outlineEdge = new google.maps.Polygon({
		path: buildingObject.buildingOutline,
		geodesic: true,
		strokeColor: BUILDING_UNSELECTED_BORDER_COLOR,
		strokeOpacity: BUILDING_UNSELECTED_BORDER_OPACITY,
		strokeWeight: BUILDING_UNSELECTED_BORDER_SIZE,
		fillColor: 	BUILDING_UNSELECTED_FILL_COLOR,
		fillOpacity: BUILDING_UNSELECTED_FILL_OPACITY
	});
	outlineEdge.setMap(map);
	
	
	// This is the content of the info window for a single building
	var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		//((DataTypesInformation.buildings[x].displayCode == "true") ? (DataTypesInformation.buildings[x].buildingName + ' (' + DataTypesInformation.buildings[x].code + ') ' ) : (DataTypesInformation.buildings[x].buildingName) ) + 
		//Insert Name (and Code)
		((buildingObject.displayCode == "true") ? (buildingObject.buildingName + ' (' + buildingObject.code + ') ' ) : (buildingObject.buildingName) ) + 
		
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
		//Insert photo and info string
		buildingObject.picture + '>' + buildingObject.infoBoxString +
		//Building hours of operation: check is displayHours is true, is yes then print hoursOfOperation and hoursLink, if not do not print
		((buildingObject.openHours == "true") ? ('<p>Building Hours: ' + buildingObject.hoursOfOperation + '</p><p>For complet list of operating hours: <a href='+ buildingObject.hourLink +' target="_blank">Click Here</a></p>' ) : ('') ) +
		//Link to 360 interior view if available with link to historical info, else just link to historical info
		((buildingObject.link360 == "true") ? ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ buildingObject.link360String +' target="_blank">Click Here</a></p>' ) : ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p>') ) +
		
		'</div></div>';
			
	//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
	google.maps.event.addListener(outlineEdge, 'click', (function(marker) {
		return function() {
			console.log(buildingObject.latLngCenter);
			infoWindow.setContent(contentString);
			infoWindow.setPosition(buildingObject.latLngCenter);
			infoWindow.open(map, outlineEdge);
		}
	})(outlineEdge));
	
}

//Draws a single parking lot on the map
function drawParking ( parkingObject, map ) {
	//create parking polygon using passed value and global variables from index.html
	parkingOutline = new google.maps.Polygon({
		path: parkingObject.parkingOutline,
		geodesic: true,
		strokeColor: PARKING_SELECTED_BORDER_COLOR,
		strokeOpacity: PARKING_SELECTED_BORDER_OPACITY,
		strokeWeight: PARKING_SELECTED_BORDER_SIZE,
		fillColor: 	PARKING_SELECTED_FILL_COLOR,
		fillOpacity: PARKING_SELECTED_FILL_OPACITY
	});
	parkingOutline.setMap(map);
	parkingOutline.setVisible(true);
	
	// This is the content of the info window for a single parking lot
	var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		parkingObject.parkingName + ' (Zone: ' + parkingObject.zone + ') ' +
		'</h1>' +
		//'<div id="infoWindowBodyContent">' + 
		//DataTypesInformation.parking[x].infoWindowContent + 		
		//'Insert info content here...' +
		//'</div>' +
		'</div>';
	
		
	//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
	google.maps.event.addListener(parkingOutline, 'click', (function(marker) {
		return function() {
			infoWindow.setContent(contentString);
			infoWindow.setPosition(parkingObject.latLngCenter);
			infoWindow.open(map, parkingOutline);
		}
	})(parkingOutline));
	
}

//Draws a single polyline on the map
function drawPolyline ( polylineObject, map ) {
	//creates the line symbols of black dots used for the polyline
	lineSymbol = {
		path: google.maps.SymbolPath.CIRCLE,
		fillOpacity: 1,
		scale: 2.5,
		fillColor: '#000000'
	};
	
	//create polyline using passed value, lineSymbol, and global variables from index.html
	polylinePath = new google.maps.Polyline({
		path: polylineObject.latLngArray,
		geodesic: true,
		strokeColor: TOUR_PATH_COLOR,
		strokeOpacity: 0,
		strokeWeight: TOUR_PATH_SIZE,
		icons: [{
			icon: lineSymbol,
			offset: '0',
			repeat: '10px'
		}],
		map: map
	});

	polylinePath.setMap(map);
	polylinePath.setVisible(true);
}

//Draws a single polygon on the map
function drawPolygon ( polygonObject, map ) {
	//create polygon using passed value and global variables from index.html
	polygonOutline = new google.maps.Polygon({
		path: polygonObject.outline,
		geodesic: true,
		strokeColor: POLYGON_UNSELECTED_BORDER_COLOR,
		strokeOpacity: POLYGON_UNSELECTED_BORDER_OPACITY,
		strokeWeight: POLYGON_UNSELECTED_BORDER_SIZE,
		fillColor: 	POLYGON_UNSELECTED_FILL_COLOR,
		fillOpacity: POLYGON_UNSELECTED_FILL_OPACITY
	});
	polygonOutline.setMap(map);
	polygonOutline.setVisible(true);
	
	// This is the content of the info window for a single polygon
	var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		//Insert Name
		polygonObject.name + 
				
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
		//Insert photo and info string
		polygonObject.picture + '>' + polygonObject.infoBoxString + 		
		
		
		//Insert applicable links
		'<p>For more information: <a href='+ polygonObject.infoLinkString +' target="_blank">Click Here</a></p>' +
		'</div></div>';
	
	//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
	google.maps.event.addListener(polygonOutline, 'click', (function(marker) {
		return function() {
			infoWindow.setContent(contentString);
			infoWindow.setPosition(polygonObject.latLngCenter);
			infoWindow.open(map, polygonOutline);
		}
	})(polygonOutline));
	
}

//Draws a single circle on the map
function drawCircle ( circleObject, map ) {
	//create circle using passed values and global variables from index.html
	circleOutline = new google.maps.Circle({
		strokeColor: CIRCLE_PATH_COLOR,
		strokeOpacity: 0.8,
		strokeWeight: CIRCLE_PATH_SIZE,
		fillColor: CIRCLE_FILL_COLOR,
		fillOpacity: CIRCLE_FILL_OPACITY,
		map: map,
		center: circleObject.latLngCenter,
		radius: circleObject.radius
	});
	
	
	// This is the content of the info window for a single circle
	var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		//Insert Name
		circleObject.name + 
				
		'</h1><div id="infoWindowBodyContent">' + 
		//Insert info content here
		circleObject.infoWindowContent + 		
		'</div></div>';
		
	//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
	google.maps.event.addListener(circleOutline, 'click', (function(marker) {
		return function() {
			infoWindow.setContent(contentString);
			infoWindow.setPosition(circleObject.latLngCenter);
			infoWindow.open(map, circleOutline);
		}
	})(circleOutline));
}

//*************************************************************************
//******************GET DATA TYPE OBJECT BASED ON A GIVEN ID*****************************************
function getPOIID (idValue) {
	for (var i=0 ; i < DataTypesInformation.pois.length; i++) {
		if (DataTypesInformation.pois[i].id == idValue) {
			return DataTypesInformation.pois[i];
		}
	}//end for loop
}

function getBuildingID (idValue) {
	for (var i=0 ; i < DataTypesInformation.buildings.length; i++) {
		if (DataTypesInformation.buildings[i].id == idValue) {
			return DataTypesInformation.buildings[i];
		}
	}//end for loop
}

function getParkingID (idValue) {
	for (var i=0 ; i < DataTypesInformation.parking.length; i++) {
		if (DataTypesInformation.parking[i].id == idValue) {
			return DataTypesInformation.parking[i];
		}
	}//end for loop
}

function getPolylineID (idValue) {
	for (var i=0 ; i < DataTypesInformation.polylines.length; i++) {
		if (DataTypesInformation.polylines[i].id == idValue) {
			return DataTypesInformation.polylines[i];
		}
	}//end for loop
}

function getPolygonID (idValue) {
	for (var i=0 ; i < DataTypesInformation.polygons.length; i++) {
		if (DataTypesInformation.polygons[i].id == idValue) {
			return DataTypesInformation.polygons[i];
		}
	}//end for loop
}

function getCircleID (idValue) {
	for (var i=0 ; i < DataTypesInformation.circles.length; i++) {
		if (DataTypesInformation.circles[i].id == idValue) {
			return DataTypesInformation.circles[i];
		}
	}//end for loop
}

function getLayerID (idValue) {
	for (var i=0 ; i < DataTypesInformation.layers.length; i++) {
		if (DataTypesInformation.layers[i].id == idValue) {
			return DataTypesInformation.layers[i];
		}
	}//end for loop
}

function getTourID (idValue) {
	for (var i=0 ; i < DataTypesInformation.tours.length; i++) {
		if (DataTypesInformation.tours[i].id == idValue) {
			return DataTypesInformation.tours[i];
		}
	}//end for loop
}

//*************************************************************************
//******************REMOVE EACH DATA TYPE FROM THE MAP*********************


