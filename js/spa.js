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
/* Toggle sidebar */
// $('.nav-item').on('click', function(event) {
//     //$(event.currentTarget).css('color', 'white');
//     if ($(event.currentTarget).css('color', 'black')) {

//         $(event.currentTarget).css('color', 'white');
//         $('#sidebar-content').addClass('sidebar-open');
//     } else if ($(event.currentTarget).css('color', 'white')) {
//         $(event.currentTarget).css('color', 'black');

//         $('#sidebar-content').removeClass('.sidebar-open');
//         // $(event.currentTarget).css('color', 'white')
//         // $('.sidebar').addClass('.sidebar-open');
//     }
//     //else {
//     //     $(event.currentTarget).css('color', 'white')
//     //     $('.sidebar').removeClass('.sidebar-open');
//     // }
// });

/* teacher's code */
$('.nav-item').on('click', function() {
    $('.nav-item').css('color', 'black');
    $(".nav-item[data-label='" + $(this).data('label') + "']").css('color', 'white');
    $('.sidebar').animate({ width: "toggle" });
});