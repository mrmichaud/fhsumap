//-----------------------------------------------------------------------------------------------
// drawings.js contains the functions and variables that create the map, and functions that draw
// the information for each object's information (ex. title, abbreviation, history, link, 
// image, outline GPS coordinates, center GPS coordinates, and the entrance coordinates, etc). This
// file also includes the functions that return a given object based on a provided id, a function 
// that returns the building object given a code, infoWindow open functions for search results, and 
// clear all and redraw all true functions to enable toggle features. The initMap function also includes
// functions that initialize the geolocation feature.
//
// This includes: initMap, errorHandler, getLocationUpdate, drawPOI, drawBuilding, drawBuildingHighlighted, drawParking, drawPolyline,
// drawPolygon, drawCircle, getPOIObjectByID, getBuildingObjectByID, getParkingObjectByID, getPolylineObjectByID,
// getPolygonObjectByID, getCircleObjectByID, getLayerObjectByID, getTourObjectByID, getBuildingByCode, 
// openInfoWindowBuilding, openInfoWindowPOI, openInfoWindowParking, clearAllMapDrawings, and 
// redrawAllTrueStateObjects.
//
// Author: Monica Michaud
// Date: 12-13-2018
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

	//*********************INITIALIZE GEOLOCATION FEATURE*****************************
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
			alert("Attempting To Find Your Location");
			//$(#map).append('<div id="errorOne"><span class="intructionTexts">Attempting To Find Your Location</span></div>');
			//navigator.geolocation.clearWatch(watchID);
		} else if( err.code == 2) {
			alert("The Server Couldn't Find Your Location!");
			//$(#map).append('<div id="errorTwo"><span class="intructionTexts">The Server Could Not Find Your Location!</span></div>');
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
			alert("Sorry, Your Browser Does Not Support Geolocation!");
			//$(#map).append('<div id="errorThree"><span class="intructionTexts">Sorry, Your Browser Does Not Support Geolocation!</span></div>');
		}
	}
	//setTimeout(getLocationUpdate(), 1000);
	getLocationUpdate();    
     
	// generating routain
	//********************************************************************************
	
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
	//check if marker has already been drawn
	var poiObjectForArray = {type: "pois", id: POIObject.id};
	//if not in alreadyDrawn[] then draw to map
	//console.log("alreadyDrawn.length == 0: " + (alreadyDrawn.length == 0) );
	//console.log("alreadyDrawn.indexOf(poiObjectForArray)<0: " + (alreadyDrawn.indexOf(poiObjectForArray)<0) );
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(poiObjectForArray) < 0) ) {
		//create marker using passed values
		poiMarker[POIObject.id] = new google.maps.Marker({
			position: POIObject.latLng ,
			title: POIObject.title,
			icon: POIObject.icon,
			map: map
		});
		poiMarker[POIObject.id].setVisible(true);
		
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
		google.maps.event.addListener(poiMarker[POIObject.id], 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.setPosition(poiMarker.position);
				infoWindow.open(map, poiMarker[POIObject.id]);
			}
		})(poiMarker[POIObject.id]));
	
		//add poiObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(poiObjectForArray);
	}
	//console.log(alreadyDrawn);
}

