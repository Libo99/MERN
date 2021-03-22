import React, { useState } from "react";
import styles from "../Form.module.css";

import axios from "axios";

const SignUp = () => {
  const [nameReq, setName] = useState("");
  const [usernameReq, setUserName] = useState("");
  const [mailReq, setMail] = useState("");
  const [passwordReq, setPassword] = useState("");

  const user = {
    name: nameReq,
    username: usernameReq,
    mail: mailReq,
    password: passwordReq,
  };

  const url = "http://localhost:6592/user";

  const register = (e) => {
    e.preventDefault();
    axios.post(url, user).then((res) => console.log(res));
  };

  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <div className={styles.header}>
          <h1>Sign up</h1>
        </div>
        <div className={styles.formcontainer}>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              required="required"
              className={styles.input}
            />

            <label className={styles.label} htmlFor="username">
              Username:
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              id="username"
              name="username"
              required="required"
              className={styles.input}
            />

            <label className={styles.label} htmlFor="mail">
              Mail:
            </label>
            <input
              onChange={(e) => setMail(e.target.value)}
              type="email"
              id="mail"
              name="mail"
              required="required"
              className={styles.input}
            />

            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required="required"
              className={styles.input}
            />
            <button className={styles.formbtn} onClick={register}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
