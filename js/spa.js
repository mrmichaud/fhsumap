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
/* jQuery */
$(document).ready(() => {
    /* Toggle sidebar */
    /* Top navbar---------------------------------------------------- */
    $("#d-layers").on('click', () => {
        if ($('#s-layers').hasClass('sidebar-open')) {
            $("#d-layers").removeClass('white');
            //$("#d-layers[data-label='" + $(this).data('label') + "']").css('color', 'white');
            $('#s-layers').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-layers").addClass('white');
            $('#s-layers').addClass('sidebar-open');
        } else {
            $("#d-layers").addClass('white');
            $('#s-layers').addClass('sidebar-open');
        }
    });
    $("#d-building").on('click', () => {
        if ($('#s-building').hasClass('sidebar-open')) {
            $("#d-building").removeClass('white');
            $('#s-building').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-building").addClass('white');
            $('#s-building').addClass('sidebar-open');
        } else {
            $("#d-building").addClass('white');
            $('#s-building').addClass('sidebar-open');
        }
    });
    $("#d-parking").on('click', () => {
        if ($('#s-parking').hasClass('sidebar-open')) {
            $("#d-parking").removeClass('white');
            $('#s-parking').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-parking").addClass('white');
            $('#s-parking').addClass('sidebar-open');
        } else {
            $("#d-parking").addClass('white');
            $('#s-parking').addClass('sidebar-open');
        }
    });
    $("#d-direction").on('click', () => {
        if ($('#s-direction').hasClass('sidebar-open')) {
            $("#d-direction").removeClass('white');
            $('#s-direction').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-direction").addClass('white');
            $('#s-direction').addClass('sidebar-open');
        } else {
            $("#d-direction").addClass('white');
            $('#s-direction').addClass('sidebar-open');
        }
    });
    $("#d-tour").on('click', () => {
        if ($('#s-tour').hasClass('sidebar-open')) {
            $("#d-tour").removeClass('white');
            $('#s-tour').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-tour").addClass('white');
            $('#s-tour').addClass('sidebar-open');
        } else {
            $("#d-tour").addClass('white');
            $('#s-tour').addClass('sidebar-open');
        }
    });
    $("#d-search").on('click', () => {
        if ($('#s-search').hasClass('sidebar-open')) {
            $("#d-search").removeClass('white');
            $('#s-search').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-search").addClass('white');
            $('#s-search').addClass('sidebar-open');
        } else {
            $("#d-search").addClass('white');
            $('#s-search').addClass('sidebar-open');
        }
    });
    $("#d-hamburger").on('click', () => {
        if ($('#s-hamburger').hasClass('sidebar-open')) {
            $("#d-hamburger").removeClass('white');
            $('#s-hamburger').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-hamburger").addClass('white');
            $('#s-hamburger').addClass('sidebar-open');
        } else {
            $("#d-hamburger").addClass('white');
            $('#s-hamburger').addClass('sidebar-open');
        }
    });
    $("#d-info").on('click', () => {
        if ($('#s-info').hasClass('sidebar-open')) {
            $("#d-info").removeClass('white');
            $('#s-info').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#d-info").addClass('white');
            $('#s-info').addClass('sidebar-open');
        } else {
            $("#d-info").addClass('white');
            $('#s-info').addClass('sidebar-open');
        }
    });
    /* Bottom navbar---------------------------------------------------- */
    $("#m-layers").on('click', () => {
        if ($('#s-layers').hasClass('sidebar-open')) {
            $("#m-layers").removeClass('white');
            $('#s-layers').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-layers").addClass('white');
            $('#s-layers').addClass('sidebar-open');
        } else {
            $("#m-layers").addClass('white');
            $('#s-layers').addClass('sidebar-open');
        }
    });
    $("#m-building").on('click', () => {
        if ($('#s-building').hasClass('sidebar-open')) {
            $("#m-building").removeClass('white');
            $('#s-building').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-building").addClass('white');
            $('#s-building').addClass('sidebar-open');
        } else {
            $("#m-building").addClass('white');
            $('#s-building').addClass('sidebar-open');
        }
    });
    $("#m-parking").on('click', () => {
        if ($('#s-parking').hasClass('sidebar-open')) {
            $("#m-parking").removeClass('white');
            $('#s-parking').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-parking").addClass('white');
            $('#s-parking').addClass('sidebar-open');
        } else {
            $("#m-parking").addClass('white');
            $('#s-parking').addClass('sidebar-open');
        }
    });
    $("#m-direction").on('click', () => {
        if ($('#s-direction').hasClass('sidebar-open')) {
            $("#m-direction").removeClass('white');
            $('#s-direction').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-direction").addClass('white');
            $('#s-direction').addClass('sidebar-open');
        } else {
            $("#m-direction").addClass('white');
            $('#s-direction').addClass('sidebar-open');
        }
    });
    $("#m-tour").on('click', () => {
        if ($('#s-tour').hasClass('sidebar-open')) {
            $("#m-tour").removeClass('white');
            $('#s-tour').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-tour").addClass('white');
            $('#s-tour').addClass('sidebar-open');
        } else {
            $("#m-tour").addClass('white');
            $('#s-tour').addClass('sidebar-open');
        }
    });
    $("#m-search").on('click', () => {
        if ($('#s-search').hasClass('sidebar-open')) {
            $("#m-search").removeClass('white');
            $('#s-search').removeClass('sidebar-open')
        } else if ($('.sidebar').children().hasClass('sidebar-open')) {
            $('.sidebar').children().removeClass('sidebar-open');
            $('.nav-item').removeClass('white');
            $("#m-search").addClass('white');
            $('#s-search').addClass('sidebar-open');
        } else {
            $("#m-search").addClass('white');
            $('#s-search').addClass('sidebar-open');
        }
    });
}); /* End of jQuery */
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
// $('.nav-item').on('click', function() {
//     $('.nav-item').css('color', 'black');
//     $(".nav-item[data-label='" + $(this).data('label') + "']").css('color', 'white');
//     $('.sidebar').animate({ width: "toggle" });
// });