//Draws a single building on the map
function drawBuilding ( buildingObject, map ) {
	//check if building has already been drawn
	var buildingObjectForArray = {type: "buildings", id: buildingObject.id};
	//if not in alreadyDrawn[] then draw to map
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(buildingObjectForArray) < 0) ) {
	
		//create building polygon using passed value and global variables from index.html
		outlineEdge[buildingObject.id] = new google.maps.Polygon({
			path: buildingObject.buildingOutline,
			geodesic: true,
			strokeColor: BUILDING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: BUILDING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: BUILDING_UNSELECTED_BORDER_SIZE,
			fillColor: 	BUILDING_UNSELECTED_FILL_COLOR,
			fillOpacity: BUILDING_UNSELECTED_FILL_OPACITY
		});
		outlineEdge[buildingObject.id].setMap(map);
		
		
		// This is the content of the info window for a single building
		var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//Insert Name (and Code)
			((buildingObject.displayCode == "true") ? (buildingObject.buildingName + ' (' + buildingObject.code + ') ' ) : (buildingObject.buildingName) ) + 
			
			'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
			//Insert photo and info string
			buildingObject.picture + '>' + buildingObject.infoBoxString +
			//Building hours of operation: check is displayHours is true, is yes then print hoursOfOperation and hoursLink, if not do not print
			((buildingObject.openHours == "true") ? ('<p>Building Hours: ' + buildingObject.hourOfOperation + '</p><p>For complet list of operating hours: <a href='+ buildingObject.hourLink +' target="_blank">Click Here</a></p>' ) : ('') ) +
			//Link to 360 interior view if available with link to historical info, else just link to historical info
			((buildingObject.link360 == "true") ? ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ buildingObject.link360String +' target="_blank">Click Here</a></p>' ) : ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p>') ) +
			'</div></div>';
				
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(outlineEdge[buildingObject.id], 'click', (function(marker) {
			return function() {
				//console.log(buildingObject.latLngCenter);
				infoWindow.setContent(contentString);
				infoWindow.setPosition(buildingObject.latLngCenter);
				map.setCenter(buildingObject.latLngCenter);
				infoWindow.open(map, outlineEdge[buildingObject.id]);
			}
		})(outlineEdge[buildingObject.id]));
		
		//add buildingObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(buildingObjectForArray);
	}	
}

//Draws a single building on the map
function drawBuildingHighlighted ( buildingObject, map ) {
	//check if buildingHighlighted has already been drawn
	var buildingHighlightedObjectForArray = {type: "buildings", id: buildingObject.id};
	//if not in alreadyDrawn[] then draw to map
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(buildingHighlightedObjectForArray) < 0) ) {
		//create building polygon using passed value and global variables from index.html
		outlineEdgeHighlighted[buildingObject.id] = new google.maps.Polygon({
			path: buildingObject.buildingOutline,
			geodesic: true,
			strokeColor: BUILDING_SELECTED_BORDER_COLOR,
			strokeOpacity: BUILDING_SELECTED_BORDER_OPACITY,
			strokeWeight: BUILDING_SELECTED_BORDER_SIZE,
			fillColor: 	BUILDING_SELECTED_FILL_COLOR,
			fillOpacity: BUILDING_SELECTED_FILL_OPACITY
		});
		outlineEdgeHighlighted[buildingObject.id].setMap(map);
		
		// This is the content of the info window for a single building
		var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//Insert Name (and Code)
			((buildingObject.displayCode == "true") ? (buildingObject.buildingName + ' (' + buildingObject.code + ') ' ) : (buildingObject.buildingName) ) + 
			
			'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
			//Insert photo and info string
			buildingObject.picture + '>' + buildingObject.infoBoxString +
			//Building hours of operation: check is displayHours is true, is yes then print hoursOfOperation and hoursLink, if not do not print
			((buildingObject.openHours == "true") ? ('<p>Building Hours: ' + buildingObject.hourOfOperation + '</p><p>For complet list of operating hours: <a href='+ buildingObject.hourLink +' target="_blank">Click Here</a></p>' ) : ('') ) +
			//Link to 360 interior view if available with link to historical info, else just link to historical info
			((buildingObject.link360 == "true") ? ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ buildingObject.link360String +' target="_blank">Click Here</a></p>' ) : ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p>') ) +
			'</div></div>';
				
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(outlineEdgeHighlighted[buildingObject.id], 'click', (function(marker) {
			return function() {
				console.log(buildingObject.latLngCenter);
				infoWindow.setContent(contentString);
				infoWindow.setPosition(buildingObject.latLngCenter);
				map.setCenter(buildingObject.latLngCenter);
				infoWindow.open(map, outlineEdgeHighlighted[buildingObject.id]);
			}
		})(outlineEdgeHighlighted[buildingObject.id]));
		
		//add buildingHighlightedObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(buildingHighlightedObjectForArray);
		
		//to open the infoWindow right away
		infoWindow.setContent(contentString);
		infoWindow.setPosition(buildingObject.latLngCenter);
		infoWindow.open(map, outlineEdgeHighlighted[buildingObject.id]);
		map.setCenter(buildingObject.latLngCenter);
	}
}

