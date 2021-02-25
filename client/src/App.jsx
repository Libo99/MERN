import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/AdminPage";
import NavBar from "./Components/NavBar";
import Home from './Components/Home/Home';
import Footer from './Components/Footer'
import "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import TodoForm from "./Components/Todo/TodoForm";
import PrivateRoute from "./Components/PrivateRoute";

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
          <PrivateRoute path="/Todo" component={TodoForm}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}


 
export default App;
