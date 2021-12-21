import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    <h1>User signed basic</h1>
    console.log(`User signed basic: ${uid}`);
  } else {
    <h1>User signed out</h1>
    console.log("user signed out");
  }
});