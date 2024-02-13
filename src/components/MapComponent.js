import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const MapEvents = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedArea({ lat, lng }); // Update state with selected area coordinates
        L.marker([lat, lng]).addTo(map); // Correctly add marker to the map
      },
    });
    return null; // No visual component is returned from MapEvents
  };

  return (
    <MapContainer
      center={[45.4215, -75.6972]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEvents />
      {selectedArea && (
        <Marker position={[selectedArea.lat, selectedArea.lng]} />
      )}
    </MapContainer>
  );
};

export default MapComponent;
