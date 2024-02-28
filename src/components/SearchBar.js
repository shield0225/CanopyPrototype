import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <Form inline onSubmit={handleSubmit} className="d-flex">
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            value={searchQuery}
            placeholder="Ask our Chatbot"
            className="mr-sm-2 text-center search-bar"
            width={500}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="success"
            type="submit"
            className="my-2 my-sm-0 text-center"
          >
            <FontAwesomeIcon
              className="button-custom-padding text-center"
              icon={faRobot}
            />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
