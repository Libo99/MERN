import React, { useState } from "react";
// import "./Login.css";
// import GoogleLogin from "react-google-login";
import axios from "axios";
import LoginButton from './LoginButton';
// import styles from "../Button.module.css";
import styles from "../Form.module.css";



const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  const url = "http://localhost:6592/user/login";

  const user = {
    mail: mail,
    password: password
  }

  const HandeSubmit = (e) => {
  e.preventDefault();
  axios.post(url, user).then(res => console.log(res))
  .catch(err => {
    // setError(err.message);
    console.log(err);
  })
  
}

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.header}>
          <h1>Login</h1>
        </div>
        <div className={styles.formcontainer}>
          <form onSubmit={HandeSubmit} className={styles.form}>
            <label htmlFor="mail" className={styles.label}>
              Mail:
            </label>
            <input
              type="text"
              name="mail"
              id="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className={styles.input}
            />

            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button className={styles.formbtn} type="submit">
              Login
            </button>
            <LoginButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
