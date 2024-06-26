// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import MapComponent from "./components/MapComponent";
import SatComponent from "./components/SatComponent";
import SatWithDraw from "./components/SatWithDraw";
import Planning from "./components/Planning";
import Analysis from "./components/Analysis";

import { Container } from "react-bootstrap";
import Home from "./components/Home";
import NaviBar from "./components/NaviBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Router>
        <NaviBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="planning" element={<Planning />} />
          <Route path="analysis" element={<Analysis />} />
        </Routes>
        <div className="container">
        </div>
      </Router>
    </Container>
  );
}

export default App;
