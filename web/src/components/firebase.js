import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const config = initializeApp( {
          apiKey: "AIzaSyCWiqZD-9cT20hxzPP8LnjNiIg9bpsak-Q",
          authDomain: "react-b1edf.firebaseapp.com",
          projectId: "react-b1edf",
          storageBucket: "",
          messagingSenderId: "752281041399",
          appId: "1:752281041399:web:46b737786be4036eb616f2",
          databaseURL: "https://react-b1edf.firebaseapp.com"
        });
const db = getFirestore();

export default firebase;
 