import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profpic from "../img/profilepic.jpg";
import loc from "../img/location.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import authentication from "../middleware/authentication";
import { getDatabase } from "firebase/database";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import Navbar from "./navbar";
import "../css/profile.css";

const Profile = () => {
  getDatabase();
  const db = getFirestore();

  const [user, setUser] = useState();

  let isLoggedIn = authentication();

  let data;

  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        try {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            data = docSnap.data().nome;
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch {
          //do whatever
        }
      } else {
        // User is signed out
        // ...
        console.log("Não está logado o burro");
      }
    
    });
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div className="flex-child">
          <div className="green">
            <div id="FotoG">
              <img src={profpic} alt="" width="100%" height="100%" />
              <div id="slideshow">
                <Container>
                  <Row xs="auto">
                    <Col id="col1">
                      <img src={profpic} alt="" width="100%" height="100%" />1
                      of 3
                    </Col>
                    <Col id="col2">2 of 3</Col>
                    <Col>3 of 3</Col>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="percAcademico">
              <p>sadasdasd</p>
              <p>sadasdasd</p>
              <p>sadasdasd</p>
              <p>sadasdasd</p>
            </div>
          </div>
        </div>

        <div className="flex-child2">
          <div className="blue">
            <br />
            <br />
            <div className="orange">
              <p>Entre em contacto com (name)</p>
              <button id="btnOrcamento">Pedir orçamento</button>
            </div>

            <br />
            <h2>Nome{data}</h2>

            <h3>(Job)</h3>
            <h3>
              (Location)
              <img alt="Location" src={loc} />
            </h3>
            <br />
            <br />
            <br />
            <div id="Mensagem">
              <h4>Titulo</h4>
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex-child green">
        <div className="row">
          <div className="column left">
            <img src={profpic} alt="" width="50px" height="50px" />
            <p>(rank)</p>
          </div>
          <div className="column middle">
            <h3>(Name)</h3>
            <p>
              (Message) Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="column right">
            <h5>26 Mar 1759</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
