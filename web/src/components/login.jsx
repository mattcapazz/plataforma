import React from "react";

import { getDatabase } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

  login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(), this.state.email, this.state.password)
      .then((response) => {
        // Signed in
        console.log(response)
        sessionStorage.setItem('token', response._tokenResponse.refreshToken)
        //window.location.href = "/";
      })
      .catch((error) => {
       console.log(error.code, error.message)
      });
  };

  render() {
    if (sessionStorage.token) {
      /* Utilizador já está logado! 
      Redireciona-o para a Dashboard. */
      window.location.href = "/"; 
    }
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