//Draws a single parking lot on the map
function drawParking (buildingId, parkingObject, map ) {
	//check if parking has already been drawn
	var parkingObjectForArray = {type: "parking", id: parkingObject.id};
	//if not in alreadyDrawn[] then draw to map
	//if (!alreadyDrawn.includes(parkingObject.id) ) {
		//create parking polygon using passed value and global variables from index.html
		if(parkingOutline[buildingId]==undefined)parkingOutline[buildingId]={};
		console.log(parkingObject.parkingOutline);
		parkingOutline[buildingId][parkingObject.id] = new google.maps.Polygon({
			path: parkingObject.parkingOutline,
			geodesic: true,
			strokeColor: PARKING_SELECTED_BORDER_COLOR,
			strokeOpacity: PARKING_SELECTED_BORDER_OPACITY,
			strokeWeight: PARKING_SELECTED_BORDER_SIZE,
			fillColor: 	PARKING_SELECTED_FILL_COLOR,
			fillOpacity: PARKING_SELECTED_FILL_OPACITY
		});
		parkingOutline[buildingId][parkingObject.id].setMap(map);
		parkingOutline[buildingId][parkingObject.id].setVisible(true);
		// This is the content of the info window for a single parking lot
		var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			parkingObject.parkingName + ' (Zone: ' + parkingObject.zone + ') ' +
			'</h1>' +
			//'<div id="infoWindowBodyContent">' + 
			//'Insert info content here...' +
			//'</div>' +
			'</div>';
		//console.log('outline');
		//console.log(parkingOutline);
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(parkingOutline[buildingId][parkingObject.id], 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.setPosition(parkingObject.latLngCenter);
				map.setCenter(parkingObject.latLngCenter);
				infoWindow.open(map, parkingOutline[parkingObject.id]);
			}
		})(parkingOutline[buildingId][parkingObject.id]));
		
		//add parkingObjectForArray to alreadyDrawn[]
		//alreadyDrawn.push(parkingObject.id);
	//}	
}

//Draws a single polyline on the map
function drawPolyline ( polylineObject, map ) {
	//check if polyline has already been drawn
	var polylineObjectForArray = {type: "polylines", id: polylineObject.id};
	//if not in alreadyDrawn[] then draw to map
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(polylineObjectForArray) < 0) ) {
		//creates the line symbols of black dots used for the polyline
		lineSymbol = {
			path: google.maps.SymbolPath.CIRCLE,
			fillOpacity: 1,
			scale: 2.5,
			fillColor: '#000000'
		};
		
		//create polyline using passed value, lineSymbol, and global variables from index.html
		polylinePath[polylineObject.id] = new google.maps.Polyline({
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

		polylinePath[polylineObject.id].setMap(map);
		polylinePath[polylineObject.id].setVisible(true);
		map.setCenter(polylineObject.latLngArray[0]);
		map.setZoom(MAP_ZOOM-1);
		
		//add polylineObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(polylineObjectForArray);
	}
}

//Draws a single polygon on the map
function drawPolygon ( polygonObject, map ) {
	//check if polygon has already been drawn
	var polygonObjectForArray = {type: "polygons", id: polygonObject.id};
	//if not in alreadyDrawn[] then draw to map
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(polygonObjectForArray) < 0) ) {
		//create polygon using passed value and global variables from index.html
		polygonOutline[polygonObject.id] = new google.maps.Polygon({
			path: polygonObject.outline,
			geodesic: true,
			strokeColor: POLYGON_UNSELECTED_BORDER_COLOR,
			strokeOpacity: POLYGON_UNSELECTED_BORDER_OPACITY,
			strokeWeight: POLYGON_UNSELECTED_BORDER_SIZE,
			fillColor: 	POLYGON_UNSELECTED_FILL_COLOR,
			fillOpacity: POLYGON_UNSELECTED_FILL_OPACITY
		});
		polygonOutline[polygonObject.id].setMap(map);
		polygonOutline[polygonObject.id].setVisible(true);
		
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
		google.maps.event.addListener(polygonOutline[polygonObject.id], 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.setPosition(polygonObject.latLngCenter);
				map.setCenter(polygonObject.latLngCenter);
				infoWindow.open(map, polygonOutline[polygonObject.id]);
			}
		})(polygonOutline[polygonObject.id]));
		
		//add polygonObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(polygonObjectForArray);
	}
}

