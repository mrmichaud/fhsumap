// infoBoxString, picture, infoLinkString, and campusTourCoordinates.
//
// ************************NEED TO UPDATE COMMENTS ABOVE**********************
// Author: Monica Michaud
// Date: 12-4-2018
//-----------------------------------------------------------------------------------------------


//******************TOGGLE OBJECT BASED ON A GIVEN ID*****************************************


function toggleBuilding( idValue ) {
	console.log("Made it to toggle building");
	var building_object_data = getBuildingID( idValue );
	drawBuilding (building_object_data.buildingOutline, map);
}

function togglePOI( idValue ) {
	console.log("Made it to toggle");
	var poi_object_data = getPOIID( idValue );
	drawPOI (poi_object_data.latLng, poi_object_data.title, map);
}

function togglePolyline( idValue ) {
	console.log("Made it to toggle");
	var polyline_object_data = getPolylineID( idValue );
	drawPolyline (polyline_object_data.latLngArray, map);
}

function togglePolygon( idValue ) {
	console.log("Made it to toggle");
	var polygon_object_data = getPolygonID( idValue );
	drawPolygon (polygon_object_data.outline, map);
}

function toggleParking( idValueOfBuilding ) {
	console.log("Made it to toggle" + idValueOfBuilding);
	var building_object_data = getBuildingID( idValueOfBuilding );
	if (building_object_data.nearbyParkingLots=="true" || building_object_data.parkingLotsId.length>0) {
		console.log(building_object_data.parkingLotsId);
		for(i=0;i<building_object_data.parkingLotsId.length;i++){
			console.log(building_object_data.parkingLotsId[i]);
			var parking_object_data = getParkingID( building_object_data.parkingLotsId[i] );
			drawParking (parking_object_data.parkingOutline, map);
		}
	}
	else {
		alert("No nearby parking lots were found.");
	}	
}

function toggleCircle( idValue ) {
	console.log("Made it to toggle");
	var circle_object_data = getCircleID( idValue );
	drawCircle (circle_object_data.latLngCenter, circle_object_data.radius, map);
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