// infoBoxString, picture, infoLinkString, and campusTourCoordinates.
//
// ************************NEED TO UPDATE COMMENTS ABOVE**********************
// Author: Monica Michaud
// Date: 12-5-2018
//-----------------------------------------------------------------------------------------------


//******************TOGGLE OBJECT BASED ON A GIVEN ID*****************************************


function toggleBuilding( idValue ) {
	var building_object_data = getBuildingID( idValue );
	console.log(building_object_data);
	drawBuilding (building_object_data, map);
}

function togglePOI( idValue ) {
	var poi_object_data = getPOIID( idValue );
	drawPOI (poi_object_data, map);
}

function togglePolyline( idValue ) {
	var polyline_object_data = getPolylineID( idValue );
	drawPolyline (polyline_object_data, map);
}

function togglePolygon( idValue ) {
	var polygon_object_data = getPolygonID( idValue );
	drawPolygon (polygon_object_data, map);
}

function toggleParking( idValueOfBuilding ) {
	var building_object_data = getBuildingID( idValueOfBuilding );
	if (building_object_data.nearbyParkingLots=="true" || building_object_data.parkingLotsId.length>0) {
		//console.log(building_object_data.parkingLotsId);
		for(i=0;i<building_object_data.parkingLotsId.length;i++){
			//console.log(building_object_data.parkingLotsId[i]);
			drawBuilding (building_object_data, map);
			var parking_object_data = getParkingID( building_object_data.parkingLotsId[i] );
			drawParking (parking_object_data, map);
		}
	}
	else {
		alert("No nearby parking lots were found.");
	}	
}

function toggleCircle( idValue ) {
	var circle_object_data = getCircleID( idValue );
	drawCircle (circle_object_data, map);
}

function toggleLayer (  ) {
	
	for (var i = 0; i < arguments.length; i++) {
		//find layer object by id
		var layer_object_data = getLayerID( arguments[i]);
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
}

function toggleTour (  ) {
	for (var i = 0; i < arguments.length; i++) {
		//find layer object by id
		var tour_object_data = getTourID( arguments[i]);
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