//Draws a single circle on the map
function drawCircle ( circleObject, map ) {
	//check if circle has already been drawn
	var circleObjectForArray = {type: "circles", id: circleObject.id};
	//if not in alreadyDrawn[] then draw to map
	if ( (alreadyDrawn.length == 0) || (alreadyDrawn.indexOf(circleObjectForArray) < 0) ) {
		//create circle using passed values and global variables from index.html
		circleOutline[circleObject.id] = new google.maps.Circle({
			strokeColor: CIRCLE_PATH_COLOR,
			strokeOpacity: 0.8,
			strokeWeight: CIRCLE_PATH_SIZE,
			fillColor: CIRCLE_FILL_COLOR,
			fillOpacity: CIRCLE_FILL_OPACITY,
			map: map,
			center: circleObject.latLngCenter,
			radius: circleObject.radius
		});
		circleOutline[circleObject.id].setVisible(true);
		
		// This is the content of the info window for a single circle
		var contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//Insert Name
			circleObject.name + 
					
			'</h1><div id="infoWindowBodyContent">' + 
			//Insert info content here
			circleObject.infoWindowContent + 		
			'</div></div>';
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(circleOutline[circleObject.id], 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.setPosition(circleObject.latLngCenter);
				map.setCenter(circleObject.latLngCenter);
				infoWindow.open(map, circleOutline[circleObject.id]);
			}
		})(circleOutline[circleObject.id]));
		
		//add circleObjectForArray to alreadyDrawn[]
		alreadyDrawn.push(circleObjectForArray);
	}	
}

//*************************************************************************
//******************GET DATA TYPE OBJECT BASED ON A GIVEN ID*****************************************
function getPOIObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.pois.length; i++) {
		if (DataTypesInformation.pois[i].id == idValue) {
			return DataTypesInformation.pois[i];
		}
	}//end for loop
}

function getBuildingObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.buildings.length; i++) {
		if (DataTypesInformation.buildings[i].id == idValue) {
			return DataTypesInformation.buildings[i];
		}
	}//end for loop
}

function getParkingObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.parking.length; i++) {
		if (DataTypesInformation.parking[i].id == idValue) {
			return DataTypesInformation.parking[i];
		}
	}//end for loop
}

function getPolylineObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.polylines.length; i++) {
		if (DataTypesInformation.polylines[i].id == idValue) {
			return DataTypesInformation.polylines[i];
		}
	}//end for loop
}

function getPolygonObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.polygons.length; i++) {
		if (DataTypesInformation.polygons[i].id == idValue) {
			return DataTypesInformation.polygons[i];
		}
	}//end for loop
}

function getCircleObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.circles.length; i++) {
		if (DataTypesInformation.circles[i].id == idValue) {
			return DataTypesInformation.circles[i];
		}
	}//end for loop
}

function getLayerObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.layers.length; i++) {
		if (DataTypesInformation.layers[i].id == idValue) {
			return DataTypesInformation.layers[i];
		}
	}//end for loop
}

function getTourObjectByID (idValue) {
	for (var i=0 ; i < DataTypesInformation.tours.length; i++) {
		if (DataTypesInformation.tours[i].id == idValue) {
			return DataTypesInformation.tours[i];
		}
	}//end for loop
}

