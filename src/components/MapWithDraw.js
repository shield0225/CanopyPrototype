import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";
import "../index.css";

function MapWithDraw() {
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
        
        console.log(layer.toGeoJSON()); 
      });

      return () => {
        map.removeControl(drawControl);
        map.removeLayer(drawnItems);
      };
    }, [map]);

    return null;
  };

  return (
    <MapContainer
      center={[45.4215, -75.6972]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <DrawControl />
    </MapContainer>
  );
}

export default MapWithDraw;
