var map = L.map('map').
    setView([41.6548, -0.9080],
    15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

var circle = L.circle([41.65465, -0.9075], {
    color: 'rgba(88, 88, 88, 0.76)',
    fillOpacity: 0.2,
    radius: 250
}).addTo(map);

var popup = L.popup()
.setLatLng([41.65465, -0.9075])
.setContent("¿Te gusta la escalada?" + "<br>" + "      "+ "¡Ven a conocernos!")
.openOn(map);