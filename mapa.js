  var lim = L.geoJSON(limites, {
    color: "black",
    weight: 3,
    });
    

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

<<<<<<<<< Temporary merge branch 1
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
=========
 
  var geojsonLayer = new L.GeoJSON(geojsonLayer, {
    color: "red",
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h4>'+feature.id+'</h4><p>name: '+feature.properties.name+'</p>');
    }  
  });
>>>>>>>>> Temporary merge branch 2

  
  $.ajax({
  url : "http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite:view_municipios_limites&maxFeatures=50&outputFormat=text/javascript&format_options=callback:getJson",
  dataType : 'jsonp',
  jsonpCallback: 'getJson',
  success : handleJson
  });
  


  var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});

  var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
});


<<<<<<<<< Temporary merge branch 1

=========
>>>>>>>>> Temporary merge branch 2


  var map = L.map(document.getElementById('map'), {
    center: [1.50054, -60.6714],
    zoom: 7,
    layers: [basemap]
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

  var baseTree = {
    label: 'Mapas',
    children: [
        { label: 'BaseMap', layer: basemap },
        { label: 'Google Satélite', layer: googleSat },
    ]
  }

  var overlaysTree = {
    label: 'Coordenadas',
    children: [
        {
          label: 'Áreas Licenciadas',
          collapsed: true,
          children: [
              { label: 'Área do Projeto', layer: geojsonLayer },
              { label: 'Área do Imóvel', layer: lim },
              { label: 'Área de Uso e Ocupação do Solo', layer: L.marker([48.8605847, 2.3376267]) },
          ]
        }, {
          label: 'Áreas Institucionais',
          collapsed: true,
          children: [
              { label: 'Limite Terras Indígenas', layer: geojsonLayer },
              { label: 'Unidade de Conservação Federal', layer: geojsonLayer },
              { label: 'Unidade de Conservação Estadual', layer: geojsonLayer },
              { label: 'Áreas Inalienáveis', layer: geojsonLayer },
              { label: 'Sítios Arqueológicos', layer: geojsonLayer },
              { label: 'Projetos de Assentamento', layer: geojsonLayer },
              { label: 'Áreas Militares', layer: geojsonLayer },
          ]
        }, {
          label: 'Monitoramento',
          collapsed: true,
          children: [
              { label: 'CRSA', layer: geojsonLayer },
              { label: 'CSAVV', layer: geojsonLayer },
          ]
        }, {
          label: 'Base Cartográfica',
          collapsed: true,
          children: [
              { label: 'Hidrografias', layer: geojsonLayer },
              { label: 'Limites Municipais', layer: geojsonLayer },
              { label: 'Sedes Municipais', layer: geojsonLayer },
              { label: 'Localidades', layer: geojsonLayer },
              { label: 'Rodovias', layer: geojsonLayer },
              { label: 'Glebas', layer: geojsonLayer },
        ]
    }
    ]
}
        
L.control.layers.tree(baseTree, overlaysTree, {position: "topleft", collapsed: false}).addTo(map);