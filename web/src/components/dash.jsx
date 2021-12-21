import React from "react";
import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";
import NavbarLg from "./navbarLogged";

export default class Dash extends React.Component {
  render() {
    if (sessionStorage.token) {
      console.log("User logged in, showing NavbarLg")
      return (
        <>
          <NavbarLg />
          <Carousel />
          <Cards />
        </>
      );
    } else {
      console.log("User NOT logged in, showing Navbar")
      return (
        <>
          <Navbar />
          <Carousel />
          <Cards />
        </>
      );
    }
  }
}
