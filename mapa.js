var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});
var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});
var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
});

var thetrail = L.geoJSON(trail, {
    color: 'red',
    weight: 3,
});

thetrail.bindTooltip('Roraima');

var map = L.map(document.getElementById('map'), {
    center: [1.90054, -60.6714],
    zoom: 7,
    layers: [thetrail, basemap]
});

var coordDIV = document.createElement('div');
coordDIV.id = 'mapCoordDIV';
coordDIV.style.position = 'absolute';
coordDIV.style.bottom = '20px';
coordDIV.style.left = '79.5%';
coordDIV.style.zIndex = '900';
coordDIV.style.backgroundColor = '#fff';
coordDIV.style.fontSize = '15px';
coordDIV.style.width = '310px';
coordDIV.style.textAlign = 'center';
coordDIV.style.borderRadius = '7px';

document.getElementById('map').appendChild(coordDIV);

map.on('mousemove', function(e){
    var lat = e.latlng.lat.toFixed(6);
    var lon = e.latlng.lng.toFixed(6);
    document.getElementById('mapCoordDIV').innerHTML ='Latitude: ' + lat + ' / Longitude: ' + lon;
});

var baselayers = {
    'Shaded Relief': baserelief,
    'National Map topo': basetopo,
    'BaseMap':basemap
};

var overlays = {
    'The Trail': thetrail
};

L.control.layers(baselayers, overlays, {position: 'topleft'}).addTo(map);


/*var scale = L.control.scale()
scale.addTo(map)*/

map.attributionControl.addAttribution('National Map Topo');
map.attributionControl.addAttribution('OpenTopoMap');   
