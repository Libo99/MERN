import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../Components/Login/LogoutButton';
import LoginButton from "./Login/LoginButton";


const NavBar = () => {

  const {isAuthenticated} = useAuth0();
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {!isAuthenticated ? <Link to="login">
          <li>Login</li>
        </Link> : null}
        {!isAuthenticated ? <Link to="/signup">
          <li>Sign up</li>
        </Link> : null}
        {isAuthenticated ? <Link to="admin">
          <li>Admin</li>
        </Link> : null}
        {isAuthenticated ? <Link to="todo"><li>Todos</li></Link> : null}
        {
        !isAuthenticated ? <Link to="/">
          <LoginButton/>
        </Link> : null}
        
        {isAuthenticated ? <Link to="/"><li><LogoutButton text="Logout"/></li></Link> : null}
      </ul>
    </nav>
  );
};

export default NavBar;
