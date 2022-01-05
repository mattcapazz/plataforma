import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Cards from "./cards";
import Carousel from "./carousel";
import Navbar from "./navbar";

const Dash = () => {
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const uid = user.uid;
        console.log(`User(${uid}) logged in.`);
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
    </>
  );
};

export default Dash;
