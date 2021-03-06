import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Home.module.css";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className={styles.heroheader}>
      {isAuthenticated ? (
        <h1>Welcome {user.name}</h1>
      ) : (
        <h3 className={styles.herotext}>Welcome</h3>
      )}
      {!isAuthenticated ? (
        <a href="SignUp">
          <button className={styles.btn}>Sign Up</button>
        </a>
      ) : null}
    </div>
  );
};

export default Header;
