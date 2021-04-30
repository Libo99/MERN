import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import styles from "../Button.module.css";


const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  const {style} = props;

  return (
    <button className={style} style={{fontSize: '1rem'}}
      onClick={() => loginWithRedirect()}
    >
      Login with google
    </button>
  );
};

export default LoginButton;
