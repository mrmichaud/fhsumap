/* jQuery */
$(document).ready(() => {
    /* sidebar design */
    /* #sidebar-layers */
    $('#nav-menu-layers').on('click', () => {
        if ($('#sidebar-layers').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-layers').removeClass('nav-text-color');
            $('#nav-img-layers').removeClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-layers').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
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
    }); /* End: $('#nav-menu-layers').on */
    /* #sidebar-building */
    $('#nav-menu-building').on('click', () => {
        if ($('#sidebar-building').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-building').removeClass('nav-text-color');
            $('#nav-img-building').removeClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-building').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
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
    }); /* End: $('#nav-menu-building').on */
    /* #sidebar-direction */
    $('#nav-menu-direction').on('click', () => {
        if ($('#sidebar-direction').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-direction').removeClass('nav-text-color');
            $('#nav-img-direction').removeClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-direction').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-direction').addClass('nav-text-color');
            $('#nav-img-direction').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-direction').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-direction').addClass('nav-text-color');
            $('#nav-img-direction').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-direction').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-direction').on */
    /* #sidebar-tour */
    $('#nav-menu-tour').on('click', () => {
        if ($('#sidebar-tour').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-tour').removeClass('nav-text-color');
            $('#nav-img-tour').removeClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-tour').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-tour').addClass('nav-text-color');
            $('#nav-img-tour').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-tour').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-tour').addClass('nav-text-color');
            $('#nav-img-tour').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-tour').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-tour').on */
    /* #sidebar-search */
    $('#nav-menu-search').on('click', () => {
        if ($('#sidebar-search').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-search').removeClass('nav-text-color');
            $('#nav-img-search').removeClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-search').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('nav-img-opacity');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-search').addClass('nav-text-color');
            $('#nav-img-search').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-search').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-search').addClass('nav-text-color');
            $('#nav-img-search').addClass('nav-img-opacity');
            /* self::sidebar */
            $('#sidebar-search').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-search').on */
}); /* End: $(document).ready */

/* Google Map */
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.8714, lng: -99.3445 },
        zoom: 17
    });
}