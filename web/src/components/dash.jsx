import React from "react";

import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";

export default class Dash extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Carousel />
        <Cards />
      </>
    );
  }
}
