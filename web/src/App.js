import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { app } from "./firebase";

import Dashboard from "./components/Dashboard";

import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Announce from "./components/Announce";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>

          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/logout" component={Logout}></Route>

          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/editprofile" component={EditProfile}></Route>
          <Route exact path="/announce" component={Announce}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
