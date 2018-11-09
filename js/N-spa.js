/* Add content on sidebar */


function loadContent(tab) {
    $('#sidebar').append('<div id="sidebar-' + tab + '" class="sidebar-content">' + tab + '</div>');
}

function showContent(tab) {
    $('.sidebar-content').hide();
    if ($('#sidebar').find('#sidebar-' + tab).html() == undefined) loadContent(tab);
    else $('#sidebar-' + tab).show();
}
/* Toggle sidebar */
var currentTab = 'layers';
var tabToggle = true;
$(".nav-sb-menu[data-label='layers']").css('color', 'white');
$('.nav-sb-menu').on('click', function() {
    $('.nav-sb-menu').css('color', 'black');
    if (currentTab != $(this).data('label') || !tabToggle) {
        $(".nav-sb-menu[data-label='" + $(this).data('label') + "']").css('color', 'white');
        showContent($(this).data('label'));
    }
    if (currentTab == $(this).data('label') || !tabToggle) {
        $('.sidebar').animate({ width: "toggle" });
        tabToggle = !tabToggle;
    }
    currentTab = $(this).data('label');
});

/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.8714,
            lng: -99.3445
        },
        zoom: 18
    });
}

 if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var iconBase = 'img/';
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
    
