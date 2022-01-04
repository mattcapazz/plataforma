import { getAuth, onAuthStateChanged } from "firebase/auth";

let isLoggedIn = () => {
  const auth = getAuth();
  let value = null;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      value = user.uid;
    } else {
      value = false;
    }
  });
  return value;
};

export default isLoggedIn;
