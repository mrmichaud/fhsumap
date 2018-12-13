//     toggle.js contains the toggle functions for highlighted buildings (for search results 
// and student information), buildings, pois, polylines, polygons, parking (toggles both 
// the selected building and its nearby parking lots), circles, layers, and tours.
//     This file also contains the showParkingLotOnly(), showSearchResultsPOI(), and 
// showSearchResultsParking() functions that draws a single parking lot on the map, 
// open a selected poi and its infoWindow, open a selected parking lot and its infoWindow 
// respectively.
//
// Author: Monica Michaud
// Date: 12-13-2018
//-----------------------------------------------------------------------------------------------

//******************TOGGLE OBJECT BASED ON A GIVEN ID*****************************************

function toggleBuildingHighlighted( codeValue ) {
	var building_object_data = getBuildingByCode( codeValue );
	//check if building state is true or not
	if (buildingHighlightedStates[building_object_data.id].state) {
		//if state is true, hide building
		//get correct outlineEdge.setVisible(false);
		outlineEdgeHighlighted[building_object_data.id].setVisible(false);
		//change state to false
		buildingHighlightedStates[building_object_data.id].state = false;
		infoWindow.close();
	}
	else {
		//if state is false, draw building
		drawBuildingHighlighted (building_object_data, map);
		//change state to true
		buildingHighlightedStates[building_object_data.id].state = true;
	}
}

function toggleBuilding( idValue ) {
	var building_object_data = getBuildingObjectByID( idValue );
	//check if building state is true or not
	if (buildingStates[idValue].state) {
		//if state is true, hide building
		//get correct outlineEdge.setVisible(false);
		outlineEdge[idValue].setVisible(false);
		//change state to false
		buildingStates[idValue].state = false;
	}
	else {
		//if state is false, draw building
		drawBuilding (building_object_data, map);
		//change state to true
		buildingStates[idValue].state = true;
	}
}

function togglePOI( idValue ) {
	var poi_object_data = getPOIObjectByID( idValue );
	//check if poi state is true or not
	if (poiStates[idValue].state) {
		//if state is true, hide poiMarker
		//get correct poiMarker.setVisible(false);
		poiMarker[idValue].setVisible(false);
		//change state to false
		poiStates[idValue].state = false;
	}
	else {
		//if state is false, draw poi
		drawPOI (poi_object_data, map);
		//change state to true
		poiStates[idValue].state = true;
	}
}

function togglePolyline( idValue ) {
	var polyline_object_data = getPolylineObjectByID( idValue );
	//check if polyline state is true or not
	if (polylineStates[idValue].state) {
		//if state is true, hide polyline
		//get correct polylinePath.setVisible(false);
		polylinePath[idValue].setVisible(false);
		//change state to false
		polylineStates[idValue].state = false;
	}
	else {
		//if state is false, draw polyline
		drawPolyline (polyline_object_data, map);
		//change state to true
		polylineStates[idValue].state = true;
	}
}

function togglePolygon( idValue ) {
	var polygon_object_data = getPolygonObjectByID( idValue );
	//check if polygon state is true or not
	if (polygonStates[idValue].state) {
		//if state is true, hide polygon
		//get correct polygonOutline.setVisible(false);
		polygonOutline[idValue].setVisible(false);
		//change state to false
		polygonStates[idValue].state = false;
	}
	else {
		//if state is false, draw polygon
		drawPolygon (polygon_object_data, map);
		//change state to true
		polygonStates[idValue].state = true;
	}
}

