import React, { Component } from "react";
import { Row, Image, Container, Col } from "react-bootstrap";
import "../App.css";
import Testimonials from "../assets/Testimonials.png";

function Solutions() {
  return (
    <Container className="text-center">
      <h2 className="title"> Our Solutions</h2>
      <Row>
        <Col md={{ span: 2, offset: 3 }}>
          <Image
            className="image-size"
            src="https://th.bing.com/th?id=OIP.ItmW9QZkp3X42sO0_ObzIwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            rounded
          />
          <br></br>
          <p className="text-med">New Features</p>
          <p className="text-small">Check Availability!</p>
        </Col>
        <Col md={{ span: 2 }}>
          <Image
            className="image-size"
            src="https://cdn.pixabay.com/photo/2014/01/04/07/41/forest-238379_1280.jpg"
            rounded
            width="200"
          />
          <p className="text-med">Latest News</p>
          <p className="text-small">Read Updates from Us</p>
          <br></br>
        </Col>
        <Col md={{ span: 2 }}>
          <Image
            className="image-size"
            src="https://cdn.pixabay.com/photo/2018/05/09/19/29/beech-3385957_1280.jpg"
            width="200"
            rounded
          />
          <p className="text-med">Our Team</p>
          <p className="text-small">Meet our Experts</p>
          <br></br>
        </Col>
      </Row>
      <Row className="text-center">
        <h2 className="title"> NewsLetter </h2>
        <Col>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/River_of_Blue.jpg/1280px-River_of_Blue.jpg"
            rounded
            width={850}
            height={200}
          />
          <br></br>
          <p className="text-medium">Stay Informed with our Updates</p>
          <p className="text-med">
            Sign up for our Newsletter and Get the Latest Information.
          </p>
          <br></br>
        </Col>
      </Row>
      <Row className="text-center">
        <h2 className="title"> Testimonials </h2>
        <Col>
          <Image src={Testimonials} rounded width={650} height={200} />
          <br></br>
          <br></br>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
}
export default Solutions;
