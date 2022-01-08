import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profpic from "../img/profilepic.jpg";
import loc from "../img/location.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import Navbar from "./Navbar";
import "../css/profile.css";

const Profile = () => {
  getDatabase();
  const db = getFirestore();

  const [email, setEmail] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      let data;

      if (user) {
        const uid = user.uid;

        try {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            data = docSnap.data();
            setEmail(data.email);
            setLocalidade(data.localidade);
            setNome(data.nome);
            setUsername(data.username);
          } else console.log("No such document!");
        } catch (e) {
          console.log("Error getting document:", e);
        }
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex-container">
        <div className="flex-child">
          <div className="green">
            <div id="FotoG">
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rebotuca.appspot.com/o/files%2F1.png?alt=media&token=f6dbf7a9-12d0-47bd-b6bb-e6a10fd37c29"
                }
                alt=""
                width="100%"
                height="100%"
              />
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
              <textarea
                id="story"
                name="story"
                rows="5"
                cols="33"
                placeholder="Coloque o seu percurso academico"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex-child2">
          <div className="blue">
            <br />
            <br />
            <div className="orange">
              <p>Entre em contacto com {nome}</p>
              <button id="btnOrcamento">Pedir orçamento</button>
            </div>

            <br />
            <h2>{nome}</h2>

            <h3>(Job)</h3>
            <h3>
              {localidade}
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
                of type and scrambled it to make a type specimen book.
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
              galley of type and scrambled it to make a type specimen book.
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
