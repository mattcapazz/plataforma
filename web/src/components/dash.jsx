import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";
import NavbarLg from "./navbarLogged";

export default class Dash extends React.Component {
  render() {
    if (getAuth()) {
      return (
        <>
          <NavbarLg />
          <Carousel />
          <Cards />
        </>
      );
    } else {
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
