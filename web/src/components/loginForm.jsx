import { useEffect } from "react";
import "../css/loginReg.css";
import CustomInput from "./CustomInput";
import Button from "./Button";
import Navbar from "./Navbar";
import LoginForm from "./loginForm";

import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

getDatabase();

const FormLogin = () => {
  /*useEffect(() => {
    updateInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
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
  });*/

  return (
    <>
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={this.login} className="form">
          <div class="user-box">
            <input
              onChange={this.updateInput}
              value={this.state.name}
              type="text"
              name=""
              required=""
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              onChange={this.updateInput}
              value={this.state.password}
              type="password"
              name=""
              required=""
            />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
