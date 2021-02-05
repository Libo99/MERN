import React from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Admin from "./Components/Admin/AdminPage";
import NavBar from "./Components/NavBar";
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
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <div><h1>home</h1></div>
}
 
export default App;
