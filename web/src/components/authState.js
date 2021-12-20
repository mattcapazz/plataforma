import { getAuth, onAuthStateChanged } from "firebase/auth";
import authSt from "./authState"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    <h1>User signed basic</h1>
    console.log("user signed basic");
     
  } else {
    // User is signed out
    // ...
    <h1>User signed out</h1>
    console.log("user signed out");
  }
});