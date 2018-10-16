/* sidebar design */

$(document).ready(() => {
    $('#nav-menu-layers').on('click', () => {
        if ($('#sidebar-layers').hasClass('main-sidebar-width')) {
            /* navbar */
            $('#nav-text-layers').removeClass('nav-text-color');
            $('#nav-img-layers').removeClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-layers').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
            /* $('main').children().hide(); */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-layers').addClass('nav-text-color');
            $('#nav-img-layers').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-layers').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-layers').addClass('nav-text-color');
            $('#nav-img-layers').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-layers').addClass('main-sidebar-width');
        }
    });

    $('#nav-menu-building').on('click', () => {
        if ($('#sidebar-building').hasClass('main-sidebar-width')) {
            /* navbar */
            $('#nav-text-building').removeClass('nav-text-color');
            $('#nav-img-building').removeClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-building').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
            /* $('main').children().hide(); */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-building').addClass('nav-text-color');
            $('#nav-img-building').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-building').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-building').addClass('nav-text-color');
            $('#nav-img-building').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-building').addClass('main-sidebar-width');
        }
    });

    /* Below is original code */
    // /* nav-menu-layers */
    // $('#nav-menu-layers').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-layers').toggleClass('nav-text-color');
    //     $('#nav-img-layers').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-layers').toggleClass('main-sidebar-width');
    // });

    // /* nav-menu-building */
    // $('#nav-menu-building').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-building').toggleClass('nav-text-color');
    //     $('#nav-img-building').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-building').toggleClass('main-sidebar-width');
    // });

    // /* nav-menu-direction */
    // $('#nav-menu-direction').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-direction').toggleClass('nav-text-color');
    //     $('#nav-img-direction').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-direction').toggleClass('main-sidebar-width');

    // });

    // /* nav-menu-tour */
    // $('#nav-menu-tour').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-tour').toggleClass('nav-text-color');
    //     $('#nav-img-tour').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-tour').toggleClass('main-sidebar-width');

    // });

    // /* nav-menu-account */
    // $('#nav-menu-account').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-account').toggleClass('nav-text-color');
    //     $('#nav-img-account').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-account').toggleClass('main-sidebar-width');

    // });

    //     /* nav-menu-search */
    //     $('#nav-menu-search').on('click', () => {
    //         /* navbar */
    //         $('#nav-text-search').toggleClass('nav-text-color');
    //         $('#nav-img-search').toggleClass('nav-img-opacity');
    //         /* sidebar */
    //         $('#sidebar-search').toggleClass('main-sidebar-width');

    //     });


}); /* End:  $(document).ready */


/* Google Map */
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.8714, lng: -99.3445 },
        zoom: 17
    });
}