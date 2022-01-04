import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "./navbar";

function announceJob() {
  return (
    <>
      <Navbar />
      <Container>
        <Form>
          <Form.Group controlId="form.Name">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder="Enter Titulo" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Trabalho</Form.Label>
            <Form.Control type="text" placeholder="Enter Trabalho" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Localidade</Form.Label>
            <Form.Control type="text" placeholder="Enter Localidade" />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default announceJob;
