import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

let IsLoggedIn = () => {
  useEffect(() => {
    const auth = getAuth();
    let value;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        value = user.uid;
        console.log(`+ authentication, UID: ${value}`);
      } else {
        value = false;
      }
    });

    return value;
  }, []);
};

export default IsLoggedIn;
