let sidebarContainer = document.getElementById("js-sidebar");

let request = new XMLHttpRequest();
request.open('GET', 'json/real.json', true);
request.onload = function() {
    console.log(request.responseText);
    //let data = request.responseText;
};
request.send();
