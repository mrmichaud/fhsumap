//-----------------------------------------------------------------------------------------------
// interactions.js contains the functions that allow for toggling of the categories on the map 
// menu.
//
// This includes: selectCategory (calls toggle____ for a selected category), selectBuilding, 
// unselectBuilding, clearAllCategoryContents, and show, hide, and toggle 
// functions for each category on the map menu.
//
// Author: Monica Michaud
// Date: 5-1-2018
//-----------------------------------------------------------------------------------------------

//Information 
function information() {
	//alert("Created by Monica Michaud\nIn the Institute for New Media Studies\nAdviser: Gordon Carlson, PhD\nDev Version: 0.2 (Apr 25)");

	var mapInfoBoxString;
	
	mapInfoBoxString = '<div id="content"><h1 id="infoWindowHeading" class="infoWindowHeading">Information : </h1>' +
		'<div id="infoWindowBodyContent"><p>Created by Monica Michaud <br /> In the Institute for New Media Studies <br /> Adviser: Gordon Carlson, PhD <br /> Dev Version: 0.2 (Apr 25)</p></div></div>';
	
	map.setCenter(MAP_CENTER_COORDINATES); 
	infoWindow.setContent(mapInfoBoxString);
	infoWindow.setPosition(MAP_CENTER_COORDINATES);
	infoWindow.open(map);
}

//Campus Tour
function showCampusTour() {
	active_CampusTour = true;
	campusTourPath.setVisible(active_CampusTour);
	showTourMarkers();
	//map.setZoom(MAP_ZOOM - 1);
	map.setZoom(MAP_ZOOM);
	map.setCenter(new google.maps.LatLng(38.87232, -99.34185));
}
function hideCampusTour() {
	active_CampusTour = false;
	campusTourPath.setVisible(active_CampusTour);
	hideTourMarkers();
	infoWindow.close();
	//$('#menuOption_campusTour').removeClass("active");
}
function tourToggle( variable ) {
	if(active_CampusTour){
		hideCampusTour();
	}
	else {
		showCampusTour();
	}
	campusTourPath.setVisible(active_CampusTour);	
}

//Tour Markers
function showTourMarkers() {
	active_TourMarkers = true;
	for(y in CampusTourInformation.Markers){
		tourMarkers[y].setVisible(active_TourMarkers);
	}
}
function hideTourMarkers() {
	active_TourMarkers = false;
	for(y in CampusTourInformation.Markers){
		tourMarkers[y].setVisible(active_TourMarkers);
	}
}
//-------------------------------------------------------------------------------
// Video Tour 
function showVideoTour() {
	active_VideoTour = true;
	videoTourPath.setVisible(active_VideoTour);
	showVideoTourMarkers();
	//map.setZoom(MAP_ZOOM - 1);
	map.setZoom(MAP_ZOOM);
	map.setCenter(new google.maps.LatLng(38.87232, -99.34185));
}
function hideVideoTour() {
	active_VideoTour = false;
	videoTourPath.setVisible(active_VideoTour);
	hideVideoTourMarkers();
	infoWindow.close();
	//$('#menuOption_videoTour').removeClass("active");
}
function videoTourToggle( variable ) {
	if(active_VideoTour){
		hideVideoTour();
	}
	else {
		showVideoTour();
	}
	videoTourPath.setVisible(active_VideoTour);	
}

//Video Tour Markers
function showVideoTourMarkers() {
	active_VideoTourMarkers = true;
	for(y in VideoTourInformation.Markers){
		videoTourMarkers[y].setVisible(active_VideoTourMarkers);
	}
}
function hideVideoTourMarkers() {
	active_VideoTourMarkers = false;
	for(y in VideoTourInformation.Markers){
		videoTourMarkers[y].setVisible(active_VideoTourMarkers);
	}
}
//-------------------------------------------------------------------------------
function hideParking(parkingingCode){
	active_CampusParking = false;
	for (x in CampusParkingInformation){
		//unhighlightSingleBuilding( CampusParkingInformation[x].code );
		
		parkingOutline[x].setOptions({
			strokeColor: PARKING_UNSELECTED_BORDER_COLOR,
			strokeOpacity: PARKING_UNSELECTED_BORDER_OPACITY,
			strokeWeight: PARKING_UNSELECTED_BORDER_SIZE,
			fillColor: 	PARKING_UNSELECTED_FILL_COLOR,
			fillOpacity: PARKING_UNSELECTED_FILL_OPACITY
		});	
		parkingOutline[x].setVisible(false);
	}
}
function showParking(parkingCode){
	active_CampusParking = true;

	for (x in CampusParkingInformation){
		//highlightSingleBuilding( CampusParkingInformation[x].code );
		//window.alert("In showParking... " + parkingCode + " x " + x + " parkingOutline[] " + parkingOutline[x]);
		parkingOutline[x].setOptions({
			strokeColor: PARKING_SELECTED_BORDER_COLOR,
			strokeOpacity: PARKING_SELECTED_BORDER_OPACITY,
			strokeWeight: PARKING_SELECTED_BORDER_SIZE,
			fillColor: 	PARKING_SELECTED_FILL_COLOR,
			fillOpacity: PARKING_SELECTED_FILL_OPACITY
		});	
		parkingOutline[x].setVisible(true);
	}
}

