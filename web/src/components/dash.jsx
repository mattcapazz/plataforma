import React, { useEffect } from "react";
import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";
import NavbarLg from "./navbarLogged";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import authentication from "../middleware/authentication";

export default (props) => {
  let isLoggedIn = authentication();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(`estou logado com o uid ${uid}`);
      } else {
        // User is signed out
        // ...
        console.log("Não está logado o burro");
      }
    });
  }, []);

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
