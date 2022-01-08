import React from "react";
import Card from "react-bootstrap/Card";

export default class cards extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <Card
            border="primary"
            style={{ marginTop: "70px", marginLeft: "5%", width: "18rem" }}
          >
            <Card.Header>Name</Card.Header>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Discriçao</Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="secondary"
            className="col-pl-4"
            style={{ marginTop: "70px", width: "18rem" }}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="primary" style={{ marginTop: "70px", width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="secondary"
            className="col-pl-4"
            style={{ marginTop: "70px", width: "18rem" }}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Secondary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
