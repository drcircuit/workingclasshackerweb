function hidePage(name) {
    var page = document.getElementById(name);
    if(page){
        page.style.display = 'none';
    }
}
function showPage(name) {
    var page = document.getElementById(name);
    if(page){
        page.style.display = 'block';
        links.forEach(function (p) {
            if(p !== name){
                hidePage(p);
            }
        });
    }
}

function navigate(event) {
    if(event.target.localName == 'a' || window.location.hash){
        var link = event.target.hash || window.location.hash;
        showPage(link.replace('#',''));
    }
}
function getAllPages() {
    var buttons = document.getElementById('menu').getElementsByTagName('a');
    var links = [];
    for(var i = 0;i < buttons.length;i++){
        links.push(buttons[i].hash.replace('#',''));
    }
    return links;
}
/**
 * Created by Espen on 7/22/2016.
 */
var links = getAllPages();
window.addEventListener('click', navigate);
window.addEventListener('load', navigate, false);