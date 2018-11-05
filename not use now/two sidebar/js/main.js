/* jQuery */
$(document).ready(() => {

    /* desk sidebar design */

    /* #section-sidebar-hamburger */
    $('#desk-nav-menu-hamburger').on('click', () => {
        if ($('#desk-nav-img-hamburger').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-hamburger').removeClass('desk-nav-text-color');
            $('#desk-nav-img-hamburger').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-hamburger').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-hamburger').addClass('desk-nav-text-color');
            $('#desk-nav-img-hamburger').addClass('filter');
            /* self::sidebar */
            $('#sidebar-hamburger').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-hamburger').addClass('desk-nav-text-color');
            $('#desk-nav-img-hamburger').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-hamburger').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-hamburger').on */
    /* #section-sidebar-search */
    $('#desk-nav-menu-search').on('click', () => {
        if ($('#desk-nav-img-search').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-search').removeClass('desk-nav-text-color');
            $('#desk-nav-img-search').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-search').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-search').addClass('desk-nav-text-color');
            $('#desk-nav-img-search').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-search').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-search').addClass('desk-nav-text-color');
            $('#desk-nav-img-search').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-search').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-search').on */
    /* #section-sidebar-layers */
    $('#desk-nav-menu-layers').on('click', () => {
        if ($('#desk-nav-img-layers').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-layers').removeClass('desk-nav-text-color');
            $('#desk-nav-img-layers').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-layers').addClass('desk-nav-text-color');
            $('#desk-nav-img-layers').addClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-layers').addClass('desk-nav-text-color');
            $('#desk-nav-img-layers').addClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-layers').on */
    /* #section-sidebar-building */
    $('#desk-nav-menu-building').on('click', () => {
        if ($('#desk-nav-img-building').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-building').removeClass('desk-nav-text-color');
            $('#desk-nav-img-building').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-building').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-building').addClass('desk-nav-text-color');
            $('#desk-nav-img-building').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-building').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-building').addClass('desk-nav-text-color');
            $('#desk-nav-img-building').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-building').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-building').on */
    /* #section-sidebar-parking */
    $('#desk-nav-menu-parking').on('click', () => {
        if ($('#desk-nav-img-parking').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-parking').removeClass('desk-nav-text-color');
            $('#desk-nav-img-parking').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-parking').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-parking').addClass('desk-nav-text-color');
            $('#desk-nav-img-parking').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-parking').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-parking').addClass('desk-nav-text-color');
            $('#desk-nav-img-parking').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-parking').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-parking').on */
    /* #section-sidebar-direction */
    $('#desk-nav-menu-direction').on('click', () => {
        if ($('#desk-nav-img-direction').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-direction').removeClass('desk-nav-text-color');
            $('#desk-nav-img-direction').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-direction').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-direction').addClass('desk-nav-text-color');
            $('#desk-nav-img-direction').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-direction').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-direction').addClass('desk-nav-text-color');
            $('#desk-nav-img-direction').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-direction').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-direction').on */
    /* #section-sidebar-tour */
    $('#desk-nav-menu-tour').on('click', () => {
        if ($('#desk-nav-img-tour').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-tour').removeClass('desk-nav-text-color');
            $('#desk-nav-img-tour').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-tour').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-tour').addClass('desk-nav-text-color');
            $('#desk-nav-img-tour').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-tour').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-tour').addClass('desk-nav-text-color');
            $('#desk-nav-img-tour').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-tour').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-tour').on */

    /* #section-sidebar-info */
    $('#desk-nav-menu-info').on('click', () => {
        if ($('#desk-nav-img-info').hasClass('filter')) {
            /* self::navbar */
            $('#desk-nav-text-info').removeClass('desk-nav-text-color');
            $('#desk-nav-img-info').removeClass('filter');
            /* self::sidebar */
            $('#section-sidebar-info').removeClass('section-sidebar-width');
        } else if ($('.desk-nav-menu').children().hasClass('filter')) {
            /* the other navbar */
            $('.desk-nav-text').removeClass('desk-nav-text-color');
            $('.desk-nav-img').removeClass('filter');
            /* the other sidebar */
            $('section').children().removeClass('section-sidebar-width');
            /* self::navbar */
            $('#desk-nav-text-info').addClass('desk-nav-text-color');
            $('#desk-nav-img-info').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-info').addClass('section-sidebar-width');
        } else {
            /* self::navbar */
            $('#desk-nav-text-info').addClass('desk-nav-text-color');
            $('#desk-nav-img-info').addClass('filter');
            /* self::sidebar */
            $('#section-sidebar-info').addClass('section-sidebar-width');
        }
    }); /* End: $('#desk-nav-menu-info').on */

    /* mobile sidebar design */

    /* #sidebar-hamburger */
    $('#nav-menu-hamburger').on('click', () => {
        if ($('#sidebar-hamburger').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-hamburger').removeClass('nav-text-color');
            $('#nav-img-hamburger').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-hamburger').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-hamburger').addClass('nav-text-color');
            $('#nav-img-hamburger').addClass('filter');
            /* self::sidebar */
            $('#sidebar-hamburger').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-hamburger').addClass('nav-text-color');
            $('#nav-img-hamburger').addClass('filter');
            /* self::sidebar */
            $('#sidebar-hamburger').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-layers').on */
    /* #sidebar-layers */
    $('#nav-menu-layers').on('click', () => {
        if ($('#sidebar-layers').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-layers').removeClass('nav-text-color');
            $('#nav-img-layers').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-layers').addClass('nav-text-color');
            $('#nav-img-layers').addClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-layers').addClass('nav-text-color');
            $('#nav-img-layers').addClass('filter');
            /* self::sidebar */
            $('#sidebar-layers').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-layers').on */
    /* #sidebar-building */
    $('#nav-menu-building').on('click', () => {
        if ($('#sidebar-building').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-building').removeClass('nav-text-color');
            $('#nav-img-building').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-building').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-building').addClass('nav-text-color');
            $('#nav-img-building').addClass('filter');
            /* self::sidebar */
            $('#sidebar-building').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-building').addClass('nav-text-color');
            $('#nav-img-building').addClass('filter');
            /* self::sidebar */
            $('#sidebar-building').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-building').on */
    /* #sidebar-parking */
    $('#nav-menu-parking').on('click', () => {
        if ($('#sidebar-parking').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-parking').removeClass('nav-text-color');
            $('#nav-img-parking').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-parking').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-parking').addClass('nav-text-color');
            $('#nav-img-parking').addClass('filter');
            /* self::sidebar */
            $('#sidebar-parking').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-parking').addClass('nav-text-color');
            $('#nav-img-parking').addClass('filter');
            /* self::sidebar */
            $('#sidebar-parking').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-parking').on */
    /* #sidebar-direction */
    $('#nav-menu-direction').on('click', () => {
        if ($('#sidebar-direction').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-direction').removeClass('nav-text-color');
            $('#nav-img-direction').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-direction').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-direction').addClass('nav-text-color');
            $('#nav-img-direction').addClass('filter');
            /* self::sidebar */
            $('#sidebar-direction').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-direction').addClass('nav-text-color');
            $('#nav-img-direction').addClass('filter');
            /* self::sidebar */
            $('#sidebar-direction').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-direction').on */
    /* #sidebar-tour */
    $('#nav-menu-tour').on('click', () => {
        if ($('#sidebar-tour').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-tour').removeClass('nav-text-color');
            $('#nav-img-tour').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-tour').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-tour').addClass('nav-text-color');
            $('#nav-img-tour').addClass('filter');
            /* self::sidebar */
            $('#sidebar-tour').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-tour').addClass('nav-text-color');
            $('#nav-img-tour').addClass('filter');
            /* self::sidebar */
            $('#sidebar-tour').addClass('main-sidebar-width');
        }
    }); /* End: $('#nav-menu-tour').on */
    /* #sidebar-search */
    $('#nav-menu-search').on('click', () => {
        if ($('#sidebar-search').hasClass('main-sidebar-width')) {
            /* self::navbar */
            $('#nav-text-search').removeClass('nav-text-color');
            $('#nav-img-search').removeClass('filter');
            /* self::sidebar */
            $('#sidebar-search').removeClass('main-sidebar-width');
        } else if ($('main').children().hasClass('main-sidebar-width')) {
            /* the other navbar */
            $('.nav-text').removeClass('nav-text-color');
            $('.nav-img').removeClass('filter');
            /* the other sidebar */
            $('main').children().removeClass('main-sidebar-width');
            /* self::navbar */
            $('#nav-text-search').addClass('nav-text-color');
            $('#nav-img-search').addClass('filter');
            /* self::sidebar */
            $('#sidebar-search').addClass('main-sidebar-width');
        } else {
            /* self::navbar */
            $('#nav-text-search').addClass('nav-text-color');
            $('#nav-img-search').addClass('filter');
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