import React from "react";
import firebase from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const database = getDatabase();

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  render() {
    console.log("A cena é" + database);
    return (
      <form onSubmit={this.addUser}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.updateInput}
          value={this.state.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
