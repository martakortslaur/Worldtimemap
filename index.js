var map;
var uluru = {lat: -25.344, lng: 131.036};
var zoom_level = 3;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'),   {   center: uluru,
                                                                    zoom: zoom_level,
                                                                });
    var marker_uluru = new google.maps.Marker({position: uluru, map: map});
}