import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Button.module.css";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
    className={styles.formbtn}
      onClick={() => loginWithRedirect()}
    >
      Fast Login
    </button>
  );
};

export default LoginButton;
