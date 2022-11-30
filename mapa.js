(function() {

    var cood = new L.LayerGroup();
    L.geoJSON(trail, {
      color: "red",
      weight: 3,
      }).addTo(cood);
      

     var ror = L.geoJSON(tr, {
      style: function(feature) {
        switch (feature.properties.id) {
            case '1400027': return {color: "black"};
            case '1400050': return {color: "red"};
        }
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup('<h4>'+feature.properties.id+'</h4><p>name: '+feature.properties.name+'</p>');
      }
        });

    var limit = new L.LayerGroup();
    var geojsonLayer = new L.GeoJSON();

    function handleJson(data) {
    console.log(data)
    geojsonLayer.addData(data);
    }
    
    $.ajax({
    url : "http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:view_terras_indigenas&maxFeatures=50&outputFormat=text/javascript&format_options=callback:getJson",
    dataType : 'jsonp',
    jsonpCallback: 'getJson',
    success : handleJson
    });
    
    geojsonLayer.addTo(limit);

  

    var cmAttr = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
      cmUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/{styleId}/256/{z}/{x}/{y}.png';
  
      var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});




    var map = L.map(document.getElementById('map'), {
      center: [1.50054, -60.6714],
      zoom: 7,
      layers: [basemap, ror]
    });

    var coordDIV = document.createElement('div');
      coordDIV.id = 'mapCoordDIV';
      coordDIV.style.position = 'absolute';
      coordDIV.style.bottom = '8%';
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

    var baseLayers = {
      "BaseMap": basemap
    };

    // Overlay layers are grouped
    var groupedOverlays = {
      "Áreas Licenciadas": {
        "Coordenadas": cood
      },
      "Áreas Institucionais": {
        "Restaurants": limit
      },
      "Monitoramento": {
        "Restaurants": limit
      },
      "Base Cartográfica": {
        "Restaurants": limit
      }
    };

    // Use the custom grouped layer control, not "L.control.layers"
    L.control.groupedLayers(null, groupedOverlays, {position: "topleft", collapsed: false}).addTo(map);

    /*var scale = L.control.scale()
    scale.addTo(map)*/

  }());
