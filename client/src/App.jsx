import React from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Admin from "./Components/Admin/AdminPage";
import NavBar from "./Components/NavBar";
import Home from './Components/Home/Home'
import "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Admin" component={Admin}/>
        </Switch>
      </div>
    </Router>
  );
}


 
export default App;
