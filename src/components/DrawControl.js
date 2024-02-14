// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import L from "leaflet";
// import "leaflet-draw";
// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";

// function DrawControl({ onDrawn }) {
//   const map = useMap();

//   useEffect(() => {
//     const drawControl = new L.Control.Draw({
//       draw: {
//         polyline: true,
//         polygon: true,
//         rectangle: true,
//         circle: true,
//         marker: true, // Enable drawing markers
//       },
//     });
//     map.addControl(drawControl);

//     const handleDrawCreate = (e) => {
//       const type = e.layerType;
//       const layer = e.layer;

//       if (type === "marker") {
//         const { lat, lng } = layer.getLatLng();
//         onDrawn({ lat, lng });
//       } else {
//         const latlngs = layer.getLatLngs();
//         onDrawn(latlngs); // Handle non-marker shapes differently if needed
//       }

//       map.addLayer(layer); // Add the drawn layer to the map
//     };

//     map.on(L.Draw.Event.CREATED, handleDrawCreate);

//     return () => {
//       map.removeControl(drawControl);
//       map.off(L.Draw.Event.CREATED, handleDrawCreate);
//     };
//   }, [map, onDrawn]);

//   return null;
// }

// export default DrawControl;

import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

function DrawControl({ onDrawn }) {
  const map = useMap();

  useEffect(() => {
    // Create a FeatureGroup to hold and manage the drawn items
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems); // Add the FeatureGroup to the map

    // Initialize the draw control and pass the FeatureGroup for edit and delete operations
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polyline: true,
        polygon: true,
        rectangle: true,
        circle: true,
        marker: true, // Enable drawing markers
      },
    });
    map.addControl(drawControl);

    // Event handler for when a new shape is drawn
    const handleDrawCreate = (e) => {
      const type = e.layerType;
      const layer = e.layer;
      drawnItems.addLayer(layer); // Add the newly drawn shape to the FeatureGroup

      if (type === "marker") {
        const { lat, lng } = layer.getLatLng();
        onDrawn({ lat, lng });
      } else {
        // For non-marker shapes, extract the necessary information
        // Here's an example for polygons; adjust as needed for other types
        const latlngs = layer.getLatLngs();
        onDrawn(latlngs);
      }
    };

    map.on(L.Draw.Event.CREATED, handleDrawCreate);

    return () => {
      // Cleanup: remove the draw control and the drawn items layer when the component unmounts
      map.removeControl(drawControl);
      map.off(L.Draw.Event.CREATED, handleDrawCreate);
      map.removeLayer(drawnItems);
    };
  }, [map, onDrawn]);

  return null;
}

export default DrawControl;
