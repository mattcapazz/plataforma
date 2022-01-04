import React, { useEffect } from "react";
import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";
import NavbarLg from "./navbarLogged";
import authentication from "../middleware/authentication";

export default (props) => {
  let isLoggedIn = false;

  isLoggedIn = authentication();
  console.log(isLoggedIn);

  let getNavbar = () => {
    if (isLoggedIn) {
      console.log("User logged in, showing NavbarLg", isLoggedIn);
      //console.log(getAuth.currentUser);
      return (
        <>
          <NavbarLg />
          <Carousel />
          <Cards />
        </>
      );
    } else {
      console.log("User NOT logged in, showing Navbar");
      return (
        <>
          <Navbar />
          <Carousel />
          <Cards />
        </>
      );
    }
  };

  return getNavbar();
};
