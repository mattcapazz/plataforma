import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profpic from "./img/profilepic.jpg";
import loc from "./img/location.png";
import Navbar from "./navbar";
import "./profile.css";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div class="flex-container">
          <div class="flex-child">
            <div class="green">
              <div id="FotoG">
                <img src={profpic} alt="" width="100%" height="100%" />
                <div id="slideshow">
                  <Container>
                    <Row xs="auto">
                      <Col id="col1">
                        <img src={profpic} alt="" width="100%" height="100%" />1
                        of 3
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
          </div>

          <div class="flex-child2">
            <div class="blue">
              <br />
              <br />
              <div class="orange">
                <p>Entre em contacto com (name)</p>
                <button id="btnOrcamento">Pedir orçamento</button>
              </div>
              <br />
              <h2>(Name)</h2>
              <h3>(Job)</h3>
              <h3>
                (Location)
                <img src={loc} />
              </h3>
              <br />
              <br />
              <br />
              <div id="Mensagem">
                <h4>Titulo</h4>
                <h6>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </h6>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="flex-child green">
          
        </div>
      </>
    );
  }
}
