import React from "react";
import SatWithDraw from "./SatWithDraw";
import MapComponent from "./MapComponent";
import { Col, Container } from "react-bootstrap";
import "../App.css";
import Footer from "./Footer";

function Planning() {
  return (
    <Container>
      <Col xs={12}>
        <div className="container">
          <h2 className="title text-center">Planning</h2>
          <h4>Define your project area</h4>
          <SatWithDraw />
          <br />
          <h4 className="title">Canopy Tree Coverage Analysis</h4>
          <div className="d-flex align-items-center justify-content-end">
            <label className="switch me-2">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            Toggle Heatmap
          </div>

          <MapComponent />
        </div>
      </Col>
      <Col xs={2}></Col>
      <Container>
        <Footer />
      </Container>
    </Container>
  );
}

export default Planning;
