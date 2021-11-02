import React from "react";
import * as ReactBootStrap from "react-bootstrap";

export default class Navbar extends React.Component {
  render() {
    return (
      <ReactBootStrap.Navbar bg="light" expand="lg">
        <ReactBootStrap.Container fluid>
          <ReactBootStrap.Navbar.Brand href="#">
            Navbar scroll
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootStrap.Navbar.Collapse id="navbarScroll">
            <ReactBootStrap.Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ReactBootStrap.Form className="d-flex">
                <ReactBootStrap.FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <ReactBootStrap.Button variant="outline-success">
                  Search
                </ReactBootStrap.Button>
              </ReactBootStrap.Form>
            </ReactBootStrap.Nav>
            <nav className="col-md-5 mx-auto ">
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="#action1">
                  <h2>Home</h2>
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#action2">
                  Link
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown
                  title="Link"
                  id="navbarScrollingDropdown"
                >
                  <ReactBootStrap.NavDropdown.Item href="#action3">
                    Action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action4">
                    Another action
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action5">
                    Something else here
                  </ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.Nav.Link href="#" disabled>
                  Link
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    );
  }
}
