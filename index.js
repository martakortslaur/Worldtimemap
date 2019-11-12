function initMap() {
    var options = {
        zoom:8,
        center:{lat:51.476852, lng: -0.000500}
    }
    //New map
    var map = new
    google.maps.Map(document.getElementById('map'),  options);
    
    //Listen for click on map
    google.maps.event.addListener(map, 'click',
    function(event){
        //Add marker
        addMarker({coords:event.latLng});
    });
    // Add marker                                                               });
    // var marker_greenwich = new google.maps.Marker({position: greenwich, map: map});

    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<h1>Greenwich Royal Observatory</h1>'
    // });

    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    // });

    // Array of markers
    var markers = [
        {
        coords:{lat: 51.476852,lng: -0.000500},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<h1>Greenwich</p>'
        },
        {
        coords:{lat:49.6116,lng:6.1319},
        content:'<h1>Luxembourg</h1>'
        }

    ];
    //Loop through markers
    for(var i = 0;i < markers.length;i++){
        //Add marker
        addMarker(markers[i]);
    }
    
    // Add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        // icon: props.iconImage

    });
    // Check for customicon
    if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
    }

    //Check content
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
         content:props.content
     });

     marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}

}
}