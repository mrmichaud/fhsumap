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
// Author: Monica Michaud
// Date: 4-30-2018
//-----------------------------------------------------------------------------------------------


function OpenInfoWindow ( buildingCode ){
	
	var building_infoBoxString;
	var building_latLngCenter;
		
	//parse from JSON data based on building code
	//get infoBoxString
	building_infoBoxString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		((DataTypesInformation[buildingCode].displayCode == "true") ? (DataTypesInformation[buildingCode].buildingName + ' (' + DataTypesInformation[buildingCode].code + ') ' ) : (DataTypesInformation[buildingCode].buildingName) ) + 
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + DataTypesInformation[buildingCode].picture + '>' + DataTypesInformation[buildingCode].infoBoxString + 
		'<p>For more information: <a href='+ DataTypesInformation[buildingCode].infoLinkString +' target="_blank">' +
		'Click Here</a></p></div></div>';
	
	//get latLngCenter
	building_latLngCenter = DataTypesInformation[buildingCode].latLngCenter;

	map.setCenter(building_latLngCenter);
	 
	infoWindow.setContent(building_infoBoxString);
	
	infoWindow.setPosition(building_latLngCenter);
	
	infoWindow.open(map);
}

function initMap() {
	
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
	
	// Instantiate a directions service.
	directionsService = new google.maps.DirectionsService;
	// Create a renderer for directions and bind it to the map.
	directionsDisplay = new google.maps.DirectionsRenderer({
			map: map,
			polylineOptions: {strokeColor: 'black'},
			suppressMarkers: true,
			//markerOptions: {strokeColor: "blue"}
			
		});
	// Instantiate an info window to hold step text.
	stepDisplay = new google.maps.InfoWindow;
	markerArray = [];
	
	
	infoWindow = new google.maps.InfoWindow({
		position: {lat: 38.8726, lng: -99.34339},
		content: "Dummy Text",
		maxWidth: 500
	});
	
	// Closes infoWindow if user clicks outside of the box
	google.maps.event.addListener(map, "click", function(event) {
		infoWindow.close();	
	});
	
	var x;
	for(x in DataTypesInformation){
		// Create marker at center
		
		markersCenter[x] = new google.maps.Marker({
			position: DataTypesInformation[x].latLngCenter,
			title: DataTypesInformation[x].buildingName,
			map: map,
		});
		markersCenter[x].setVisible(false);
		
		// Create marker at entrance
		markersEntrance[x] = new google.maps.Marker({
			position: DataTypesInformation[x].latLngMainEntrance,
			map: map,
			title: DataTypesInformation[x].buildingName + " Entrance",
		});
		markersEntrance[x].setVisible(false);
		
		// This is the content of the info window.
		
		contentString[x] = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + 
		((DataTypesInformation[x].displayCode == "true") ? (DataTypesInformation[x].buildingName + ' (' + DataTypesInformation[x].code + ') ' ) : (DataTypesInformation[x].buildingName) ) + 
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + DataTypesInformation[x].picture + '>' + DataTypesInformation[x].infoBoxString + 		
		((DataTypesInformation[x].link360 == "true") ? ('<p>For more information: <a href='+ DataTypesInformation[x].infoLinkString +' target="_blank">Click Here</a></p><p>For a 360 interior view of this building: <a href='+ DataTypesInformation[x].link360String +' target="_blank">Click Here</a></p></div></div>' ) : ('<p>For more information: <a href='+ DataTypesInformation[x].infoLinkString +' target="_blank">Click Here</a></p></div></div>') );
		
		// This section of code creates a 2-pixel-wide gold polyline showing the outline of a test building.
		
		outlineEdge[x] = new google.maps.Polygon({
			path: DataTypesInformation[x].buildingOutline,
			geodesic: true,
			strokeColor: BUILDING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: BUILDING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: BUILDING_UNSELECTED_BORDER_SIZE,
			fillColor: 	BUILDING_UNSELECTED_FILL_COLOR,
			fillOpacity: BUILDING_UNSELECTED_FILL_OPACITY
		});
		outlineEdge[x].setMap(map);
				
		/************************************************************************
		THIS CODE ADDS A LISTENER TO THE POLYGONS
		WHEN THE USER CLICKS ON A POLYGON THE INFOWINDOW APPEARS
		JUST LIKE IT WOULD IF THE USER CLICKED ON THE MARKER
		THIS WAY YOU CAN HIDE THE MARKERS (WHICH LOOKS NICER) 
		AND JUST LET PEOPLE CLICK ON THE BUILDING ITSELF
		************************************************************************/
		
		google.maps.event.addListener(outlineEdge[x], 'click', (function(marker, x) {
			return function() {
				infoWindow.setContent(contentString[x]);
				infoWindow.open(map, markersCenter[x]);
			}
		})(markersCenter[x], x));
						
	} //end of for loop

	// Put in outlines for parking here!!!!
	for (x in CampusParkingInformation) {
		parkingOutline[x] = new google.maps.Polygon({
			path: CampusParkingInformation[x].parkingOutline,
			geodesic: true,
			strokeColor: PARKING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: PARKING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: PARKING_UNSELECTED_BORDER_SIZE,
			fillColor: 	PARKING_UNSELECTED_FILL_COLOR,
			fillOpacity: PARKING_UNSELECTED_FILL_OPACITY
		});
		parkingOutline[x].setMap(map);
		parkingOutline[x].setVisible(false);
	}
	//--------------------------------------------------------
	//--------------------------------------------------------
	//--------------------------------------------------------
	// CAMPUS TOUR
	//Add polyline of campus tour:
	campusTourCoordinates = CampusTourInformation.Polyline.latLngArray;
	//campusTourCoordinates = DataTypesInformation.
	
	lineSymbol = {
		path: google.maps.SymbolPath.CIRCLE,
		fillOpacity: 1,
		scale: 2.5,
		fillColor: '#000000'
	};
	
	campusTourPath = new google.maps.Polyline({
		path: campusTourCoordinates,
		geodesic: true,
		strokeColor: TOUR_PATH_COLOR,
		strokeOpacity: 0,
		strokeWeight: TOUR_PATH_SIZE,
		icons: [{
			icon: lineSymbol,
			offset: '0',
			repeat: '10px'
		}
		],
		map: map
	});

	campusTourPath.setMap(map);
	campusTourPath.setVisible(false);
	
	//-------------------TEMP FIX-------------
	videoTourPath = new google.maps.Polyline({
		path: campusTourCoordinates,
		geodesic: true,
		strokeColor: TOUR_PATH_COLOR,
		strokeOpacity: 0,
		strokeWeight: TOUR_PATH_SIZE,
		icons: [{
			icon: lineSymbol,
			offset: '0',
			repeat: '10px'
		}
		],
		map: map
	});

	videoTourPath.setMap(map);
	videoTourPath.setVisible(false);
	
	//console.log(CampusTourInformation.Markers);
	
// ***************************** CAMPUS TOUR MARKERS *******************************************************
	for(y in CampusTourInformation.Markers){
	// For loop placing tour markers on map
		// Create marker at tour stop		

		tourMarkers[y] = new google.maps.Marker({
			position: CampusTourInformation.Markers[y].latLng,
			title: CampusTourInformation.Markers[y].title,
			map: map,
			icon: "siteImages/info2.png",
		});

		tourMarkers[y].setVisible(false);
		
		//console.log(tourMarkers[y]);
				
		// This is the content of the info window.
		tourContentString[y] = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + CampusTourInformation.Markers[y].title + 
		'</h1><div id="infoWindowBodyContent"><img class="infoWindowImages" src=' + CampusTourInformation.Markers[y].picture + '>' + CampusTourInformation.Markers[y].infoBoxString + 
		'</div></div>';
				
		// When the user clicks the center marker, an info window opens.
		
		google.maps.event.addListener(tourMarkers[y], 'click', (function(marker, y) {
			return function() {
				infoWindow.setContent(tourContentString[y]);
				infoWindow.open(map, tourMarkers[y]);
			}
		})(tourMarkers[y], y));

	} //end of for loop
	
// ***************************** VIDEO TOUR MARKERS *******************************************************
	for(y in VideoTourInformation.Markers){
	// For loop placing tour markers on map
		// Create marker at tour stop		

		videoTourMarkers[y] = new google.maps.Marker({
			position: VideoTourInformation.Markers[y].latLng,
			title: VideoTourInformation.Markers[y].title,
			map: map,
			icon: "siteImages/info2.png",
		});

		videoTourMarkers[y].setVisible(false);
				
		// This is the content of the info window.
		videoTourContentString[y] = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">' + VideoTourInformation.Markers[y].title + 
		'</h1><div id="infoWindowBodyContent"><iframe title=' + VideoTourInformation.Markers[y].infoURLTitle + 
		' width="480" height="270" allowTransparency="true" mozallowfullscreen webkitallowfullscreen allowfullscreen style="background-color:transparent;" frameBorder="0" src=' + VideoTourInformation.Markers[y].infoURLLink + 
		'></iframe>' + VideoTourInformation.Markers[y].infoBoxString + '</div></div>';
				
		// When the user clicks the center marker, an info window opens.
		
		google.maps.event.addListener(videoTourMarkers[y], 'click', (function(marker, y) {
			return function() {
				infoWindow.setContent(videoTourContentString[y]);
				infoWindow.open(map, videoTourMarkers[y]);
			}
		})(videoTourMarkers[y], y));

	} //end of for loop
	
}//end of initMap