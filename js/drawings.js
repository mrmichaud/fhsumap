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
// Date: 11-30-2018
//-----------------------------------------------------------------------------------------------

//********************DRAW EACH DATA TYPE TO THE MAP*******************
	//Draws a single marker on the map
	function drawPOI ( positionValue, titleValue ) {
		//create marker using passed values
		markersCenter = new google.maps.Marker({
			position: positionValue,
			title: titleValue,
			map: map,
		});
		markersCenter.setVisible(true);
		
		// This is the content of the info window for a single marker
		contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//DataTypesInformation.pois[y].title + 
			'INSERT TITLE HERE!' +
			
			'</h1><div id="infoWindowBodyContent">' +
			//((DataTypesInformation.pois[y].picture != "") ? ('<img class="infoWindowImages" src=' + DataTypesInformation.pois[y].picture + '>') : ('<iframe title=' + DataTypesInformation.pois[y].infoURLTitle + 
			//' width="480" height="270" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src=' + DataTypesInformation.pois[y].infoURLLink + 
			//'></iframe>') ) +
			'Insert photo or video here with appropriate links included...' +
			
			//DataTypesInformation.pois[y].infoBoxString + 
			'Insert info string of text here!' +
			
			'</div></div>';
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(markersCenter, 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.open(map, markersCenter);
			}
		})(markersCenter));
		
	}
	
	//Draws a single building on the map
	function drawBuilding ( pathValue ) {
		//create building polygon using passed value and global variables from index.html
		outlineEdge = new google.maps.Polygon({
			path: pathValue,
			geodesic: true,
			strokeColor: BUILDING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: BUILDING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: BUILDING_UNSELECTED_BORDER_SIZE,
			fillColor: 	BUILDING_UNSELECTED_FILL_COLOR,
			fillOpacity: BUILDING_UNSELECTED_FILL_OPACITY
		});
		outlineEdge.setMap(map);
		
		
		// This is the content of the info window for a single building
		contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//((DataTypesInformation.buildings[x].displayCode == "true") ? (DataTypesInformation.buildings[x].buildingName + ' (' + DataTypesInformation.buildings[x].code + ') ' ) : (DataTypesInformation.buildings[x].buildingName) ) + 
			'INSERT NAME (and CODE) HERE!' +
			
			'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
			//DataTypesInformation.buildings[x].picture + '>' + DataTypesInformation.buildings[x].infoBoxString + 		
			'Insert photo and info string here...' +
			
			//Building hours of operation: check is displayHours is true, is yes then print hoursOfOperation and hoursLink, if not do not print
			
			//((DataTypesInformation.buildings[x].link360 == "true") ? ('<p>For more information: <a href='+ DataTypesInformation.buildings[x].infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ DataTypesInformation.buildings[x].link360String +' target="_blank">Click Here</a></p>' ) : ('<p>For more information: <a href='+ DataTypesInformation.buildings[x].infoLinkString +' target="_blank">Click Here</a></p>') )
			'Insert applicable links here!' +
			
			'</div></div>';
		
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(outlineEdge, 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.open(map, outlineEdge);
			}
		})(outlineEdge));
		
	}
	
	//Draws a single parking lot on the map
	function drawParking ( pathValue ) {
		//create parking polygon using passed value and global variables from index.html
		parkingOutline = new google.maps.Polygon({
			path: pathValue,
			geodesic: true,
			strokeColor: PARKING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: PARKING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: PARKING_UNSELECTED_BORDER_SIZE,
			fillColor: 	PARKING_UNSELECTED_FILL_COLOR,
			fillOpacity: PARKING_UNSELECTED_FILL_OPACITY
		});
		parkingOutline.setMap(map);
		parkingOutline.setVisible(true);
		
		// This is the content of the info window for a single parking lot
		contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//DataTypesInformation.parking[x].parkingName + ' ( Zone ' + DataTypesInformation.parking[x].zone + ') ' + 
			'INSERT NAME and ZONE HERE!' +
			
			'</h1><div id="infoWindowBodyContent">' + 
			//DataTypesInformation.parking[x].infoWindowContent + 		
			'Insert info content here...' +
			
			'</div></div>';
		
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(parkingOutline, 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.open(map, parkingOutline);
			}
		})(parkingOutline));
		
	}
	
	//Draws a single polyline on the map
	function drawPolyline ( pathCoordinates ) {
		//creates the line symbols of black dots used for the polyline
		lineSymbol = {
			path: google.maps.SymbolPath.CIRCLE,
			fillOpacity: 1,
			scale: 2.5,
			fillColor: '#000000'
		};
		
		//create polyline using passed value, lineSymbol, and global variables from index.html
		polylinePath = new google.maps.Polyline({
			path: pathCoordinates,
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
	function drawPolygon ( pathValue ) {
		//create polygon using passed value and global variables from index.html
		polygonOutline = new google.maps.Polygon({
			path: pathValue,
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
		contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//DataTypesInformation.polygons[x].name + 
			'INSERT NAME HERE!' +
			
			'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + 
			//DataTypesInformation.polygons[x].picture + '>' + DataTypesInformation.polygons[x].infoBoxString + 		
			'> Insert photo and info string here...' +
			
			//'<p>For more information: <a href='+ DataTypesInformation.polygons[x].infoLinkString +' target="_blank">Click Here</a></p>' +
			'Insert applicable links here!' +
			
			'</div></div>';
		
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(polygonOutline, 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
				infoWindow.open(map, polygonOutline);
			}
		})(polygonOutline));
		
	}
	
	//Draws a single circle on the map
	function drawCircle ( circleCenter, radiusValue ) {
		//create circle using passed values and global variables from index.html
		circleOutline = new google.maps.Circle({
			strokeColor: CIRCLE_PATH_COLOR,
			strokeOpacity: 0.8,
			strokeWeight: CIRCLE_PATH_SIZE,
			fillColor: CIRCLE_FILL_COLOR,
			fillOpacity: CIRCLE_FILL_OPACITY,
			map: map,
			center: circleCenter,
			radius: radiusValue
        });
		
		
		// This is the content of the info window for a single circle
		contentString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
			//DataTypesInformation.circles[x].name + 
			'INSERT NAME HERE!' +
			
			'</h1><div id="infoWindowBodyContent">' + 
			//DataTypesInformation.circles[x].infoWindowContent + 		
			'Insert info content here...' +
			
			'</div></div>';
		
			
		//Add a listener to the marker: when the user clicks the marker, the infoWindow appears
		google.maps.event.addListener(circleOutline, 'click', (function(marker) {
			return function() {
				infoWindow.setContent(contentString);
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
	
	
	//console.log("DataTypesInformation: " + DataTypesInformation);
	//console.log("testing: " + getBuildingID(2)); 
	
	
	
	// *****************TEST FUNCTIONS***************
	//var temp = getPOIID(4);
	//drawPOI (getPOIID(4).latLng, getPOIID(4).title);
	//drawPOI (	{"lat": 38.87396, "lng": -99.34064}, "Center" );
	//drawBuilding (getBuildingID(2).buildingOutline);
	//drawBuilding ( [
	//			{"lat"	: 38.87212, "lng"	: -99.34055},
	//			{"lat"	: 38.87239, "lng"	: -99.34122},
	//			{"lat"	: 38.87275, "lng"	: -99.34098},
	//			{"lat"	: 38.87247, "lng"	: -99.34031},
	//			{"lat"	: 38.87212, "lng"	: -99.34055}
	//		]);
	/* drawParking ([
				{"lat"	: 38.87554, "lng"	: -99.34332},
				{"lat"	: 38.87553, "lng"	: -99.34327}, 
				{"lat"	: 38.87579, "lng"	: -99.34315}, 
				{"lat"	: 38.87581, "lng"	: -99.34321} 
			]);
	drawPolyline ([
		    	{"lat": 38.87276,"lng":-99.34099 },
		    	{"lat": 38.87352,"lng":-99.34272 },
		    	{"lat": 38.87385,"lng": -99.34254},
		    	{"lat": 38.87391,"lng": -99.34266},
		    	{"lat": 38.87415,"lng": -99.34344}
		    ]);	
	drawPolygon ([
				{"lat": 38.87341,"lng": -99.34019},
				{"lat": 38.87342,"lng": -99.34003},
				{"lat": 38.87336,"lng": -99.33992},
				{"lat": 38.87322,"lng": -99.33992},
				{"lat": 38.87301,"lng": -99.34001},
				{"lat": 38.87277,"lng": -99.34025},
				{"lat": 38.87223,"lng": -99.34095},
				{"lat": 38.87246,"lng": -99.34029},
				{"lat": 38.87237,"lng": -99.34125},
				{"lat": 38.87276,"lng": -99.34099},
				{"lat": 38.87302,"lng": -99.34055},
				{"lat": 38.87302,"lng": -99.34055}
			]);
	drawCircle ({"lat": 38.870065,"lng": -99.343837}, 10); */
}//end of initMap