//*********************GET BUILDING OBJECT BASED ON A GIVEN CODE*************************************
function getBuildingByCode (codeValue) {
	for (var i=0 ; i < DataTypesInformation.buildings.length; i++) {
		if (DataTypesInformation.buildings[i].code == codeValue) {
			return DataTypesInformation.buildings[i];
		}
	}//end for loop
}

//*************************INFOWINDOW OPEN FUNCTIONS FOR SEARCH RESULTS*******************************
/*
function openInfoWindowBuilding ( buildingCode ){
	var building_infoBoxString;
	var building_latLngCenter;
	var buildingObject = getBuildingByCode (buildingCode);
		
	//get infoBoxString
	building_infoBoxString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		//Insert Name (and Code)
		((buildingObject.displayCode == "true") ? (buildingObject.buildingName + ' (' + buildingObject.code + ') ' ) : (buildingObject.buildingName) ) + 
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
		//Insert photo and info string
		buildingObject.picture + '>' + buildingObject.infoBoxString +
		//Building hours of operation: check is displayHours is true, is yes then print hoursOfOperation and hoursLink, if not do not print
		((buildingObject.openHours == "true") ? ('<p>Building Hours: ' + buildingObject.hourOfOperation + '</p><p>For complet list of operating hours: <a href='+ buildingObject.hourLink +' target="_blank">Click Here</a></p>' ) : ('') ) +
		//Link to 360 interior view if available with link to historical info, else just link to historical info
		((buildingObject.link360 == "true") ? ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ buildingObject.link360String +' target="_blank">Click Here</a></p>' ) : ('<p>For more information: <a href='+ buildingObject.infoLinkString +' target="_blank">Click Here</a></p>') ) +
		'</div></div>';
	
	//get latLngCenter
	building_latLngCenter = buildingObject.latLngCenter;
	map.setCenter(building_latLngCenter);
	infoWindow.setContent(building_infoBoxString);
	infoWindow.setPosition(building_latLngCenter);
	infoWindow.open(map);
}
*/

function openInfoWindowPOI ( idValue ){
	var POI_infoBoxString;
	var POI_latLng;
	var POIObject = getPOIObjectByID (idValue);
		
	//get infoBoxString
	POI_infoBoxString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
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
	
	//get latLngCenter
	POI_latLng = POIObject.latLng;
	map.setCenter(POI_latLng);
	infoWindow.setContent(POI_infoBoxString);
	infoWindow.setPosition(POI_latLng);
	infoWindow.open(map);
}

function openInfoWindowParking ( idValue ){
	var parking_infoBoxString;
	var parking_latLngCenter;
	var parkingObject = getParkingObjectByID (idValue);
		
	//get infoBoxString
	parking_infoBoxString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		parkingObject.parkingName + ' (Zone: ' + parkingObject.zone + ') ' +
		'</h1>' +
		//'<div id="infoWindowBodyContent">' + 
		//'Insert info content here...' +
		//'</div>' +
		'</div>';
	
	//get latLngCenter
	parking_latLngCenter = parkingObject.latLngCenter;
	map.setCenter(parking_latLngCenter);
	infoWindow.setContent(parking_infoBoxString);
	infoWindow.setPosition(parking_latLngCenter);
	infoWindow.open(map);
}

