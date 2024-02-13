// src/App.js
import React from "react";
import "./App.css";
import MapComponent from "./components/MapComponent";
import SatComponent from "./components/SatComponent";
import SatWithDraw from "./components/SatWithDraw";

function App() {
  return (
    <div className="App">
      <h1>Canopy Tree Coverage Analysis</h1>
      <MapComponent />
      <h2>Satellite View</h2>
      <SatComponent />
      <h2>Satellite View with Draw</h2>
      <SatWithDraw />
    </div>
  );
}

export default App;
