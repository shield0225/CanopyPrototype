import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logocanopy from "../assets/logocanopy-nobg.png";
import "../App.css";

function NaviBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logocanopy} width={50} alt="Canopy Pro" /> <b>Canopy Pro</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          xs
          lg="2"
          className="ms-auto text-small"
          activeKey="home"
          // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/home" eventKey="home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/features" eventKey="features">
              Features
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/pricing" eventKey="pricing">
              Pricing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" eventKey="about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contactus" eventKey="contactus">
              Contact Us
            </Nav.Link>
          </Nav.Item>
          <Button
            variant="outline-secondary"
            className="ms-2 text-small button-custom-padding button-text-size"
            as={Link}
            to="/signup"
            eventKey="signup"
          >
            Sign Up
          </Button>
          <Button
            variant="outline-secondary"
            className="ms-2 text-small button-custom-padding button-text-size"
            as={Link}
            to="/login"
            eventKey="login"
          >
            Log In
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NaviBar;
