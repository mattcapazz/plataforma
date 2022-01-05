import React from "react";

import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

getDatabase();

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
  
  componentDidMount() {
    console.log("inicializar");
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(`estou logado com o uid ${uid}`);
      } else {
        // User is signed out
        // ...
        console.log("Não está logado o burro");
      }
    });
  }

  login = (e) => {
    e.preventDefault();

    console.log(getAuth());
    signInWithEmailAndPassword(getAuth(), this.state.email, this.state.password)
      .then((response) => {
        console.log("Fazer login");
        // Signed in
        console.log(response);
        
        //console.log(getAuth.currentUser);

        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <h1>Login</h1>
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
