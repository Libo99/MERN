import React from "react";
import "../NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
        <Link to="login">
          <li>Login</li>
        </Link>
        <Link to="admin">
          <li>Admin</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
