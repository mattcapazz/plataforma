import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNGZNXyOdwEil62qhNK6kyoxriMPyV0c8",
  authDomain: "rebotuca.firebaseapp.com",
  projectId: "rebotuca",
  storageBucket: "rebotuca.appspot.com",
  messagingSenderId: "96030305192",
  appId: "1:96030305192:web:d5622e2197daee23008b9d",
};

const app = initializeApp(firebaseConfig);

console.log("firebase");

const storage = getStorage(app);

export { storage, app };
