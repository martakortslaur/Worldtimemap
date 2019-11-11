var map;
var zoom_level = 8;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {zoom: zoom_level
    });
}