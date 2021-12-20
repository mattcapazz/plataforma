import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Dash from "./components/dash";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dash}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
