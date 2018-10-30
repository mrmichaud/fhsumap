var ws = window.innerWidth < 400 ? 0 : 1;
console.log(ws);
$(window).resize(function() {
    console.log(window.innerWidth);
    if (ws != 0 && window.innerWidth < 400) {
        alert('mobile');
        ws = 0;
    }
    if (ws != 1 && window.innerWidth >= 400) {
        alert('desktop');
        ws = 1;
    }
});
