import React from "react";
import CheckSession from "./CheckSession";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  let var1 = "",
    link1 = "",
    var2 = "",
    link2 = "",
    href = window.location.href,
    user = "";

  console.log(`+ navbar (Loaded @ ${href})`);
  if (CheckSession()) {
    var1 = "Anunciar";
    link1 = "/annoucejob";
    var2 = "Perfil";
    link2 = "/profile";
  } else {
    var1 = "Register";
    link1 = "/register";
    var2 = "Login";
    link2 = "/login";
  }

  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
      <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#">LOGO</ReactBootStrap.Navbar.Brand>
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

          <nav className="col-md-4">
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href={link1}>
                <h3>{var1}</h3>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href={link2}>
                <h3>{var2}</h3>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Ajuda"
                id="navbarScrollingDropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/profile">
                  Profile
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action4">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action5">
                  Something else here
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
