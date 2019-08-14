var mapContainer = document.getElementById("map");
var latitude = document.querySelector("#latitude").value;
var longitude = document.querySelector("#longitude").value;

var parsedLat = parseFloat(latitude);
var parsedLng = parseFloat(longitude);

var mapOption = {
    center: new kakao.maps.LatLng(parsedLng, parsedLat), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};
var latitudeInput = document.querySelector("#latitude");
var longitudeInput = document.querySelector("#longitude");

var map = new kakao.maps.Map(mapContainer, mapOption);

var locPosition = new kakao.maps.LatLng(parsedLng, parsedLat);

displayMarker(locPosition);

function displayMarker(locPosition) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
    });

    map.setCenter(locPosition);

    kakao.maps.event.addListener(map, "click", function(mouseEvent) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        var latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        const { Ga: latitudeValue, Ha: longitudeValue } = latlng;
        console.log(latlng);
        latitudeInput.value = JSON.stringify(latitudeValue);
        longitudeInput.value = JSON.stringify(longitudeValue);
    });
}
