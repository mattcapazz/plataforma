import React from "react";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Navbar from "./navbar";
import "../css/loginReg.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

getDatabase();
const db = getFirestore();

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
      .then(async (response) => {
        // Successful
        console.log(response.user.uid);
        console.log("vou gravar na firestore");

        //gravar na firestore
        try {
          const docRef = doc(db, "users", response.user.uid);
          await setDoc(docRef, {
            email: this.state.email,
            nome: this.state.nome,
            localidade: this.state.localidade,
          });
          console.log("Document written with ID: ", response.user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        //window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="Login">
          <form onSubmit={this.registerUser} className="form">
            <CustomInput
              labelText="Nome"
              name="nome"
              id="nome"
              onChange={this.updateInput}
              value={this.state.nome}
              type="nome"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Localidade"
              name="Localidade"
              id="Localidade"
              onChange={this.updateInput}
              value={this.state.Localidade}
              type="Localidade"
              formControlProps={{
                fullWidth: true,
              }}
            />
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
