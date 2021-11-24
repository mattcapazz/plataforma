import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profpic from "./img/profilepic.jpg";
import Navbar from "./navbar";
import "./profile.css";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="fotos">
          <div id="FotoG">
            <img src={profpic} alt="" width="100%" height="100%" />
            <div id="slideshow">
              <Container>
                <Row xs="auto">
                  <Col id="col1">
                    <img src={profpic} alt="" width="100%" height="100%" />1 of
                    3
                  </Col>
                  <Col id="col2">2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>
            </div>
          </div>

          <div class="percAcademico">
            <p>sadasdasd</p>
            <p>sadasdasd</p>
            <p>sadasdasd</p>
            <p>sadasdasd</p>
          </div>
        </div>
      </>
    );
  }
}
