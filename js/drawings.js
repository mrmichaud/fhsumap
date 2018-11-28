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
// Date: 11-28-2018
//-----------------------------------------------------------------------------------------------

function initMap() {
	
	//create map object
	//set default map settings
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
	
	
	
	
	//draw a mrker on the screen
	function DrawMarker ( positionValue, titleValue ) {
		
		//create marker
		//use passed values
		markersCenter = new google.maps.Marker({
			position: positionValue,
			title: titleValue,
			map: map,
		});
		markersCenter.setVisible(true);
		
	}
	
	
	
	
	DrawMarker(	{"lat": 38.87396, "lng": -99.34064}, "Center" );
	
		
}//end of initMap