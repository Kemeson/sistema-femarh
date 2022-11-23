import React, { useEffect } from "react";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-groupedlayercontrol/dist/leaflet.groupedlayercontrol.min.js";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

export default function App() {
  useEffect(() => {
    var basemaps = {
      Grayscale: L.tileLayer(
        "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      ),
      Streets: L.tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      )
    };

    var groups = {
      cities: new L.LayerGroup(),
      restaurants: new L.LayerGroup(),
      dogs: new L.LayerGroup(),
      cats: new L.LayerGroup()
    };

    L.marker([39.61, -105.02], { icon })
      .bindPopup("Littleton, CO.")
      .addTo(groups.cities);
    L.marker([39.74, -104.99], { icon })
      .bindPopup("Denver, CO.")
      .addTo(groups.cities);
    L.marker([39.73, -104.8], { icon })
      .bindPopup("Aurora, CO.")
      .addTo(groups.cities);
    L.marker([39.77, -105.23], { icon })
      .bindPopup("Golden, CO.")
      .addTo(groups.cities);

    L.marker([39.69, -104.85], { icon })
      .bindPopup("A restaurant")
      .addTo(groups.restaurants);
    L.marker([39.69, -105.12], { icon })
      .bindPopup("A restaurant")
      .addTo(groups.restaurants);

    L.marker([39.79, -104.95], { icon })
      .bindPopup("A dog")
      .addTo(groups.dogs);
    L.marker([39.79, -105.22], { icon })
      .bindPopup("A dog")
      .addTo(groups.dogs);

    L.marker([39.59, -104.75], { icon })
      .bindPopup("A cat")
      .addTo(groups.cats);
    L.marker([39.59, -105.02], { icon })
      .bindPopup("A cat")
      .addTo(groups.cats);

    var map = L.map("map", {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [basemaps.Grayscale, groups.cities]
    });

    // Overlay layers are grouped
    var groupedOverlays = {
      SelectType: {
        Type1Layer: groups.cities,
        Type2Layer: groups.restaurants
      },
      SelectCategory: {
        Category1: groups.dogs,
        Category2: groups.cats
      }
    };

    // Use the custom grouped layer control, not "L.control.layers"
    L.control.groupedLayers(basemaps, groupedOverlays).addTo(map);
  }, []);

  return <div id="map" style={{ width: "600px", height: "400px" }} />;
}
