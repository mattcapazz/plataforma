import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CheckSession = () => {
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        const uid = user.uid;
        console.log(`User(${uid}) logged in.`);
        return true;
      } else {
        console.log("User not logged in");
        return false;
      }
    });
  }, []);
};

export default CheckSession;