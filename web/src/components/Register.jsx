import React, { useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Navbar from "./Navbar";
import "../css/loginReg.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

import "../css/profile.css";
import "../css/reg.css";

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

  /*onFileChange = async (e) => {
    
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };*/

  registerUser = (e) => {
    e.preventDefault();
    console.log(
      "sdfsdf" + e.target.nome.value,
      e.target.email.value,
      e.target.username.value
    );
    createUserWithEmailAndPassword(
      getAuth(),
      e.target.email.value,
      e.target.password.value
    )
      .then(async (response) => {
        // Successful
        console.log(response.user.uid);
        console.log("vou gravar na firestore");

        //gravar na firestore
        try {
          const docRef = doc(db, "users", response.user.uid);
          await setDoc(docRef, {
            email: e.target.email.value,
            nome: e.target.nome.value,
            localidade: e.target.localidade.value,
            username: e.target.username.value,
          });
          console.log("Document written with ID: ", response.user.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <>
        <Navbar />

        <form onSubmit={this.registerUser} className="form">
          <CustomInput
            labelText="Nome"
            name="nome"
            id="nome"
            onChange={this.updateInput}
            value={this.state.nome}
            type="text"
            formControlProps={{
              fullWidth: true,
            }}
          />

          <CustomInput
            labelText="Localidade"
            name="localidade"
            id="localidade"
            onChange={this.updateInput}
            value={this.state.localidade}
            type="text"
            formControlProps={{
              fullWidth: true,
            }}
          />
          <CustomInput
            labelText="Username"
            name="username"
            id="username"
            onChange={this.updateInput}
            value={this.state.username}
            type="text"
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
          <Button type="submit" color="primary" className="form__custom-button">
            Registar
          </Button>
        </form>
      </>
    );
  }
}
export default User;
