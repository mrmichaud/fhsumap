            var map,watchID;
            function initMap() {
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 38.870882, lng: -99.342660},
                zoom: 18
              });
            
        var marker = null;
        var showPosition = function(position) {

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var myLatlng = new google.maps.LatLng(lat, lng);
            //alert(myLatlng);
            if(marker == null){
                 var iconImage = new google.maps.MarkerImage('pic/icon49.png',
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
         //var watchID = navigator.geolocation.watchPosition(showPosition, errorHandler, options);      
             
             function errorHandler(err) {
                if(err.code == 1) {
                   alert("Error: Access is denied!");
                   //navigator.geolocation.clearWatch(watchID);
                } else if( err.code == 2) {
                   alert("Error: Position is unavailable!");
                }
             }
           
             function getLocationUpdate(){
                
                if(navigator.geolocation){ 
                   // timeout at 1000 milliseconds (1 second)
                   var options = {enableHighAcuracy: true,timeout:1000,maximumAge: 1000};              
                   watchID = navigator.geolocation.watchPosition(showPosition, errorHandler, options);
                } else {
                   alert("Sorry, browser does not support geolocation!");
                }

             }
           //setTimeout(getLocationUpdate(), 1000);
           getLocationUpdate();
  
    }
     
