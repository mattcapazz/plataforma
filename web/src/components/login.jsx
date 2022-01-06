import React from "react";
import "../css/loginReg.css";
import CustomInput from "./CustomInput";
import Button from "./Button";
import Navbar from "./navbar";

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
    console.log(e.target.email.value);
    console.log(getAuth());
    signInWithEmailAndPassword(
      getAuth(),
      e.target.email.value,
      e.target.password.value
    )
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
      <>
        <Navbar />
        <div className="Login">
          <form onSubmit={this.login} className="form">
            <CustomInput
              labelText="Email"
              name="email"
              id="email"
              onChange={this.updateInput}
              value={this.state.email}
              type="email"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Password"
              id="password"
              name="password"
              onChange={this.updateInput}
              value={this.state.password}
              type="password"
              formControlProps={{
                fullWidth: true,
              }}
            />

            <Button
              type="submit"
              color="primary"
              className="form__custom-button"
            >
              Log in
            </Button>
          </form>
        </div>
      </>
    );
  }
}
export default User;
