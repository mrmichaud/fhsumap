/* side bar */
// function openNav() {
//     document.getElementById("main-sidebar").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("main-sidebar").style.width = "0";
// }


$(document).ready(() => {

    /* nav-menu-layers */
    $('.nav-menu').on('click', (event) => {
        /* wether class 'main-sidebar-width' has already existed*/

        /* navbar */
        $(event.currentTarget).toggleClass('nav-text-color');
        $(event.currentTarget).toggleClass('nav-img-opacity');
        /* sidebar */
        $('#sidebar-layers').toggleClass('main-sidebar-width');

    });



    /* nav-menu-building */
    $('.nav-menu').on('click', (event) => {
        /* navbar */
        $(event.currentTarget).toggleClass('nav-text-color');
        $(event.currentTarget).toggleClass('nav-img-opacity');
        /* sidebar */
        $('#sidebar-building').toggleClass('main-sidebar-width');
    });




    /* nav-menu-direction */
    $('.nav-menu').on('click', (event) => {
        /* navbar */
        $(event.currentTarget).toggleClass('nav-text-color');
        $(event.currentTarget).toggleClass('nav-img-opacity');
        /* sidebar */
        $('#sidebar-direction').toggleClass('main-sidebar-width');
    });





    /* nav-menu-tour */
    $('.nav-menu').on('click', (event) => {
        /* navbar */
        $(event.currentTarget).toggleClass('nav-text-color');
        $(event.currentTarget).toggleClass('nav-img-opacity');
        /* sidebar */
        $('#sidebar-tour').toggleClass('main-sidebar-width');
    });

    /* nav-menu-account */
    // $('#nav-menu-account').on('click', (event) => {
    //     /* navbar */
    //     $('#nav-text-account').toggleClass('nav-text-color');
    //     $('#nav-img-account').toggleClass('nav-img-opacity');
    //     /* sidebar */
    //     $('#sidebar-account').toggleClass('main-sidebar-width');



    // }); 



    /* nav-menu-search */
    $('.nav-menu').on('click', (event) => {
        /* navbar  */
        $(event.currentTarget).toggleClass('nav-text-color');
        $(event.currentTarget).toggleClass('nav-img-opacity');
        /* sidebar */
        $('#sidebar-search').toggleClass('main-sidebar-width');

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