import React from "react";

import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      getAuth(),
      this.state.email,
      this.state.password
    )
      .then((response) => {
        // Successful
        sessionStorage.setItem('token', response._tokenResponse.refreshToken)
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <h1>Register</h1>
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
