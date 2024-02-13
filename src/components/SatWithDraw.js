import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "../index.css";

// Replace with your Mapbox access token
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2hpZWxkc2FsY2VkbyIsImEiOiJjbHNreTFkM2EwNGxpMmtsZnB1MnlrY2c0In0.b46cu_HaaEFY8HiXdO1v4g";

function SatWithDraw() {
  const mapRef = useRef();

  const DrawControl = () => {
    const map = useMap();

    useEffect(() => {
      if (!map) return;

      const drawnItems = new L.FeatureGroup();
      map.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems,
        },
      });

      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (event) => {
        const layer = event.layer;
        drawnItems.addLayer(layer);
        // Handle the created shape as needed
        console.log(layer.toGeoJSON()); // Example: log GeoJSON to console
      });

      // Cleanup on unmount
      return () => {
        map.removeControl(drawControl);
        map.removeLayer(drawnItems);
      };
    }, [map]);

    return null;
  };

  // Use a Mapbox style, e.g., mapbox/streets-v11, mapbox/satellite-v9
  const mapboxTileLayerURL = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_ACCESS_TOKEN}`;

  return (
    <MapContainer
      center={[45.4215, -75.6972]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url={mapboxTileLayerURL}
        attribution='Map data &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      />
      <DrawControl />
    </MapContainer>
  );
}

export default SatWithDraw;
