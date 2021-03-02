import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Button.module.css";


const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="hero-header">
      {isAuthenticated ? (
        <h1 >Welcome {user.name}</h1>
      ) : (
        <h3 className="hero-text">Welcome </h3>
      )}
      {!isAuthenticated ? (
        <a href="SignUp">
          <button className={styles.homebtn}>Sign Up</button>
        </a>
      ) : null}
    </div>
  );
};

export default Header;
