import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "./navbar";
import "../css/announceJob.css";
import MyParentComponentWrapper from "./MyParentComponentWrapper"; 

function announceJob() {
  return (
    <>
      <Navbar />
      <Container id="container">
        <Form id="form">
          <Form.Group controlId="form.Name">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder=" Titulo" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <label for="cars">Trabalho:</label>
            <select name="seldist" id="seldist">
              <optgroup label="Trabalho">
                <option value="Carpinteiro">Carpinteiro</option>
                <option value="Serralheiro">Serralheiro</option>
                <option value="Mecanico">Mecanico</option>
              </optgroup>
            </select>
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label>Localidade</Form.Label>
            <Form.Control type="text" placeholder=" Localidade" />
            <label for="cars">Distancia em Km:</label>
            <select name="seldist" id="seldist">
              <optgroup label="Distancia">
                <option value="5Km">5 km</option>
                <option value="10Km">10 km</option>
                <option value="15Km">15 km</option>
              </optgroup>
            </select>
            <MyParentComponentWrapper />
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
