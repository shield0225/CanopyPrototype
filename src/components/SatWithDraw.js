import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css"; 
import DrawControl from "./DrawControl"; 
import { Button, Form, Container } from "react-bootstrap";
import ImageModal from "./ImageModal";
import SimpleModal from "./SimpleModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2hpZWxkc2FsY2VkbyIsImEiOiJjbHNreTFkM2EwNGxpMmtsZnB1MnlrY2c0In0.b46cu_HaaEFY8HiXdO1v4g";
const customMapboxStyleUrl = `https://api.mapbox.com/styles/v1/shieldsalcedo/clsl0rd7603um01qqa5a8g556/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

function SatWithDraw() {
  const location = useLocation();
  const navigate = useNavigate();
  // Your state definitions

  const goToAnalysis = () => {
    navigate("/analysis", {
      state: { drawnCoords, soilType, species, shade, orientation },
    });
  };

  const [drawnCoords, setDrawnCoords] = useState([]);

  const handleDrawn = (coords) => {
    setDrawnCoords((currentCoords) => [...currentCoords, coords]);
  };

  const clearCoordinates = () => {
    setDrawnCoords([]);
  };

  const [species, setSpecies] = useState("oak");
  const [shade, setShade] = useState(50);
  const [orientation, setOrientation] = useState("north");
  const [soilType, setSoilType] = useState("sandy");

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleShadeChange = (e) => {
    setShade(e.target.value);
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  const handleSoilChange = (e) => {
    setSoilType(e.target.value);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <MapContainer
        center={[45.4215, -75.6972]}
        zoom={13}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url={customMapboxStyleUrl}
          attribution='Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <DrawControl onDrawn={handleDrawn} />
      </MapContainer>{" "}
      {drawnCoords.length > 0 && (
        <div style={{ width: "30%", padding: "20px" }}>
          <h3 className="title">Area Coordinates</h3>
          <Button
            onClick={clearCoordinates}
            variant="success"
            type="submit"
            className="my-2 my-sm-0 text-end button-custom-padding"
          >
            Start Over
          </Button>
          <ul className="text-med">
            {drawnCoords.map((coord, index) => (
              <li key={index}>{JSON.stringify(coord)}</li>
            ))}
          </ul>
          <br />

          <br />
          <Button
            className="text-end button-custom-padding"
            variant="secondary"
            onClick={() => console.log("adding NoTreeZone")}
          >
            Add a No-Tree Zone
          </Button>
          <br />
          <br />
          <label for="soilType" className="text-med">
            Select a land cover:
          </label>
          <select
            id="soilType"
            name="soilType"
            className="text-med"
            value={soilType}
            onChange={handleSoilChange}
          >
            <option value="sandy">Sandy</option>
            <option value="clay">Clay</option>
            <option value="silt">Silt</option>
            <option value="peat">Peat</option>
            <option value="loam">Loam</option>
            <option value="chalky">Chalky</option>
            <option value="saline">Saline</option>
          </select>
          <br />
          <br />
          <div className="input-field text-med">
            <label htmlFor="species">Preferred Tree Species:</label>
            <select id="species" value={species} onChange={handleSpeciesChange}>
              <option value="oak">Oak</option>
              <option value="pine">Pine</option>
              <option value="maple">Maple</option>
            </select>
          </div>
          <br />
          <div className="input-field text-med">
            <label htmlFor="shade" className="text-med">
              Desired Shade Ratio:
            </label>
            <input
              type="number"
              id="shade"
              min="0"
              max="100"
              step="1"
              value={shade}
              onChange={handleShadeChange}
            />
            %
          </div>
          <br />
          <div className="input-field text-med">
            <label htmlFor="orientation">Planting Orientation:</label>
            <select
              id="orientation"
              value={orientation}
              onChange={handleOrientationChange}
            >
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>
          <br />
          <div className="text-end">
            <Button
              className="button-custom-padding justify-content-end"
              variant="success"
              onClick={goToAnalysis}
            >
              Analyze
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SatWithDraw;