function toggleParking( variable ) {
	if(active_CampusParking){
		for (x in CampusParkingInformation){
			hideParking(CampusParkingInformation[x].parkingName);
		}
	}
	else {
		for (x in CampusParkingInformation){
			showParking(CampusParkingInformation[x].parkingName);
		}
	}
}
//-------------------------------------------------------------------------------

function categoryToggle( category ) {
	//window.alert("In categoryToggle... category is: " + category);
	//see if category is in activeCategories already, if so remove, if not push
	var index = activeCategories.indexOf( category );
	
	if ( index < 0 ) { // category is not yet in activeCategories, so push
		activeCategories.push( category );
	}
	else {
		activeCategories.splice( index, 1 );
	}
	
	//alert("activeCategories: " + activeCategories);
	if (category == 'campusTour'){
		tourToggle(category);
		hideVideoTour();
		//----------------ADDED------------------
		/*
		if ( ($("#menuOption_videoTour").hasClass("active")) ){
			$('#menuOption_videoTour').removeClass("active");
			hideVideoTourMarkers()
		}
		else {
			showTourMarkers();
		}
		*/
		//---------------- END ADDED------------------
	}
	else if (category == 'videoTour'){
		videoTourToggle(category);
		hideCampusTour();
		//----------------ADDED------------------
		/*
		if ( ($("#menuOption_campusTour").hasClass("active")) ){
			$('#menuOption_campusTour').removeClass("active");
			hideTourMarkers()
		}
		else {
			showVideoTourMarkers();
		}
		*/
		//----------------END ADDED------------------
	}
	else if (category == 'parking'){
		toggleParking( category );
	}
	else{
		redrawBuildings( category );
	}
	
	
}

function redrawBuildings( category ) {
	var x;
	var y;
	var z;
	var outputText = "";
	var showBuilding = false;
	
	for (x in CampusBuildingData){
		//outputText = outputText + myObj[x].code + ": " + "(" + myObj[x].menuCategories + "),  ";
		for (y in CampusBuildingData[x].menuCategories){
			showBuilding = false;
			for (z = 0; z < activeCategories.length ; z++) { 
				if( CampusBuildingData[x].menuCategories.indexOf(activeCategories[z]) >= 0 ){
					showBuilding = true;
				}
			} // end of z loop
			
			if(showBuilding){
				highlightSingleBuilding( CampusBuildingData[x].code );
			}
			else{
				unhighlightSingleBuilding( CampusBuildingData[x].code );
			}	
		} // end for loop through y in x's menuCategories
	} // end for loop through buildings x
}

function highlightSingleBuilding( buildingCode ) {
	
	outlineEdge[buildingCode].setOptions({
		strokeColor: BUILDING_SELECTED_BORDER_COLOR,
		strokeOpacity: BUILDING_SELECTED_BORDER_OPACITY,
		strokeWeight: BUILDING_SELECTED_BORDER_SIZE,
		fillColor: 	BUILDING_SELECTED_FILL_COLOR,
		fillOpacity: BUILDING_SELECTED_FILL_OPACITY
	});			
}

function unhighlightSingleBuilding( buildingCode ) {
	
	outlineEdge[buildingCode].setOptions({
		strokeColor: BUILDING_UNSELECTED_BORDER_COLOR,
		strokeOpacity: BUILDING_UNSELECTED_BORDER_OPACITY,
		strokeWeight: BUILDING_UNSELECTED_BORDER_SIZE,
		fillColor: 	BUILDING_UNSELECTED_FILL_COLOR,
		fillOpacity: BUILDING_UNSELECTED_FILL_OPACITY
	});	
}

function clearAllMapContents() {
	clearSearchResults(categoryStateBeforeSearch, walkingStateBeforeSearch);
	for ( cat in activeCategories ){
		$("#menuOption_"+activeCategories[cat]).toggleClass("active");
	}
	clearAllCategoryContents();
	clearDirections();
}

function clearSearchResults(categoryStateBeforeSearch, walkingStateBeforeSearch) {
	
	//hide searchResultsContainer and searchResultsOption
	$("#searchResultsContainer").empty(); 
	$("#searchTitleBar").hide(); 
	$("#headerSearchBarInput").val('');

	if(categoryStateBeforeSearch){
		$("#categoryToggleMenu").show();
	}
	if(walkingStateBeforeSearch){
		$("#walkingToggleMenu").show();
	}
	infoWindow.close();
}

function clearAllCategoryContents() {
	//for all buildings unhighlightSingleBuilding()
	hideCampusTour(); 
	hideVideoTour();
	hideParking();
	
	var x;
	var code = "";
	
	for (x in CampusBuildingData){
		unhighlightSingleBuilding( CampusBuildingData[x].code );
	}
	
	activeCategories = [];
	
	
	map.setOptions({
		center: new google.maps.LatLng(38.8731,  -99.34238),
		zoom: MAP_ZOOM
	});
	infoWindow.close();
	
}



function hideWalkingMarkers () {
	for (x = 0; x < markerArray.length; x++){
		markerArray[x].setVisible(false);
	}
}

function showWalkingMarkers () {
	for (x = 0; x < markerArray.length; x++){
		markerArray[x].setVisible(true);
	}
}

function toggleWalkingMarkers () {
	for (x = 1; x< markerArray.length; x++){
		markerArray[x].setVisible(!markerArray[x].getVisible());
	}
}