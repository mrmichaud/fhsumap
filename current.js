      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.870882, lng: -99.342660},
          zoom: 16
        });
        

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var iconBase = 'pic/';
            var icons = {
              currentPos: {
                icon: iconBase + 'red-circle-big.png'
              }
            };

            var features = [{
                position: pos,
                type: 'currentPos'
              }];

          // Create markers.
            features.forEach(function(feature) {
              var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
              });
            });
              

       });     
      };
    }
