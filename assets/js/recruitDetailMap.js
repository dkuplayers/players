var container = document.getElementById("map");
var latitude = document.querySelector("#latitude").value;
var longitude = document.querySelector("#longitude").value;

var parsedLat = parseFloat(latitude);
var parsedLng = parseFloat(longitude);

var options = {
    center: new kakao.maps.LatLng(parsedLng, parsedLat),
    level: 3
};
var map = new kakao.maps.Map(container, options);

var markerPosition = new kakao.maps.LatLng(parsedLng, parsedLat);

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);
