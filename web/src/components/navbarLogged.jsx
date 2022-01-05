import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

export default (props) => {
  const auth = getAuth();

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("burro, fez logout");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };

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
              <ReactBootStrap.Nav.Link href="/announcejob">
                <h3>Anunciar</h3>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/profile">
                <h3>Perfil</h3>
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Ajuda"
                id="navbarScrollingDropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/profile">
                  Profile
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/profileedit">
                  Edit Profile
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
  );
};
