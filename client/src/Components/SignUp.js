import React, { useState } from "react";
import "../SignUp.css";
import axios from 'axios';

const SignUp = () => {

const [nameReq, setName] = useState('');
const [usernameReq, setUserName] = useState('');
const [mailReq, setMail] = useState('');
const [passwordReq, setPassword] = useState('');

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
}

  return (
    <div className="signup">
      <div className="header">
        <h1>Sign up</h1>
      </div>
    <div className="signup-container">
      <form className="signup">
        <label htmlFor="name">Name:</label>
        <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required="required" />

        <label htmlFor="username">Username:</label>
        <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username" required="required"/>

        <label htmlFor="mail">Mail:</label>
        <input onChange={(e) => setMail(e.target.value)} type="email" id="mail" name="mail" required="required"/>

        <label htmlFor="password">Password:</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required="required" />
        <button onClick={register}>Sign up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
