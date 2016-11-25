var myLatLng;
var map;

function initMap() {

   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -38.026344171229276, lng: -57.53535084921265},
    scrollwheel: false,
    zoom: 16,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"},{"color":"#00858a"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f6ebcb"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#f7f1df"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3dd9d"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#f8a179"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#e6dcbd"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#3dbbc2"}]}]
  });
  agregarMarkers();
}

function agregarMarkers(){
  var image = "images/ico/marker.png";

  myLatLng = {lat: -38.0267288, lng: -57.535148};
  var austral = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'HOSTEL PLAYA GRANDE AUSTRAL'
  });
  myLatLng = {lat: -38.0259216, lng: -57.53451399999999};
  var suites = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'HOSTEL PLAYA GRANDE SUITES'
  });
  myLatLng = {lat: -38.0276902, lng: -57.53549659999999};
  var playaGrande = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'HOSTEL PLAYA GRANDE'
  });

}

$(document).ready(initMap());
