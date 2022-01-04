import React, { useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";

export default (props) => {
  const auth = getAuth();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("burro, fez logout");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  }, []);

  return <></>;
};
