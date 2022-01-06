import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { app } from "./firebase";

import Dash from "./components/dash";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";
import ProfileEdit from "./components/profileEdit";
import AnnounceJob from "./components/announceJob";
import Logout from "./components/logout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dash}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/editprofile" component={ProfileEdit}></Route>
          <Route exact path="/announcejob" component={AnnounceJob}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
