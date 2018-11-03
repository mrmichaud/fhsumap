function loadContent(tab) {
    $('#sidebar').append('<div id="sidebar-' + tab + '" class="sidebar-content">' + tab + '</div>');

}

function showContent(tab) {
    $('.sidebar-content').hide();
    if ($('#sidebar').find('#sidebar-' + tab).html() == undefined) loadContent(tab);
    else $('#sidebar-' + tab).show();
}

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