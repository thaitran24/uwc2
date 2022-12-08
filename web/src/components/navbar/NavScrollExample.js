import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "boxicons";
import "bootstrap/dist/css/bootstrap.css";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Overview </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Team" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">team1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">team2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">
              <i className="bx bx-search"></i>
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <div className="d-flex">
          {/* chat icon */}
          <i className="bx bx-chat"></i>
          {/* bell icon */}
          <i className="bx bx-bell"></i>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
