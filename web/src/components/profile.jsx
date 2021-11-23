import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./img/1.jpg";
import image2 from "./img/2.jpeg";
import profpic from "./img/profilepic.jpg";
import Navbar from "./navbar";

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div id="FotoG">
          <img src={profpic} alt="" />
          <div id="slideshow">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
