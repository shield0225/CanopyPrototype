import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import ImageWithText from "./ImageWithText";
import Solutions from "./Solutions";
//
// this is the home page component
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
// withRouter will pass updated match, location, and history props
// to the wrapped component whenever it renders.
export default Home;
