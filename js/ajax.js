let sidebarContainer = document.getElementById("js-sidebar");

let request = new XMLHttpRequest();
request.open('GET', 'json/tiger.json', true);
request.onload = function(){
    let data = request.responseText;
};
request.send();