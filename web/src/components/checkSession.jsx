import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CheckSession = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    console.log("+ checkSession");
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(`User(${user.uid}) logged in.`);
        setCurrentUser(user);
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  return currentUser;
};

export default CheckSession;
