import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="hero-header">
      {isAuthenticated ? (
        <h3 className="hero-text">Welcome {user.name}</h3>
      ) : (
        <h3 className="hero-text">Welcome </h3>
      )}
      {!isAuthenticated ? (
        <a href="SignUp">
          <button className="btn">Sign Up</button>
        </a>
      ) : null}
    </div>
  );
};

export default Header;
