var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    },
    locationInput = document.querySelector("#location");

var map = new kakao.maps.Map(mapContainer, mapOption);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude;

        var locPosition = new kakao.maps.LatLng(lat, lon);

        displayMarker(locPosition);
        locationInput.value = JSON.stringify(locPosition);
    });
} else {
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

    displayMarker(locPosition, message);
    locationInput.value = JSON.stringify(locPosition);
}

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

        locationInput.value = JSON.stringify(latlng);
    });
}
