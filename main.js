var map = L.map('map').setView([-18.913756, 47.515945], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Load your OSM file here
fetch('map.osm')
    .then(response => response.text())
    .then(osmData => {
        var geojson = osmtogeojson(osmData);
        L.geoJSON(geojson).addTo(map);
    });
