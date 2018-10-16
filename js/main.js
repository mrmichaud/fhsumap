/* side bar */
// function openNav() {
//     document.getElementById("main-sidebar").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("main-sidebar").style.width = "0";
// }


$(document).ready(() => {




    /* nav-menu-layers */
    $('#nav-menu-layers').on('click', () => {
        /* wether class 'main-sidebar-width' exist*/
        if ($('.main-sidebar').hasClass('main-sidebar-width')) {
            /* remove class */
            $('.main-sidebar').removeClass('main-sidebar-width');
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* navbar */
            $('#nav-text-layers').toggleClass('nav-text-color');
            $('#nav-img-layers').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-layers').toggleClass('main-sidebar-width');
        }



    });

    /* nav-menu-building */
    $('#nav-menu-building').on('click', () => {
        /* wether class 'main-sidebar-width' exist*/
        if ($('.main-sidebar').hasClass('main-sidebar-width')) {
            /* remove class */
            $('.main-sidebar').removeClass('main-sidebar-width');
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* navbar */
            $('#nav-text-building').toggleClass('nav-text-color');
            $('#nav-img-building').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-building').toggleClass('main-sidebar-width');
        } else {
            /* navbar */
            $('#nav-text-building').toggleClass('nav-text-color');
            $('#nav-img-building').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-building').toggleClass('main-sidebar-width');
        }


    });

    /* nav-menu-direction */
    $('#nav-menu-direction').on('click', () => {
        /* wether class 'main-sidebar-width' exist*/
        if ($('.main-sidebar').hasClass('main-sidebar-width')) {
            /* remove class */
            $('.main-sidebar').removeClass('main-sidebar-width');
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* navbar */
            $('#nav-text-direction').toggleClass('nav-text-color');
            $('#nav-img-direction').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-direction').toggleClass('main-sidebar-width');
        } else {
            /* navbar */
            $('#nav-text-direction').toggleClass('nav-text-color');
            $('#nav-img-direction').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-direction').toggleClass('main-sidebar-width');
        }
    });

    /* nav-menu-tour */
    $('#nav-menu-tour').on('click', () => {
        /* wether class 'main-sidebar-width' exist*/
        if ($('.main-sidebar').hasClass('main-sidebar-width')) {
            /* remove class */
            $('.main-sidebar').removeClass('main-sidebar-width');
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* navbar */
            $('#nav-text-tour').toggleClass('nav-text-color');
            $('#nav-img-tour').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-tour').toggleClass('main-sidebar-width');
        } else {
            /* navbar */
            $('#nav-text-tour').toggleClass('nav-text-color');
            $('#nav-img-tour').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-tour').toggleClass('main-sidebar-width');
        }


    });

    /* nav-menu-account */
    // $('#nav-menu-account').on('click', () => {
    //     /* navbar */
    //     $('#nav-text-account').toggleClass('nav-text-color');
    //     $('#nav-img-account').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-account').toggleClass('main-sidebar-width');



    // }); 

    /* nav-menu-search */
    $('#nav-menu-search').on('click', () => {
        /* wether class 'main-sidebar-width' exist*/
        if ($('.main-sidebar').hasClass('main-sidebar-width')) {
            /* remove class */
            $('.main-sidebar').removeClass('main-sidebar-width');
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* navbar */
            $('#nav-text-search').toggleClass('nav-text-color');
            $('#nav-img-search').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-search').toggleClass('main-sidebar-width');
        } else {
            /* navbar */
            $('#nav-text-search').toggleClass('nav-text-color');
            $('#nav-img-search').toggleClass('nav-img-opacity');
            /* sidebar */
            $('#sidebar-search').toggleClass('main-sidebar-width');
        }
    });


}); /* End:  $(document).ready */


/* Google Map */
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.8714, lng: -99.3445 },
        zoom: 17
    });
}