function toggleParking( idValueOfBuilding ) {
	var building_object_data = getBuildingObjectByID( idValueOfBuilding );
	//check if parking state is true or not
	if (parkingStates[idValueOfBuilding].state) {
		//if state is true, hide parking
		if (building_object_data.nearbyParkingLots=="true" || building_object_data.parkingLotsId.length>0) {
			//console.log(building_object_data.parkingLotsId);
			for(i=0;i<building_object_data.parkingLotsId.length;i++){				
				var parking_object_data = getParkingObjectByID( building_object_data.parkingLotsId[i] );
				//get correct parkingOutline.setVisible(false);
				parkingOutline[parking_object_data.id].setVisible(false);
			}
			//get correct outlineEdge.setVisible(false);
			outlineEdge[idValueOfBuilding].setVisible(false);
			//change building state to false
			buildingStates[idValueOfBuilding].state = false;
			//change parking state to false
			parkingStates[idValueOfBuilding].state = false;
		}
	}
	else {
		//if building state is false, draw building and nearby parking lots
		if (building_object_data.nearbyParkingLots=="true" || building_object_data.parkingLotsId.length>0) {
			//console.log(building_object_data.parkingLotsId);
			for(i=0;i<building_object_data.parkingLotsId.length;i++){				
				var parking_object_data = getParkingObjectByID( building_object_data.parkingLotsId[i] );
				drawParking (parking_object_data, map);
				parkingStates[idValueOfBuilding].state = true;
			}
			drawBuilding (building_object_data, map);
			buildingStates[idValueOfBuilding].state = true;
		}
		else {
			alert("No nearby parking lots were found.");
		}	
		parkingStates[idValueOfBuilding].state = true;
	}
}

function toggleCircle( idValue ) {
	var circle_object_data = getCircleObjectByID( idValue );
	//check if circle state is true or not
	if (circleStates[idValue].state) {
		//if state is true, hide circle
		//get correct circleOutline.setVisible(false);
		circleOutline[idValue].setVisible(false);
		//change state to false
		circleStates[idValue].state = false;
	}
	else {
		//if state is false, draw circle
		drawCircle (circle_object_data, map);
		//change state to true
		circleStates[idValue].state = true;
	}	
}

function toggleLayer (  ) {
	for (var i = 0; i < arguments.length; i++) {
		//find layer object by id
		var layer_object_data = getLayerObjectByID( arguments[i]);
		//check for state (on or off)
		//loop through each element 
		//console.log(layer_object_data.elements);
		for (j=0;j<layer_object_data.elements.length;j++){
			x=layer_object_data.elements[j];
			//if type == buildings, then toggleBuilding
			if (x.type == "buildings") {
				toggleBuilding(x.id);
			}
			//if type == pois, then togglePOI
			if (x.type == "pois") {
				togglePOI(x.id);
			}
			//if type  == polylines, then togglePolyline
			if (x.type == "polylines") {
				togglePolyline(x.id);
			}
			//if type == polygons, then togglePolygon
			if (x.type == "polygons") {
				togglePolygon(x.id);
			}
			//if type == parking, then toggleParking
			if (x.type == "parking") {
				toggleParking(x.id);
			}
			//if type == circles, then toggleCircle		
			if (x.type == "circles") {
				toggleCircle(x.id);
			}
		}//end inner for loop
	}//end of for loop
	
	clearAllMapDrawings();
	redrawAllTrueStateObjects();
}

function toggleTour (  ) {
	for (var i = 0; i < arguments.length; i++) {
		//find layer object by id
		var tour_object_data = getTourObjectByID( arguments[i]);
		//check for state (on or off)
		//loop through each element 
		for (j=0;j<tour_object_data.elements.length;j++){
			x=tour_object_data.elements[j];
			//if type == buildings, then toggleBuilding
			if (x.type == "buildings") {
				toggleBuilding(x.id);
			}
			//if type == pois, then togglePOI
			if (x.type == "pois") {
				togglePOI(x.id);
			}
			//if type  == polylines, then togglePolyline
			if (x.type == "polylines") {
				togglePolyline(x.id);
			}
			//if type == polygons, then togglePolygon
			if (x.type == "polygons") {
				togglePolygon(x.id);
			}
			//if type == parking, then toggleParking
			if (x.type == "parking") {
				toggleParking(x.id);
			}
			//if type == circles, then toggleCircle		
			if (x.type == "circles") {
				toggleCircle(x.id);
			}
		}//end inner for loop
	}//end of for loop
}

//*********SHOW FUNCTIONS FOR SEARCH RESULTS - EVENTUALLY TOGGLES*********************
function showParkingLotOnly ( idValue ) {				
	var parking_object_data = getParkingObjectByID( idValue );
	drawParking (parking_object_data, map);
}

function showSearchResultsPOI ( idValue ) {
	togglePOI( idValue );
	openInfoWindowPOI( idValue );
}

function showSearchResultsParking ( idValue ) {
	showParkingLotOnly ( idValue );
	openInfoWindowParking( idValue );
}