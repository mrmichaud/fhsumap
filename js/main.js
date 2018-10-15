/* side bar */
// function openNav() {
//     document.getElementById("main-sidebar").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("main-sidebar").style.width = "0";
// }

$(document).ready(() => {
    $('#search').on('click', () => {
        $('#side-search').toggleClass('main-sidebar-width');
    });


});