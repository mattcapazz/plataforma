import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";

const Logout = () => {
  const auth = getAuth();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <></>;
};

export default Logout;
