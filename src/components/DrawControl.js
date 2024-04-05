import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

function DrawControl({ onDrawn }) {
  const map = useMap();

  useEffect(() => {
   
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems); 

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polyline: true,
        polygon: true,
        rectangle: true,
        circle: true,
        marker: true,
      },
    });
    map.addControl(drawControl);

    
    const handleDrawCreate = (e) => {
      const type = e.layerType;
      const layer = e.layer;
      drawnItems.addLayer(layer); 

      if (type === "marker") {
        const { lat, lng } = layer.getLatLng();
        onDrawn({ lat, lng });
      } else {
        const latlngs = layer.getLatLngs();
        onDrawn(latlngs);
      }
    };

    map.on(L.Draw.Event.CREATED, handleDrawCreate);

    return () => {
      map.removeControl(drawControl);
      map.off(L.Draw.Event.CREATED, handleDrawCreate);
      map.removeLayer(drawnItems);
    };
  }, [map, onDrawn]);

  return null;
}

export default DrawControl;
