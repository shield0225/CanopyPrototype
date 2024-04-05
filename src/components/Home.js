import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import ImageWithText from "./ImageWithText";
import Solutions from "./Solutions";

function Home(props) {
  return (
    <>
      <ImageWithText />
      <br></br>
      <Solutions />
      <br></br>
      <Footer />
    </>
  );
}

export default Home;