//***************************CLEAR ALL AND REDRAW ALL TRUE FUNCTIONS***********************************
function clearAllMapDrawings(){
	//for every object of every object type setVisible to false
		
	//for every building
	for ( x in DataTypesInformation.buildings ){
		//console.log(DataTypesInformation.buildings[x].id);
		if( typeof outlineEdge[DataTypesInformation.buildings[x].id] !== "undefined"){
			outlineEdge[DataTypesInformation.buildings[x].id].setVisible(false);
		}
	}
	//for every highlighted building
	for ( x in DataTypesInformation.buildings ){
		if( typeof outlineEdgeHighlighted[DataTypesInformation.buildings[x].id] !== "undefined"){
			outlineEdgeHighlighted[DataTypesInformation.buildings[x].id].setVisible(false);
		}
	}
	//for every poi
	for ( x in DataTypesInformation.pois ){
		if( typeof poiMarker[DataTypesInformation.pois[x].id] !== "undefined"){
			poiMarker[DataTypesInformation.pois[x].id].setVisible(false);
		}
	}
	//for every polyline
	for ( x in DataTypesInformation.polylines ) {
		if( typeof polylinePath[DataTypesInformation.polylines[x].id] !== "undefined"){
			polylinePath[DataTypesInformation.polylines[x].id].setVisible(false);
		}
	}
	//for every polygon
	for ( x in DataTypesInformation.polygons ) {
		if( typeof polygonOutline[DataTypesInformation.polygons[x].id] !== "undefined"){
			polygonOutline[DataTypesInformation.polygons[x].id].setVisible(false);
		}
	}
	//for every parking
	for ( x in DataTypesInformation.buildings ){
		for ( y in DataTypesInformation.parking ) {
			if(parkingOutline[DataTypesInformation.buildings[x].id]==undefined){
				parkingOutline[DataTypesInformation.buildings[x].id]={};
			}
			if( typeof parkingOutline[DataTypesInformation.buildings[x].id][DataTypesInformation.parking[y].id] !== "undefined"){
				parkingOutline[DataTypesInformation.buildings[x].id][DataTypesInformation.parking[y].id].setVisible(false);
			}
		}
	}
	//for every circle
	for ( x in DataTypesInformation.circles ) {
		if( typeof circleOutline[DataTypesInformation.circles[x].id] !== "undefined"){
			circleOutline[DataTypesInformation.circles[x].id].setVisible(false);
		}
	}
	infoWindow.close();
	alreadyDrawn = [];
}

function redrawAllTrueStateObjects(){
	//for every object of every object type, check state of each object 
	// - if state is true, setVisible to true
	
	//for every building
	for ( x in DataTypesInformation.buildings ){
		if (buildingStates[DataTypesInformation.buildings[x].id].state){
			outlineEdge[DataTypesInformation.buildings[x].id].setVisible(true);
		}
	}
	//for every poi
	for ( x in DataTypesInformation.pois ){
		if (poiStates[DataTypesInformation.pois[x].id].state){
			poiMarker[DataTypesInformation.pois[x].id].setVisible(true);
		}
	}
	//for every polyline
	for ( x in DataTypesInformation.polylines ) {
		if (polylineStates[DataTypesInformation.polylines[x].id].state){
			polylinePath[DataTypesInformation.polylines[x].id].setVisible(true);
		}
	}
	//for every polygon
	for ( x in DataTypesInformation.polygons ) {
		if (polygonStates[DataTypesInformation.polygons[x].id].state){
			polygonOutline[DataTypesInformation.polygons[x].id].setVisible(true);
		}
	}
	//for every parking
	for ( x in parkingStates ) {
		//console.log("Parking States Array: " + parkingStates[DataTypesInformation.parking[x].id] + ", " + parkingStates[DataTypesInformation.parking[x].state]);
		if (parkingStates[x].state){
			for (j in DataTypesInformation.buildings){
				if(DataTypesInformation.buildings[j].id==parkingStates[x].id){
					//console.log(DataTypesInformation.buildings[j].parkingLotsId);
					for (k=0;k<DataTypesInformation.buildings[j].parkingLotsId.length;k++){
						parkingOutline[DataTypesInformation.buildings[j].id][DataTypesInformation.buildings[j].parkingLotsId[k]].setVisible(true);
					}
				}
			}
			//console.log("parking outline array element: " + parkingOutline[DataTypesInformation.parking[x].id]);
		}
	}
	
	//for every circle
	for ( x in DataTypesInformation.circles ) {
		if (circleStates[DataTypesInformation.circles[x].id].state){
			circleOutline[DataTypesInformation.circles[x].id].setVisible(true);
		}
	}
}
