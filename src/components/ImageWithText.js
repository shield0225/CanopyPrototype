import React from "react";
import Image from "react-bootstrap/Image";
import canopyImage from "../assets/canopy-img2.jpg"; // Adjust the path as necessary
import SearchBar from "./SearchBar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import "./searchbar.css";

function ImageWithText() {
  return (
    <div
      className="image-container"
      style={{ position: "relative", display: "inline-block" }}
    >
      <Image
        className="img-fluid semi-transparent"
        src={canopyImage}
        alt="placeholder"
        style={{ width: "100%", height: "50%" }}
      />
      <div
        className="text-over-image fluid-container text-center"
        style={{
          position: "absolute",
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust positioning
          color: "black", // Text color
          fontSize: "30px", // Text size
        }}
      >
        <b>Create maximum canopy coverage</b>
        <SearchBar />
        <div className="text-end">
          <Button
            as={Link}
            to="/planning"
            variant="success"
            type="submit"
            className="my-2 my-sm-0 align-right"
          >
            Start Planning
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ImageWithText;
