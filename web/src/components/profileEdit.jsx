import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profpic from "../img/profilepic.jpg";

import { getAuth } from "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navbar from "./navbar";
import "../css/profile.css";

const profileEdit = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    console.log(uid);
  }
  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div className="flex-child">
          <div className="green">
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

            <div className="percAcademico">
              <p>sadasdasd</p>
              <p>sadasdasd</p>
              <p>sadasdasd</p>
              <p>sadasdasd</p>
            </div>
          </div>
        </div>

        <div className="flex-child2">
          <div className="blue">
            <br />
            <br />
            <br />
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Text className="text-muted">
                  Nome Placeholder
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Trabalho</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Text className="text-muted">
                 Trabalho Placeholder
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Localidade</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Text className="text-muted">
                  Localidade Placeholder
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Text className="text-muted">
                  Titulo Placeholder
                </Form.Text>
              </Form.Group>

              <label for="story">Percurso Academico:</label>

              <textarea
                id="story"
                name="story"
                rows="5"
                cols="33"
                placeholder="Coloque o seu percurso academico"
              ></textarea>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default profileEdit;
