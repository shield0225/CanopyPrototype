import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const SatComponent = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const mapboxAccessToken =
    "pk.eyJ1Ijoic2hpZWxkc2FsY2VkbyIsImEiOiJjbHNreTFkM2EwNGxpMmtsZnB1MnlrY2c0In0.b46cu_HaaEFY8HiXdO1v4g";
  const mapboxSatelliteUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxAccessToken}`;

  const MapEvents = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setSelectedArea({ lat, lng }); 
        L.marker([lat, lng]).addTo(map); 
      },
    });
    return null; 
  };

  return (
    <MapContainer
      center={[45.4215, -75.6972]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url={mapboxSatelliteUrl}
        attribution='Map data &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      />
      <MapEvents />
      {selectedArea && (
        <Marker position={[selectedArea.lat, selectedArea.lng]} />
      )}
    </MapContainer>
  );
};

export default SatComponent;
