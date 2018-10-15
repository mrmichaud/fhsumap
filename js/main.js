/* side bar */
// function openNav() {
//     document.getElementById("side-nav").style.width = "250px";
// }

// function closeNav() {
//     document.getElementById("side-nav").style.width = "0";
// }

$(document).ready(() => {
    $('#search').on('click', () => {
        $('#side-search').toggle();
    });

});