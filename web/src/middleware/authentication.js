import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

let IsLoggedIn = () => {
  const auth = getAuth();
  console.log(auth);
  let value;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        value = user.uid;
        console.log("estou no auth" + `estou logado com o uid ${value}`);
      } else {
        value = false;
      }
    });
  }, []);
  return value;
};

export default IsLoggedIn;
